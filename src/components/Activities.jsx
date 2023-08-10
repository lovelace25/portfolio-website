import React from 'react'
import Box from '@mui/material/Box';
import { styled, Paper } from '@mui/material';
import  './css/activity.css';
import activity from '../assets/images/activity-sample-pic.png';
import activity2 from '../assets/images/activity-2.png';
import ActivityLIst from './activity-components/ActivityLIst';
import ActivityNavIcons from './activity-components/ActivityNavIcons';
import { useState } from 'react';

const TitleBar = styled(Box)(({ theme }) => ({
    position: "relative",
    textAlign: "center",
    padding: "20px",
    overflowY: "hidden",
    fontFamily: "Nova Round",
    backgroundColor: theme.palette.primary.main,
}));

const Title = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    border: "none",
    fontFamily: "Nova Round",
    boxShadow: "none",
    letterSpacing: "2px",
    fontSize: "18px",
    padding: theme.spacing(1),
    textAlign: 'center',
    cursor: 'default',
    color: theme.palette.primary.light,
}));

const ContentBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "50px",
    alignItems: "center",
    paddingBottom: "100px",
    overflowY: "hidden",
    backgroundColor: theme.palette.otherColor.bodyBackground,
}));

const Activities = () => {
    const [activities, setActivites] = useState([
        { 
            activityTitle: 'Activity 1', 
            activityContent: 'lorem orem ipsum dolor sit amet, consectetur adipisicing elit. Autem est labore quae nemo ipsa illum, esse distinctio, dolorum temporibus itaque doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas',
            activityImage:activity,
        },
        { 
            activityTitle: 'Activity 2', 
            activityContent: 'lorem orem ipsum dolor sit amet,  doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas',
            activityImage:activity2,
        },
        { 
            activityTitle: 'Activity 3', 
            activityContent: 'st labore quae nemo ipsa illum, esse distinctio, dolorum temporibus itaque doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas',
            activityImage:activity,
        },
        { 
            activityTitle: 'Activity 4', 
            activityContent: 'lorem orem ipsum dolor sit amet, consectetur adipisicing elit. Autem est labore quae nemo ipsa illum, esse distinctio, dolorum temporibus itaque doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas',
            activityImage:activity2,
        },
        { 
            activityTitle: 'Activity 5', 
            activityContent: 'lorem orem ipsum dolor sit amet, consectetur adipisicing elit. Autem est labore quae nemo ipsa illum, esse distinctio, dolorum temporibus itaque doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas',
            activityImage:activity,
        },
    ]);

    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

    const [slideMarginLeft, setSlideMarginLeft] = useState(-255);
    const [titleYMargin, setTitleYMargin] = useState(0);
    const [loading, setLoading] = useState(false);

    function activityNext() {
        if(currentActivityIndex != (activities.length - 1) && !loading){
            setLoading(true);
            setSlideMarginLeft(slideMarginLeft + -270);
            setTitleYMargin(titleYMargin + -48);
            triggerActivityChangeEffect();
            setTimeout(()=>{
                setCurrentActivityIndex(currentActivityIndex + 1);
                setLoading(false);
            }, 300)

        }
    }

    function triggerActivityChangeEffect() {
        document.getElementById('activityCurtain').style.backgroundColor = "rgba(0, 0, 0, 0.50)";
        setTimeout(()=>{
            document.getElementById('activityCurtain').style.backgroundColor = "transparent";
        }, 300)
        document.getElementById('activityContent').style.color = "transparent";
        setTimeout(()=>{
            document.getElementById('activityContent').style.color = "var(--primary-light)";
        }, 300)
    }

    function activityPrev() {
        if(currentActivityIndex != 0 && !loading){
            setLoading(true);
            let newSlideMarginLeft = slideMarginLeft - -270;
            setSlideMarginLeft(newSlideMarginLeft)
            setTitleYMargin(titleYMargin + 48)
            triggerActivityChangeEffect();
            setTimeout(()=>{
                setCurrentActivityIndex(currentActivityIndex - 1);
                setLoading(false);
            }, 300)
            
        }
    }

    const TitleItems = activities.map((activity, index) =>
        <span style={{marginTop: index == 0 ? titleYMargin + 'px' : 0}}>{activity.activityTitle}</span>
    );

    return (
        <>
            <TitleBar>
                <Title>LATEST ACTIVITIES</Title>
            </TitleBar>
            <ContentBox>
                <ActivityNavIcons activityNext={activityNext} activityPrev={activityPrev}/>
                <div className='active-activity'>
                    <div className='activity-title'>
                        { TitleItems }
                    </div>
                    <div className='activity-content'>
                        <p id='activityContent' >{activities[currentActivityIndex].activityContent}</p>
                    </div>
                </div>
                <div className='active-activity-pic'>
                    <div id="activityCurtain" className='curtain-change'></div>
                    <img src={activities[currentActivityIndex].activityImage}/>
                </div>
                <div className='activity-nav'>
                    <ActivityLIst activities={activities} slideMarginLeft={slideMarginLeft}/>
                </div>
            </ContentBox>
        </>
    )
}

export default Activities