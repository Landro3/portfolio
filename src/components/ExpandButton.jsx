import { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandButton = ({
  fill,
  height,
  width,
  handleClick,
  className,
}) => {
  const [expanded, setExpanded] = useState(true);

  const vert = {
    transformOrigin: 'center',
    transition: '.2s ease-in-out'
  };

  const rotated = {
    transform: 'rotate(90deg)'
  };

  const expandButton = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    height,
    width
  };

  const onClick = (e) => {
    setExpanded(!expanded);
    handleClick(e);
  };

  return (
    <button onClick={onClick} className={className} style={expandButton}>
      <svg version='1.1' width='100%' height='100%' viewBox='0 0 100 100'>
        <g fill={fill}>
          <rect x='0' y='45' width='100' height='10' rx='5' />
          <rect x='45' y='0' width='10' height='100' rx='5' style={expanded ? { ...vert, ...rotated } : vert} />
        </g>
      </svg>
    </button>
  );
};

ExpandButton.propTypes = {
  fill: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ExpandButton;