import React, { Component } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class AudioRecoder extends Component {

    state = {
        isRecording: false,
        blobURL: '',
        isBlocked: false,
    }

    start = () => {
        navigator.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted');
                this.setState({ isBlocked: false });
            },
            () => {
                console.log('Permission Denied');
                this.setState({ isBlocked: true })
            },
        );


        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
            .start()
            .then(() => {
                this.setState({ isRecording: true });
            }).catch((e) => console.error(e));
        }
    };

    stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const the_blob = URL.createObjectURL(blob)
                this.setState({ blobURL:the_blob, isRecording: false });
            })
            .catch((e) => console.log(e));
    };
    
    render() {
        return (
            <>
                <AudioPlayer
                    src={this.state.blobURL}
                    onPlay={e => console.log("onPlay")}
                />

                <button onClick={this.start}> Start </button>
                <button onClick={this.stop}> Stop </button>
            </>
        )
    }
}

export default AudioRecoder
