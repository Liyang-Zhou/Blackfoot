/* A showcase website for Blackfoot language
* Author: Liyang Zhou
* Email: lza132@sfu.ca
*/

import React from 'react';
import useSound from 'use-sound';
import buttonImg from '../../assets/pngwing.com.png';
import './pronouce.styles.scss';

const SoundButton = ({ sound }) => {
  const [play] = useSound(sound);
  return (
    <button class="button">
      <img src={buttonImg} height="15" width="15" alt="myimg" onClick={play} />
    </button>
  );
};

export default SoundButton;
