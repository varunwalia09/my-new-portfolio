import React from "react";

function About() {
  return (
    <div className="top-img">
      <div className="top-img1">
        <img src="./assest/varun.jpg" alt="varun.jpg" />
      </div>
      <div className="intro1">
        <h1>
          Hello, Myself <span>Varun Walia</span>
        </h1>
        <h2>
          <span>
            I am a Full-Stack developer based in Rajpura, India. I have
            Completed my BJMC from Punjabi University Patiala. I am very
            passionate about improving my coding skills & developing
            applications & websites. I build WebApps and Websites using MERN
            Stack. Working for myself to improve my skills. Love to build
            Full-Stack clones.
          </span>
        </h2>
      </div>

      <div className="h1-container">
        <h1>Projects</h1>
      </div>
      <div className="abt-container">
        <div className="box-1">
          <a
            href="https://entertainment-netflix-prooject-dnzw.vercel.app/"
            target="blank"
          >
            <img src="./assest/netflix.png" alt="netflix.png" />
          </a>
          <p>Netflix Login Page</p>
        </div>
        <div className="box-2">
          <a href="https://book-your-show-ui.onrender.com/" target="blank">
            <img src="./assest/book.png" alt="book.png" />
          </a>
          <p>Book My Show</p>
        </div>
        <div className="box-3">
          <a href="https://kissansilage-project.vercel.app/" target="blank">
            <img src="./assest/Kissan.png" alt="Kissan.png" />
          </a>
          <p>Kissan Silage</p>
        </div>

        <div className="bottom-container">
          <h1>Certificates</h1>
          <div className="abt-container-2">
            <div className="box-4">
              <a
                href="https://certificates.almabetter.com/en/verify/74131666550137"
                target="blank"
              >
                <img src="./assest/Front-end.png" alt="Front-end.png" />
              </a>
              <p>Front-End Development</p>
            </div>
            <div className="box-5">
              <a
                href="https://certificates.almabetter.com/en/verify/30959368916742"
                target="blank"
              >
                <img src="./assest/Backend.png" alt="Backend.png" />
              </a>
              <p>Backend Development</p>
            </div>

            <div className="box-6">
              <a
                href="https://certificates.almabetter.com/en/verify/44332865357285"
                target="blank"
              >
                <img
                  src="./assest/Full STack Certificate.png"
                  alt="Full STack Certificate.png"
                />
              </a>
              <p>Full Stack Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
