import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8)
      }
}))



const ChatAreaHeader = () => {
    const classes = useStyles();

    return (
        <div className="chat-area-header">
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg" className={classes.large} />
            <h1> Remy Sharp </h1>
        </div>
    )
}

export default ChatAreaHeader
