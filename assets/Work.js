import { P as o } from '../components/grimoire/PageChrome.js';
import { j as e, m as s } from './proxy.js';
const n = [{
            role: 'Senior Spellweaver (Frontend Engineer)',
            coven: 'Arcane Analytics Inc.',
            period: '2021 - Present',
            duties: [
                'Architected a real-time scrying dashboard using React and WebSockets, reducing latency by 40%.',
                'Mentored apprentice developers in the dark arts of state management and component lifecycle.',
                'Established a new design system grimoire, standardizing UI components across 5 product lines.',
            ],
        },
        {
            role: 'Journeyman Artificer (Full Stack Dev)',
            coven: 'Ethereal Commerce',
            period: '2018 - 2021',
            duties: [
                'Conjured a headless e-commerce platform using Next.js, increasing conversion rates by 25%.',
                'Optimized database queries, reducing summoning time for complex product catalogs.',
                'Integrated third-party payment gateways with impenetrable security wards.',
            ],
        },
        {
            role: 'Apprentice Coder',
            coven: 'The Digital Guild',
            period: '2016 - 2018',
            duties: [
                'Maintained legacy PHP scrolls and slowly transmuted them into modern JavaScript.',
                'Assisted in the creation of responsive landing pages for local merchants.',
            ],
        },
    ],
    l = ({ exp: r, index: i }) =>
    e.jsxs(s.div, {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !0, margin: '-50px' },
        transition: { duration: 0.8, delay: i * 0.2 },
        className: 'relative pl-8 md:pl-12 py-8 border-b border-grimoire-ink/20 last:border-0',
        children: [
            e.jsx('div', {
                className: 'absolute left-0 top-0 bottom-0 w-px bg-grimoire-ink/20',
                children: e.jsx('div', {
                    className: 'absolute top-10 -left-1.5 w-3 h-3 rounded-full border-2 border-grimoire-ink bg-grimoire-paper',
                }),
            }),
            e.jsxs('div', {
                className: 'flex flex-col md:flex-row md:items-baseline justify-between mb-4',
                children: [
                    e.jsx('h3', {
                        className: 'font-title text-2xl text-grimoire-dark',
                        children: r.role,
                    }),
                    e.jsx('span', {
                        className: 'font-mono text-sm text-grimoire-ink/60 border-b border-dashed border-grimoire-ink/30 pb-1',
                        children: r.period,
                    }),
                ],
            }),
            e.jsxs('h4', {
                className: 'font-body text-lg text-grimoire-accent italic mb-4',
                children: ['@ ', r.coven],
            }),
            e.jsx('ul', {
                className: 'space-y-3',
                children: r.duties.map((a, t) =>
                    e.jsxs(
                        s.li, {
                            initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
                            whileInView: {
                                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                            },
                            viewport: { once: !0 },
                            transition: {
                                duration: 1,
                                delay: 0.5 + t * 0.2,
                                ease: 'easeOut',
                            },
                            className: 'font-body text-grimoire-ink/80 flex items-start',
                            children: [
                                e.jsx('span', {
                                    className: 'text-grimoire-glow mr-3 mt-1',
                                    children: '✦',
                                }),
                                a,
                            ],
                        },
                        t
                    )
                ),
            }),
        ],
    });

function m() {
    return e.jsx(o, {
        title: 'Past Covens',
        pageNumber: 4,
        children: e.jsx('div', {
            className: 'max-w-3xl mx-auto',
            children: e.jsxs('div', {
                className: 'paper-texture p-8 md:p-12 rounded-sm shadow-lg border border-grimoire-dark/10 relative',
                children: [
                    e.jsxs('div', {
                        className: 'text-center mb-12 border-b-2 border-double border-grimoire-ink/30 pb-6',
                        children: [
                            e.jsx('h2', {
                                className: 'font-title text-4xl text-grimoire-ink mb-2',
                                children: 'Record of Service',
                            }),
                            e.jsx('p', {
                                className: 'font-mono text-xs text-grimoire-ink/50 uppercase tracking-widest',
                                children: 'Transcribed by hand • Official Ledger',
                            }),
                        ],
                    }),
                    e.jsx('div', {
                        className: 'relative',
                        children: n.map((r, i) => e.jsx(l, { exp: r, index: i }, i)),
                    }),
                    e.jsx('div', {
                        className: 'mt-12 flex justify-center',
                        children: e.jsxs('svg', {
                            width: '100',
                            height: '20',
                            viewBox: '0 0 100 20',
                            className: 'text-grimoire-ink/30',
                            children: [
                                e.jsx('path', {
                                    d: 'M0,10 Q25,20 50,10 T100,10',
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    strokeWidth: '1',
                                }),
                                e.jsx('circle', {
                                    cx: '50',
                                    cy: '10',
                                    r: '3',
                                    fill: 'currentColor',
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
export { m as default };
