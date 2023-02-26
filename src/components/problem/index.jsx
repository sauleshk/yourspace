import React from "react";
import SwiperNews from "../SwiperNews";

// import { opop } from '../../assets'
// import styles from "./Aboutus.module.scss";
import "./Problem.scss";

const Problem = () => {
  return (
    <div>
      <div className="plp">
      <h1>What problems can we solve?</h1>
      </div>
    <div className="aboutUs">
      <div className="card">
        <div className="friend">
          <h2>Friendship</h2>
          <p>
            namely, how to start listening to your friend if you have any
            misunderstandings
          </p>
        </div>
        <div className="school">
          <h2>School</h2>
          <p>how to start making new friends without fear of rejection?</p>
        </div>
        <div className="fam">
          <h2>Family</h2>
          <p>
            how to explain your position to your family, how to set personal
            boundaries
          </p>
        </div>
        <div className="emo">
          <h2>Emotional condition</h2>
          <p></p>
        </div>
        <div className="rel">
          <h2>Relationships</h2>
          <p></p>
        </div>
        <div className="health">
          <h2>Physical health</h2>
          <p></p>
        </div>
      </div>
      {/* <h1>Who are we?</h1>
    <div className='textblock'>
    <p>our mission is to provide free and completely anonymous consultations to people all over Kyrgyzstan and beyond, we give them the opportunity to talk about their problems, regardless of age.</p>
    </div>
    <div>
  </div> */}
      {/* <SwiperNews /> */}
    </div>
  </div>
  );
};

export default Problem;
