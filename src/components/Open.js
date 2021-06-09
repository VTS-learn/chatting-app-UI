import React from 'react';
import { Timeline, Tween } from 'react-gsap';

function Open(props) {
    return (
        <Timeline 
            target={
                <div className="_open"></div>
            }
        >
            <Tween from={{ width:'100%' }} to={{ width:'0%' , border: "none" }} duration={props.due}/>
        </Timeline>
    )
}

export default Open
