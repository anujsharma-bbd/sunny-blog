import React from 'react';

class HomeComponent extends React.Component {
   render() {
      return (
         <div className="homepage">
            <div className="row">
               <div className="col-sm-4 col-lg-12">
                  col 1
               </div>
               <div className="col-sm-4 col-lg-12">
                  col 2
               </div>
               <div className="col-sm-4 col-lg-12">
                  col 3
               </div>
            </div>
         </div>
      );
   }
}


export default HomeComponent;