import React from 'react';
import ImageGallery from 'react-image-gallery';

import { SlidesImages } from '../assets/slides';

class JourneyComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = { images: SlidesImages };
   }
   render() {
      const { images } = this.state;
      return (
         <div className="myjourney">
            <h2><span className="abt-header">My Journey</span></h2>
            <div className="journey-line1">
               This is the way how I see and acheived in my life. There are lot to get and exploreand thats my altimate goal.
            </div>
            <div className="journey-line2">
               I would like to share some beautiful moments of my life.
            </div>
            <div className="slider">
               <ImageGallery items={images} />
            </div>
         </div>
      );
   }
}


export default JourneyComponent;