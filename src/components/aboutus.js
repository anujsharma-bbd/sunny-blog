import React from 'react';

import aboutMeImage from '../assets/aboutme.jpeg';
import { Helmet } from "react-helmet";

class AboutUs extends React.Component {
   render() {
      const style1 = { fontSize: '20px', lineHeight: '32px', color: '#333333' };
      const style2 = { fontSize: '20px', color: '#333333' };
      return (
         <div className="aboutus">
            <Helmet>
               <meta charSet="utf-8" />
               <title>About Me</title>
               <link rel="canonical" href="http://blogdekho.co.in/aboutme" />
            </Helmet>
            <h2 className="aboutus-header"><span className="abt-header">Hi, I'm Sunny</span></h2>
            <div className="aboutus-text">
               <br />
               <p><span style={style1}>I used to have a real job, but I found a way out. </span></p>
               <p><span style={style1}>My escape route was a side hustle business I built in my spare time&nbsp;— and you can do it too.</span></p>
               <p><span style={style2}>Today I help thousands of people like you earn extra money and grow meaningful businesses.</span></p>
               <p><span style={style2}>Because even if you don't have a business idea right now, you know there's more to life than punching the clock for 30 years.</span></p>
            </div>
            <div className="profile-image-large">
               <img alt="" src={aboutMeImage} />
            </div>
         </div>
      );
   }
}


export default AboutUs;