import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Play, Volume2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const songSrc = `${import.meta.env.BASE_URL}Kadhal-Konjam.mp3`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.duration) || audio.duration === 0) return;

    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <motion.div
      className={cn(
        'fixed bottom-6 right-6 z-50 glass-card overflow-hidden',
        isExpanded ? 'w-64' : 'w-14'
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      role="region"
      aria-label="Music player"
    >
      <audio
        ref={audioRef}
        src={songSrc}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="flex items-center gap-3 p-3">
        <button
          onClick={togglePlay}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
        </button>

        <motion.div
          className="flex-1 overflow-hidden"
          initial={false}
          animate={{ opacity: isExpanded ? 1 : 0, width: isExpanded ? 'auto' : 0 }}
        >
          <div className="flex items-center gap-2">
            <Music className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Our Song</p>
            </div>
            <Volume2 className="h-4 w-4 text-text-secondary shrink-0" aria-hidden="true" />
          </div>
          <div className="mt-2 h-1 w-full rounded-full bg-secondary/30">
            <div
              className="h-full rounded-full bg-primary transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
