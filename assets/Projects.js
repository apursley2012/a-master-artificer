import { c as l, a as n } from '../components/grimoire/AstrolabeNav.js';
import { P as c } from '../components/grimoire/PageChrome.js';
import { r as d, j as e, m as r } from './proxy.js';
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m = [
        ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
        ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
        [
            'path',
            {
                d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
                key: 'a6xqqp',
            },
        ],
    ],
    x = l('external-link', m);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p = [
        [
            'path',
            {
                d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
                key: 'tonef',
            },
        ],
        ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
    ],
    h = l('github', p),
    g = [{
            id: '1',
            title: 'Astral Analytics',
            type: 'Major Working',
            description: 'A real-time data visualization dashboard that scries into user behavior streams. Built with WebSockets and D3.js to render complex constellations of data.',
            tech: ['React', 'D3.js', 'Node.js', 'Socket.io'],
            numeral: 'I',
            github: '#',
        },
        {
            id: '2',
            title: 'Ethereal E-Commerce',
            type: 'Major Working',
            description: 'A headless commerce platform with instantaneous page loads, utilizing static site generation and edge caching to deliver wares across the realm.',
            tech: ['Next.js', 'Stripe', 'Tailwind', 'GraphQL'],
            numeral: 'II',
            link: '#',
        },
        {
            id: '3',
            title: 'Potion Tracker',
            type: 'Cantrip',
            description: 'A small utility app for tracking daily habits and alchemical mixtures. Uses local storage for persistence.',
            tech: ['TypeScript', 'React', 'Zustand'],
            numeral: 'III',
            github: '#',
        },
        {
            id: '4',
            title: 'Rune Formatter',
            type: 'Cantrip',
            description: 'A CLI tool that automatically formats and lints ancient scripts (JSON/YAML) into readable formats.',
            tech: ['Rust', 'CLI'],
            numeral: 'IV',
            github: '#',
        },
    ],
    u = ({ project: t, index: a }) => {
        const [i, s] = d.useState(!1);
        return e.jsx(r.div, {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: a * 0.1, duration: 0.5 },
            className: 'relative h-[400px] w-full max-w-[300px] mx-auto perspective-1000',
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            children: e.jsxs(r.div, {
                animate: {
                    rotateY: i ? 10 : 0,
                    rotateX: i ? 10 : 0,
                    y: i ? -20 : 0,
                    scale: i ? 1.05 : 1,
                },
                transition: { type: 'spring', stiffness: 300, damping: 20 },
                className: 'w-full h-full relative preserve-3d cursor-pointer',
                children: [
                    e.jsx(n, {
                        children: i &&
                            e.jsx(r.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                className: 'absolute -inset-4 bg-grimoire-glow/20 blur-xl rounded-xl -z-10',
                            }),
                    }),
                    e.jsxs('div', {
                        className: 'absolute inset-0 paper-texture rounded-xl border-2 border-grimoire-dark/20 shadow-2xl overflow-hidden flex flex-col',
                        children: [
                            e.jsx('div', {
                                className: 'absolute inset-2 border border-grimoire-ink/30 rounded-lg pointer-events-none',
                            }),
                            e.jsx('div', {
                                className: 'absolute inset-3 border border-grimoire-ink/10 rounded-md pointer-events-none',
                            }),
                            e.jsxs('div', {
                                className: 'p-4 text-center border-b border-grimoire-ink/20 bg-grimoire-dark/5',
                                children: [
                                    e.jsx('span', {
                                        className: 'font-title text-2xl text-grimoire-ink',
                                        children: t.numeral,
                                    }),
                                    e.jsx('h3', {
                                        className: 'font-title text-xl text-grimoire-dark mt-1',
                                        children: t.title,
                                    }),
                                    e.jsx('span', {
                                        className: 'font-mono text-[10px] uppercase tracking-widest text-grimoire-accent font-bold',
                                        children: t.type,
                                    }),
                                ],
                            }),
                            e.jsx('div', {
                                className: 'h-32 w-full border-b border-grimoire-ink/20 flex items-center justify-center bg-grimoire-dark/5 relative overflow-hidden',
                                children: e.jsxs(r.svg, {
                                    viewBox: '0 0 100 100',
                                    className: 'w-20 h-20 text-grimoire-ink/40',
                                    animate: { rotate: i ? 180 : 0 },
                                    transition: { duration: 10, repeat: 1 / 0, ease: 'linear' },
                                    children: [
                                        e.jsx('circle', {
                                            cx: '50',
                                            cy: '50',
                                            r: '40',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                        }),
                                        e.jsx('polygon', {
                                            points: '50,10 90,75 10,75',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '1',
                                        }),
                                        e.jsx('polygon', {
                                            points: '50,90 10,25 90,25',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '1',
                                        }),
                                    ],
                                }),
                            }),
                            e.jsxs('div', {
                                className: 'p-4 flex-1 flex flex-col',
                                children: [
                                    e.jsx('p', {
                                        className: 'font-body text-sm text-grimoire-ink/80 flex-1 line-clamp-4',
                                        children: t.description,
                                    }),
                                    e.jsx('div', {
                                        className: 'mt-4 flex flex-wrap gap-1',
                                        children: t.tech.map(o =>
                                            e.jsx(
                                                'span', {
                                                    className: 'text-[10px] font-mono px-1.5 py-0.5 bg-grimoire-dark/10 text-grimoire-dark rounded-sm border border-grimoire-dark/20',
                                                    children: o,
                                                },
                                                o
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            e.jsx(n, {
                                children: i &&
                                    e.jsxs(r.div, {
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: 20 },
                                        className: 'absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-grimoire-dark to-transparent flex justify-center gap-4 pt-12',
                                        children: [
                                            t.github &&
                                            e.jsx('a', {
                                                href: t.github,
                                                className: 'p-2 bg-grimoire-paper rounded-full text-grimoire-dark hover:bg-grimoire-glow hover:text-grimoire-dark transition-colors',
                                                children: e.jsx(h, { size: 18 }),
                                            }),
                                            t.link &&
                                            e.jsx('a', {
                                                href: t.link,
                                                className: 'p-2 bg-grimoire-paper rounded-full text-grimoire-dark hover:bg-grimoire-glow hover:text-grimoire-dark transition-colors',
                                                children: e.jsx(x, { size: 18 }),
                                            }),
                                        ],
                                    }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };

function v() {
    return e.jsxs(c, {
        title: 'Conjurings',
        pageNumber: 2,
        children: [
            e.jsx('div', {
                className: 'mb-12 text-center max-w-2xl mx-auto',
                children: e.jsx('p', {
                    className: 'font-body text-xl text-grimoire-paper/80',
                    children: 'A collection of artifacts, tools, and realms I have manifested into existence. Hover over each card to reveal its secrets.',
                }),
            }),
            e.jsx('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center',
                children: g.map((t, a) => e.jsx(u, { project: t, index: a }, t.id)),
            }),
        ],
    });
}
export { v as default };
