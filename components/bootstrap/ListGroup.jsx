import PropTypes from 'prop-types';

const DEBUG = false;

const ListGroup = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <div className="list-group">
      <a href="#" className="list-group-item active">
        <h4 className="list-group-item-heading">HEADING 1</h4>
        <p className="list-group-item-text">LOREM IPSUM 1</p>
      </a>
      <a href="#" className="list-group-item">
        <h4 className="list-group-item-heading">HEADING 2</h4>
        <p className="list-group-item-text">LOREM IPSUM 2</p>
      </a>
    </div>
  );
};

// ListGroup.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// ListGroup.defaultProps = {
//   array: [''],
// };

export default ListGroup;
