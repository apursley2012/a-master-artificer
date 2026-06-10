import { L as N } from '../components/grimoire/AstrolabeNav.js';
import { a as f, u as h } from '../components/grimoire/CustomCursor.js';
import { P as w } from '../components/grimoire/PageChrome.js';
import { m as a, j as e, r as l } from './proxy.js';
const m = ({ mouseX: t, mouseY: s }) => {
        const i = l.useRef(null),
            [n, c] = l.useState(1e3);
        l.useEffect(
            () => {
                const x = () => {
                        if (i.current) {
                            const r = i.current.getBoundingClientRect(),
                                v = r.left + r.width / 2,
                                y = r.top + r.height / 2,
                                u = t.get() - v,
                                p = s.get() - y,
                                j = Math.sqrt(u * u + p * p);
                            c(j);
                        }
                    },
                    g = t.onChange(x),
                    b = s.onChange(x);
                return () => {
                    g(), b();
                };
            }, [t, s]
        );
        const d = Math.max(0.8, 1.5 - n / 300),
            o = Math.max(0.4, 1 - n / 500);
        return e.jsxs(a.div, {
            ref: i,
            className: 'relative flex flex-col items-center',
            animate: { y: [0, -15, 0] },
            transition: { duration: 4, repeat: 1 / 0, ease: 'easeInOut' },
            children: [
                e.jsxs(a.div, {
                    className: 'relative w-6 h-12 z-10',
                    style: { scale: d, opacity: o },
                    children: [
                        e.jsx('div', {
                            className: 'absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-10 bg-grimoire-glow rounded-[50%_50%_20%_20%] blur-[2px] flicker-filter origin-bottom',
                        }),
                        e.jsx('div', {
                            className: 'absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-6 bg-white rounded-[50%_50%_20%_20%] blur-[1px] origin-bottom',
                        }),
                    ],
                }),
                e.jsx('div', {
                    className: 'w-1 h-3 bg-black/80 rounded-t-full -mt-1 z-0',
                }),
                e.jsxs('div', {
                    className: 'w-12 h-32 bg-gradient-to-b from-grimoire-paper to-[#d4cbb3] rounded-sm shadow-[inset_-4px_0_10px_rgba(0,0,0,0.1)] relative overflow-hidden',
                    children: [
                        e.jsx('div', {
                            className: 'absolute top-0 left-1 w-2 h-6 bg-grimoire-paper rounded-b-full shadow-sm',
                        }),
                        e.jsx('div', {
                            className: 'absolute top-0 right-2 w-1.5 h-8 bg-grimoire-paper rounded-b-full shadow-sm',
                        }),
                        e.jsx('div', {
                            className: 'absolute top-0 left-4 w-2.5 h-4 bg-grimoire-paper rounded-b-full shadow-sm',
                        }),
                    ],
                }),
                e.jsx('div', {
                    className: 'w-16 h-2 bg-black/40 rounded-[100%] blur-sm mt-2',
                }),
            ],
        });
    },
    M = ({ mouseX: t, mouseY: s }) => {
        const i = { damping: 30, stiffness: 100, mass: 2 },
            n = f(t, i),
            c = f(s, i);
        return e.jsx(a.div, {
            className: 'fixed pointer-events-none z-0 opacity-20',
            style: { x: n, y: c, translateX: '-50%', translateY: '-50%' },
            children: e.jsxs(a.div, {
                animate: { rotate: 360 },
                transition: { duration: 20, repeat: 1 / 0, ease: 'linear' },
                className: 'w-[400px] h-[400px] rounded-full border border-grimoire-glow flex items-center justify-center relative',
                children: [
                    e.jsx('div', {
                        className: 'absolute inset-4 rounded-full border border-dashed border-grimoire-glow/50',
                    }),
                    e.jsx('svg', {
                        viewBox: '0 0 100 100',
                        className: 'w-full h-full text-grimoire-glow absolute inset-0 p-8',
                        children: e.jsx('polygon', {
                            points: '50,5 20,95 95,35 5,35 80,95',
                            fill: 'none',
                            stroke: 'currentColor',
                            strokeWidth: '0.5',
                        }),
                    }), ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ'].map((d, o) =>
                        e.jsx(
                            'div', {
                                className: 'absolute text-grimoire-glow font-mono text-xl',
                                style: {
                                    transform: `rotate(${o * 45}deg) translateY(-180px) rotate(-${o * 45}deg)`,
                                },
                                children: d,
                            },
                            o
                        )
                    ),
                ],
            }),
        });
    };

function O() {
    const t = h(-1e3),
        s = h(-1e3);
    return l.useEffect(
        () => {
            const i = n => {
                t.set(n.clientX), s.set(n.clientY);
            };
            return window.addEventListener('mousemove', i), () =>
                window.removeEventListener('mousemove', i);
        }, [t, s]
    ), e.jsx(w, {
        children: e.jsxs('div', {
            className: 'relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden',
            children: [
                e.jsx(M, { mouseX: t, mouseY: s }),
                e.jsxs('div', {
                    className: 'relative z-10 flex flex-col items-center text-center space-y-12',
                    children: [
                        e.jsxs('div', {
                            className: 'flex items-end justify-center space-x-8 md:space-x-16 mb-8',
                            children: [
                                e.jsx(a.div, {
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { delay: 0.2 },
                                    children: e.jsx(m, { mouseX: t, mouseY: s }),
                                }),
                                e.jsx(a.div, {
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { delay: 0.4 },
                                    children: e.jsx(m, { mouseX: t, mouseY: s }),
                                }),
                                e.jsx(a.div, {
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { delay: 0.6 },
                                    className: 'hidden md:block',
                                    children: e.jsx(m, { mouseX: t, mouseY: s }),
                                }),
                            ],
                        }),
                        e.jsxs(a.div, {
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { duration: 1, ease: 'easeOut' },
                            className: 'space-y-6',
                            children: [
                                e.jsx('h2', {
                                    className: 'font-mono text-grimoire-accent tracking-widest uppercase text-sm md:text-base',
                                    children: 'The Grimoire Of',
                                }),
                                e.jsxs('h1', {
                                    className: 'font-title text-6xl md:text-8xl lg:text-9xl text-grimoire-paper text-glow leading-none',
                                    children: ['A Master', e.jsx('br', {}), 'Artificer'],
                                }),
                                e.jsx('p', {
                                    className: 'font-body text-xl md:text-2xl text-grimoire-paper/80 max-w-2xl mx-auto italic',
                                    children: 'Weaving logic into spells, binding data to the DOM, and conjuring digital experiences from the aether.',
                                }),
                            ],
                        }),
                        e.jsx(a.div, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 1.5, duration: 1 },
                            children: e.jsxs(N, {
                                to: '/about',
                                className: 'group relative inline-flex items-center justify-center px-8 py-4 font-title text-2xl text-grimoire-dark bg-grimoire-glow rounded-sm overflow-hidden transition-transform hover:scale-105',
                                children: [
                                    e.jsx('span', {
                                        className: 'relative z-10',
                                        children: 'Open the Tome',
                                    }),
                                    e.jsx('div', {
                                        className: 'absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out',
                                    }),
                                    e.jsx('div', {
                                        className: 'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none',
                                        children: [...Array(5)].map((i, n) =>
                                            e.jsx(
                                                'div', {
                                                    className: 'absolute w-1 h-1 bg-white rounded-full animate-ping',
                                                    style: {
                                                        top: `${Math.random () * 100}%`,
                                                        left: `${Math.random () * 100}%`,
                                                        animationDelay: `${Math.random () * 0.5}s`,
                                                    },
                                                },
                                                n
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        }),
                        e.jsx(a.p, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 2 },
                            className: 'absolute bottom-0 font-mono text-xs text-grimoire-paper/40',
                            children: '* No frogs were turned during the making of this site.',
                        }),
                    ],
                }),
            ],
        }),
    });
}
export { O as default };
