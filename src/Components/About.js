import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/Kobee_SickoMode.jpg" alt="Kobee Raveendran Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
               I'm a software engineer at Microsoft in the Windows, Developers and Experiences (WDX) group on the 
               Signature Experiences (SigX) PC2 team. Currently, my team is working on adding efficient and exciting 
               functionality to the Windows File Explorer.

               I recently graduated from the University of Central Florida with my master's in computer science, with a 
               heavy concentration in deep learning. Outside of work, I'm into cars, gaming, cooking, and hanging out with friends 
               doing just about anything. If you're interested in learning more about me or my work, feel free to reach 
               out using any of the mediums in the Contact section.
            </p>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank" rel="noreferrer noopener"><i className="fa fa-download"></i>Download Resume</a>
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
