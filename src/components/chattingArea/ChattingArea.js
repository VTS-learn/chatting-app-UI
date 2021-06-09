import React ,{useState} from 'react';
import ChatAreaHeader from './ChatAreaHeader';
import ChattingText from './ChattingText';
import TextareField from './TextareField';
import '../../static/css/chattingArea.css';
import '../../static/css/chating-text-area.css';
import audio from '../../static/audio/abdullah-ali-jabir-studio-surah-001.mp3';
import { useSelector } from 'react-redux';
import { Tween } from 'react-gsap';
import ScrollToBottom from 'react-scroll-to-bottom';

const ChattingArea = () => {
    const [ messageArray ,setMessageArray ] = useState(text_array)
    const [ reply , setReply ] = useState(null);
    const [ replyType , setReplyType ] = useState(null)
    const reply_dedicated = useSelector( state => state.specefic_reply_reduce )

    const sending_text = (the_text = '' , the_audio = '' ) =>{
        setMessageArray([
            ...messageArray,
            {
                id : Math.floor(Math.random()*9900),
                text_To: "me",
                the_text : the_text,
                audio : the_audio,
                is_reply : reply_dedicated,
                the_reply_text : replyType === "text" && reply,
                the_reply_audio : replyType === "audio" && reply,

                // for animation
                scaleText : 1 ,
                moveText : 0 ,
                duration : 0
            }
        ])

        setReply(false)
        setReplyType(null)
    }

    const reply_val = (e , type) =>{
        setReply(e)
        setReplyType(type)
    }

    const removeItem = (id) => {

        const messageArrayitems = messageArray.filter(item => item.id !== id);

        setTimeout(() => {
            setMessageArray(messageArrayitems)
        }, 600);

        setMessageArray(messageArray => {
            const newRows = [...messageArray];
            const row = newRows.find(messageArray => messageArray.id === id);
            row.scaleText = 0.9
            row.moveText = 40
            row.duration = .2
        
            return newRows
        });

    }


    return (
        <div className="chattingArea">
            <ChatAreaHeader/>

            <ScrollToBottom className="chatting-text-area">
                <div className="chatting-text-wrapper">
                {
                    messageArray.map((item,index) => {
                        return  <div key={index} >
                                <Tween from={{ scale : 0.94 }}>
                                    <div>
                                        <ChattingText 
                                            // functions
                                            removeItem={removeItem}
                                            reply_val={reply_val}

                                            // data info
                                            id={item.id}
                                            textTo={item.text_To}
                                            audio={item.audio}
                                            is_reply={item.is_reply}
                                            the_text={item.the_text}
                                            the_reply_text={item.the_reply_text}
                                            the_reply_audio={item.the_reply_audio}

                                            // for animation
                                            scaleText={item.scaleText}
                                            moveText={item.moveText}
                                            duration={item.duration}
                                        />
                                    </div>
                                </Tween>
                                </div>
                    })
                }
                </div>
            </ScrollToBottom>

            <TextareField 
                text_tran={sending_text}
                reply_val={reply}
                replyType={replyType}
                reply_val_fc={reply_val}
            />
        </div>
    )
}

export default ChattingArea;


const text_array = [
    {
        id:322,
        text_To: "me",
        the_text: "Hello, my name is Robin. Welcome to our university.",
        audio : "",
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:212,
        text_To: "you",
        the_text: "Hi, I am Remy Sharp",
        audio : "",
        is_reply : false,
        the_reply_text : "",
    },
    {
        id:322,
        text_To: "me",
        the_text: "Nice to meet you.",
        audio : "",
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:265,
        text_To: "you",
        the_text: "Nice to meet you too",
        audio : "",
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:272,
        text_To: "you",
        the_text: "",
        audio : audio,
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:312,
        text_To: "me",
        the_text: "Where are you from ?",
        audio : "",
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:111,
        text_To: "me",
        the_text: "",
        audio : audio,
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:333,
        text_To: "you",
        the_text: "I am from Nicaragua, how about you?",
        audio : "",
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:333,
        text_To: "me",
        the_text: " I'm from France.",
        audio : "",
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:333,
        text_To: "you",
        the_text: " Is this your first time in London?",
        audio : "",
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:333,
        text_To: "me",
        the_text: "No, I have been living in London for about three years now.",
        audio : "",
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:333,
        text_To: "you",
        the_text: "I see, have you been studying here for all that time?",
        audio : "",
        is_reply : false,
        the_reply_text : ""
    }
]