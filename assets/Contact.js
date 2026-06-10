import { a as x } from '../components/grimoire/AstrolabeNav.js';
import { P as m } from '../components/grimoire/PageChrome.js';
import { j as e, r as i, m as r } from './proxy.js';

function h() {
    const [t, a] = i.useState(!1), [o, s] = i.useState(!1), [l, n] = i.useState(!1),
        c = d => {
            d.preventDefault(), s(!0), setTimeout(() => {
                s(!1), n(!0);
            }, 2e3);
        };
    return e.jsx(m, {
        title: 'Send a Familiar',
        pageNumber: 7,
        children: e.jsxs('div', {
            className: 'max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[70vh]',
            children: [
                e.jsx('p', {
                    className: 'font-body text-xl text-grimoire-paper/80 mb-12 text-center',
                    children: 'Whether you seek a consultation, wish to collaborate on a grand working, or simply want to exchange pleasantries, dispatch your message below.',
                }),
                e.jsx('div', {
                    className: 'relative w-full max-w-md perspective-1000',
                    children: e.jsxs(r.div, {
                        className: 'relative w-full',
                        animate: { height: t ? 'auto' : '200px' },
                        transition: { duration: 0.5 },
                        children: [
                            e.jsx(x, {
                                children: !t &&
                                    e.jsxs(r.button, {
                                        initial: { opacity: 1, scale: 1 },
                                        exit: { opacity: 0, scale: 1.5, filter: 'blur(10px)' },
                                        onClick: () => a(!0),
                                        className: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-20 h-20 bg-[#8b0000] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#a50000] transition-colors group',
                                        children: [
                                            e.jsx('div', {
                                                className: 'absolute inset-1 border-2 border-[#5c0000] rounded-full opacity-50',
                                            }),
                                            e.jsx('span', {
                                                className: 'font-title text-3xl text-[#ffcccc] opacity-80 group-hover:opacity-100',
                                                children: 'W',
                                            }),
                                            e.jsx('span', {
                                                className: 'absolute -bottom-8 font-mono text-xs text-grimoire-paper whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity',
                                                children: 'Break Seal',
                                            }),
                                        ],
                                    }),
                            }),
                            e.jsx(r.div, {
                                className: 'absolute top-0 left-0 right-0 h-1/2 bg-[#d4cbb3] origin-top z-20 shadow-md border-b border-black/10',
                                style: { clipPath: 'polygon(0 0, 100% 0, 50% 100%)' },
                                animate: { rotateX: t ? -180 : 0, zIndex: t ? 0 : 20 },
                                transition: { duration: 0.6, ease: 'easeInOut' },
                            }),
                            e.jsx('div', {
                                className: 'absolute inset-0 bg-[#c2b8a3] rounded-sm z-0',
                            }),
                            e.jsx(r.div, {
                                className: 'relative z-10 paper-texture mx-4 p-6 rounded-sm shadow-xl border border-grimoire-dark/10 overflow-hidden',
                                initial: { y: 20, opacity: 0 },
                                animate: {
                                    y: t ? -40 : 20,
                                    opacity: t ? 1 : 0,
                                    pointerEvents: t ? 'auto' : 'none',
                                },
                                transition: { duration: 0.5, delay: t ? 0.3 : 0 },
                                children: l ?
                                    e.jsxs('div', {
                                        className: 'text-center py-12 text-grimoire-ink',
                                        children: [
                                            e.jsx('div', {
                                                className: 'text-4xl mb-4',
                                                children: '✨',
                                            }),
                                            e.jsx('h3', {
                                                className: 'font-title text-2xl mb-2',
                                                children: 'Message Dispatched',
                                            }),
                                            e.jsx('p', {
                                                className: 'font-body',
                                                children: 'Your familiar is on its way. Expect a reply before the next full moon.',
                                            }),
                                        ],
                                    }) : e.jsxs('form', {
                                        onSubmit: c,
                                        className: 'space-y-4 text-grimoire-ink',
                                        children: [
                                            e.jsxs('div', {
                                                children: [
                                                    e.jsx('label', {
                                                        className: 'block font-title text-xl mb-1',
                                                        children: 'Your True Name',
                                                    }),
                                                    e.jsx('input', {
                                                        type: 'text',
                                                        required: !0,
                                                        className: 'w-full bg-transparent border-b border-grimoire-ink/30 focus:border-grimoire-ink outline-none font-body text-lg py-1 transition-colors placeholder:text-grimoire-ink/30',
                                                        placeholder: 'e.g. Merlin',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                children: [
                                                    e.jsx('label', {
                                                        className: 'block font-title text-xl mb-1',
                                                        children: 'Return Address (Email)',
                                                    }),
                                                    e.jsx('input', {
                                                        type: 'email',
                                                        required: !0,
                                                        className: 'w-full bg-transparent border-b border-grimoire-ink/30 focus:border-grimoire-ink outline-none font-body text-lg py-1 transition-colors placeholder:text-grimoire-ink/30',
                                                        placeholder: 'merlin@camelot.gov',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                children: [
                                                    e.jsx('label', {
                                                        className: 'block font-title text-xl mb-1',
                                                        children: 'The Missive',
                                                    }),
                                                    e.jsx('textarea', {
                                                        required: !0,
                                                        rows: 4,
                                                        className: 'w-full bg-transparent border-b border-grimoire-ink/30 focus:border-grimoire-ink outline-none font-body text-lg py-1 transition-colors resize-none placeholder:text-grimoire-ink/30',
                                                        placeholder: 'I seek your expertise in...',
                                                    }),
                                                ],
                                            }),
                                            e.jsx('button', {
                                                type: 'submit',
                                                disabled: o,
                                                className: 'w-full mt-6 py-2 border border-grimoire-ink text-grimoire-ink font-title text-xl hover:bg-grimoire-ink hover:text-grimoire-paper transition-colors disabled:opacity-50',
                                                children: o ? 'Casting...' : 'Dispatch Familiar',
                                            }),
                                        ],
                                    }),
                            }),
                            e.jsx('div', {
                                className: 'absolute bottom-0 left-0 right-0 h-full bg-[#d4cbb3] z-10 shadow-[0_-5px_10px_rgba(0,0,0,0.1)]',
                                style: {
                                    clipPath: 'polygon(0 100%, 100% 100%, 100% 40%, 50% 60%, 0 40%)',
                                },
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
export { h as default };
