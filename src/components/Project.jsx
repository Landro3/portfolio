const Project = ({ listItems, title, image, imageHeight, imageWidth }) => {
  const projectImage = {
    borderRadius: '10px',
    // boxShadow: '0px 1px 1px 1px black',
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: '100% 100%',
        height: imageHeight * 400 / imageHeight,
        minHeight: imageHeight * 400 / imageHeight,
        width: imageWidth * 400 / imageHeight,
        overflow: 'hidden',
        margin: '1rem',
        ...projectImage,
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

export default Project;