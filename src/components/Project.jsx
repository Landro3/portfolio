import PropTypes from 'prop-types';

const Project = ({ description, title, image, imageHeight, imageWidth, reverse }) => {

  return (
    <div className='project'>
      <div className={reverse ? 'col2' : 'col1'}>
        <span>
          {description}
        </span>
      </div>
      <div className={reverse ? 'col1' : 'col2'}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

Project.propTypes = {
  description: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default Project;