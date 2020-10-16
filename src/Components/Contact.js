import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">

            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Email</h4>
                  <p className="email">
                     {email}
                  </p>
				   </div>
               <div className="widget widget_contact">
                  <h4>LinkedIn</h4>
                  <p className="email">
                     <a href="https://www.linkedin.com/in/kobee-raveendran/">Kobee Raveendran</a>
                  </p>
               </div>
               <div className="widget">
                  <h4>Github</h4>
                  <p className="email">
                     <a href="https://github.com/kobeeraveendran">kobeeraveendran</a>
                  </p>
               </div>
               <div className="widget">
                  <h4>Discord</h4>
                  <p className="email">
                     iGPhX#5860
                  </p>
               </div>

            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
