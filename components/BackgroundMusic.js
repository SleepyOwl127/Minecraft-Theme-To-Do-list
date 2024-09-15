import React, { useRef, useState, useEffect } from 'react'; 
import mp3File1 from './1-03. Subwoofer Lullaby.mp3'; 
import mp3File2 from './1-05. Living Mice.mp3'; 
import mp3File3 from './1-13. Wet Hands.mp3';  
import mp3File4 from './1-08. Minecraft.mp3'; 
import mp3File5 from './1-18. Sweden.mp3'; 
import mp3File6 from './1-12. Dry Hands.mp3'; 
import '../App.css'; 

const BackgroundMusic = () => {
  const audioRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false); 
  const [currentTrack, setCurrentTrack] = useState(mp3File1); 

  const audioFiles = [mp3File1, mp3File2, mp3File3, mp3File4, mp3File5, mp3File6]; 

  
  useEffect(() => {
    const audio = new Audio(currentTrack);  
    audio.loop = true; 
    audioRef.current = audio;

    if (isPlaying) {
      audioRef.current.play().catch(error => console.error('Playback error:', error));
    }

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [currentTrack, isPlaying]); 

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

  const shuffleTrack = () => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomTrack = audioFiles[randomIndex];
    setCurrentTrack(randomTrack); 
  };

  const handleButtonClick = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      shuffleTrack(); 
      setIsPlaying(true); 
    }
  };

  return (
    <div>
      <button 
        onClick={handleButtonClick} 
        className="music-button"
      >
        {isPlaying ? 'Pause Music' : 'Shuffle & Play Music'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
