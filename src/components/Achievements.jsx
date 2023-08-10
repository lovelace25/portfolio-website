import React from 'react'
import activity from '../assets/images/activity-sample-pic.png';
import activity2 from '../assets/images/activity-2.png';
import { useState, useEffect, useLayoutEffect } from 'react';
import './css/achievement.css';



const Achievements = () => {
    const [isOnView, setIsOnView] = useState(false);
    const [achievements, setAchievements] = useState([
        {
            id:1,
            title: 'Achievement 1',
            content: 'lorem orem ipsum dolor sit amet, consectetur adipisicing elit. Autem est labore quae nemo ipsa illum, esse distinctio, dolorum temporibus itaque doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas. lorem orem ipsum dolor sit amet, consectetur adipisicing elit. Autem est labore quae nemo ipsa illum, esse distinctio, dolorum temporibus itaque doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas. lorem orem ipsum dolor sit amet, consectetur adipisicing elit. Autem est labore quae nemo ipsa illum, esse distinctio, dolorum temporibus itaque doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas',
            image: activity,
        },
        {
            id:2,
            title: 'Achievement 2',
            content: 'lorem orem ipsum dolor sit amet,  doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas',
            image: activity2,
        },
        {
            id:3,
            title: 'Achievement 3',
            content: 'st labore quae nemo ipsa illum, esse distinctio, dolorum temporibus itaque doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas',
            image: activity,
        },
        {
            id:4,
            title: 'Achievement 4',
            content: 'lorem orem ipsum dolor sit amet, consectetur adipisicing elit. Autem est labore quae nemo ipsa illum, esse distinctio, dolorum temporibus itaque doloremque. Odio quis repudiandae recusandae doloremque numquam qui sed quas',
            image: activity2,
        },
    ]);
    const [selectedAchievementIndex, setSelectedAchievementIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const navItems = achievements.map((achievement, index) =>
        <div    
            key={index} 
            className={`${isOnView ? "slow-floating" : ""} floating ${index == selectedAchievementIndex ? "achievement-active" : ""}`} 
            onClick={() => handleNavClick(index)} >
            <span>{ achievement.title }</span>
        </div>
    );

    function handleNavClick(index) {
        if(!loading){
            setLoading(true);
            triggerActivityChangeEffect();
            setTimeout(()=>{
                setSelectedAchievementIndex(index);
                setLoading(false);
            }, 100)

        }
    }

    function triggerActivityChangeEffect() {
        document.getElementById('overlay').style.backgroundColor = "rgba(0, 0, 0, 0.800)";
        document.getElementById('content').style.color = "transparent";
        document.getElementById('content-title').style.color = "transparent";
        setTimeout(()=>{
            document.getElementById('overlay').style.backgroundColor = "rgba(0, 0, 0, 0.591)";
            document.getElementById('content-title').style.color = "var(--primary-light)";
            document.getElementById('content').style.color = "var(--primary-light)";
        }, 100)
    }

    
    window.addEventListener(
        "scroll",
        () => {
            const windowScrollWithOffset = window.scrollY - 500;
            let startOfSection = document.getElementById('startOfSection');
            let endOfSection = document.getElementById('endOfSection');
            setIsOnView(false);
            setIsOnView(windowScrollWithOffset > startOfSection.getBoundingClientRect().top);
            if (windowScrollWithOffset > endOfSection.getBoundingClientRect().top + 400) {
                setIsOnView(false)
            }
        },
        false
    );


    return (
        <>
            <div className='background-image'>
                <img src={achievements[selectedAchievementIndex].image} />
            </div>
            <div className='achievement'>
                <div id="overlay" className='overlay'></div>
                <div className='bar-gradient' id='startOfSection'></div>
                <div className='achievement-navs' >
                    {navItems}
                </div>
                <div  className='content'>
                    <span id='content-title' className='title'>{achievements[selectedAchievementIndex].title}</span>
                    <div>
                        <p id='content'>{achievements[selectedAchievementIndex].content}</p>
                   </div>
                </div>
                <div className='bar-gradient-bottom' id='endOfSection'></div>
            </div>
        </>

    )
}

export default Achievements