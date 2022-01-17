import React, { Component } from 'react';
import 'rsuite/lib/styles/index.less';
import 'rsuite/lib/styles/themes/default/index.less';
import { Panel, PanelGroup } from 'rsuite';
import Effects from './Effects'




class DrugEffects extends Component {
  


    render(props) {

      // if (!this.props.effect.effects) {
        // console.log("Loading")
      // }
      // else {console.log(this.props.effect.effects[0])
        // const ef = this.props.effect.effects.map(eff =>
          // <Effects key={eff.id} eff={eff}/>)
          // console.log(ef)
        // }
  // 
        // console.log(this.props.userEffectIDs)

      // let effectMap = this.props.effect.effects.map(eff =>
        // <Effects key={eff.id} effect={eff} userEffectIDs={this.props.userEffectIDs}/>)
    

      return(
        <Panel className="panels" shaded bodyFill style={{ display: 'inline-block', width: 300, height: 500 }}>
            <img src={this.props.effect.image} alt="tylenol" height="240" />
        <Panel header={this.props.effect.name}>
          <p>
            <p style={{color: 'black'}}>Category: {this.props.effect.category}</p><br></br>
            <p><b>Effect:</b> {this.props.effect.effect}</p>
          </p>
        </Panel>
      </Panel>       
    );
  };
}
  
  export default DrugEffects;
  