import React from 'react';

function About() {
    return (
        <div className = "about">
            <div class = "container">
                <div class = "row align-items-center my-5">
                    <div class = "col-lg-5">
                        <h1 class = "font-weight-light">About</h1>
                        <p>
                            I'm currently a first-semester student at the University of Central Florida. I graduated in May of 2020
                            with a Bachelor of Science in computer science at UCF. I started my endeavors into the world of computer 
                            science and programming during the first year of my undergrad at UCF, and have been in love with it since 
                            then.
						</p>

						<p>
                            Within this field, I've found a specialized niche in artificial intelligence and machine learning, in both 
                            application and research scenarios. Some of my previous research areas were autonomous driving (specifically, 
                            computer vision systems for connected autonomous vehicles) and machine learning for guided image compression.
						</p>

						<p>
                            I've also had the privilege enough to also pursue research-based courses during my undergraduate studies and now for my Master's. 
                            These courses dove deep into cutting-edge computer vision and machine learning papers from recent conferences. 
                            Currently, I am expanding my scope of research to natural language processing through one of my courses as well. 
                            Code for some of my previous research papers and projects can be found on my 
							<a href = "https://github.com/kobeeraveendran">Github</a> page (if the project is public).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;