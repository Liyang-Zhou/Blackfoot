/* A showcase website for Blackfoot language
* Author: Liyang Zhou
* Email: lza132@sfu.ca
*/

import React from 'react';

// import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = ({ states, setStates }) => {
  // setStates({ ...states, clicked: false })
  React.useEffect(() => {
    if (states.clicked !== false)
      setStates({ ...states, clicked: false});
  })

  return (
    <div className="homepage">
      <iframe
        className = "repl"
        title="play"
        frameBorder="0"
        height="560px"
        width="100%"
        src={states.selectedProj}
        allow="autoplay"
        sandbox="allow-popups allow-scripts allow-same-origin"></iframe>
      <div className="wrapper">
        <button className = "feedback" onClick={()=> window.open("https://www.surveymonkey.com/")}>Give your feedback</button>
      </div>
    </div>
  );
}

export default HomePage;
