import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      // var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      // var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="Kobee Raveendran Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
               I'm currently entering the second semester of my Master's degree program at UCF. My research areas during my undergrad
               have involved computer vision for autonomous vehicles and image processing for guided image compression. 
               In the current and upcoming semesters, I hope to expand my expertise into natural language processing and 
               intelligent agents in academia, and develop my applied software engineering skills in the industry.
            </p>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
