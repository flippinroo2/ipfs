import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DEBUG = false;

const NavItem = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  const { link, text } = props;

  return (
    <li role="presentation">
      <Link to={`/${link}`}>{text}</Link>
    </li>
  );
};

// NavItem.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// NavItem.defaultProps = {
//   array: [''],
// };

export default NavItem;
