import * as React from 'react';
import classNames from 'classnames';
// 'gs__items__color gs__items__color--blue'
const ColourPicker = ({colour, onChange}) => {
    const [picker, setPicker] = React.useState(colour);
    const onClick = (colour) => {
        setPicker(colour);
        onChange(colour);
    }
    return(
        <div className='gs__items__color-picker'>
            <div 
                className={classNames(
                    'gs__items__color',
                    'gs__items__color--blue',
                    {
                        'gs__items__color--selected': picker === 'blue'
                    }
                )}
                onClick={() => onClick('blue')}
                role="button"
                tabIndex="0"
            />
            <div 
                className={classNames(
                    'gs__items__color',
                    'gs__items__color--green',
                    {
                        'gs__items__color--selected': picker === 'green'
                    }
                )}
                onClick={() => onClick('green')}
                role="button"
                tabIndex="0"
            />
            <div 
                className={classNames(
                    'gs__items__color',
                    'gs__items__color--bege',
                    {
                        'gs__items__color--selected': picker === 'bege'
                    }
                )}
                onClick={() => onClick('bege')}
                role="button"
                tabIndex="0"
            />
            <div 
                className={classNames(
                    'gs__items__color',
                    'gs__items__color--white',
                    {
                        'gs__items__color--selected': picker === 'white'
                    }
                )}
                onClick={() => onClick('white')}
                role="button"
                tabIndex="0"
            />
            <div 
                className={classNames(
                    'gs__items__color',
                    'gs__items__color--dark',
                    {
                        'gs__items__color--selected': picker === 'dark'
                    }
                )}
                onClick={() => onClick('dark')}
                role="button"
                tabIndex="0"
            />
        </div>
    )
}

export default ColourPicker;