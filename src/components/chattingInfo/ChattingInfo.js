import React from 'react';
import '../../static/css/chattingInfo.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import WcIcon from '@material-ui/icons/Wc';
import CakeIcon from '@material-ui/icons/Cake';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch } from 'react-redux';
import  {responsive_ui} from '../../store/actions';
import Button from '@material-ui/core/Button';
import roundImg from '../../static/img/round'
import { Timeline, Tween , SplitWords } from 'react-gsap';

const useStyles = makeStyles((theme) =>({
    large: {
        width: theme.spacing(24),
        height: theme.spacing(24),
    },
}))

const ChattingInfo = () => {

    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const dispatch = useDispatch();
    const classes = useStyles();

    const hide_user_details = () => {
        dispatch(responsive_ui(false))
    }

    return (
        <>
            {
                viewportWidth <= 1260 && 
                <div className="chatInfo-overflow" onClick={hide_user_details}></div>
            }

            <div className="chattingInfo">
                { viewportWidth <= 1400 && 
                    <Button onClick={hide_user_details} className="back-from-user-info">
                        <ArrowBackIcon />
                    </Button>  
                }
                
                <div className="chattingInfo-img">
                    <Avatar 
                        alt="Remy Sharp" 
                        src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg" 
                        className={classes.large} 
                    />
                    <Timeline
                        target={<div className="round_img"> {roundImg} </div>}
                    >
                        <Tween to={{ rotation: 180 }} duration={10} ease="elastic.out(2, 0.5)" />
                    </Timeline>
                    
                </div>
                

                <div className="chatting-info-avatar-name">
                    <Tween
                        from={{ scale: .7, opacity : 0 }}
                        duration={1}
                        stagger={0.2}
                    >
                        <SplitWords
                        delimiter=" "
                        wrapper={<div/>}
                        >
                        Remy Sharp
                        </SplitWords>
                    </Tween>
                </div>

                <div className="personal-info">
                    <Tween
                        from={{ scale: .7, opacity : 0 }}
                        duration={1}
                        stagger={0.2}
                    >
                        <SplitWords
                        delimiter=" "
                        wrapper={<p/>}
                        >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        </SplitWords>
                    </Tween>
                </div>
                

                <div className="table-wrapper">
                    <Timeline>
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={.6}>
                            <div className="table-data-info">
                                <span> <WcIcon/> </span>
                                <p className="table-type"> Gender </p>
                                <p className="table-data"> Male </p>
                            </div>
                        </Tween>

                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={.5}>
                            <div className="table-data-info">
                                <span> <CakeIcon/> </span>
                                <p className="table-type"> Birthday </p>
                                <p className="table-data"> 2 Feb, 1994 </p>
                            </div>
                        </Tween>

                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={.4}>
                            <div className="table-data-info">
                                <span> <PhoneIphoneIcon/> </span>
                                <p className="table-type"> Mobile Num. </p>
                                <p className="table-data"> +324 324 2234 </p>
                            </div>
                        </Tween>

                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={.4}>
                            <div className="table-data-info">
                                <span> <EmailIcon/> </span>
                                <p className="table-type"> Email </p>
                                <p className="table-data"> example@email.com </p>
                            </div>
                        </Tween>

                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={.4}>
                            <div className="table-data-info">
                                <span> <PersonPinCircleIcon/> </span>
                                <p className="table-type"> Address </p>
                                <p className="table-data"> Gaibandha, Bangladesh </p>
                            </div>
                        </Tween>

                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={.4}>
                            <div className="table-data-info">
                                <span> <HomeWorkIcon/> </span>
                                <p className="table-type"> Work/Collage </p>
                                <p className="table-data"> URW Tech </p>
                            </div>
                        </Tween>
                    </Timeline>
                </div>

            </div>
        </>
    )
}

export default ChattingInfo
