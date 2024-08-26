export default function Home() {
  return (
    <div className="homePage">
      <div className="homePageContent">
        <div className="introduction">
          <p>
            Hello! I am a data visualization consultant. I've been a mechanical
            engineer, woodworker, teacher and student, but through it all I have
            been <i>curious</i>. I'm driven by a love for learning and building.{" "}
          </p>
          <p>
            My career, in it's many iterations, has always been guided by the
            question:{" "}
            <span className="homeTextQuestion">
              How can the tools and resources my clients and I have be used to
              achieve our goals?
            </span>
          </p>
          <p>
            In data viz we add the question:{" "}
            <span className="homeTextQuestion">
              What is the most important information that this data can tell us?
            </span>{" "}
            We are story-tellers with a unique story-telling medium.
          </p>
        </div>
        <img
          className="profilePicture"
          src="/profile_picture.jpeg"
          alt="Sarah Reed"
        />
      </div>
    </div>
  );
}
