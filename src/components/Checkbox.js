import * as React from 'react';

const Checkbox = ({isChecked, onChange}) => {
    const [checked, setChecked] = React.useState(isChecked);

    const handleEvent = (event) => {
        setChecked(!checked);
        onChange(!checked);
    }

    return (
        <div className='gs__checkbox__container'>
            <div
                className='gs__checkbox__styled'
                onClick={handleEvent}
                role="checkbox"
                tabIndex="0"
                aria-checked={checked}
            >
                <div className='gs__checkbox__container__shadow' />
                {checked && (
                    <svg className='gs__checkbox__styled__svg' viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </div>
        </div>
    )
}

export default Checkbox;
