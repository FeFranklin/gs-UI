import * as React from 'react';
import tooltip from '../images/tooltip.png';

const Tooltip = ({tooltipText, tooltipLink, tooltipLinkText}) => {
    return( 
        <div className='gs__tooltip'>
            <img src={tooltip} alt='tooltip icon' className='gs__tooltip__image'/>
            <div className="gs__tooltip__container">
                <p className="gs__tooltip__text">{tooltipText}</p>
                <a target="_blank" rel="noreferrer" href={tooltipLink} className='gs__tooltip__text__link'>{tooltipLinkText}</a>
            </div>
        </div>
    );
};

export default Tooltip;
