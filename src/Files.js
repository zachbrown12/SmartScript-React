import React, { Component, Fragment } from 'react';
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-default.css'
import ReactFileReader from 'react-file-reader';
import Papa from 'papaparse';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';



class Files extends Component {

    constructor() {
        super();
        this.state = {
          csvfile: undefined
        };
        this.updateData = this.updateData.bind(this);
      }

    handleChange = event => {
        this.setState({
          csvfile: event.target.files[0]
        });
      };

      importCSV = () => {
        const { csvfile } = this.state;
        Papa.parse(csvfile, {
          complete: this.updateData,
          header: true
        });
      };
    
      updateData(result) {
        var data = result.data;
        console.log(data);
        this.props.postRows(data)
        setTimeout(() => {
        window.alert("Your file has been uploaded and parsed");
        }, 1500)
      }

      render() {
        console.log(this.state.csvfile);
        return (
          <div className="App">
            <br></br>
            <h2>Upload your genetic information here</h2>
            <br></br>
            <input
              className="csv-input"
              type="file"
              ref={input => {
                this.filesInput = input;
              }}
              name="file"
              placeholder={null}
              onChange={this.handleChange}
            />
            <p />
            <p></p>
            <Button onClick={this.importCSV}> Upload now!</Button>
          </div>
        );
      }
    }

    export default Files;
