import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import 'react-h5-audio-player/lib/styles.css';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import RecordingIcon from '../../static/img/recording.gif';
import RecorderStaticIcon from '../../static/img/recoding static.jpg';
import AudioPlayer from 'material-ui-audio-player';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const AudioRecoder = (props) =>{

    const [ isRecording , setIsRecording ] = useState(false);
    const [ blobURL , setBlobURL ] = useState('');
    const [ isBlocked , setIsBlocked ] = useState(false);

    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    
    

    const start = () => {
        setBlobURL('')
        navigator.getUserMedia({ audio: true },
            () => {
                setIsBlocked(false)
            },
            () => {
                setIsBlocked(true)
            },
        );


        if (!isBlocked) {
            Mp3Recorder
            .start()
            .then(() => {
                setIsRecording(true)
            }).catch((e) => console.error(e));
        }else{
            stop_with_empty_recoding()
        }
    };

    const stop_recording = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const the_blob = URL.createObjectURL(blob)
                setBlobURL(the_blob)
                setIsRecording(false)
            })
            .catch((e) => console.log(e));
    };

    const send = () =>{
        props.send_mess(false , blobURL)
        setBlobURL('')
        props.modalClose()
    }

    const stop_with_empty_recoding = () =>{
        Mp3Recorder
            .stop()
        
        setBlobURL('')
        setIsRecording(false)

        props.modalClose()
    }

    return (
        <ClickAwayListener onClickAway={stop_with_empty_recoding}>
            <div className="voice-recoder-modal">
                {
                    blobURL &&
                    <div className="recoder-audio-player">
                        <AudioPlayer
                            src={blobURL}
                            volume={ viewportWidth < 1024 ? false : true }
                            order="standart"
                        />
                    </div>
                }

                {
                    !blobURL &&
                    <img className="recording-icon" src= { isRecording ? RecordingIcon : RecorderStaticIcon} alt="recoding ..." />
                }

                
                
                <div className="recording-buttons-area">
                    {
                        !isRecording &&
                        <Button 
                            variant="contained" 
                            onClick={start}
                        > 
                            Start 
                        </Button>
                    }
                    
                    {
                        isRecording &&
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={stop_recording}
                        > 
                                Stop 
                        </Button>
                    }

                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={stop_with_empty_recoding}
                    > 
                        Cancel 
                    </Button>
                    
                    {
                        blobURL &&
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon/>}
                            onClick={send}
                        >
                            Send
                        </Button>
                    }

                    
                </div>
            </div>
        </ClickAwayListener>
    )

}

export default AudioRecoder;