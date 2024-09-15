import React, { useRef, useState, useEffect } from 'react'; 
import mp3File from './1-03. Subwoofer Lullaby.mp3'; 
import '../App.css'; 

const BackgroundMusic = () => {
  const audioRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false); 


  useEffect(() => {
    const audio = new Audio(mp3File);  
    audio.loop = true; 
    audioRef.current = audio;
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error('Playback error:', error));
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <button 
        onClick={isPlaying ? pauseAudio : playAudio} 
        className="music-button" 
      >
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
};

export default BackgroundMusic;