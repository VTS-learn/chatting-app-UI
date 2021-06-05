import React from 'react';
import ChatList from './components/chatList/ChatList';
import ChattingArea from './components/chattingArea/ChattingArea';
import ChattingInfo from './components/chattingInfo/ChattingInfo';
import { useSelector } from 'react-redux';

const ResponsivCall = () => {

    const resp_ui_for_userDetails = useSelector( state => state.responsive_ui )
    const resp_ui_for_userList = useSelector( state => state.responsive_ui_userList )
    const resp_ui_for_chatArea = useSelector( state => state.responsive_ui_chatArea )

    return (
        <>
            { resp_ui_for_userList && <ChatList/>}
            { resp_ui_for_chatArea && <ChattingArea/>}
            { resp_ui_for_userDetails &&  <ChattingInfo/>}
        </>
    )
}

export default ResponsivCall;