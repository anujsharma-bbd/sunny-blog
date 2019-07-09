import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Card, Button, CardHeader, CardBody, CardTitle, CardText, Spinner } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
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
            {
               (matrix.length === 0) ?
                  <div className="text-center pt-6">
                     <Spinner color="primary" />
                  </div>
                  : null
            }
            <div className="row pt-3">
               <div className="col-sm-12">
                  <Carousel infiniteLoop={true} autoPlay={true} centerMode={false} showStatus={false}
                     showThumbs={false} useKeyboardArrows={true}>
                     {
                        matrix.map((arr, index) => {
                           return (
                              arr.map((item, ind) => {
                                 return (
                                    <div key={(ind + index) + "-seconcarousel-row-matrix"}>
                                       <img alt="" src={item.src} height="550px" />
                                       <p className="legend">
                                          {
                                             item.qoute
                                          }
                                       </p>
                                    </div>
                                 );
                              })
                           );
                        })
                     }
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