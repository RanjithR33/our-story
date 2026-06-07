import type { TimelineEvent } from '../types';
import firstDateImage from '../../First Date.jpeg';
import novemberElevenImage from '../../11.11.jpeg';
import bikeThirdImage from '../../bike3rd.jpeg';
import agaraLakeVideo from '../../agara_lake.mp4';
import churchStreetPortrait from '../../seol_.jpeg';
import ringDateImage from '../../ring.jpeg';
import newYearProposalImage from '../../newyear.jpeg';

export const timelineData: TimelineEvent[] = [
  {
    id: '1',
    date: 'November 11, 2025',
    title: 'The Day We Started Chatting',
    description:
      'We started talking on 11/11/2025 — Usually people wish during 11.11 but this time god wished for us to be together , a date that felt like destiny and the beginning of something beautiful.',
    image: novemberElevenImage,
  },
  {
    id: '2',
    date: 'November 26, 2025',
    title: 'Our First Date',
    description:
      'We went to Paragon Restaurant, walked hand in hand through MG Road, and I lifted her up as we spent the most beautiful time together. That day felt like a little dream come true.',
    image: firstDateImage,
  },
  {
    id: '3',
    date: 'December 4, 2025',
    title: 'That Soft Cheek Kiss',
    description:
      'On December 4, 2025, we shared a sweet moment on the bike ride — one little kiss on her cheek, and it felt like the whole world slowed down around us.',
    image: bikeThirdImage,
  },
  {
    id: '4',
    date: 'December 13, 2025',
    title: 'Agara Lake Walk',
    description:
      'On December 13, 2025, we had a beautiful walk by Agara Lake, played around, watched the sunset, and I kissed her on the forehead and promised never to leave her.',
    image: agaraLakeVideo,
  },
  {
    id: '5',
    date: 'December 14, 2025',
    title: 'Our Church Street Portrait',
    description:
      'On December 14, 2025, we took our first cute portrait together on Church Street — a simple photo, but one of the sweetest memories we’ll always keep.',
    image: churchStreetPortrait,
  },
  {
    id: '6',
    date: 'December 18, 2025',
    title: 'Our Precious Ring Moment',
    description:
      'On December 18, 2025, we went on a date, walked hand in hand, played a little game where I put a ring on her finger, and it felt so precious for both of us.',
    image: ringDateImage,
  },
  {
    id: '7',
    date: 'New Year’s Eve, 2026',
    title: 'The Night We Chose Forever',
    description:
      'We celebrated New Year together, and on that unforgettable night I proposed to her. everything felt surreal. It was the moment we chose forever, hand in hand, heart to heart.',
    image: newYearProposalImage,
  },
];
