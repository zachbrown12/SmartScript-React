import React, { Component } from 'react';
import Prescription from './Prescription'
import ReactDOM from 'react-dom';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import withValueField from './withValueField.jsx';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { Dropdown } from 'rsuite';
import { InputPicker } from 'rsuite';
import { CheckPicker } from 'rsuite';




const DropDownListWithValueField = withValueField(DropDownList);


class PrescriptionContainer extends Component {


    constructor() {
        super()
    
        this.state = {
          drug_id: '',
        }
      }



    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postPrescription(1, this.state.drug_id)
      }
   
      drugChange = (drug_id) => {
          console.log(drug_id)
        this.setState({
          drug_id: drug_id
        })
        console.log(this.state)
      }
  

  render(props) {
    console.log(this.props)
  const drugs = this.props.drugs.map(drug =>
    <Prescription key={drug.id} drug={drug} deletePrescriptionStage={this.props.deletePrescriptionStage}/>)
    
  return (
    <div>
<br></br>
<h1>Prescriptions</h1>

        <form id='create-prescription-form' class='k-form' onSubmit={(e) => this.handleSubmit(e)}>
                <label> Drug: 

                   <select style={{color: 'black'}} value={this.state.drug_id} onChange={(e) => this.drugChange(e.target.value)}>
                        {this.props.allDrugs.map((drug, ind) => <option key={ind} value={drug.id}>{drug.name}</option>)}
                    </select>
                </label>
                


            <p></p><br></br>
          <Button type='submit' className="" value="Add Prescription">Add Prescription</Button>
          <br></br>

        </form>
      <div>
      {drugs}
      </div>
    </div>
  );
};
}

export default PrescriptionContainer;
