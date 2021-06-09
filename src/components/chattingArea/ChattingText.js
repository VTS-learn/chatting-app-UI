import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Timeline, Tween } from 'react-gsap';
import {specefic_reply} from '../../store/actions';
import { useDispatch } from 'react-redux';
import AudioPlayer from 'material-ui-audio-player';

const ChattingText = (props) => {
    const [ show , setShow ] = useState(false);

    const dispatch = useDispatch();

    const showFun = () =>{
        setShow(!show)
    }

    const hideFun = () =>{
        setShow(false)
    }

    const specific_reply = () =>{
        
        props.the_text &&  props.reply_val(props.the_text , "text") 
        props.audio && props.reply_val(props.audio , "audio")
        dispatch(specefic_reply(true))
        
        
    }

    const remove = () =>{
        setShow(false)
        props.removeItem(props.id)
    }

    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        <>
            <div className="single-text-field" type={props.textTo} onMouseLeave={hideFun}>

                {
                    props.textTo === "you" &&
                    <Timeline target={
                        <Avatar alt="Remy Sharp" 
                            src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg" 
                        />
                        }>
                        <Tween duration={.2}/>
                    </Timeline>
                }
                
                <Timeline target= {
                    <div className="text-info">
                        { props.is_reply &&  
                            <div className="specific_reply" > 
                                {
                                    props.the_reply_text && <p>{props.the_reply_text}</p>
                                }

                                {
                                    props.the_reply_audio && <div className="audio__player">
                                                                <AudioPlayer
                                                                    volume={ viewportWidth < 1024 ? false : true }
                                                                    src={props.the_reply_audio}
                                                                    order="standart"
                                                                />
                                                            </div>
                                }
                            </div> 
                        }
                        
                        <div className="the-message" type={props.audio ? "audio" : "text"}>
                            { !props.audio ?
                                <p> {props.the_text} </p>
                                :
                                <div className="audio__player">
                                    <AudioPlayer
                                        volume={ viewportWidth < 1024 ? false : true }
                                        src={props.audio}
                                        order="standart"
                                    />
                                </div>
                            }
                            
                            <MoreVertIcon 
                                onClick={showFun}
                                className="option-icon"
                            />

                            {
                                show && 
                                    <ul className="text-option-list">
                                        <Button onClick={remove}> Remove </Button>
                                        <Button onClick={specific_reply}> Reply </Button>
                                    </ul>
                            }
                            
                        </div>
                        
                        <span className="the-message-sent"> 10:20 am - 22 Jan, 2021 </span>
                    </div> 
                    }>
                    
                    <Tween to={{ scale : props.scaleText }} duration={props.duration}  ease = "elastic.out(1, 0.3)"/>
                    <Tween to={  props.textTo === "you" ? { x: -props.moveText } : { x: props.moveText }} duration={props.duration}/>
                </Timeline>
                
            </div>
        </>
        
    )
}

export default ChattingText
