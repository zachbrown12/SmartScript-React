import React from 'react';
import 'rsuite/lib/styles/index.less';
import 'rsuite/lib/styles/themes/default/index.less';
import { Panel, PanelGroup } from 'rsuite';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';




const Prescription = (props) => {

    return (
        <Panel className="panels" shaded bodyFill style={{ display: 'inline-block', width: 300 }}>
          <img src={props.drug.image} alt="tylenol" height="240" />

        <Panel header={props.drug.name}>
        <p style={{color: 'black'}}> Category: {props.drug.category}</p>   <br></br><br></br> 
            <Button onClick={() => props.deletePrescriptionStage(props.drug.id)}>Delete</Button>


        </Panel>
      </Panel>       
    );
  };
  
  export default Prescription;
  