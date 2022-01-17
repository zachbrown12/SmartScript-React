import React, { Component } from 'react';


class BioRefresher extends Component {

  render(props) {
    console.log(this.props)
  return (
    <div>
      <h1>How to Use</h1>

      <h4>
          1. If it is your first time using the application navigate to the 'Upload File' Section.<br></br>
            - This is where you will upload your genetic code into the system.<br></br>
          2. The Uploaded file should be a CSV file with the Headers 'RSID', 'Chromosome', and 'GenoType'<br></br>
            - All of these values are strings<br></br>
          3. After uploading your file the system will begin processing the data. The system uses our database of known variants/genetic effects and matches them up with your genetic code.<br></br>
          4. Now all data should be contextualized to you.<br></br>
          5. Navigate to the Presriptions tab.<br></br>
          6. Add any Prescriptions you are taking or may take on the future.<br></br>
          7. Navigate to the effects tab.<br></br>
          8. This will tell you if there are any known effects that your genetics has on your prescriptions. <br></br>


      </h4>

    </div>
  );
};
}

export default BioRefresher;
