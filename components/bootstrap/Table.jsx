import PropTypes from 'prop-types';

const DEBUG = false;

const Table = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Item 1</td>
          <td>Item 2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Item 1</td>
          <td>Item 2</td>
        </tr>
      </tbody>
    </table>
  );
};

// Table.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Table.defaultProps = {
//   array: [''],
// };

export default Table;
