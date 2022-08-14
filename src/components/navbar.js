import React, { useState, useEffect, useReducer } from 'react'
import Button from '@mui/material/Button';
import ReactPlayer from "react-player"

import * as FaIcons from "react-icons/fa"
import { Link } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import BoltIcon from '@mui/icons-material/Bolt';
import AirIcon from '@mui/icons-material/Air';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import OpacityIcon from '@mui/icons-material/Opacity';
import LogoutIcon from '@mui/icons-material/Logout';
import UploadIcon from '@mui/icons-material/Upload';

import './navbar.css';

function Navbar({cricketNoise, setCricketNoise, thunderNoise, setThunderNoise, windNoise, setWindNoise, cloudNoise, setCloudNoise, waveNoise, setWaveNoise, rainNoise, setRainNoise, timer, setTimer}) {
    const [sidebar, setSidebar] = useState(false);
    const [sidebarIcons, setSidebarIcons] = useState(false);
    const [video, setVideo] = useState();
    const [timerActive, setTimerActive] = useState(false);

    let activeButton = "#044553"
    let inactiveButton = "rgba(30, 40, 97, 0.3)"

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    const showSidebarIcons = () => {
        setTimeout(() => {
            setSidebarIcons(true)
        }, 500);
    }

    const handleVideoChange = (event) => {
        setVideo(event.target.value);
    }

    const handleVideoSubmit = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if (timerActive) {
                setTimer(timer => timer + 1);
                console.log(timer)
            }
        }, 1000)
        return () => clearInterval(interval);
    }, [timerActive, timer])

  return (
    <>
    <div className="navbar">
        <div className={sidebar ? "nav-menu" : "sideButton"} style={{marginLeft: 5, marginTop: 5}}>
            <Link to="#" className="menu-bars">
                <IconButton size="large" onClick={ () => {
                    showSidebar();
                    showSidebarIcons();
                }}>
                    <DehazeIcon className="musicIcons"/>
                </IconButton>
            </Link>
        </div>
        <h2 className="title">Melodic</h2>
        <nav className={sidebar ? 'navbar-open' : 'nav-menu'}>
            <Link to="#" className="menu-bars" style={{marginLeft: 5}}>
                <IconButton className="exit-sidebar" size="large" onClick={() => {
                    showSidebar();
                    setSidebarIcons(false);
                    }}>
                    <ClearIcon className="musicIcons"/>
                </IconButton>
            </Link>
            {sidebarIcons ? 
            <div>
                <div>
                    <Button className="timerButton" variant="contained" style={{backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px", width: "100%"}} onClick={ () => {
                        setTimerActive(true)}
                    }>
                        START STUDY
                    </Button>
                    <Button className="timerButton" variant="contained" style={{backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px", width: "100%"}} onClick={ () => {
                        setTimerActive(false)}
                    }>
                        END STUDY
                    </Button>
                </div>
                <p style={{marginLeft: "5px", color: "white", fontSize: "15px", fontWeight: "bold"}}>Music</p>
                <div className="music-icons">
                    <Button className="musicButton" variant="contained" style={cricketNoise.isPlaying ? {backgroundColor: "#044553", margin: "2px"} : {backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px"}} onClick={ () => {
                        setCricketNoise({isPlaying: !cricketNoise.isPlaying})}
                    }>
                        <EmojiNatureIcon className="musicIcons"/>
                    </Button>
                    <Button className="musicButton" variant="contained" style={thunderNoise.isPlaying ? {backgroundColor: "#044553", margin: "2px"} : {backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px"}} onClick={ () => {
                        setThunderNoise({isPlaying: !thunderNoise.isPlaying})}
                    }>
                        <BoltIcon className="musicIcons"/>
                    </Button>
                    <Button className="musicButton" variant="contained" style={windNoise.isPlaying ? {backgroundColor: "#044553", margin: "2px"} : {backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px"}} onClick={ () => {
                        setWindNoise({isPlaying: !windNoise.isPlaying})}
                    }>
                        <AirIcon className="musicIcons"/>
                    </Button>
                    <Button className="musicButton" variant="contained" style={cloudNoise.isPlaying ? {backgroundColor: "#044553", margin: "2px"} : {backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px"}} onClick={ () => {
                        setCloudNoise({isPlaying: !cloudNoise.isPlaying})}
                    }>
                        <CloudQueueIcon className="musicIcons"/>
                    </Button>
                    <Button className="musicButton" variant="contained" style={waveNoise.isPlaying ? {backgroundColor: "#044553", margin: "2px"} : {backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px"}} onClick={ () => {
                        setWaveNoise({isPlaying: !waveNoise.isPlaying})}
                    }>
                        <TsunamiIcon className="musicIcons"/>
                    </Button>
                    <Button className="musicButton" variant="contained" style={rainNoise.isPlaying ? {backgroundColor: "#044553", margin: "2px"} : {backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px"}} onClick={ () => {
                        setRainNoise({isPlaying: !rainNoise.isPlaying})}
                    }>
                        <OpacityIcon className="musicIcons"/>
                    </Button>
                    {/* <Button className="musicButton" variant="contained" style={{backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px"}}>
                        <LogoutIcon className="musicIcons"/>
                    </Button>
                    <Button className="musicButton" variant="contained" style={{backgroundColor: "rgba(30, 40, 97, 0.3)", margin: "2px"}}>
                        <UploadIcon className="musicIcons"/>
                    </Button> */}
                </div>
                <p style={{marginLeft: "5px", color: "white", fontSize: "15px", fontWeight: "bold"}}>Custom Music</p>
                <div>
                    <form onSubmit={handleVideoSubmit}>
                        <TextField className="videoPlayer" onChange={handleVideoChange} id="filled-basic" label="Enter Video URL" variant="filled" style={{width: "100%"}}/>
                    </form>
                    <ReactPlayer url={video} controls={true} height="250px" width="400px"/>
                </div>
            </div> : null}
        </nav>
    </div>
    </>
  )
}

export default Navbar