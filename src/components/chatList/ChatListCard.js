import React , {useState , useEffect , useRef} from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import styled from '../../static/css/chatList.module.css';
import { Tween , Timeline } from 'react-gsap';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import {useDispatch} from 'react-redux';
import { responsive_ui_userList , responsive_ui_chatArea } from '../../store/actions'

const ChatListCard = (props) => {

    let counter = 0;

    const [ days , setDays ] = useState(0);
    const [ hours , setHours ] = useState(0);
    const [ minutes , setMinutes ] = useState(0);
    const [ ms , setMs] = useState(counter);
    const [ removeBtn , setRemoveBtn ] = useState(false)

    const { lastTime } = props;
    let timerinterval = useRef(null);
    const dispatch = useDispatch();


    useEffect(()=>{

        setInterval( ()=>{
            const last_text_time = lastTime.getTime();
            const now_time = new Date().getTime();
            const time_distance = now_time - last_text_time ;
        
            const c_days = Math.floor(time_distance / (1000 * 60 * 60 * 24));
            const c_hours = Math.floor((time_distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const c_minutes = Math.floor((time_distance % (1000 * 60 * 60)) / (1000 * 60));

            setDays(c_days);
            setHours(c_hours);
            setMinutes(c_minutes);
            
        },1000)

    },[lastTime])

    
    const timer = (start) => {
        if (start === true && counter >= 1) {
                timerinterval.current = setInterval(() => {
                setMs(counter); 
                counter += 1;
            }, [1000]);
        }
    };

    useEffect(()=>{
        if(ms > 0){

            setTimeout(()=>{
                setRemoveBtn(true)
            } , 1000)
            
        }
    },[ms])

    const pressingDown = (e) => {
        counter = 1;
        timer(true);
    };

    const notPressingDown = (e) => {
        timer(false);
        clearInterval(timerinterval.current);
    };

    const handleClick = () => {
        setMs(0);
        counter = 0;
        setRemoveBtn(false);
    };

    const handleClick_two = () =>{
        if(removeBtn){
            setMs(0);
            counter = 0;
            setRemoveBtn(false);
        }
    }


    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    const mobile_list_hide_action = () =>{
        if(viewportWidth <= 720 ){
            dispatch(responsive_ui_userList(false))
            dispatch(responsive_ui_chatArea(true))
        }
    }

    return (
        <ClickAwayListener onClickAway={handleClick}>
            <Tween 
                from={{
                    x:"-60px",
                    opacity:0
                }}
                duration={1}
                delay={props.index/3}
            >
                
                <CardActionArea 
                    color='inherit'
                    component='div'
                    onMouseDown={pressingDown}
                    onMouseLeave={notPressingDown}
                    onMouseUp={notPressingDown}
                    onTouchStart={pressingDown}
                    onTouchEnd={notPressingDown}
                    className={styled.theCard} 
                >
                    
                        <div className={styled.userImg}>
                            <Timeline 
                                target={ <img onClick={mobile_list_hide_action} src={props.img} alt="user-img"/> }>
                                <Tween from={{x:"60px"}}  delay={props.index/3}/>
                            </Timeline>
                        </div>

                        <div className={styled.userName} onClick={mobile_list_hide_action}>
                            <h1> {props.name} </h1>
                            <p> {props.text} </p>
                        </div>

                        <div className={styled.userUnread}>
                            { props.unread > 0 && 
                                <p className={styled.userUnreadNum}> {props.unread} </p> 
                            } 

                            <p className={styled.userLastSeen}> 
                                {
                                    days && days > 0 ?
                                        days + 'd' : 
                                        hours && hours > 0 ?
                                            hours + 'h' :
                                            minutes && minutes > 0 ?
                                            minutes + 'm' : 'now'
                                }
                            </p>
                        </div>

                        {
                            ms > 0 && 
                                <div className={styled.user_remove_btn}>
                                    <ClickAwayListener onClickAway={handleClick_two}>
                                    <Timeline 
                                        target={ <button>
                                                    <Tween from={{x:"10px"}} duration={.5} ease="elastic.out(1, 0.3)"/>
                                                    
                                                    <Timeline target={<DeleteForeverTwoToneIcon/>}>
                                                        <Tween to={{x:"0px"}} from={{x:"-10px"}} duration={.5} ease="elastic.out(1, 0.3)" />
                                                        <Tween to={{x:"0px"}} duration={.25}  delay={.3}/>
                                                    </Timeline>
                                                </button> }>
                                        
                                    </Timeline>
                                    </ClickAwayListener>
                                </div>
                        }
                    
                </CardActionArea>
                
            </Tween>
        </ClickAwayListener>
        
    )
}

export default ChatListCard
