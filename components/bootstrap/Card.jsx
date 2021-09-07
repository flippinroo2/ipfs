import PropTypes from 'prop-types';

const DEBUG = false;

const Card = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <div class="card">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
          Image cap
        </text>
      </svg>

      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Card.defaultProps = {
//   array: [''],
// };

export default Card;
