import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Fade } from "react-awesome-reveal";
import { Timeline, Tween } from 'react-gsap';

const ChattingText = (props) => {
    const [ show , setShow ] = useState(false);
    const [ opacityAnim , setOpacityAnim ] = useState({ opacity: 1 });
    const [ leftAnim , setLeftAnim ] = useState({  scale:1 });

    const showFun = () =>{
        setShow(!show)
    }

    const hideFun = () =>{
        setShow(false)
    }

    const scrollInterval = () =>{
        !props.audio ?  props.reply_val(props.the_text) : props.reply_val("audio")
        
    }

    const remove = (e) =>{
        
        // setOpacityAnim({  opacity: 0 })
        setLeftAnim({
            x: props.textTo === "you" ? '-200px' : '200px' ,
            scale: 0.8,
            ease: "slow(0.7, 0.7, false)"
        })
        setShow(false)

        setTimeout(() => {
            setOpacityAnim({  opacity: 1 })
            setLeftAnim({
                x: '0px' ,
                scale: 1
            })
        }, 100);

        props.removeItem(props.id)
        
    }

    return (
        <Fade className={props.id}>
            <div className="single-text-field" type={props.textTo} onMouseLeave={hideFun}>

                {
                    props.textTo === "you" &&
                    <Timeline target={
                        <Avatar alt="Remy Sharp" 
                            src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg" 
                        />
                        }>
                        <Tween to={opacityAnim} duration={.2}/>
                    </Timeline>
                }
                
                <Timeline target= {
                    <div className="text-info">
                        
                        <div className="the-message" type={props.audio ? "audio" : "text"}>
                            { !props.audio ?
                                <p> {props.the_text} </p>
                                :
                                <audio controls>
                                    <source src={props.audio} type="audio/mpeg"/>
                                </audio>
                            }
                            
                            <MoreVertIcon 
                                onClick={showFun}
                                className="option-icon"
                            />

                            {
                                show && 
                                    <ul className="text-option-list">
                                        <Button onClick={remove}> Remove </Button>
                                        <Button onClick={scrollInterval}> Reply </Button>
                                    </ul>
                            }
                            
                        </div>
                        
                        <span className="the-message-sent"> 10:20 am - 22 Jan, 2021 </span>
                    </div> 
                    }>
                    
                    <Tween to={leftAnim} duration={.2}/>
                    <Tween to={opacityAnim} duration={.2}/>
                </Timeline>
                
            </div>
        </Fade>
        
    )
}

export default ChattingText
