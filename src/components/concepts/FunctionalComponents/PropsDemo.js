import { useState } from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [ color, setColor ] = useState('white');
    const [backgroundColor, setBackGroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackGroundColor('black') : setBackGroundColor('purple');
    }

    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('15px') : setBorderRadius('5px');
    }

    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }

    return (
      <div className="main">
        <div className="mainDiv">
          <div style={styles}>
            <FunctionalComponent
              string="will this display?"
              function={toggleColor} selectedStyle={color}
            />
            <FunctionalComponent
              string="second string"
              function={toggleBackgroundColor} selectedStyle={backgroundColor}
            />
            <FunctionalComponent string="third string" function={toggleBorderRadius}
             selectedStyle={borderRadius}
             />
            <FunctionalComponent
              string="fourth string"
              function={toggleBorderStyle}selectedStyle={borderStyle}
            />
          </div>
        </div>
      </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    );
};

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current styel is: {props.selectedStyle}</p>
        </div>
    );
};

FunctionalComponent.defaultProps = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
};