import React from 'react'
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

const ProgressBar = () => {
  return (
    <div>
    <div className='flex w-100 gap-5'>
    <MDBProgress height='15'>
        <MDBProgressBar bgColor='success' width='25' valuemin={0} valuemax={100} > 
        25%
        </MDBProgressBar>
      </MDBProgress>
    </div>

      <br />

      <MDBProgress height='15'>
        <MDBProgressBar bgColor='info' width='50' valuemin={0} valuemax={100} >
          50%
        </MDBProgressBar>
        
      </MDBProgress>

      <br />

      <MDBProgress height='15'>
        <MDBProgressBar bgColor='warning' width='75' valuemin={0} valuemax={100} >
          75%
        </MDBProgressBar>
      </MDBProgress>

      <br />

      <MDBProgress height='15'>
        <MDBProgressBar bgColor='danger' width='100' valuemin={0} valuemax={100} >
          100%
        </MDBProgressBar>
      </MDBProgress>

    </div>
  )
}

export default ProgressBar