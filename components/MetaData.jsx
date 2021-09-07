import { ant, bootstrap, devExtreme, webix } from '../styles/libraries.js';
import useStyle from '../hooks/useStyle.jsx';
import useScript from '../hooks/useScript.jsx';

const DEBUG = false;

// const styles = [bootstrapStyle, webixStyle, ...devExtremeStyles];
// const scripts = [bootstrapScript, webixScript, ...devExtremeScripts];

const styles = bootstrap.styles;
const scripts = bootstrap.scripts;

const MetaData = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  styles.forEach((url) => {
    useStyle(url);
  });

  scripts.forEach((url) => {
    useScript(url);
  });

  return null;
};

// MetaData.propTypes = {
//   styles: PropTypes.arrayOf(PropTypes.string).isRequired,
//   scripts: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// MetaData.defaultProps = {
//   styles: [''],
//   scripts: ['']
// };

export default MetaData;
