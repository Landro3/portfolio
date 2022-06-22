import PropTypes from 'prop-types';

import LogoImage from './LogoImage';

const TechBox = ({ images, title }) => {
  const logoHeight = '75px';
  const logoWidth = '75px';

  return (
    <div className='tech-box'>
      <h1>{title}</h1>
      <div className='tech-logos'>
        {images.map(({ src, title }) => (
          <LogoImage src={src} title={title} key={title} height={logoHeight} width={logoWidth} />
        ))}
      </div>
    </div>
  );
};

TechBox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default TechBox;
