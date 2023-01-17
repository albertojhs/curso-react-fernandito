import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';

export const Character = ({ characterName,  location }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [characterName]);

  return (
    <>
        <blockquote 
          className="blockquote text-end"
          style={{ display: 'flex' }}>
            <p ref={ pRef } className="mb-3">{ characterName }</p>
            <footer className="blockquote-footer">{ location }</footer>
        </blockquote>
        <code>{ JSON.stringify( boxSize ) }</code>
    </>
  )
}

Character.propTypes = {
    characterName    : PropTypes.string.isRequired,
    location : PropTypes.string.isRequired
}
