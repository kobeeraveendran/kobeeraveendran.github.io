(this["webpackJsonpkobeeraveendran.github.io"]=this["webpackJsonpkobeeraveendran.github.io"]||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},15:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),s=(t(15),t(1)),o=t(2),c=t(4),m=t(3),u=t(6),d=t(9),p=t.n(d),h=(t(18),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name,this.props.data.address.city;var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}))}return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"I'm Kobee Raveendran"),r.a.createElement("h3",null,"I'm a ",r.a.createElement("span",null,"software Engineer")," and ",r.a.createElement("span",null,"researcher")," based in Orlando, Florida. I'm passionate about bridging the gap between industrial software development and the most recent machine learning approaches."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},e))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 2021 Kobee Raveendran"),r.a.createElement("li",null,"Graphic assets from ",r.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.image;var e=this.props.data.resumedownload}return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:"Kobee Raveendran Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,"I'm currently in the second semester of my Master's degree program at UCF. My research areas during my undergrad have involved computer vision for autonomous vehicles and image processing for guided image compression. In the current and upcoming semesters, I hope to expand my expertise into natural language processing and intelligent agents in academia, and develop my applied software engineering skills in the industry."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:e,className:"button"},r.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return r.a.createElement("li",{key:e.name},r.a.createElement("span",{style:{width:e.level},className:a}),r.a.createElement("em",null,e.name))}));return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},a)))),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Rel. Coursework"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,r.a.createElement("h5",null,"CAP5415 - Computer Vision (Fall 2018)"),r.a.createElement("p",null,"Fundamentals of computer vision, and shallow dive into modern computer vision with deep neural networks. Culminated in a demo of our research as well as a CVPR conference-style paper. Our work proposes an architecture that results in faster training speed (without sacrificing much visual quality) of Philip Isola et. al's Pix2Pix network for conditional adversarial image-to-image translation. Our work explored a combination of U-Nets and residual layers; view it here: \"",r.a.createElement("a",{href:"https://github.com/kobeeraveendran/faster-pix2pix",target:"_blank",rel:"noreferrer noopener"},"Faster Pix2Pix"),'".')),r.a.createElement("li",null,r.a.createElement("h5",null,"CAP5610 - Machine Learning (Fall 2019)"),r.a.createElement("p",null,'Fundamentals of statistical machine learning, optimization, and evaluation. Ended with a demo of our research, in which we explored the use of gated recurrent units as GAN substitutes for audio synthesis. View our work, titled "',r.a.createElement("a",{href:"https://github.com/bjmedina/gr-gan",target:"_blank",rel:"noreferrer noopener"},"Toward Improving Adversarial Audio Synthesis with Gated Recurrent Units"),'".')),r.a.createElement("li",null,r.a.createElement("h5",null,"CAP6412 - Advanced Computer Vision (Spring 2020)"),r.a.createElement("p",null,'Deep dive into papers published within the last 1-2 years surveying modern computer vision techniques. Consisted of weekly presentations of these papers carried out by students. Some of my programming assignments, as well as my presentation on the paper "Scaling and Benchmarking Self-Supervised Visual Representation Learning" can be found ',r.a.createElement("a",{href:"https://github.com/kobeeraveendran/cap6412/blob/master/3819943_raveendran_fair_ssb.pdf",target:"_blank",rel:"noreferrer noopener"},"here"),".")),r.a.createElement("li",null,r.a.createElement("h5",null,"CAP6614 - Current Topics in Machine Learning (Fall 2020)"),r.a.createElement("p",null,"Survey of recent papers published to top ML conferences within the past ~5 years, also with student presentations on each. Includes a project in which we make novel improvements on the paper ",r.a.createElement("a",{href:"https://openaccess.thecvf.com/content_CVPR_2019/papers/Feng_Self-Supervised_Representation_Learning_by_Rotation_Feature_Decoupling_CVPR_2019_paper.pdf",target:"_blank",rel:"noreferrer noopener"},"Self-Supervised Representation Learning by Rotation Feature Decoupling"),". View my implementation ",r.a.createElement("a",{href:"https://github.com/kobeeraveendran/feature-decoupling",target:"_blank",rel:"noreferrer noopener"},"here"),".")),r.a.createElement("li",null,r.a.createElement("h5",null,"CAP6307 - Advanced Text Mining (Fall 2020)"),r.a.createElement("p",null,"Explores current and previous approaches to natural language processing. Included lectures and programming assignments covering fundamentals of NLP for unstructured data (multinomial Naive Bayes, Viterbi decoding, question answering, text summarization). This portion of the course will then be followed by presentations of our own proposed methods for improving on recent NLP techniques or applications of modern NLP. View my project, in which I develop models to predict political alignment via sentence context, ",r.a.createElement("a",{href:"https://github.com/kobeeraveendran/political-party-affiliation",target:"_blank",rel:"noreferrer noopener"},"here"),".")),r.a.createElement("li",null,r.a.createElement("h5",null,"CAP5636 - Advanced Artificial Intelligence (Fall 2020)"),r.a.createElement("p",null,"Covers the principles of classical artificial intelligence, including search-based methods, constraint satisfaction problems, game playing, Markov processes, and finally neural networks and deep learning. Assignments consisted of one of ",r.a.createElement("a",{href:"http://ai.berkeley.edu/reinforcement.html",target:"_blank",rel:"noreferrer noopener"},"UC Berkeley's classical AI assignments")," and an exploration of neural networks for image classification. View my implementations of both (as hw2 and hw3) ",r.a.createElement("a",{href:"https://github.com/kobeeraveendran/cap5636",target:"_blank",rel:"noreferrer noopener"},"here"),".")),r.a.createElement("li",null,r.a.createElement("h5",null,"CAP6640 - Computer Understanding of Natural Language (Spring 2021 - Ongoing)"),r.a.createElement("p",null,"Extension on the concepts introduced in CAP6307, now instead focusing on recent cornerstone NLP research from the past ~8 years. Will include both paper reviews and related projects pertaining to those papers, and ends in a final project showcasing our own research.")),r.a.createElement("li",null,r.a.createElement("h5",null,"CAP6671 - Intelligent Systems: Robots, Agents, and Humans (Spring 2021 - Ongoing)"),r.a.createElement("p",null,'Exploration of systems that simulate intelligence via planning, cooperation, and learning. The course focuses on "challenge"-type projects in which we develop agents for benchmarking against existing implementations, or implement systems from papers directly. Includes a minimal survey of recent reinforcement learning papers, and also culminates in a final project where we again pursue independent research.'))))))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Experience"))),r.a.createElement("div",{className:"nine columns main-col"},t)),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.email,a=this.props.data.contactmessage;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Get In Touch."))),r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},a))),r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"four columns footer-widgets"},r.a.createElement("div",{className:"widget widget_contact"},r.a.createElement("h4",null,"Email"),r.a.createElement("p",{className:"email"},e)),r.a.createElement("div",{className:"widget widget_contact"},r.a.createElement("h4",null,"LinkedIn"),r.a.createElement("p",{className:"email"},r.a.createElement("a",{href:"https://www.linkedin.com/in/kobee-raveendran/"},"Kobee Raveendran"))),r.a.createElement("div",{className:"widget"},r.a.createElement("h4",null,"Github"),r.a.createElement("p",{className:"email"},r.a.createElement("a",{href:"https://github.com/kobeeraveendran"},"kobeeraveendran"))),r.a.createElement("div",{className:"widget"},r.a.createElement("h4",null,"Discord"),r.a.createElement("p",{className:"email"},"iGPhX#5860")))))}}]),t}(n.Component),w=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"getResumeData",value:function(){p.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(g,{data:this.state.resumeData.resume}),r.a.createElement(v,{data:this.state.resumeData.main}),r.a.createElement(E,{data:this.state.resumeData.main}))}}]),t}(n.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");b?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.f321b34e.chunk.js.map