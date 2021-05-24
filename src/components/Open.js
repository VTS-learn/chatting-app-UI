import React from 'react';
import { Tween } from 'react-gsap';

function Open(props) {
    return (
        <>
            <Tween from={{ width:'100%' }} to={{ width:'0%' , border: "none" }} duration={props.due}>
                <div className="_open"></div>
            </Tween>
        </>
    )
}

export default Open
