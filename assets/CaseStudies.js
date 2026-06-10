import '../components/grimoire/CustomCursor.js';
import { P as n } from '../components/grimoire/PageChrome.js';
import { j as e, r as l, m as o } from './proxy.js';
import { u as c, a as d } from './use-transform.js';
const i = [{
            title: 'The Great Refactoring',
            phase: 'New Moon',
            content: 'When I arrived at the coven, their primary application was a monolithic beast, tangled in years of technical debt. The ritual of refactoring began not with code, but with understanding the ancient architecture. Slowly, we carved out microservices, replacing brittle REST endpoints with robust GraphQL schemas.',
        },
        {
            title: 'Summoning the Design System',
            phase: 'First Quarter',
            content: "Inconsistency plagued our user interfaces. Buttons of varying shapes and colors littered the landscape. I initiated the creation of 'Aura', our internal design system. Built with React and Tailwind, it provided a single source of truth, ensuring every incantation produced a uniform result.",
        },
        {
            title: 'Optimizing the Scrying Pool',
            phase: 'Full Moon',
            content: 'The analytics dashboard was slow, taking upwards of ten seconds to render the data constellations. By implementing virtualization and Web Workers, we offloaded the heavy calculations from the main thread. The result was a scrying pool that updated in real-time, smooth as glass.',
        },
        {
            title: 'Warding Against Dark Arts',
            phase: 'Last Quarter',
            content: 'A security audit revealed vulnerabilities in our authentication flow. I led the effort to implement a robust OAuth2 integration with PKCE, adding layers of cryptographic wards to protect user data from malicious entities.',
        },
    ],
    m = ({ progress: a }) => {
        const r = d(
            a, [0, 0.25, 0.5, 0.75, 1], [
                'circle(0% at 50% 50%)',
                'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
                'circle(50% at 50% 50%)',
                'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)',
                'circle(0% at 50% 50%)',
            ]
        );
        return e.jsxs('div', {
            className: 'fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 hidden lg:flex',
            children: [
                e.jsx('div', {
                    className: 'w-px h-32 bg-gradient-to-b from-transparent via-grimoire-glow/30 to-transparent',
                }),
                e.jsxs('div', {
                    className: 'relative w-16 h-16 rounded-full border-2 border-grimoire-glow/30 bg-grimoire-dark flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(45,212,191,0.1)]',
                    children: [
                        e.jsx('div', { className: 'absolute inset-0 bg-grimoire-dark' }),
                        e.jsx(o.div, {
                            className: 'absolute inset-0 bg-grimoire-paper shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.5)]',
                            style: { clipPath: r },
                        }),
                        e.jsxs('div', {
                            className: 'absolute inset-0 opacity-20 mix-blend-multiply',
                            children: [
                                e.jsx('div', {
                                    className: 'absolute top-3 left-4 w-3 h-3 rounded-full bg-black/50',
                                }),
                                e.jsx('div', {
                                    className: 'absolute bottom-4 right-3 w-4 h-5 rounded-full bg-black/50',
                                }),
                                e.jsx('div', {
                                    className: 'absolute top-8 left-8 w-2 h-2 rounded-full bg-black/50',
                                }),
                            ],
                        }),
                    ],
                }),
                e.jsx('div', {
                    className: 'w-px h-32 bg-gradient-to-b from-transparent via-grimoire-glow/30 to-transparent',
                }),
                e.jsx('span', {
                    className: 'font-mono text-xs text-grimoire-glow/50 rotate-90 translate-y-12 whitespace-nowrap',
                    children: 'Scroll Progress',
                }),
            ],
        });
    };

function x() {
    const a = l.useRef(null),
        { scrollYProgress: r } = c({ target: a, offset: ['start start', 'end end'] });
    return e.jsxs(n, {
        title: 'Field Notes & Rituals',
        pageNumber: 5,
        children: [
            e.jsx(m, { progress: r }),
            e.jsxs('div', {
                ref: a,
                className: 'max-w-3xl mx-auto relative pb-32',
                children: [
                    e.jsx('p', {
                        className: 'font-body text-xl text-grimoire-paper/80 mb-16 text-center italic',
                        children: 'Detailed accounts of complex workings, challenges faced, and the magic used to overcome them.',
                    }),
                    e.jsx('div', {
                        className: 'space-y-32',
                        children: i.map((s, t) =>
                            e.jsxs(
                                o.article, {
                                    initial: { opacity: 0, y: 50 },
                                    whileInView: { opacity: 1, y: 0 },
                                    viewport: { once: !0, margin: '-100px' },
                                    transition: { duration: 0.8 },
                                    className: 'relative',
                                    children: [
                                        e.jsx('div', {
                                            className: 'absolute -left-12 top-2 text-grimoire-glow/40 hidden md:block',
                                            children: e.jsxs('svg', {
                                                width: '24',
                                                height: '24',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                stroke: 'currentColor',
                                                strokeWidth: '1',
                                                children: [
                                                    e.jsx('circle', { cx: '12', cy: '12', r: '10' }),
                                                    t === 1 &&
                                                    e.jsx('path', {
                                                        d: 'M12 2 A 10 10 0 0 1 12 22 Z',
                                                        fill: 'currentColor',
                                                        opacity: '0.5',
                                                    }),
                                                    t === 2 &&
                                                    e.jsx('circle', {
                                                        cx: '12',
                                                        cy: '12',
                                                        r: '10',
                                                        fill: 'currentColor',
                                                        opacity: '0.5',
                                                    }),
                                                    t === 3 &&
                                                    e.jsx('path', {
                                                        d: 'M12 2 A 10 10 0 0 0 12 22 Z',
                                                        fill: 'currentColor',
                                                        opacity: '0.5',
                                                    }),
                                                ],
                                            }),
                                        }),
                                        e.jsxs('header', {
                                            className: 'mb-6',
                                            children: [
                                                e.jsxs('span', {
                                                    className: 'font-mono text-sm text-grimoire-accent tracking-widest uppercase mb-2 block',
                                                    children: ['Phase: ', s.phase],
                                                }),
                                                e.jsx('h2', {
                                                    className: 'font-title text-4xl text-grimoire-glow',
                                                    children: s.title,
                                                }),
                                            ],
                                        }),
                                        e.jsx('div', {
                                            className: 'font-body text-lg text-grimoire-paper/90 leading-relaxed space-y-4',
                                            children: e.jsx('p', { children: s.content }),
                                        }),
                                        t !== i.length - 1 &&
                                        e.jsx('div', {
                                            className: 'absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-grimoire-glow/30 to-transparent',
                                        }),
                                    ],
                                },
                                t
                            )
                        ),
                    }),
                ],
            }),
        ],
    });
}
export { x as default };
