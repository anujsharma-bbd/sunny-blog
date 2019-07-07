import React from 'react';
import ImageGallery from 'react-image-gallery';

class JourneyComponent extends React.Component {
   constructor(props) {
      super(props);
      const images = [];
      for (let i = 1; i < 29; i++) {
         images.push({
            original: require(`../assets/slides/${i}.jpeg`),
            thumbnail: require(`../assets/slides/thumbs/${i}_tn.jpg`),
            desciption: 'This is my amazing Journey  :)',
            originalClass: 'originalImgClass'
         });
      }
      this.state = { images };
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