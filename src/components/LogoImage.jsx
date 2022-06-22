import PropTypes from 'prop-types';

const LogoImage = ({ src, title, height = '70px', width = '70px' }) => (
  <div className='tooltip'>
    <img src={src} alt={title} height={height} width={width} />
    <span className='tooltiptext'>{title}</span>
  </div>
);

LogoImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default LogoImage;