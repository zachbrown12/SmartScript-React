import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import EffectContainer from './EffectContainer';
import Files from './Files';
import PrescriptionContainer from './PrescriptionContainer';
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-default.css';
import Home from './Home';
import BioRefresher from './BioReferesher';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(){
  super();


  this.state = {
    user: [],
    drugs: [],
    effects: [],
    drugEffects: [],
    allDrugs: [],
    prescriptions: []
  };
}

componentDidMount = () => {
  fetch('http://localhost:3001/users')
  .then(resp => resp.json())
  .then(data => {
    this.setState({ 
      user: data[0]['name'],
      drugs: data[0]['drugs'],
      effects: data[0]['effects'],
      userdrugIDs: data[0]['drugs'].map(x => x.id),
      // drugEffects: data[0]['effects'],
      prescriptions: data[0]['prescriptions']
    })
  })
  .then(this.getDrugEffects())
  setTimeout(() => {
    (this.filterDrugEffects())
    console.log(this.state)
  }, 2500)
}

  getDrugEffects = () => {
    console.log(this.state)
    fetch('http://localhost:3001/drugs')
  .then(resp => resp.json())
  .then(data => {
    this.sortDrugs(data)
    console.log(data)
      this.setState({
      drugEffects: data,
      allDrugs: data
      })
  })
  console.log(this.state)
  }

  filterDrugEffects = () => {
    let filteredDrugs = this.state.drugEffects.filter(
      x => this.state.userdrugIDs.includes(x.id)
    )

    let sortedDrugs = filteredDrugs.sort((a,b) => a.name > b.name ? 1: -1)

    this.setState({
      drugEffects: sortedDrugs
    })
  }

  sortDrugs = (data) => {
    let sortedData = data.sort((a,b) => a.name > b.name ? 1: -1)
    this.setState({
      // drugs: sortedData
    })
  }

  postPrescription = (user_id, drug_id) => {

      fetch (`http://localhost:3001/prescriptions`, {
      method: 'POST',
      headers: {'content-Type': 'application/json',
                  "accept": "application/json"
      },
      body: JSON.stringify({
          user_id: user_id,
          drug_id: drug_id
          })
      })
      setTimeout(() => {
        this.componentDidMount()
      }, 50)
      // .then(response => this.setState({
        // 
      // }))
    }

  postRows = (data) => {
    console.log(data)
    console.log(data[0].RSID)
    console.log(data[0].Chromosome)
    console.log(data[0].GenoType)
    for (let i in data) {
    fetch (`http://localhost:3001/user_rows`, {
      method: 'POST',
      headers: {'content-Type': 'application/json',
                  "accept": "application/json"
      },
      body: JSON.stringify({
          RSID: data[i].RSID,
          chromosome: data[i].Chromosome,
          genotype: data[i].GenoType
          })
      })
      console.log(data[i].GenoType)
     }
    }

  deletePrescriptionStage = (drug_id) => {
      let delScript = this.state.prescriptions.find(prescription =>
        prescription.drug_id == drug_id
        )
      let delDrugId = delScript.id
    this.deletePrescription(delDrugId)
  }
  

  deletePrescription = (prescription_id) => {
    fetch (`http://localhost:3001/prescriptions/${prescription_id}`, {
      method: 'DELETE',
      headers: {'content-Type': 'application/json',
                  "accept": "application/json"
      }
    })
    setTimeout(() => {
      this.componentDidMount()
    }, 50)
  }
  

  handlePostScript = () => {

  }

// 
// getUserInfoBackend = () => {
  // fetch (`http://localhost:3001/users`)
  // .then(r => r.json())
  // .then(response => {
    // console.log(response)
    // console.log(this.state)
    // this.setState({
      // currentUser: response
    // })
  // }) 
// }


// filterSongs = (value) => {
    // this.setState({
      // currentSongs: this.state.allSongs.filter(song => 
          // (new Date(song.favorite_date).getFullYear() === this.state.currentPeriod.getFullYear()) && 
          // (new Date(song.favorite_date).getMonth() === this.state.currentPeriod.getMonth())
        // )
    // })
// }


render() {

return (
    <div className="App">
      <Header />
      <div className="app">
      <Router>
        <NavBar drugEffects={this.state.drugEffects}/>
        <Route exact path="/" render={routerProps => <Home {...routerProps} />}/>
        <Route exact path="/biology" render={routerProps => <BioRefresher {...routerProps} />}/>
        <Route exact path="/effects" render={routerProps => <EffectContainer {...routerProps} drugEffects={this.state.drugEffects} />}/>
        <Route exact path="/prescriptions" render={routerProps => <PrescriptionContainer {...routerProps} drugs={this.state.drugs} postPrescription={this.postPrescription} allDrugs={this.state.allDrugs} deletePrescriptionStage={this.deletePrescriptionStage}/>}/>
        <Route exact path="/file" render={routerProps => <Files {...routerProps} postRows={this.postRows} />}/>
      </Router>
      </div>
          
        
    </div> 
);
}
}

export default App;
