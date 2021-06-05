import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import  {responsive_ui} from '../../store/actions';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import '../../static/css/chat-header.css';
import { responsive_ui_userList , responsive_ui_chatArea } from '../../store/actions'


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8)
      }
}));


const ChatAreaHeader = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    const viewDtails_withResponsiveUI = () => {
        dispatch(responsive_ui(true))
    }

    const mobile_list_hide_action = () =>{
        dispatch(responsive_ui_userList(true))
        dispatch(responsive_ui_chatArea(false))
    }

    return (
        <div className="chat-area-header" >
            <Box display="flex" onClick={viewDtails_withResponsiveUI}>
                <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg" className={classes.large} />
                <h1> Remy Sharp </h1>
            </Box>

            { viewportWidth <= 820 && 
                <Button className="chat-area-back-btn" onClick={mobile_list_hide_action}>
                    <ArrowBackIcon />
                </Button>  
            }
        </div>
    )
}

export default ChatAreaHeader
