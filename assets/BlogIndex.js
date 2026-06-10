import { j as e, m as i } from './proxy.js';
import { L as a } from '../components/grimoire/AstrolabeNav.js';
import { P as o } from '../components/grimoire/PageChrome.js';
const n = [{
        slug: 'understanding-react-hooks-alchemy',
        title: 'The Alchemy of React Hooks',
        date: '10th of Frostfall, 2023',
        excerpt: 'Transmuting class components into functional ones requires a deep understanding of the useEffect ritual.',
        tags: ['React', 'Theory'],
    },
    {
        slug: 'css-grid-sacred-geometry',
        title: 'Sacred Geometry: Mastering CSS Grid',
        date: "3rd of Sun's Height, 2023",
        excerpt: "Aligning elements on the screen is akin to placing stones in a circle. Precision is key to the spell's success.",
        tags: ['CSS', 'Layout'],
    },
    {
        slug: 'typescript-warding-spells',
        title: 'TypeScript: Warding Against Runtime Errors',
        date: "15th of Rain's Hand, 2023",
        excerpt: 'Static typing is the strongest ward a developer can cast to protect their application from the chaos of undefined behaviors.',
        tags: ['TypeScript', 'Security'],
    },
];

function m() {
    return e.jsx(o, {
        title: 'Loose Pages',
        pageNumber: 6,
        children: e.jsxs('div', {
            className: 'max-w-3xl mx-auto',
            children: [
                e.jsx('p', {
                    className: 'font-body text-xl text-grimoire-paper/80 mb-12 text-center',
                    children: 'Scattered thoughts, tutorials, and musings torn from the binding of my daily journal.',
                }),
                e.jsx('div', {
                    className: 'space-y-8',
                    children: n.map((t, s) =>
                        e.jsxs(
                            i.article, {
                                initial: { opacity: 0, x: -20 },
                                animate: { opacity: 1, x: 0 },
                                transition: { delay: s * 0.1 },
                                className: 'group relative paper-texture p-6 md:p-8 rounded-sm border border-grimoire-dark/10 hover:border-grimoire-glow/50 transition-colors',
                                children: [
                                    e.jsx('div', {
                                        className: 'absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-grimoire-dark to-transparent border-b border-l border-grimoire-dark/10 rounded-bl-sm',
                                    }),
                                    e.jsxs(a, {
                                        to: `/blog/${t.slug}`,
                                        className: 'block',
                                        children: [
                                            e.jsx('span', {
                                                className: 'font-mono text-xs text-grimoire-ink/60 mb-2 block',
                                                children: t.date,
                                            }),
                                            e.jsx('h2', {
                                                className: 'font-title text-3xl text-grimoire-dark group-hover:text-grimoire-glow transition-colors mb-3',
                                                children: t.title,
                                            }),
                                            e.jsx('p', {
                                                className: 'font-body text-grimoire-ink/80 mb-4',
                                                children: t.excerpt,
                                            }),
                                            e.jsx('div', {
                                                className: 'flex gap-2',
                                                children: t.tags.map(r =>
                                                    e.jsxs(
                                                        'span', {
                                                            className: 'text-xs font-mono px-2 py-1 bg-grimoire-dark/5 text-grimoire-dark rounded-sm',
                                                            children: ['#', r],
                                                        },
                                                        r
                                                    )
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            t.slug
                        )
                    ),
                }),
            ],
        }),
    });
}
export { m as default };