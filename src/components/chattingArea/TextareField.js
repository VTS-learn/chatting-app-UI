import React , {useState} from 'react';
import MicNoneIcon from '@material-ui/icons/MicNone';
import SendIcon from '@material-ui/icons/Send';
import TextareaAutosize from 'react-textarea-autosize';
import '../../static/css/chat_textarea.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AudioRecoder from './AudioRecoder'
import AudiotrackTwoToneIcon from '@material-ui/icons/AudiotrackTwoTone';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {specefic_reply} from '../../store/actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



const TextareField = (props) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [ message , setMassage ] = useState('');

    const dispatch = useDispatch();

    const messageVal = (e) =>{
      setMassage(e.target.value)
    }
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const send_message = () =>{
      message.trim() !== "" && props.text_tran(message)
      setMassage('')
      dispatch(specefic_reply(false))
    }

    const remove_reply = () => {
      props.reply_val_fc(null)
      dispatch(specefic_reply(false))
    }


    return (
        <div className="chat_text_area">

          {
            props.reply_val && 
            <Box display="flex" alignSelf="flex-start" justifyContent="space-between">
              <p className="reply-text"> { props.reply_val === "audio" ? <> <AudiotrackTwoToneIcon/> audio clip ! </> : props.reply_val } </p>
              <Button 
                variant="outlined" 
                color="primary" 
                className="reply-remove" 
                onClick={remove_reply}
                >
                <CloseIcon/>
              </Button>
            </Box>
          }
            

            <div className="chat_text_box">
              <TextareaAutosize placeholder="Type you messages ..." value={message} onChange={messageVal}/>
              <span onClick={handleOpen}>
                  <MicNoneIcon/>
              </span>
              <SendIcon onClick={send_message}/>
            </div>

            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                      <AudioRecoder/>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default TextareField
