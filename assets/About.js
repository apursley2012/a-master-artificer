import { r as o, j as e, m as s } from './proxy.js';
import { P as l } from '../components/grimoire/PageChrome.js';
import { u as n, a as d } from './use-transform.js';
import '../components/grimoire/CustomCursor.js';
const r = ({ children: t, delay: i = 0 }) =>
    e.jsx(s.div, {
        initial: {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            filter: 'blur(4px)',
        },
        whileInView: {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            filter: 'blur(0px)',
        },
        viewport: { once: !0, margin: '-100px' },
        transition: { duration: 1.5, delay: i, ease: [0.25, 0.1, 0.25, 1] },
        className: 'relative',
        children: t,
    });

function g() {
    const t = o.useRef(null),
        { scrollYProgress: i } = n({ target: t, offset: ['start end', 'end start'] }),
        a = d(i, [0, 1], [0, 180]);
    return e.jsx(l, {
        title: 'The Practitioner',
        pageNumber: 1,
        children: e.jsx('div', {
            ref: t,
            className: 'max-w-4xl mx-auto',
            children: e.jsxs('div', {
                className: 'paper-texture rounded-sm p-8 md:p-12 shadow-xl relative overflow-hidden text-grimoire-ink border border-grimoire-dark/10',
                children: [
                    e.jsx(s.div, {
                        style: { rotate: a },
                        className: 'absolute -right-20 -top-20 w-96 h-96 opacity-5 pointer-events-none',
                        children: e.jsxs('svg', {
                            viewBox: '0 0 100 100',
                            className: 'w-full h-full text-grimoire-ink',
                            children: [
                                e.jsx('circle', {
                                    cx: '50',
                                    cy: '50',
                                    r: '45',
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    strokeWidth: '1',
                                }),
                                e.jsx('circle', {
                                    cx: '50',
                                    cy: '50',
                                    r: '35',
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    strokeWidth: '0.5',
                                    strokeDasharray: '2 2',
                                }),
                                e.jsx('path', {
                                    d: 'M50,5 L50,95 M5,50 L95,50 M18,18 L82,82 M18,82 L82,18',
                                    stroke: 'currentColor',
                                    strokeWidth: '0.5',
                                }),
                                e.jsx('polygon', {
                                    points: '50,15 85,85 15,85',
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    strokeWidth: '1',
                                }),
                            ],
                        }),
                    }),
                    e.jsxs('div', {
                        className: 'relative z-10 space-y-8 font-body text-lg md:text-xl leading-relaxed',
                        children: [
                            e.jsxs('div', {
                                className: 'flex flex-col md:flex-row gap-8 items-start mb-12',
                                children: [
                                    e.jsxs(s.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.9,
                                            filter: 'sepia(1) hue-rotate(180deg)',
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1,
                                            filter: 'sepia(0.3) hue-rotate(160deg)',
                                        },
                                        transition: { duration: 1 },
                                        className: 'w-48 h-64 shrink-0 bg-grimoire-dark rounded-t-full border-4 border-grimoire-ink/20 overflow-hidden relative',
                                        children: [
                                            e.jsx('div', {
                                                className: 'absolute inset-0 bg-gradient-to-b from-grimoire-glow/20 to-grimoire-dark',
                                            }),
                                            e.jsx('div', {
                                                className: 'absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 bg-grimoire-paper/10 rounded-t-full backdrop-blur-sm border border-grimoire-paper/20 flex items-center justify-center',
                                                children: e.jsx('span', {
                                                    className: 'font-title text-4xl text-grimoire-paper/50',
                                                    children: '?',
                                                }),
                                            }),
                                        ],
                                    }),
                                    e.jsxs('div', {
                                        className: 'space-y-6',
                                        children: [
                                            e.jsx(r, {
                                                delay: 0.2,
                                                children: e.jsx('p', {
                                                    className: 'first-letter:text-7xl first-letter:font-title first-letter:text-grimoire-glow first-letter:mr-3 first-letter:float-left first-letter:leading-none',
                                                    children: 'Greetings, traveler of the web. I am a practitioner of the arcane arts of software engineering. For over a decade, I have been translating human intent into machine-readable incantations.',
                                                }),
                                            }),
                                            e.jsx(r, {
                                                delay: 0.5,
                                                children: e.jsx('p', {
                                                    children: 'My grimoire is filled with spells written in TypeScript, React, and Node.js. I specialize in weaving complex state management rituals and conjuring responsive, accessible user interfaces from the void.',
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs(r, {
                                delay: 0.2,
                                children: [
                                    e.jsx('h3', {
                                        className: 'font-title text-3xl text-grimoire-dark mb-4 border-b border-grimoire-ink/20 pb-2',
                                        children: 'Philosophy of the Craft',
                                    }),
                                    e.jsx('p', {
                                        children: "A well-crafted spell should be elegant, readable, and performant. I believe in the alchemy of transforming messy requirements into clean, maintainable systems. Magic is just science we don't understand yet, and good code is just magic that is well-documented.",
                                    }),
                                ],
                            }),
                            e.jsx(r, {
                                delay: 0.4,
                                children: e.jsx('blockquote', {
                                    className: 'border-l-4 border-grimoire-glow pl-6 py-2 my-8 italic text-grimoire-dark/80 bg-grimoire-glow/5 rounded-r-sm',
                                    children: '"Any sufficiently advanced technology is indistinguishable from magic. Therefore, a sufficiently advanced developer is indistinguishable from a wizard."',
                                }),
                            }),
                            e.jsx(r, {
                                delay: 0.6,
                                children: e.jsxs('div', {
                                    className: 'flex items-center justify-between mt-12 pt-8 border-t border-grimoire-ink/10',
                                    children: [
                                        e.jsx('span', {
                                            className: 'font-mono text-sm text-grimoire-ink/60',
                                            children: 'Status: Seeking new covens',
                                        }),
                                        e.jsx('img', {
                                            src: "data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,20 Q25,5 40,20 T70,20 T90,20' fill='none' stroke='%231a3c40' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M40,10 L45,30 M60,15 L55,35' stroke='%231a3c40' stroke-width='1'/%3E%3C/svg%3E",
                                            alt: 'Signature',
                                            className: 'h-10 opacity-80',
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
export { g as default };