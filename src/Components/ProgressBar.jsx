import React from 'react'
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';


const ProgressBar = () => {
  return (
    <>
      <MDBProgress>
        <MDBProgressBar striped width='10' valuemin={0} valuemax={100} />
      </MDBProgress>
      <br />
      <MDBProgress>
        <MDBProgressBar striped bgColor='success' width='25' valuemin={0} valuemax={100}></MDBProgressBar>
      </MDBProgress>
      <br />
      <MDBProgress>
        <MDBProgressBar striped bgColor='info' width='50' valuemin={0} valuemax={100} />
      </MDBProgress>
      <br />
      <MDBProgress>
        <MDBProgressBar striped bgColor='warning' width='75' valuemin={0} valuemax={100} />
      </MDBProgress>
      <br />
      <MDBProgress>
        <MDBProgressBar striped bgColor='danger' width='100' valuemin={0} valuemax={100} />
      </MDBProgress>
    </>
  )
}

export default ProgressBar
