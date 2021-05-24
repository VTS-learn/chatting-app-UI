import React , {useState , useEffect} from 'react';
import styled from '../../static/css/chatList.module.css';
import { Tween } from 'react-gsap';

const ChatListCard = (props) => {

    const [ days , setDays ] = useState(0)
    const [ hours , setHours ] = useState(0)
    const [ minutes , setMinutes ] = useState(0)

    const { lastTime } = props


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

    return (
        <Tween to={{x:"-60px"}}>
           <div className={styled.theCard} >
                <div className={styled.userImg}>
                    <img src={props.img} alt="user-img"/>
                </div>

                <div className={styled.userName}>
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
            </div>
        </Tween>
    )
}

export default ChatListCard
