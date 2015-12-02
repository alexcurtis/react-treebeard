'use strict';

import React from 'react';
import {VelocityComponent} from 'velocity-react';

const Loading = (props) => {
    return (
        <div style={props.style}>
            loading...
        </div>
    );
};

Loading.propTypes = {
    style: React.PropTypes.object
};

const Toggle = (props) => {
    const style = props.style;
    const height = style.height;
    const width = style.width;
    let midHeight = height * 0.5;
    let points = `0,0 0,${height} ${width},${midHeight}`;

    var inner = props.children || (
        <div style={style.base}>
            <div style={style.wrapper}>
                <svg height={height} width={width}>
                    <polygon
                        points={points}
                        style={style.arrow}
                    />
                </svg>
            </div>
        </div>
    );

    return (
        <VelocityComponent duration={props.animations.duration}
                           animation={props.animations.animation}>
            {inner}
        </VelocityComponent>
    );
};

Toggle.propTypes = {
    animations: React.PropTypes.object.isRequired,
    style: React.PropTypes.object
};

const Header = (props) => {
    const style = props.style;
    return (
        <div style={style.base}>
            <div style={style.title}>
                {props.node.name}
            </div>
        </div>
    );
};

Header.propTypes = {
    style: React.PropTypes.object,
    node: React.PropTypes.object.isRequired
};

export default {
    Loading,
    Toggle,
    Header
};
