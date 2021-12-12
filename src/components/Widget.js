import * as React from 'react';
import Logo from './Logo';
import Tooltip from './Tooltip';
import Checkbox from './Checkbox';
import ToggleSwitch from './ToggleSwitch';
import ColourPicker from './ColourPicker';
import classNames from 'classnames';

import './styles.scss'

const Widget = ({typeVerb, product, colour = 'blue', isLinkPublicProfile, isActive = false}) => {
    const [linkPublicProfile, setLinkPublicProfile] = React.useState(!!isLinkPublicProfile);
    const onSetPublicProfileChange = (newValue) => {
        setLinkPublicProfile(newValue);
    }

    const [badgeColour, setBadgeColour] = React.useState(!!colour);
    const onBadgeColourChange = (newValue) => {
        setBadgeColour(newValue);
        setBadgeColourClassName(`gs__widget-${newValue}`);
    }
    const [badgeColourClassName, setBadgeColourClassName] = React.useState(`gs__widget-${colour}`);
    React.useEffect(() => {
        setBadgeColourClassName(`gs__widget-${colour}`);
        setBadgeColour(colour);
    }, [colour]);

    const [isActiveBadge, setIsActiveBadge] = React.useState(isActive);
    const onActiveChange = (newValue) => {
        setIsActiveBadge(newValue);
    };
    const tootltipText = 'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.';
    return (
        <div className='gs__container'>
            <div className={classNames("gs__widget", badgeColourClassName)}>
                <Logo colour={badgeColour} />
                <div className='gs__widget__container'>
                    <p className='gs__widget__container__text-title'>This product {typeVerb}</p>
                    <p className='gs__widget__container__text'>{product?.amount + ' ' + product?.type}</p>
                </div>
            </div>
            <div className='gs__items'>
                <div className='gs__item'>
                    <div className='gs__items__tooltip'>
                        <p>Link to Public profile</p>
                        <Tooltip tooltipLink='https://www.getgreenspark.com/' tooltipLinkText="View Public Profile" tooltipText={tootltipText}/>
                    </div>
                    <Checkbox isChecked={linkPublicProfile} onChange={onSetPublicProfileChange}/>
                </div>
                <div className='gs__item'>
                    <p>Badge colour</p>
                    <ColourPicker colour={badgeColour} onChange={onBadgeColourChange} />
                </div>
                <div className='gs__item'>
                    <p>Activate badge</p>
                    <ToggleSwitch id={product?.id} value={isActiveBadge} onChange={onActiveChange} />
                </div>
            </div>
        </div>
    )
}

export default Widget;