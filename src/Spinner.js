import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};
// setting default value for component props
Spinner.defaultProps = {
    message: 'Loading..'
}

export default Spinner;