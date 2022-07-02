import PropTypes from 'prop-types';

const Project = ({ listItems, title, image, imageHeight, imageWidth }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: '100% 100%',
        borderRadius: '10px',
        boxShadow: '0px 2px 2px 1px black',
        cursor: 'default',
        height: 415,
        minHeight: 415,
        width: imageWidth * 415 / imageHeight,
        overflow: 'hidden',
        margin: '1rem',
      }}
    >
      <div className='project-description'>
        <div className='project-description-text'>
          <h1>{title}</h1>
          <ul>
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  listItems: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  imageWidth: PropTypes.number.isRequired
};

export default Project;