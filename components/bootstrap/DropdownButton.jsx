import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert.jsx';

const DEBUG = false;

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.functionList = React.createRef();
    const stateObject = {
      buttonText: 'N/A',
      functionData: [],
      functions: {},
    };
    this.state = stateObject;
    this.selectFunction = this.selectFunction.bind(this);
    this.interactWithContract = this.interactWithContract.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { functions, returnValueFunction } = props;
    var functionData = [],
      functionArguments;
    if (functions) {
      // functionText = Object.keys(functions).filter((item) => {
      //   if (item.startsWith('_')) {
      //     if (!item.endsWith(')')) {
      //       return null;
      //     }
      //     return item;
      //   }
      //   if (item.startsWith('0x') || item.endsWith('()')) {
      //     return null;
      //   }
      //   if (!item.endsWith(')')) {
      //     return null;
      //   }
      //   return item;
      // });
      functionData = Object.keys(functions).reduce(
        (results, item, index, state) => {
          if (item.startsWith('0x') || item.endsWith('()')) {
            return results;
          }
          const [name, args] = item.split('(');
          if (args) {
            [functionArguments] = args.split(')');
            results.push([name, functionArguments]);
            return results;
          }
          return results;
        },
        [],
      );
    }
    // console.log('functionData');
    // console.log(functionData);
    return { functions, functionData, returnValueFunction };
  }

  componentDidMount() {
    // console.log(this.functionList.current.children);
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  selectFunction(event) {
    const { target, nativeEvent, type } = event;
    // console.log(event);
    // const { path } = nativeEvent;
    // console.log(nativeEvent);
    const {
      attributes,
      children,
      classList,
      className,
      innerHTML,
      innerText,
      parentElement,
      style,
      value,
      view,
    } = target;
    this.setState({ buttonText: innerText });
  }

  async interactWithContract(event) {
    // console.log(this.state);
    let { functions, functionData } = this.state;
    // console.log(functions);
    const { path, target } = event;
    const { innerText } = target;
    // functionData.filter((item) => {
    //   // Have to loop through "functionData" to check for the proper function.
    //   let [functionName, functionArguments] = item;
    //   if (functionName == innerText.split('(')[0]) {
    //     return true;
    //   }
    // });
    const [inputGroup] = path.filter((item) => {
      const { classList } = item;
      if (classList && classList.contains('input-group')) {
        return true;
      }
    });
    let { value } = inputGroup.firstChild;
    if (innerText == 'N/A') {
      return null;
    }
    let functionResult;
    let test;
    if (!value) {
      test = await functions[innerText]();
      functionResult = await functions[innerText]().call();
    } else {
      test = await functions[innerText](value);
      functionResult = await functions[innerText](value).call();
    }
    // console.log(functionResult);
    // console.log(test); // 0xeB5c8FB7d97bF7084ABdD77CCaF7dB5BeAAB08fA
    this.props.returnValueFunction(
      functionData,
      innerText,
      value,
      functionResult,
    );
  }

  render() {
    const { buttonText, functions, functionData } = this.state;
    // Try combining both the hidden & unhidden buttons.
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={async () => {
            try {
              await this.interactWithContract(event);
            } catch (e) {
              console.log(e);
              return <Alert errorText={e} />;
            }
          }}>
          {buttonText}
        </button>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul
          className="dropdown-menu"
          data-popper-placement="bottom-start"
          ref={this.functionList}>
          {functionData.length ? (
            functionData.map((item, index) => {
              const [functionName, functionArguments] = item;
              return (
                <li key={index}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={this.selectFunction}>
                    {`${functionName}(${functionArguments})`}
                  </a>
                </li>
              );
            })
          ) : (
            <li
              className="dropdown-item"
              href="#"
              onClick={this.selectFunction}>
              N/A
            </li>
          )}
        </ul>
      </div>
    );
  }
}

// DropdownButton.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// DropdownButton.defaultProps = {
//   array: [''],
// };

export default DropdownButton;
