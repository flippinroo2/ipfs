import PropTypes from 'prop-types';

const DEBUG = false;

const Toast = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  const { functionSignature, functionArguments, functionReturn } = props;
  console.log('TEST');

  return (
    <div className="bd-example bg-dark p-5 align-items-center">
      <div
        className="toast fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true">
        <div className="toast-header">
          <svg
            className="bd-placeholder-img rounded me-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false">
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </svg>

          <strong className="me-auto">{functionSignature}</strong>
          <small className="text-muted">11 mins ago</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"></button>
        </div>
        <div className="toast-body">
          <p>
            Arguments = <small>{functionArguments}</small>
          </p>
          <p>Result = {functionReturn}</p>
        </div>
      </div>
    </div>
  );
};

// Toast.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Toast.defaultProps = {
//   array: [''],
// };

export default Toast;
