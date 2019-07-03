import React from 'react';

export const asyncComponent = (importComponent) => {

   class AsyncComponent extends React.Component {
      constructor(props) {
         super(props);
         this.state = {
            component: null
         };
      }
      async componentDidMount() {
         const { default: component } = await importComponent();
         this.setState({
            component: component
         });
      }
      render() {
         const { component: D } = this.state;
         return (
            D ? <D {...this.props} /> : null
         );
      }

   }
   return AsyncComponent;
}