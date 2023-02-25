import React from 'react'
import { hands } from '../../assets'
import "./Main.scss"


const Main = () => {
  return (
    <div>
    {/* <div className='hands'>
        <img src={hands} alt="" />
    </div> */}

<div class="parallax">
   <div class="mask"></div>
</div>


    <div>
        <div className='problems'>
            <h1>
                u have no one to talk to?
            </h1>
            <div className='btn'>
                <button className='btn1'>
                    talk to us
                </button>
                <button className='btn2'>
                    our contacts
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main