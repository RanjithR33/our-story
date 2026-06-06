import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pencil } from 'lucide-react';
import { loveLetterDefault, loveLetterSignature } from '../../constants/loveLetterData';
import { SectionHeading } from '../common/SectionHeading';

export function LoveLetter() {
  const [displayText, setDisplayText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [letterContent, setLetterContent] = useState(loveLetterDefault);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (hasTyped || isEditing) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= letterContent.length) {
        setDisplayText(letterContent.slice(0, index));
        index++;
      } else {
        setHasTyped(true);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [letterContent, hasTyped, isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
    setDisplayText(letterContent);
    setHasTyped(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setLetterContent(displayText);
  };

  return (
    <section id="love-letter" className="section-padding">
      <div className="container-app max-w-3xl">
        <SectionHeading
          title="A Letter From My Heart"
          subtitle="Words I wrote when love overflowed"
        />

        <motion.div
          className="paper-texture relative rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-100/30 via-transparent to-rose-100/20 pointer-events-none"
            aria-hidden="true"
          />

          <button
            onClick={isEditing ? handleSave : handleEdit}
            className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm text-text-secondary hover:bg-white/80 transition-colors"
            aria-label={isEditing ? 'Save letter' : 'Edit letter'}
          >
            <Pencil className="h-4 w-4" />
            {isEditing ? 'Save' : 'Edit'}
          </button>

          {isEditing ? (
            <textarea
              value={displayText}
              onChange={(e) => setDisplayText(e.target.value)}
              className="handwritten relative z-10 w-full min-h-64 resize-none bg-transparent text-lg text-text-primary outline-none"
              aria-label="Edit love letter"
            />
          ) : (
            <p className="handwritten relative z-10 text-lg text-text-primary whitespace-pre-wrap">
              {displayText}
              {!hasTyped && (
                <motion.span
                  className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </p>
          )}

          <p className="handwritten relative z-10 mt-8 text-right text-xl font-semibold text-primary">
            {loveLetterSignature}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
