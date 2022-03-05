import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      // var occupation= this.props.data.occupation;
      // var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Kobee Raveendran</h1>
            <h3>I'm a <span>software engineer at Microsoft</span> based in Redmond, Washington. I'm passionate about 
               contributing to impactful projects that reach billions of users.
            </h3>
            <hr />
            <ul className="social">
               <li key="github">
                  <a href="http://github.com/kobeeraveendran" target="_blank" rel="noreferrer noopener">
                     <i className="fa fa-github" />
                  </a>
               </li>
               <li key="linkedin">
                  <a href="https://www.linkedin.com/in/kobee-raveendran/" target="_blank" rel="noreferrer noopener">
                     <i className="fa fa-linkedin" />
                  </a>
               </li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
