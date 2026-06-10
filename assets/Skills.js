import { a as c } from '../components/grimoire/AstrolabeNav.js';
import { P as p } from '../components/grimoire/PageChrome.js';
import { m as a, j as e, r as o } from './proxy.js';
const x = [
    { name: 'React', proficiency: 'Master' },
    { name: 'TypeScript', proficiency: 'Adept' },
    { name: 'Node.js', proficiency: 'Adept' },
    { name: 'CSS/Tailwind', proficiency: 'Master' },
    { name: 'GraphQL', proficiency: 'Journeyman' },
    { name: 'Framer Motion', proficiency: 'Adept' },
    { name: 'PostgreSQL', proficiency: 'Journeyman' },
    { name: 'Next.js', proficiency: 'Adept' },
    { name: 'WebSockets', proficiency: 'Apprentice' },
    { name: 'Rust', proficiency: 'Apprentice' },
];

function u() {
    const [d, r] = o.useState([]), [s, l] = o.useState(null);
    o.useEffect(() => {
        const t = x.map((i, n) => ({
            id: n,
            name: i.name,
            proficiency: i.proficiency,
            x: Math.random() * 80 + 10,
            delay: Math.random() * 5,
            size: Math.random() * 40 + 60,
        }));
        r(t);
    }, []);
    const m = t => {
        l({ name: t.name, proficiency: t.proficiency }), r(i =>
            i.filter(n => n.id !== t.id)
        ), setTimeout(() => {
            r(i => [...i, {...t, x: Math.random() * 80 + 10, delay: 0 }]);
        }, 3e3), setTimeout(() => {
            l(null);
        }, 2e3);
    };
    return e.jsx(p, {
        title: 'The Athenaeum of Craft',
        pageNumber: 3,
        children: e.jsxs('div', {
            className: 'flex flex-col items-center justify-between min-h-[70vh] relative',
            children: [
                e.jsxs('div', {
                    className: 'text-center mb-8 z-10',
                    children: [
                        e.jsx('h2', {
                            className: 'font-title text-3xl text-grimoire-accent mb-2',
                            children: 'Reagents & Components',
                        }),
                        e.jsx('p', {
                            className: 'font-body text-grimoire-paper/70 max-w-md mx-auto',
                            children: 'Click the rising bubbles to inspect the purity and potency of my technical reagents.',
                        }),
                    ],
                }),
                e.jsx('div', {
                    className: 'h-24 flex items-center justify-center z-20',
                    children: e.jsx(c, {
                        mode: 'wait',
                        children: s &&
                            e.jsxs(
                                a.div, {
                                    initial: { opacity: 0, scale: 0.5, y: 20 },
                                    animate: { opacity: 1, scale: 1, y: 0 },
                                    exit: { opacity: 0, scale: 1.5, filter: 'blur(10px)' },
                                    className: 'text-center',
                                    children: [
                                        e.jsx('h3', {
                                            className: 'font-title text-4xl text-grimoire-glow text-glow',
                                            children: s.name,
                                        }),
                                        e.jsxs('p', {
                                            className: 'font-mono text-grimoire-paper uppercase tracking-widest text-sm mt-2 border-t border-grimoire-glow/30 pt-2',
                                            children: ['Rank: ', s.proficiency],
                                        }),
                                    ],
                                },
                                s.name
                            ),
                    }),
                }),
                e.jsxs('div', {
                    className: 'relative w-full max-w-2xl h-[400px] mt-auto flex flex-col justify-end items-center',
                    children: [
                        e.jsx('div', {
                            className: 'absolute inset-0 bottom-32 overflow-hidden mask-image: linear-gradient(to top, black, transparent)',
                            children: e.jsx(c, {
                                children: d.map(t =>
                                    e.jsxs(
                                        a.button, {
                                            initial: { y: 400, opacity: 0, scale: 0 },
                                            animate: {
                                                y: -100,
                                                opacity: [0, 0.8, 0.8, 0],
                                                x: `calc(${t.x}% + ${Math.sin (t.delay) * 20}px)`,
                                            },
                                            transition: {
                                                duration: 8 + Math.random() * 4,
                                                repeat: 1 / 0,
                                                delay: t.delay,
                                                ease: 'linear',
                                            },
                                            onClick: () => m(t),
                                            className: 'absolute bottom-0 rounded-full border border-grimoire-glow/50 bg-grimoire-glow/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-grimoire-glow/30 hover:border-grimoire-glow transition-colors group shadow-[inset_0_0_15px_rgba(45,212,191,0.2)]',
                                            style: { width: t.size, height: t.size, left: `${t.x}%` },
                                            children: [
                                                e.jsx('span', {
                                                    className: 'font-mono text-xs text-grimoire-glow opacity-0 group-hover:opacity-100 transition-opacity',
                                                    children: t.name,
                                                }),
                                                e.jsx('div', {
                                                    className: 'absolute top-2 left-2 w-1/4 h-1/4 bg-white/20 rounded-full blur-[1px]',
                                                }),
                                            ],
                                        },
                                        t.id
                                    )
                                ),
                            }),
                        }),
                        e.jsxs('div', {
                            className: 'relative z-10 w-64 h-48',
                            children: [
                                e.jsx('div', {
                                    className: 'absolute inset-0 bg-grimoire-glow/20 blur-3xl rounded-full',
                                }),
                                e.jsxs('svg', {
                                    viewBox: '0 0 100 100',
                                    className: 'w-full h-full drop-shadow-2xl',
                                    children: [
                                        e.jsx('ellipse', {
                                            cx: '50',
                                            cy: '30',
                                            rx: '35',
                                            ry: '10',
                                            fill: '#113a40',
                                        }),
                                        e.jsx('ellipse', {
                                            cx: '50',
                                            cy: '30',
                                            rx: '30',
                                            ry: '8',
                                            fill: '#2dd4bf',
                                            className: 'animate-pulse',
                                            opacity: '0.5',
                                        }),
                                        e.jsx('path', {
                                            d: 'M15,30 C15,80 30,95 50,95 C70,95 85,80 85,30 Z',
                                            fill: '#051517',
                                            stroke: '#1a3c40',
                                            strokeWidth: '2',
                                        }),
                                        e.jsx('ellipse', {
                                            cx: '50',
                                            cy: '30',
                                            rx: '38',
                                            ry: '12',
                                            fill: 'none',
                                            stroke: '#1a3c40',
                                            strokeWidth: '4',
                                        }),
                                        e.jsx('ellipse', {
                                            cx: '50',
                                            cy: '30',
                                            rx: '35',
                                            ry: '10',
                                            fill: 'none',
                                            stroke: '#0a2a2e',
                                            strokeWidth: '2',
                                        }),
                                        e.jsx('path', {
                                            d: 'M12,40 C5,40 5,55 15,55',
                                            fill: 'none',
                                            stroke: '#1a3c40',
                                            strokeWidth: '4',
                                            strokeLinecap: 'round',
                                        }),
                                        e.jsx('path', {
                                            d: 'M88,40 C95,40 95,55 85,55',
                                            fill: 'none',
                                            stroke: '#1a3c40',
                                            strokeWidth: '4',
                                            strokeLinecap: 'round',
                                        }),
                                        e.jsx('path', {
                                            d: 'M25,40 C20,60 30,80 50,85',
                                            fill: 'none',
                                            stroke: '#ffffff',
                                            strokeWidth: '1',
                                            opacity: '0.1',
                                        }),
                                    ],
                                }),
                                e.jsxs('div', {
                                    className: 'absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-16 flex justify-center gap-2 opacity-80',
                                    children: [
                                        e.jsx(a.div, {
                                            animate: { height: ['20px', '40px', '20px'] },
                                            transition: { duration: 0.5, repeat: 1 / 0 },
                                            className: 'w-4 bg-orange-500 rounded-t-full blur-sm self-end',
                                        }),
                                        e.jsx(a.div, {
                                            animate: { height: ['30px', '50px', '30px'] },
                                            transition: { duration: 0.7, repeat: 1 / 0, delay: 0.1 },
                                            className: 'w-6 bg-yellow-400 rounded-t-full blur-sm self-end',
                                        }),
                                        e.jsx(a.div, {
                                            animate: { height: ['25px', '45px', '25px'] },
                                            transition: { duration: 0.6, repeat: 1 / 0, delay: 0.2 },
                                            className: 'w-5 bg-orange-400 rounded-t-full blur-sm self-end',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
export { u as default };
