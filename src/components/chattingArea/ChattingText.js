import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Fade } from "react-awesome-reveal";

const ChattingText = (props) => {
    const [ show , setShow ] = useState(false)

    const showFun = () =>{
        setShow(!show)
    }

    const hideFun = () =>{
        setShow(false)
    }

    const scrollInterval = () =>{
        !props.audio ?  props.reply_val(props.the_text) : props.reply_val("audio")
        
    }

    const remove = () =>{
        console.log("hi")
    }

    return (
        <Fade>
            <div className="single-text-field" type={props.textTo} onMouseLeave={hideFun}>

                {
                    props.textTo === "you" &&
                        <Avatar alt="Remy Sharp" 
                            src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg" 
                        />
                }
                
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
                
            </div>
        </Fade>
        
    )
}

export default ChattingText
