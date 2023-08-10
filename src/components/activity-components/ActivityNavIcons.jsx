import React from 'react'
import { IconButton } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const ActivityNavIcons = ({activityNext, activityPrev}) => {
  return (
    <div className='activity-nav-icons '>
    
        <div className='justify-item-start' onClick={activityPrev} style={{ cursor:'w-resize' }}>
            <IconButton onClick={activityPrev}>
                <ArrowBackRoundedIcon sx={{ fontSize: "32px" }} />
            </IconButton>
        </div>
        <div  className='justify-item-end' onClick={activityNext} style={{ cursor:'e-resize' }}>
            <IconButton onClick={activityNext}>
                <ArrowForwardRoundedIcon sx={{ fontSize: "32px" }}/>
            </IconButton>
        </div>
    </div>
  )
}

export default ActivityNavIcons