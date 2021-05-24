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

const useStyles = makeStyles((theme) =>({
    large: {
        width: theme.spacing(24),
        height: theme.spacing(24),
    },
}))

const ChattingInfo = () => {

    const classes = useStyles();

    return (
        <div className="chattingInfo">
            <div className="chattingInfo-img">
                <Avatar 
                    alt="Remy Sharp" 
                    src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg" 
                    className={classes.large} 
                />
            </div>
            <h1 className="chatting-info-avatar-name"> Remy Sharp </h1>
            <p className="personal-info">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            </p>
            

            <div className="table-wrapper">
                <div className="table-data-info">
                    <span> <WcIcon/> </span>
                    <p className="table-type"> Gender </p>
                    <p className="table-data"> Male </p>
                </div>

                <div className="table-data-info">
                    <span> <CakeIcon/> </span>
                    <p className="table-type"> Birthday </p>
                    <p className="table-data"> 2 Feb, 1994 </p>
                </div>

                <div className="table-data-info">
                    <span> <PhoneIphoneIcon/> </span>
                    <p className="table-type"> Mobile Num. </p>
                    <p className="table-data"> +324 324 2234 </p>
                </div>

                <div className="table-data-info">
                    <span> <EmailIcon/> </span>
                    <p className="table-type"> Email </p>
                    <p className="table-data"> example@email.com </p>
                </div>

                <div className="table-data-info">
                    <span> <PersonPinCircleIcon/> </span>
                    <p className="table-type"> Address </p>
                    <p className="table-data"> Gaibandha, Bangladesh </p>
                </div>

                <div className="table-data-info">
                    <span> <HomeWorkIcon/> </span>
                    <p className="table-type"> Work/Collage </p>
                    <p className="table-data"> URW Tech </p>
                </div>
            </div>

            


        </div>
    )
}

export default ChattingInfo
