import { P as i } from '../components/grimoire/PageChrome.js';
import { j as e, m as o } from './proxy.js';
const s = [{
            quote: 'Their mastery over the React DOM is nothing short of miraculous. They turned our sluggish application into a lightning-fast experience.',
            author: 'Eldrin the Wise',
            title: 'Lead Architect @ Arcane Analytics',
            sigilType: 'flower',
        },
        {
            quote: 'A true professional. They documented every spell, ensuring the rest of the coven could maintain the wards long after they departed.',
            author: 'Morgana Le Fay',
            title: 'Product Manager',
            sigilType: 'geometric',
        },
        {
            quote: "Hire them before mercury goes into retrograde. You won't regret it.",
            author: 'Geralt',
            title: 'Freelance Monster Hunter (and Client)',
            sigilType: 'rune',
        },
    ],
    l = () =>
    e.jsxs('svg', {
        viewBox: '0 0 100 100',
        className: 'w-16 h-16 text-grimoire-accent/40 absolute -top-8 -left-4 -rotate-12 pointer-events-none',
        children: [
            e.jsx('path', {
                d: 'M50,50 C30,20 70,20 50,50 C80,30 80,70 50,50 C70,80 30,80 50,50 C20,70 20,30 50,50 Z',
                fill: 'currentColor',
            }),
            e.jsx('circle', {
                cx: '50',
                cy: '50',
                r: '5',
                fill: '#0a2a2e',
                opacity: '0.5',
            }),
            e.jsx('path', {
                d: 'M50,50 Q40,80 45,95',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '2',
            }),
        ],
    }),
    a = () =>
    e.jsxs('svg', {
        viewBox: '0 0 100 100',
        className: 'w-16 h-16 text-grimoire-glow/30 absolute -bottom-6 -right-4 rotate-12 pointer-events-none',
        children: [
            e.jsx('polygon', {
                points: '50,10 90,50 50,90 10,50',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '2',
            }),
            e.jsx('circle', {
                cx: '50',
                cy: '50',
                r: '25',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '1',
            }),
            e.jsx('line', {
                x1: '10',
                y1: '50',
                x2: '90',
                y2: '50',
                stroke: 'currentColor',
                strokeWidth: '1',
            }),
            e.jsx('line', {
                x1: '50',
                y1: '10',
                x2: '50',
                y2: '90',
                stroke: 'currentColor',
                strokeWidth: '1',
            }),
        ],
    }),
    n = () =>
    e.jsx('svg', {
        viewBox: '0 0 100 100',
        className: 'w-12 h-12 text-grimoire-ink/30 absolute top-4 right-4 pointer-events-none',
        children: e.jsx('path', {
            d: 'M30,20 L30,80 M30,50 L70,20 M30,50 L70,80',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
        }),
    });

function x() {
    return e.jsx(i, {
        title: 'Whispers',
        pageNumber: 8,
        children: e.jsxs('div', {
            className: 'max-w-5xl mx-auto',
            children: [
                e.jsx('p', {
                    className: 'font-body text-xl text-grimoire-paper/80 mb-16 text-center',
                    children: 'Echoes from past collaborators, preserved here as talismans of trust.',
                }),
                e.jsx('div', {
                    className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8',
                    children: s.map((t, r) =>
                        e.jsxs(
                            o.div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.9,
                                    rotate: Math.random() * 10 - 5,
                                },
                                whileInView: { opacity: 1, scale: 1 },
                                viewport: { once: !0 },
                                transition: { duration: 0.6, delay: r * 0.2 },
                                whileHover: { scale: 1.05, rotate: 0, zIndex: 10 },
                                className: 'relative paper-texture p-8 rounded-sm shadow-lg border border-grimoire-dark/10 flex flex-col justify-between min-h-[300px]',
                                children: [
                                    t.sigilType === 'flower' && e.jsx(l, {}),
                                    t.sigilType === 'geometric' && e.jsx(a, {}),
                                    t.sigilType === 'rune' && e.jsx(n, {}),
                                    e.jsx('div', {
                                        className: 'absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/30 backdrop-blur-sm shadow-sm rotate-2',
                                    }),
                                    e.jsxs('div', {
                                        className: 'relative z-10',
                                        children: [
                                            e.jsx('span', {
                                                className: 'text-4xl font-title text-grimoire-ink/40 absolute -top-4 -left-2',
                                                children: '"',
                                            }),
                                            e.jsx('p', {
                                                className: 'font-body text-lg text-grimoire-ink leading-relaxed relative z-10 pt-4',
                                                children: t.quote,
                                            }),
                                        ],
                                    }),
                                    e.jsxs('div', {
                                        className: 'mt-8 pt-4 border-t border-grimoire-ink/10 relative z-10',
                                        children: [
                                            e.jsx('h4', {
                                                className: 'font-title text-2xl text-grimoire-dark',
                                                children: t.author,
                                            }),
                                            e.jsx('p', {
                                                className: 'font-mono text-xs text-grimoire-ink/60 uppercase tracking-wider mt-1',
                                                children: t.title,
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            r
                        )
                    ),
                }),
            ],
        }),
    });
}
export { x as default };
