import React from 'react'
import './Test.css'
import { HiArrowNarrowLeft } from "react-icons/hi";
function Test() {
  return (
    <div>



        <div className='test-container'>

            <div className="box-one">
            </div>

            <div className="box-two">


                <div className="mContainer">
                    <div className="box-three">

                        User Name <br/>
                        Caption <br/>
                        Image<br/>
                        <HiArrowNarrowLeft style={{fontSize:'60px'}}/>
                        ReactionBar<br/>

                    </div>
                    <div className="box-three"></div>
                    <div className="box-three"></div>
                </div>


            </div>
            <div className="box-one">
            </div>


        </div>



    </div>
  )
}

export default Test