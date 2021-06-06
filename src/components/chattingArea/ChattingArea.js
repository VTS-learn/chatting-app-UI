import React ,{useState} from 'react';
import ChatAreaHeader from './ChatAreaHeader';
import ChattingText from './ChattingText';
import TextareField from './TextareField';
import '../../static/css/chattingArea.css';
import '../../static/css/chating-text-area.css';
import audio from '../../static/audio/abdullah-ali-jabir-studio-surah-001.mp3';
import { useSelector } from 'react-redux';

const ChattingArea = () => {
    const [ messageArray ,setMessageArray ] = useState(text_array)
    const [ reply , setReply ] = useState(null);

    const reply_dedicated = useSelector( state => state.specefic_reply_reduce )

    const sending_text = (the_text , the_audio = false ) =>{
        setMessageArray([
            {
                id : Math.floor(Math.random()*9900),
                text_To: "me",
                the_text : the_text,
                audio : the_audio,
                is_reply : reply_dedicated,
                the_reply_text : reply
            },
            ...messageArray
        ])

        setReply(false)
    }

    const reply_val = (e) =>{
        setReply(e)
    }

    const removeItem = (id) => {
        const messageArrayitems = messageArray.filter(item => item.id !== id);

        setTimeout(() => {
            setMessageArray(messageArrayitems)
        }, 200);
        console.log(messageArrayitems)
    }

    const test_1 = { width: '0', height:'0'  }
    const test_2 = { width: 'auto', height:'auto'  }


    return (
        <div className="chattingArea">
            <ChatAreaHeader/>

            <div className="chatting-text-area">
                {
                    messageArray.map((item,index) => {
                        return <ChattingText 
                                    key={index} 
                                    removeItem={removeItem}
                                    reply_val={reply_val}

                                    id={item.id}
                                    textTo={item.text_To}
                                    audio={item.audio}
                                    is_reply={item.is_reply}
                                    the_text={item.the_text}
                                    the_reply_text={item.the_reply_text}

                                    test_1={test_1}
                                    test_2={test_2}
                                    
                                />
                    })
                }
            </div>

            <TextareField 
                text_tran={sending_text}
                reply_val={reply}
                reply_val_fc={reply_val}
            />
        </div>
    )
}

export default ChattingArea;


const text_array = [
    {
        id:212,
        text_To: "you",
        the_text: "I'm from Amsterdam.",
        audio : false,
        is_reply : false,
        the_reply_text : "",
    },
    {
        id:322,
        text_To: "me",
        the_text: "My name is Jane. Nice to meet you. Where are you from?",
        audio : false,
        is_reply : false,
        the_reply_text : ""
    },
    {
        id:265,
        text_To: "you",
        the_text: "My name is Remy Sharp. What's your name?",
        audio : false,
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
        the_text: "Hi!",
        audio : false,
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
        the_text: " Hello.",
        audio : false,
        is_reply : false,
        the_reply_text : ""
    }
]