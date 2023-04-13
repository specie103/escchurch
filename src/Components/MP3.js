import React, { useState, useRef } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { BsPlay, BsPause, BsSkipStart, BsSkipEnd } from 'react-icons/bs';
import AnthemMusic from '../Audios/Anthem.mp3';

const Mp3Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSkip = (time) => {
    audioRef.current.currentTime += time;
    setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="mp3-player">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      >
        <source
          src = {AnthemMusic}
          type="audio/mp3"
        />
      </audio>
      <div className="controls">
        <Button variant="outline-light" onClick={() => handleSkip(-10)}>
          <BsSkipStart />
        </Button>
        <Button variant="outline-light" onClick={togglePlay}>
          {isPlaying ? <BsPause /> : <BsPlay />}
        </Button>
        <Button variant="outline-light" onClick={() => handleSkip(10)}>
          <BsSkipEnd />
        </Button>
      </div>
      <div className="progress">
        <ProgressBar
          now={(currentTime / duration) * 100 || 0}
          label={`${formatTime(currentTime)} / ${formatTime(duration)}`}
          onClick={handleSeek}
        />
      </div>
    </div>
  );
};

export default Mp3Player;
