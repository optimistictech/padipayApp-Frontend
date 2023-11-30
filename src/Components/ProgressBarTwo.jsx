import React from 'react';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

const ProgressBarTwo = () => {
  return (
    <div>
      <MDBProgress height='15'>
        <MDBProgressBar bgColor='danger' width='100' valuemin={0} valuemax={100} >
          100%
        </MDBProgressBar>
      </MDBProgress>

      <br />

    <MDBProgress height='15'>
        <MDBProgressBar bgColor='success' width='75' valuemin={0} valuemax={100} > 
        75%
        </MDBProgressBar>
      </MDBProgress>

      <br />

      <MDBProgress height='15'>
        <MDBProgressBar bgColor='info' width='50' valuemin={0} valuemax={100} >
          50%
        </MDBProgressBar>
        
      </MDBProgress>
      

    </div>
  )
}

export default ProgressBarTwo