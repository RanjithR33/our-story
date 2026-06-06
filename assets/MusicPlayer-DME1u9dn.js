import{a as i,j as e,m as d}from"./motion-C9TozfpB.js";import{M as x,c as y}from"./utils-CW5gOcXc.js";import{c as o}from"./index-DkJmyDx1.js";import"./gallery-CS9QuZuA.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],j=o("pause",g);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],N=o("play",w);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],k=o("volume-2",v);function _(){const[s,t]=i.useState(!1),[u,l]=i.useState(0),[r,c]=i.useState(!1),n=i.useRef(null),m="/our-story/Kadhal-Konjam.mp3";i.useEffect(()=>{const a=n.current;a&&(s?a.play().catch(()=>t(!1)):a.pause())},[s]);const h=async()=>{const a=n.current;if(a){if(s){a.pause(),t(!1);return}try{await a.play(),t(!0)}catch{t(!1)}}},f=()=>{const a=n.current;!a||!Number.isFinite(a.duration)||a.duration===0||l(a.currentTime/a.duration*100)},p=()=>{t(!1),l(0)};return e.jsxs(d.div,{className:y("fixed bottom-6 right-6 z-50 glass-card overflow-hidden",r?"w-64":"w-14"),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:2,duration:.5},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),role:"region","aria-label":"Music player",children:[e.jsx("audio",{ref:n,src:m,preload:"metadata",onTimeUpdate:f,onEnded:p}),e.jsxs("div",{className:"flex items-center gap-3 p-3",children:[e.jsx("button",{onClick:h,className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105","aria-label":s?"Pause music":"Play music",children:s?e.jsx(j,{className:"h-4 w-4"}):e.jsx(N,{className:"h-4 w-4 ml-0.5"})}),e.jsxs(d.div,{className:"flex-1 overflow-hidden",initial:!1,animate:{opacity:r?1:0,width:r?"auto":0},children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{className:"h-4 w-4 text-primary shrink-0","aria-hidden":"true"}),e.jsx("div",{className:"min-w-0",children:e.jsx("p",{className:"truncate text-sm font-medium",children:"Our Song"})}),e.jsx(k,{className:"h-4 w-4 text-text-secondary shrink-0","aria-hidden":"true"})]}),e.jsx("div",{className:"mt-2 h-1 w-full rounded-full bg-secondary/30",children:e.jsx("div",{className:"h-full rounded-full bg-primary transition-all duration-100",style:{width:`${u}%`}})})]})]})]})}export{_ as MusicPlayer};
