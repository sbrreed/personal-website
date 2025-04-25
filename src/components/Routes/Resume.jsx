import { useState } from "react";

export default function Resume() {
  return (
    <div className="resume-about-container">
      <div className="about-intro-container">
        <div className="resume-image-wrapper">
          <img src="/acme_photoshoot_headshot.JPG" alt="Sarah Reed" />
        </div>
        <div className="introduction">
          <p>
            There are many names for what I do: Information storyteller, Data
            Visualization Developer, Data Geek.
          </p>
          <p>
            I have always been curious-- driven by a love for learning and
            experimentation throughout my life. As a student, teacher,
            woodworker, engineer and designer I have always brought my curiosity
            to the table.
          </p>
          <p>
            As someone fascinated with information visualization I've spent far
            too much time working and re-working my resume. To that end, I've
            created two versions. Download a{" "}
            <a href="/SarahReed_resume_2025_05_25.pdf" download>
              standard format
            </a>{" "}
            or, what I consider the more{" "}
            <a href="/2024_08_29_SReed_Resume.pdf" download>
              interesting format
            </a>
            .
          </p>
          <p>
            My career has been guided by the question:{" "}
            <span className="homeTextQuestion">
              How can I achieve my goals with my current tools and resources?
            </span>
          </p>

          <p>With data storytelling I always ask two additional questions:</p>
          <ul>
            <li>
              <span className="homeTextQuestion">
                What is the most important information that this data can tell
                us?
              </span>
            </li>
            <li>
              <span className="homeTextQuestion">
                What is the most effective way to communicate this information?
              </span>
            </li>
          </ul>
          <p>
            And from these answers, I might write a short article with some
            simple line charts, or create a more complex interactive experience
            that walks my audience through intuitive steps to deepen their
            understanding. There is no one size fits all when it comes to
            information storytelling. It comes down to the needs of the
            information and the audience. We are story-tellers with a unique
            story-telling medium.
          </p>
        </div>
      </div>
      <div className="resume">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Data Visualization Developer</strong>
            <em> Crow Insight</em>
            <ul>
              <li>
                Built interactive online dashboards using HTML, CSS, JavaScript,
                and React.
              </li>
              <li>
                Lead developer on EPA data dashboards highlighting water system
                health across the US. Our dashboards helped citizens and
                scientists sift through the data by employing intuitive filters
                and visualizations, all built to accessibility standards.
              </li>
              <li>
                Developed dashboards for the DeBeaumont Foundation to present
                survey data about public health workers. Dashboards allowed
                citizens, policy makers and researchers to better understand the
                complexities of the public health workforce.
              </li>
              <li>
                Processed and cleaned data using R and Python. Built scripts and
                processes to take in client data of various formats, clean and
                transform it into usable formats for the dashboards.
              </li>
              <li>Managed internal IT infrastructure projects.</li>
            </ul>
          </li>
          <li>
            <strong>Program Manager/ Mechanical Engineer</strong>
            <em> Farm Design</em>
            <ul>
              <li>
                Managed $250K+ medical device projects from concept to mass
                production.
              </li>
              <li>
                Coordinated with clients, manufacturers, and cross-functional
                teams to meet deadlines and budgets.
              </li>
              <li>Led design reviews, brainstorms, and task assignments.</li>
              <li>
                Acted as liaison between patent holders and manufacturing teams.
              </li>
            </ul>
          </li>
        </ul>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Maryland Institute College of Art </strong>
            <em> Information Visualisation</em>
          </li>
          <li>
            <strong>Massachusetts Institute of Technology</strong>
            <em> Master of Engineering in Mechanical Engineering </em>
          </li>
          <li>
            <strong>University of Colorado </strong>
            <em> Bachelor of Science in Mathematics</em>,
            <em> Secondary Teaching Licensure</em>
          </li>
        </ul>
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <strong>Languages, Libraries & Frameworks:</strong> HTML, CSS,
            JavaScript, D3, React, Python, Flask, R, RShiny, Node, ArchieML, Git
          </li>
          <li>
            <strong>Software:</strong> Adobe Illustrator, InDesign, Photoshop,
            Office 365, Tableau, Google Drive Suite
          </li>
        </ul>
        <h2>Hobbies and Interests</h2>
        <ul>
          <li>Basically everything Colorado</li>
          <li>Outdoor activities: Skiing, mountain biking, hiking, rafting</li>
          <li>Gardening</li>
          <li>Painting</li>
          <li>Family time</li>
          <li>Traveling</li>
          <li>Audiobooks and podcasts</li>
        </ul>
      </div>
    </div>
  );
}
