import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import BannerContent  from './banner-components/BannerContent';
import BannerBackgroundImage from './banner-components/BannerBackgroundImage';
import './css/banner.css';
import Bars from './banner-components/Bars';


const StyledBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minWidth: "100%",
    position: "relative",
    height: "calc(100vh - 64px)",
    overflow: "hidden",
    backgroundColor: theme.palette.otherColor.bodyBackground,
}));

const Banner = () => {
    return (
        <StyledBox>
            <BannerBackgroundImage/>
            <BannerContent/>
            <Bars/>
        </StyledBox>
    )
}

export default Banner