const DEBUG = false;

const debug = function debug(value) {
  // Check for types and then do logging and stuff based on types.
  if (DEBUG) {
    console.log(value);
  }
};

export default debug;
