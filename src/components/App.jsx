import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Tech from './Tech';

const App = () => {
  return (
    <>
      <Header />
      <div className='app'>
        <Home />
        <Resume />
        <Tech />
        {window.innerWidth > 720 && <Projects />}
        <Contact />
      </div>
    </>
  );
};

export default App;
