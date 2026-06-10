import { j as e } from './proxy.js';
import { c as i, d as n, L as s } from '../components/grimoire/AstrolabeNav.js';
import { P as a } from '../components/grimoire/PageChrome.js';
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c = [
        ['path', { d: 'm12 19-7-7 7-7', key: '1l729n' }],
        ['path', { d: 'M19 12H5', key: 'x3x0zl' }],
    ],
    l = i('arrow-left', c);

function x() {
    const { slug: t } = n(),
        o =
        (t == null ?
            void 0 :
            t
            .split('-')
            .map(r => r.charAt(0).toUpperCase() + r.slice(1))
            .join(' ')) || 'Unknown Spell';
    return e.jsx(a, {
        children: e.jsxs('div', {
            className: 'max-w-3xl mx-auto paper-texture p-8 md:p-12 rounded-sm shadow-xl text-grimoire-ink min-h-[80vh]',
            children: [
                e.jsxs(s, {
                    to: '/blog',
                    className: 'inline-flex items-center text-grimoire-ink/60 hover:text-grimoire-dark font-mono text-sm mb-8 transition-colors',
                    children: [e.jsx(l, { size: 16, className: 'mr-2' }), 'Back to Index'],
                }),
                e.jsxs('header', {
                    className: 'mb-12 border-b-2 border-grimoire-ink/20 pb-8 text-center',
                    children: [
                        e.jsx('h1', {
                            className: 'font-title text-4xl md:text-5xl text-grimoire-dark mb-4',
                            children: o,
                        }),
                        e.jsxs('div', {
                            className: 'font-mono text-sm text-grimoire-ink/60 flex justify-center gap-4',
                            children: [
                                e.jsx('span', { children: '10th of Frostfall, 2023' }),
                                e.jsx('span', { children: '•' }),
                                e.jsx('span', { children: '5 min read' }),
                            ],
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: 'prose prose-lg prose-grimoire max-w-none font-body',
                    children: [
                        e.jsx('p', {
                            className: 'first-letter:text-6xl first-letter:font-title first-letter:text-grimoire-dark first-letter:mr-2 first-letter:float-left',
                            children: "The transition from class-based components to functional ones was a paradigm shift akin to discovering a new school of magic. No longer were we bound by the rigid lifecycle methods; instead, we learned to hook into the very fabric of React's render cycle.",
                        }),
                        e.jsx('h2', {
                            className: 'font-title text-3xl text-grimoire-dark mt-8 mb-4',
                            children: 'The Anatomy of useEffect',
                        }),
                        e.jsxs('p', {
                            children: [
                                'Consider the ',
                                e.jsx('code', { children: 'useEffect' }),
                                ' hook as a ward you place upon a component. It watches for specific changes in the environment (the dependency array) and triggers its magic only when those conditions are met.',
                            ],
                        }),
                        e.jsx('pre', {
                            className: 'bg-grimoire-dark text-grimoire-glow p-4 rounded-sm font-mono text-sm overflow-x-auto my-6 border border-grimoire-glow/20 shadow-inner',
                            children: e.jsx('code', {
                                children: `useEffect(() => {
  // The incantation
  const connection = createConnection();
  connection.connect();

  // The dispelling ritual (cleanup)
  return () => {
    connection.disconnect();
  };
}, [connectionId]); // The focus components`,
                            }),
                        }),
                        e.jsx('p', {
                            children: 'Failing to provide a cleanup function is like leaving a portal open; eventually, memory leaks will consume your application, dragging its performance into the abyss.',
                        }),
                        e.jsx('blockquote', {
                            className: 'border-l-4 border-grimoire-dark pl-4 italic my-6 text-grimoire-ink/80',
                            children: '"A spell cast without a counter-spell is a disaster waiting to happen." - Ancient Developer Proverb',
                        }),
                        e.jsx('p', {
                            children: 'Mastering these hooks requires patience and practice. Do not be discouraged if your first few attempts result in infinite render loops. We have all accidentally summoned a recursive demon in our early days.',
                        }),
                    ],
                }),
                e.jsx('div', {
                    className: 'mt-16 pt-8 border-t border-grimoire-ink/20 flex justify-center',
                    children: e.jsxs('svg', {
                        width: '40',
                        height: '40',
                        viewBox: '0 0 100 100',
                        className: 'text-grimoire-ink/40',
                        children: [
                            e.jsx('polygon', {
                                points: '50,10 90,90 10,90',
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeWidth: '2',
                            }),
                            e.jsx('circle', {
                                cx: '50',
                                cy: '65',
                                r: '15',
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeWidth: '2',
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
export { x as default };