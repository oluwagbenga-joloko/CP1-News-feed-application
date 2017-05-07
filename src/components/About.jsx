import React from 'react';
/**
 * app component
 * @returns {*} element to be rendered
 */
function About() {
  return (
    <div className=" content about">
      <div className="row newsrow text-center error">
        <p>This application was built by Oluwagbenga Joloko.</p>
        <p>To contribute visit <a href="https://github.com/andela-ojoloko/CP1-News-feed-application">github</a></p>
      </div>
    </div>
  );
}
export default About;
