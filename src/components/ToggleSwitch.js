import * as React from 'react';

const ToggleSwitch = ({value, onChange, id}) => {
    const [on, setOn] = React.useState(value);
    const onClick = (checked) => {
        setOn(!on);
        onChange(!on);
    }

    return (
        <div className="gs__toggle-switch">
            <input
                type="checkbox"
                className="gs__toggle-switch__checkbox"
                name="toggleSwitch"
                id={`toggleSwitch${id}`}
                checked={on}
                onChange={(e) => onClick(e.target.checked)}
            />
            <label className="gs__toggle-switch__checkbox__label" htmlFor={`toggleSwitch${id}`}>
                <span className="gs__toggle-switch__inner" style={{marginLeft: on ? '0' : null}}></span>
                <span className="gs__toggle-switch__switch" style={{right: on ? '0px' : null}}></span>
            </label>
        </div>
    );
};

export default ToggleSwitch;
