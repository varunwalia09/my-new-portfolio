import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Front-End Web Developer", "YouTuber", "Coder", "Gamer"];
  // const [currentRole, setCurrentRole] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // useEffect(() => {
  //   const typingEffect = () => {
  //     const currentText = roles[roleIndex];
  //     let i = 0;
  //     const typingInterval = setInterval(() => {
  //       setCurrentRole((prevRole) => currentText.slice(0, i + 1));
  //       i++;
  //       if (i === currentText.length) clearInterval(typingInterval);
  //     }, 200);
  //   };

  //   typingEffect();
  // }, [roleIndex]);
  return (
    <div className="home">
      <div className="home-img">
        <img src="./assest/gif2.gif" alt="hello Walia" />
      </div>
      <div className="intro">
        <h1>
          Hello, Myself <span>Varun Walia</span>
        </h1>
        <h2>
          <span>
            I'm a{" "}
            <Typewriter
              words={[roles[roleIndex]]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>
      </div>

      <section className="skills-1">
        <h1 className="front">Front-End</h1>
        <div className="myimg">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
          >
            <img src="/assest/html.jpg" alt="html.jpg" html />
            <p>HTMl</p>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <img src="/assest/css.jpg" alt="css.jpg" />
            <p>CSS</p>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/javascript"
            target="_blank"
          >
            <img src="/assest/java.jpg" alt="java.jpg" />
            <p>JavaScript</p>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
            target="_blank"
          >
            <img src="/assest/react.jpg" alt="react.jpg" />
            <p>React</p>
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img src="/assest/tailwind.jpg" alt="tailwind.jpg" />
            <p>Tailwind</p>
          </a>
        </div>
      </section>
      {/* Backend start */}
      <section className="skills-1">
        <h1 className="front">BackEnd</h1>
        <div className="myimg">
          <a href="https://www.mongodb.com/docs/" target="_blank">
            <img src="/assest/mongodb.jpg" alt="mongodb.jpg" />
            <p>MongoDB</p>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
            target="_blank"
          >
            <img src="/assest/node.jpg" alt="node.jpg" />
            <p>Nodejs</p>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
            target="_blank"
          >
            <img src="/assest/express.jpg" alt="express.jpg" />
            <p>Express.js</p>
          </a>
          <a href="https://github.com/mdn/" target="_blank">
            <img src="/assest/git.jpg" alt="git.jpg" />
            <p>GitHub</p>
          </a>
          <a href="https://www.canva.com/" target="_blank">
            <img src="/assest/post.jpg" alt="post.jpg" />
            <p>Postman</p>
          </a>
        </div>
      </section>
      {/* Ai tools */}
      <section className="skills-1">
        <h1 className="front">AI-Tools</h1>
        <div className="myimg">
          <a href="https://chat.openai.com/" target="_blank">
            <img src="/assest/chat.jpg" alt="chat.jpg" />
            <p>Chat-Gpt</p>
          </a>
          <a href="https://www.blackbox.ai/" target="_blank">
            <img src="/assest/blackbox.jpg" alt="blackbox.jpg" />
            <p>BlackBox</p>
          </a>
          <a href="https://gemini.google.com/app" target="_blank">
            <img src="/assest/gem3.jpg" alt="gem3.jpg" />
            <p>Gemini</p>
          </a>
          <a href="https://www.canva.com/" target="_blank">
            <img src="/assest/canva.jpg" alt="canva.jpg" />
            <p>Canva</p>
          </a>
        </div>
      </section>
      <div class="center-page">
        <h1>What I Do?</h1>
        <div className="center">
          <h2>⚡ Building resposive website front end using React-Redux</h2>
          <h2>⚡ Developing Web applications using React, Mongodb</h2>
          <h2>⚡ Creating application Front-end in React, Firebase</h2>
          <h2>⚡ Creating application backend in Node, Express & Mongodb</h2>
        </div>

        <div className="EDU-container">
          <h1>Education</h1>
          <div className="EDU-container-2">
            <div className="EDU-4">
              <img src="./assest/pseb.jpg" alt="pseb" />
              <p> 10th (PSEB)</p>
              <p>
                Passed My 10th class from S.M.M. School at Rajpura in 2010 with
                the grade of 65.36%
              </p>
            </div>

            <div className="EDU-5">
              <img src="./assest/12th.png" alt="Backend.png" />
              <p>12th (PSEB)</p>
              <p>
                Passed My 12th class from GOVT. SER. SEC. SCHOOL RAJPURA in 2012
                with the grade of 64.60%
              </p>
            </div>

            <div className="EDU-6">
              <img src="./assest/PMN.jpg" alt="PMN.jpg" />
              <p>Bachelor of Journalism and Mass Communication</p>
              <p>
                {" "}
                Passed My Graducation 2017 From Patel Memorial National College
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
