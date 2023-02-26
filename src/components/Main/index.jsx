import React from 'react'
import { hands } from '../../assets'
import "./Main.scss"

const Main = () => {
  return (
    <div id='opop'>
    {/* <div className='hands'>
        <img src={hands} alt="" />
    </div> */}

    <div className="parallax">
        <div className="mask"></div>
        <div className='problems'>
            <h1>
                u have no one to talk to?
            </h1>
            <div className='btn'>
                <button className='btn1'>
                <a href="https://web.telegram.org/k/#@iwomea">
                    Talk to us!
                    </a> </button>
                <button className='btn2'>
                    Our contacts
                </button>
            </div>
        </div>
    </div>


    <div>
        
    </div>
    </div>
  )
}

export default Main