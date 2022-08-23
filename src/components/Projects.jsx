import Project from './Project';

import RST from '../assets/rst.png';
import Bucket from '../assets/bucket.png';

const Projects = () => {

  const rstTitle = 'RacingSimTools - Sim Racing Telemetry';
  const rstJsx = (
    <>
      RacingSimTools, or RST, is a telemetry and data visualization tool for simulation racing video games that runs on Windows.
      <br /><br />
      The application has over 100 graphs of driver, car, and lap data that racers analyze to better there performance and compare laps of data.
      <br /><br />
      RST is compatible with multiple games across Xbox, PlayStation, and PC platforms.
      <br /><br />
      The application itself is written in C# with the WPF framework and has an accompanying website for user and subscription management.
      <br /><br />
      <a href='https://www.racingsimtools.com/' target='none'>RST Website</a>
    </>
  );

  const bucketTitle = 'Bucket - Customized Transaction Organization';
  const bucketJsx = (
    <>
      Bucket is a desktop personal finance tool that integrates with <a href='https://plaid.com/' target='none'>Plaid</a> for users to get access to transaction data.
      <br /><br />
      Users have access to all transactions in accounts they sync with for organization. They create categories (or <i>buckets</i>) that the transactions can then be put into.
      <br /><br />
      The application is built on top of the <a href='https://www.electronjs.org/' target='none'>Electron</a> framework for desktop cross-compatibility.
      <br /><br />
      The UI is built with <a href='https://reactjs.org/' target='none'>React</a>, <a href='https://redux.js.org/' target='none'>Redux</a>, and <a href='https://www.chartjs.org/' target='none'>ChartJs</a>.
    </>
  );

  return (
    <div className='projects' id='projects'>
      <h1 className='section-title'>Projects I Worked On</h1>
      <Project title={rstTitle} description={rstJsx} image={RST} />
      <Project title={bucketTitle} description={bucketJsx} image={Bucket} reverse />
    </div>
  );
};

export default Projects;