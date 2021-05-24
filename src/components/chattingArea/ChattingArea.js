import React ,{useRef , useState} from 'react';
import ChatAreaHeader from './ChatAreaHeader';
import ChattingText from './ChattingText';
import TextareField from './TextareField';
import '../../static/css/chattingArea.css';
import '../../static/css/chating-text-area.css';
import audio from '../../static/audio/abdullah-ali-jabir-studio-surah-001.mp3'

const ChattingArea = () => {
    const divRref = useRef(null);
    const [ messageArray ,setMessageArray ] = useState(text_array)
    const [ reply , setReply ] = useState()

    const sending_text = (the_text) =>{
        setMessageArray([
            {
                id : Math.floor(Math.random()*9900),
                text_To: "me",
                the_text: the_text,
                audio : false
            },
            ...messageArray
        ])

        setReply(false)
    }

    const reply_val = (e) =>{
        setReply(e)
    }


    return (
        <div className="chattingArea">
            <ChatAreaHeader/>

            <div className="chatting-text-area" ref={divRref}>
                {
                    messageArray.map((item,index) => {
                        return <ChattingText 
                                    key={index} 
                                    id={item.id}
                                    list={messageArray}
                                    textTo={item.text_To}
                                    audio={item.audio}
                                    the_text={item.the_text}
                                    divRef={divRref}
                                    reply_val={reply_val}
                                />
                    })
                }
            </div>

            <TextareField 
                text_tran={sending_text}
                reply_val={reply}
            />
        </div>
    )
}

export default ChattingArea;


const dummy_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type";

const text_array = [
    {
        id:212,
        text_To: "you",
        the_text: dummy_text,
        audio : false
    },
    {
        id:322,
        text_To: "me",
        the_text: dummy_text,
        audio : false
    },
    {
        id:265,
        text_To: "you",
        the_text: dummy_text,
        audio : false
    },
    {
        id:272,
        text_To: "you",
        the_text: dummy_text,
        audio : audio
    },
    {
        id:312,
        text_To: "me",
        the_text: dummy_text,
        audio : false
    },
    {
        id:111,
        text_To: "me",
        the_text: dummy_text,
        audio : audio
    },
    {
        id:333,
        text_To: "you",
        the_text: dummy_text,
        audio : false
    }
]