const LogoImage = ({ src, title, height = '70px', width = '70px' }) => {
  return (
    <div className='tooltip'>
      <img src={src} alt={title} height={height} width={width} />
      <span className='tooltiptext'>{title}</span>
    </div>
  );
};

export default LogoImage;