import React from 'react';
import { Input } from 'reactstrap';
import { Helmet } from "react-helmet";
import DisqusCommentsComponent from '../shared/disqusComponent';

class ContactUs extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         message: '',
         validname: '',
         validemail: '',
         validmessage: ''
      };
      this.onInputChange = this.onInputChange.bind(this);
      this.isValid = this.isValid.bind(this);
      this.regex = /([a-zA-Z0-9._-]+\@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/;
   }
   onInputChange(e) {
      let isControlValid = this.isValid(e.target.id, e.target.value);
      this.setState({
         [e.target.id]: e.target.value,
         ['valid' + e.target.id]: isControlValid
      }, () => {
         console.log(this.state);
      });
   }
   isValid(prop,data) {
      if (!data || data.length === 0) return '';
      if (prop === 'email' && data && data.length > 0) {
         return this.regex.test(data);
      }
      return (data && data && data.length > 0)
   }
   render() {
      const { name, email, message, validname, validemail, validmessage } = this.state;
      return (
         <div className="contactus">
            <Helmet>
               <meta charSet="utf-8" />
               <title>Contact Us</title>
               <link rel="canonical" href="http://blogdekho.co.in/contactus" />
            </Helmet>
            <br />
            <h2><span className="cnt-header">Contact Us</span></h2>
            <br />
            <br />
            <form role="form">
               <div className="row">
                  <div className="col-sm-8">
                     <div className="form-group">
                        <label htmlFor="name">Full Name*</label>
                        {
                           <Input {...(validname === '' ? null : validname===true? {'valid':'valid'}:{'invalid':'invalid'})} value={name} onChange={this.onInputChange} maxLength={100} id="name" placeholder="Enter full name" />
                        }
                     </div>
                  </div>
                  <div className="col-sm-4">
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-8">
                     <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <Input {...(validemail === '' ? null : validemail === true ? { 'valid': 'valid' } : { 'invalid': 'invalid' })}  value={email} onChange={this.onInputChange} maxLength={50} id="email" placeholder="Enter Email Id" />
                     </div>
                  </div>
                  <div className="col-sm-4">
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-12">
                     <div className="form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea value={message} onChange={this.onInputChange} type="text" rows="10" maxLength={300} className="form-control" id="message" placeholder="Enter your message here"></textarea>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-12 text-right">
                     <button type="reset" className="btn btn-default" style={{ marginRight: '30px', borderColor: '#000' }}>Reset</button>
                     <button type="button" className="btn btn-success">Submit</button>
                  </div>
               </div>
            </form>
            <br />
            <hr />
            <br />
            <div>
               <DisqusCommentsComponent disqusId={'blogdekho-co-in'} />
            </div>
         </div>
      );
   }
}

export default ContactUs;