import { useRef } from 'react';
import ExpandButton from './ExpandButton';
import logo from '../assets/logo.svg';

const Header = () => {
  const ref = useRef();

  const handleDropdown = () => {
    if (ref.current.style.height === '0px') {
      ref.current.style.height = '';
    } else {
      ref.current.style.height = 0;
    }
  };

  return (
    <nav className='header'>
      <img src={logo} alt='logo' height={64} width={64} />
      <div className='dropdown'>
        <ExpandButton
          fill={'#fafafa'}
          height='50px'
          width='50px'
          handleClick={handleDropdown}
          className={'dropdown-button'}
        />
        <div className='links' ref={ref}>
          <a href='#home'>Home</a>
          <a href='#resume'>Resume</a>
          <a href='#tech'>Tech</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
