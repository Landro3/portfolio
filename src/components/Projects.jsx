import Project from './Project';

import RST from '../assets/rst.png';
import Bucket from '../assets/bucket.png';

const Projects = () => {

  const rstTitle = 'RacingSimTools - Sim Racing Telemetry';
  const rstListItems = [
    'Reads telemetry data from racing video games for data analysis',
    '100+ graphs for vehicle and driver analysis',
    'Support for multiple games across gaming platforms',
    'Desktop application written in C# with the WPF framework',
    (<a href='https://www.racingsimtools.com/' target='none'>Website</a>)
  ];

  const bucketTitle = 'Bucket - Customized Transaction Organization';
  const bucketListItems = [
    'Access transaction data to sort in custom categories',
    (<>Integrates with <a href='https://plaid.com/' target='none'>Plaid</a> for transaction data</>),
    (<>Desktop application written in <a href='https://reactjs.org/' target='none'>React</a> on top of the <a href='https://www.electronjs.org/' target={'none'}>Electron</a> framework</>),
    'Built with a custom webpack development environment and packaged with electron-builder'
  ];

  return (
    <div className='projects' id='projects'>
      <h1>Some side projects I worked on</h1>
      <div className='project-images'>
        <Project title={rstTitle} listItems={rstListItems} image={RST} imageHeight={500} imageWidth={848} />
        <Project title={bucketTitle} listItems={bucketListItems} image={Bucket} imageHeight={500} imageWidth={800} />
      </div>
    </div>
  );
};

export default Projects;