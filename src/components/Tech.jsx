import { backEndLogos, frontEndLogos, languageLogos, toolLogos } from '../assets/index';
import TechBox from './TechBox';


const Tech = () => {
  return (
    <div className='tech' id='tech'>
      <h1 className='section-title'>Tech I Work With</h1>
      <div className='tech-boxes'>
        <TechBox images={languageLogos} title='Langugages' />
        <TechBox images={frontEndLogos} title='Front End' />
        <TechBox images={backEndLogos} title='Back End' />
        <TechBox images={toolLogos} title='Tools' />
      </div>
    </div>
  );
};

export default Tech;