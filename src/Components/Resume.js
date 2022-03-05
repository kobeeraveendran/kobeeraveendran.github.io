import React, { Component } from 'react';

class Resume extends Component { 
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Rel. Coursework</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <ul className="skills">
                <li>
                  <h5>CAP5415 - Computer Vision (Fall 2018)</h5>
                  {/* <p>
                    Fundamentals of computer vision, and shallow dive into modern computer vision with deep neural networks. Culminated 
                    in a demo of our research as well as a CVPR conference-style paper. Our work proposes an architecture that results in 
                    faster training speed (without sacrificing much visual quality) of Philip Isola et. al's Pix2Pix network for conditional 
                    adversarial image-to-image translation. Our work explored a combination of U-Nets and residual layers; view it here: "
                    <a href="https://github.com/kobeeraveendran/faster-pix2pix" target="_blank" rel="noreferrer noopener">Faster Pix2Pix</a>".
                  </p> */}
                </li>
                <li>
                  <h5>CAP5610 - Machine Learning (Fall 2019)</h5>
                  {/* <p>
                    Fundamentals of statistical machine learning, optimization, and evaluation. Ended with a demo of our research, 
                    in which we explored the use of gated recurrent units as GAN substitutes for audio synthesis. View our work, 
                    titled "<a href="https://github.com/bjmedina/gr-gan" target="_blank" rel="noreferrer noopener">Toward Improving Adversarial Audio Synthesis with 
                    Gated Recurrent Units</a>".
                  </p> */}
                </li>
                <li>
                  <h5>CAP6412 - Advanced Computer Vision (Spring 2020)</h5>
                  {/* <p>
                    Deep dive into papers published within the last 1-2 years surveying modern computer vision techniques. Consisted of 
                    weekly presentations of these papers carried out by students. Some of my programming assignments, as well as my 
                    presentation on the paper "Scaling and Benchmarking Self-Supervised Visual Representation Learning" can be found <a href="https://github.com/kobeeraveendran/cap6412/blob/master/3819943_raveendran_fair_ssb.pdf" target="_blank" rel="noreferrer noopener">here</a>.
                  </p> */}
                </li>
                <li>
                  <h5>CAP6614 - Current Topics in Machine Learning (Fall 2020)</h5>
                  {/* <p>
                    Survey of recent papers published to top ML conferences within the past ~5 years, also with student presentations 
                    on each. Includes a project in which we make novel improvements on the paper <a href="https://openaccess.thecvf.com/content_CVPR_2019/papers/Feng_Self-Supervised_Representation_Learning_by_Rotation_Feature_Decoupling_CVPR_2019_paper.pdf" target="_blank" rel="noreferrer noopener">
                    Self-Supervised Representation Learning by Rotation Feature Decoupling</a>. View my implementation <a href="https://github.com/kobeeraveendran/feature-decoupling" target="_blank" rel="noreferrer noopener">here</a>.
                  </p> */}
                </li>
                <li>
                  <h5>CAP6307 - Advanced Text Mining (Fall 2020)</h5>
                  {/* <p>
                    Explores current and previous approaches to natural language processing. Included lectures and programming 
                    assignments covering fundamentals of NLP for unstructured data (multinomial Naive Bayes, Viterbi decoding, 
                    question answering, text summarization). This portion of the course will then be followed by presentations of 
                    our own proposed methods for improving on recent NLP techniques or applications of modern NLP. View my project, in which 
                    I develop models to predict political alignment via sentence context, <a href="https://github.com/kobeeraveendran/political-party-affiliation" target="_blank" rel="noreferrer noopener">here</a>.
                  </p> */}
                </li>
                <li>
                  <h5>CAP5636 - Advanced Artificial Intelligence (Fall 2020)</h5>
                  {/* <p>
                    Covers the principles of classical artificial intelligence, including search-based methods, 
                    constraint satisfaction problems, game playing, Markov processes, and finally neural networks and 
                    deep learning. Assignments consisted of one of <a href="http://ai.berkeley.edu/reinforcement.html" target="_blank" rel="noreferrer noopener">UC Berkeley's classical AI assignments</a> and 
                    an exploration of neural networks for image classification. View my implementations of both (as hw2 and hw3) <a href="https://github.com/kobeeraveendran/cap5636" target="_blank" rel="noreferrer noopener">here</a>.
                  </p> */}
                </li>

                <li>
                  <h5>CAP6640 - Computer Understanding of Natural Language (Spring 2021)</h5>
                  {/* <p>
                    Extension on the concepts introduced in CAP6307, now instead focusing on recent cornerstone NLP research from the past 
                    ~8 years. Included paper reviews of the most impactful works, as well as a final project encompassing our own research into 
                    the NLP field. View my work, in which we developed a system capable of automatic summarization of 
                    scientific research papers, <a href="https://github.com/kobeeraveendran/auto-survey" target="_blank" rel="noreferrer noopener">here</a>.
                  </p> */}
                </li>

                <li>
                  <h5>CAP6671 - Intelligent Systems: Robots, Agents, and Humans (Spring 2021)</h5>
                  {/* <p>
                    Exploration of systems that simulate intelligence via planning, cooperation, and learning. The course focuses on "challenge"-type 
                    projects in which we develop agents for benchmarking against existing implementations, or implement systems from papers directly. 
                    Includeded a minimal student-made literature survey of recent research in whatever domain we chose 
                    (such as StarCraft and RoboCup Soccer). Also included a final project in which we did independent research on a field of 
                    machine learning of our choosing; view my project, which also deals with scientific literature summarization (but uses a 
                    different method, achieving better results), <a href="https://github.com/kobeeraveendran/lsi" target="_blank" rel="noreferrer noopener">here</a>.
                  </p> */}
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
