/* A showcase website for Blackfoot language
* Author: Liyang Zhou
* Email: lza132@sfu.ca
*/

import React from 'react';
import { useHistory } from "react-router-dom";
import './collection-item.styles.scss';

const CollectionItem = ({ id, states, setStates, name, imageUrl, projectUrl }) => {
  const history = useHistory();
  
  const handleClick = () => {
    setStates({ ...states, selectedProj: projectUrl, clicked: id });
  };
        
  React.useEffect(() => {
    if (states.clicked === id)
      history.push('/');
  }, [states.clicked])


  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        onClick={handleClick}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
