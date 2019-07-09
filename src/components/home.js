import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import blog1 from '../assets/homeSlider/blog1.png';
import blog2 from '../assets/homeSlider/blog2.jpg';
import blog3 from '../assets/homeSlider/blog3.jpg';
import blog4 from '../assets/homeSlider/blog4.jpg';
import blog5 from '../assets/homeSlider/blog5.jpg';
import blog6 from '../assets/homeSlider/blog6.jpg';
import blog7 from '../assets/homeSlider/blog7.jpg';
import blog8 from '../assets/homeSlider/blog8.jpg';
import blog9 from '../assets/homeSlider/blog9.jpg';
class HomeComponent extends React.Component {
   constructor(props) {
      super(props);
      this.breakIntoMatrixof3 = this.breakIntoMatrixof3.bind(this);
      this.state = { matrix: [] };
   }
   async componentDidMount() {
      var { sliders } = await import('../assets/homeSlider/');
      let matrix = this.breakIntoMatrixof3(sliders);
      this.setState({ matrix });
   }
   breakIntoMatrixof3(sliders) {
      let index = 0;
      let matrix = [];
      while (index < sliders.length) {
         let subArray = [];
         for (let i = 0; i < 3 && ((index + i) < sliders.length); i++) {
            const element = sliders[index + i];
            if (element) {
               subArray.push(element);
            } else {
               break;
            }
         }
         if (subArray.length !== 0)
            matrix.push(subArray);
         index += 3;
      }
      return matrix;
   }
   render() {
      const { matrix } = this.state;
      return (
         <div className="homepage">
            <div className="row">
               <div className="col-sm-12">
                  <Carousel infiniteLoop={true} autoPlay={true} centerMode={false} showStatus={false}
                     showThumbs={false} useKeyboardArrows={true}>
                     <div>
                        <img alt="" src={blog1} height="550px" />
                        <p className="legend">“Don’t worry about failure; you only have to be right once.”</p>
                     </div>
                     <div>
                        <img alt="" src={blog2} height="550px" />
                        <p className="legend">“In this ever-changing society, the most powerful and enduring brands are built from the heart. They are real and sustainable. Their foundations are stronger because they are built with the strength of the human spirit, not an ad campaign. The companies that are lasting are those that are authentic.”</p>
                     </div>
                     <div>
                        <img alt="" src={blog3} height="550px" />
                        <p className="legend">
                           “You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something—your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.”
                        </p>
                     </div>
                     <div>
                        <img alt="" src={blog4} height="550px" />
                        <p className="legend">
                           “Experience has taught me a few things. One is to listen to your gut, no matter how good something sounds on paper. The second is that you’re generally better off sticking with what you know. And the third, is that sometimes your best investments are the ones you don’t make.”
                        </p>
                     </div>
                     <div>
                        <img alt="" src={blog5} height="550px" />
                        <p className="legend">
                           “There’s an entrepreneur right now, scared to death, making excuses, saying, ‘It’s not the right time just yet.’ There’s no such thing as a good time. I started an apparel-manufacturing business in the tech-boom years. I mean, come on. Get out of your garage and go take a chance and start you business.”
                        </p>
                     </div>
                     <div>
                        <img alt="" src={blog6} height="550px" />
                        <p className="legend">
                           “It takes humility to realize that we don’t know everything, not to rest on our laurels, and to know that we must keep learning and observing. If we don’t, we can be sure some startup will be there to take our place.”
                        </p>
                     </div>
                     <div>
                        <img alt="" src={blog7} height="550px" />
                        <p className="legend">
                           “Lots of companies don’t succeed over time. What do they fundamentally do wrong? They usually miss the future.”
                        </p>
                     </div>
                     <div>
                        <img alt="" src={blog8} height="550px" />
                        <p className="legend">
                           “The thing that I learned early on is you really need to set goals in your life, both short-term and long-term, just like you do in business. Having that long-term goal will enable you to have a plan on how to achieve it. We apply these skills in business, yet when it comes to ourselves, we rarely apply them.”
                        </p>
                     </div>
                     <div>
                        <img alt="" src={blog9} height="550px" />
                        <p className="legend">
                           “The distance between number one and number two is always a constant. If you want to improve the organization, you have to improve yourself and the organization gets pulled up with you. That is a big lesson. I cannot just expect the organization to improve if I don’t improve myself and lift the organization, because that distance is a constant.”
                        </p>
                     </div>
                  </Carousel>
               </div>
            </div>
            {
               matrix.map((arr, index) => {
                  return (
                     <div className="row" key={index + "-top-row-matrix"}>
                        {
                           arr.map((item, ind) => {
                              return (
                                 <div className="col-sm-4 pt-4" key={(ind + index) + "-second-row-matrix"}>
                                    <Card>
                                       <CardHeader tag="h6" className={`blog${((ind + index) + 1)}-header`}></CardHeader>
                                       <CardBody>
                                          <CardTitle>
                                             <span title={item.qoute}>
                                                {item.shortQoute || item.qoute}
                                             </span>
                                          </CardTitle>
                                          <CardText className="card-text-custom">
                                             <p className="founder-text">
                                                {item.post}
                                             </p>
                                             {item.shortText || item.text}
                                          </CardText>
                                          <Button>Read More...</Button>
                                       </CardBody>
                                    </Card>
                                 </div>
                              )
                           })
                        }
                     </div>
                  )
               })
            }
         </div>
      );
   }
}


export default HomeComponent;