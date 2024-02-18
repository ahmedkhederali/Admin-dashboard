import React from 'react'
import FourthRow from './FourthRow'
import ThirdRow from './ThirdRow'
import SecondRow from './SecondRow'
import FirstRow from './FirstRow'
import ZeroRow from './ZeroRow'

const Prediction = () => {
  return (
    <div id="kt_app_content" className="container-fluid app-content pt-4 prdiction-in-tablet" style={{padding: '110px 70px 0 70px', background: '#eeeeee30'}}>
    <ZeroRow />
    <FirstRow />
    <SecondRow />
    <ThirdRow />
    <FourthRow />
</div>

  )
}

export default Prediction