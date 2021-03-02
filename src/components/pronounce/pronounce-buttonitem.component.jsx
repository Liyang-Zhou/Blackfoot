import React from 'react';
import useSound from 'use-sound';
import './pronouce.styles.scss';

const Button = ({ sound, text }) => {
  const [play] = useSound(sound);
  return (
    <button class="textbutton" onClick={play}>
      {text}
    </button>
  );
};

export default Button;
