import React from "react";
import SwiperNews from "../SwiperNews";

// import { opop } from '../../assets'
// import styles from "./Aboutus.module.scss";
import "./Problem.scss";

const Problem = () => {
  return (
    <div className="aboutUs">
      <div className="card">
        <div className="friend">
          <h1>Friendship</h1>
          <p>
            namely, how to start listening to your friend if you have any
            misunderstandings
          </p>
        </div>
        <div className="school">
          <h1>School</h1>
          <p>how to start making new friends without fear of rejection?</p>
        </div>
        <div className="fam">
          <h1>Family</h1>
          <p>
            how to explain your position to your family, how to set personal
            boundaries
          </p>
        </div>
      </div>
      {/* <h1>Who are we?</h1>
    <div className='textblock'>
    <p>our mission is to provide free and completely anonymous consultations to people all over Kyrgyzstan and beyond, we give them the opportunity to talk about their problems, regardless of age.</p>
    </div>
    <div>
</div> */}
      <SwiperNews />
    </div>
  );
};

export default Problem;
