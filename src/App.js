import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

// @mui/material icons
import { IconButton } from '@mui/material';
import RadioIcon from '@mui/icons-material/Radio';
import PhishingIcon from '@mui/icons-material/Phishing';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import MailIcon from '@mui/icons-material/Mail';

import Wave from "react-wavify";
import Navbar from './components/navbar';
import Modal from "./Modal";

// Import Audio
import crickets from "./static/crickets.mp3"
import thunder from "./static/thunder.mp3"
import wind from "./static/wind.mp3"
import cloud from "./static/cloud.mp3"
import waveSound from "./static/wave.mp3"
import rain from "./static/rain.mp3"

import './App.css';

function App() {
  const [wave, setWave] = useState(false);
  const [music, setMusic] = useState(true);
  const [volume, setVolume] = useState(40);
  const [slideVolume, setSlideVolume] = useState(40);
  const [moneyCount, setMoneyCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleVolumeChange = (event, newValue) => {
    setSlideVolume(newValue);
    setVolume(newValue);
    setMusic(true);
  }

  const [cricketNoise, setCricketNoise] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      audio: new Audio(crickets),
      isPlaying: false,
  });
  const [thunderNoise, setThunderNoise] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        audio: new Audio(thunder),
        isPlaying: false,
  });
  const [windNoise, setWindNoise] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        audio: new Audio(wind),
        isPlaying: false,
  });
  const [cloudNoise, setCloudNoise] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        audio: new Audio(cloud),
        isPlaying: false,
  });
  const [waveNoise, setWaveNoise] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        audio: new Audio(waveSound),
        isPlaying: false,
  });
  const [rainNoise, setRainNoise] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        audio: new Audio(rain),
        isPlaying: false,
  });

  useEffect(() => {
      let isPlaying = cricketNoise.isPlaying;
      if (isPlaying) {
          cricketNoise.audio.play();
          console.log(cricketNoise.audio.volume)
          cricketNoise.audio.volume = (volume/100);
          cricketNoise.audio.loop = true;
      } else {
          cricketNoise.audio.pause();
      }
      }, [cricketNoise.isPlaying, volume])

  useEffect(() => {
      let isPlaying = thunderNoise.isPlaying;
      if (isPlaying) {
          thunderNoise.audio.play();
          thunderNoise.audio.volume = (volume/100);
          thunderNoise.audio.loop = true;
      } else {
          thunderNoise.audio.pause();
      }
      }, [thunderNoise.isPlaying, volume])
  useEffect(() => {
      let isPlaying = windNoise.isPlaying;
      if (isPlaying) {
          windNoise.audio.play();
          windNoise.audio.volume = (volume/100);
          windNoise.audio.loop = true;
      } else {
          windNoise.audio.pause();
      }
      }, [windNoise.isPlaying, volume])
  useEffect(() => {
      let isPlaying = cloudNoise.isPlaying;
      if (isPlaying) {
          cloudNoise.audio.play();
          cloudNoise.audio.volume = (volume/100);
          cloudNoise.audio.loop = true;
      } else {
          cloudNoise.audio.pause();
      }
      }, [cloudNoise.isPlaying, volume])
  useEffect(() => {
      let isPlaying = waveNoise.isPlaying;
      if (isPlaying) {
          waveNoise.audio.play();
          waveNoise.audio.volume = (volume/100);
          waveNoise.audio.loop = true;
      } else {
          waveNoise.audio.pause();
      }
      }, [waveNoise.isPlaying, volume])
  useEffect(() => {
      let isPlaying = rainNoise.isPlaying;
      if (isPlaying) {
          rainNoise.audio.play();
          rainNoise.audio.volume = (volume/100);
          rainNoise.audio.loop = true;
      } else {
          rainNoise.audio.pause();
      }
      }, [rainNoise.isPlaying, volume])

  setTimeout(() => {
      setWave(true)
  }, 100);


  return (
    <div className="App">
      <Router>
        <Navbar 
          cricketNoise={cricketNoise}
          setCricketNoise={setCricketNoise}
          thunderNoise={thunderNoise}
          setThunderNoise={setThunderNoise}
          windNoise={windNoise}
          setWindNoise={setWindNoise}
          cloudNoise={cloudNoise}
          setCloudNoise={setCloudNoise}
          waveNoise={waveNoise}
          setWaveNoise={setWaveNoise}
          rainNoise={rainNoise}
          setRainNoise={setRainNoise}
          timer={timer}
          setTimer={setTimer}
        />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
      <div className="iconGroup">
        <div className="moneyCount">
          <h1 style={{margin: 0, paddingRight: "1vw", color: "white"}}>{new Date(timer*1000).toISOString().substr(11, 8)}</h1>
          <div style={{paddingRight: 10, paddingTop: 10}}>
            <IconButton size="large" className="iconButton" disabled>
              <PhishingIcon className="musicIcons"/>
            </IconButton>
          </div>
        </div>  
        <div style={{paddingRight: 10, paddingTop: 10}}>
          <IconButton size="large" className="iconButton" onClick={() => {
            setMusic(!music);
            {!music ? setVolume(slideVolume) : setVolume(1)}
          }}>
            {music ? 
            (<MusicNoteIcon className="musicIcons"/>)
          : (<MusicOffIcon className="musicIcons"/>)}
          </IconButton>
        </div>
        <div className="slider">
          <Stack sx={{ height: 100 }} spacing={1} direction="row" style={{float: "right"}}>
            <Slider
              aria-label="volume"
              orientation="vertical"
              // getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              defaultValue={slideVolume}
              onChange={handleVolumeChange}
            />
          </Stack>
        </div>
        <div style={{paddingRight: 10, paddingTop: 10}}>
          <IconButton size="large" className="iconButton" onClick={() => {
            setModal(!modal);
          }}>
            <MailIcon className="musicIcons"/>
          </IconButton>
        </div>
      </div>
      <div className="App-header">
        <div className="moon-1"></div>
        <div className="moon-2"></div>
      </div>
      <Wave
        className="wave-1"
        fill="#044553"
        paused={false}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.5,
          points: 10
        }}
      />

      { wave ? 
        <Wave
          className="wave-2"
          fill="#044553"
          paused={false}
          options={{
            height: 30,
            amplitude: 10,
            speed: 0.5,
            points: 10
          }}
        />
      : null }
      {modal ? <Modal setModal={setModal}/> : null}
    </div>
  );
}

export default App;
