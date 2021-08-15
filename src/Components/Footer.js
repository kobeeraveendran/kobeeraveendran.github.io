import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              <li key="github">
                <a href="http://github.com/kobeeraveendran/" target="_blank" rel="noreferrer noopener">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li key="linkedin">
                <a href="https://www.linkedin.com/in/kobee-raveendran/" target="_blank" rel="noreferrer noopener">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
           </ul>

           <ul className="copyright">
              <li>&copy; 2021 Kobee Raveendran</li>
              <li>Graphic assets from <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
