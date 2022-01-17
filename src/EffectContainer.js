import React, { Component } from 'react';
import DrugEffects from './DrugEffects'


class EffectContainer extends Component {

  render(props) {
  const drugEffects = this.props.drugEffects.map(effect =>
    <DrugEffects key={effect.id} effect={effect} userEffectIDs={this.props.userEffectIDs} specEffect={effect.effects} img={effect.img_url}/>)
    
  return (
    <div>
      <h1>Effects</h1>
      {drugEffects}
    </div>
  );
};
}

export default EffectContainer;
