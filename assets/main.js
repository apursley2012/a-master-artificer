const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
    (m.f = [
        'assets/Home.js',
        'assets/proxy.js',
        'components/grimoire/PageChrome.js',
        'components/grimoire/AstrolabeNav.js',
        'components/grimoire/CustomCursor.js',
        'assets/About.js',
        'assets/use-transform.js',
        'assets/Projects.js',
        'assets/Skills.js',
        'assets/Work.js',
        'assets/CaseStudies.js',
        'assets/BlogIndex.js',
        'assets/Article.js',
        'assets/Contact.js',
        'assets/Testimonials.js',
    ])
) => i.map(i => d[i]);
import {
    r as A,
    A as E,
    R as P,
    u as g,
    b as o,
    a as v,
    H as y,
} from '../components/grimoire/AstrolabeNav.js';
import { C as L } from '../components/grimoire/CustomCursor.js';
import { j as e, r as n } from './proxy.js';
(function() {
    const m = document.createElement('link').relList;
    if (m && m.supports && m.supports('modulepreload')) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
        p(t);
    new MutationObserver(t => {
        for (const s of t)
            if (s.type === 'childList')
                for (const r of s.addedNodes)
                    r.tagName === 'LINK' && r.rel === 'modulepreload' && p(r);
    }).observe(document, { childList: !0, subtree: !0 });

    function d(t) {
        const s = {};
        return t.integrity && (s.integrity = t.integrity), t.referrerPolicy &&
            (s.referrerPolicy = t.referrerPolicy), t.crossOrigin === 'use-credentials' ?
            (s.credentials = 'include') :
            t.crossOrigin === 'anonymous' ?
            (s.credentials = 'omit') :
            (s.credentials = 'same-origin'), s;
    }

    function p(t) {
        if (t.ep) return;
        t.ep = !0;
        const s = d(t);
        fetch(t.href, s);
    }
})();
const b = 'modulepreload',
    w = function(u) {
        return '/' + u;
    },
    x = {},
    i = function(m, d, p) {
        let t = Promise.resolve();
        if (d && d.length > 0) {
            document.getElementsByTagName('link');
            const r = document.querySelector('meta[property=csp-nonce]'),
                l =
                (r == null ? void 0 : r.nonce) ||
                (r == null ? void 0 : r.getAttribute('nonce'));
            t = Promise.allSettled(
                d.map(c => {
                    if (((c = w(c)), c in x)) return;
                    x[c] = !0;
                    const f = c.endsWith('.css'),
                        h = f ? '[rel="stylesheet"]' : '';
                    if (document.querySelector(`link[href="${c}"]${h}`)) return;
                    const a = document.createElement('link');
                    if (
                        ((a.rel = f ? 'stylesheet' : b), f ||
                            (a.as = 'script'), (a.crossOrigin = ''), (a.href = c), l &&
                            a.setAttribute('nonce', l), document.head.appendChild(a), f)
                    )
                        return new Promise((_, j) => {
                            a.addEventListener('load', _), a.addEventListener('error', () =>
                                j(new Error(`Unable to preload CSS for ${c}`))
                            );
                        });
                })
            );
        }

        function s(r) {
            const l = new Event('vite:preloadError', { cancelable: !0 });
            if (((l.payload = r), window.dispatchEvent(l), !l.defaultPrevented))
                throw r;
        }
        return t.then(r => {
            for (const l of r || [])
                l.status === 'rejected' && s(l.reason);
            return m().catch(s);
        });
    },
    R = n.lazy(() =>
        i(() =>
            import ('./Home.js'), __vite__mapDeps([0, 1, 2, 3, 4]))
    ),
    O = n.lazy(() =>
        i(() =>
            import ('./About.js'), __vite__mapDeps([5, 1, 2, 6, 4]))
    ),
    I = n.lazy(() =>
        i(() =>
            import ('./Projects.js'), __vite__mapDeps([7, 1, 2, 3]))
    ),
    T = n.lazy(() =>
        i(() =>
            import ('./Skills.js'), __vite__mapDeps([8, 1, 2, 3]))
    ),
    D = n.lazy(() =>
        i(() =>
            import ('./Work.js'), __vite__mapDeps([9, 1, 2]))
    ),
    N = n.lazy(() =>
        i(() =>
            import ('./CaseStudies.js'), __vite__mapDeps([10, 1, 2, 6, 4]))
    ),
    S = n.lazy(() =>
        i(() =>
            import ('./BlogIndex.js'), __vite__mapDeps([11, 1, 3, 2]))
    ),
    z = n.lazy(() =>
        i(() =>
            import ('./Article.js'), __vite__mapDeps([12, 1, 3, 2]))
    ),
    V = n.lazy(() =>
        i(() =>
            import ('./Contact.js'), __vite__mapDeps([13, 1, 2, 3]))
    ),
    C = n.lazy(() =>
        i(() =>
            import ('./Testimonials.js'), __vite__mapDeps([14, 1, 2]))
    );

function k() {
    return e.jsx('div', {
        className: 'min-h-screen flex items-center justify-center bg-grimoire-dark',
        children: e.jsxs('div', {
            className: 'relative w-24 h-24 animate-spin-slow',
            children: [
                e.jsx('svg', {
                    viewBox: '0 0 100 100',
                    className: 'w-full h-full text-grimoire-glow/30',
                    children: e.jsx('polygon', {
                        points: '50,5 20,95 95,35 5,35 80,95',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                    }),
                }),
                e.jsx('div', {
                    className: 'absolute inset-0 flex items-center justify-center',
                    children: e.jsx('div', {
                        className: 'w-2 h-2 bg-grimoire-glow rounded-full animate-pulse-glow',
                    }),
                }),
            ],
        }),
    });
}

function B() {
    const u = g();
    return e.jsx(v, {
        mode: 'wait',
        children: e.jsxs(
            P, {
                location: u,
                children: [
                    e.jsx(o, { path: '/', element: e.jsx(R, {}) }),
                    e.jsx(o, { path: '/about', element: e.jsx(O, {}) }),
                    e.jsx(o, { path: '/projects', element: e.jsx(I, {}) }),
                    e.jsx(o, { path: '/skills', element: e.jsx(T, {}) }),
                    e.jsx(o, { path: '/work', element: e.jsx(D, {}) }),
                    e.jsx(o, { path: '/case-studies', element: e.jsx(N, {}) }),
                    e.jsx(o, { path: '/blog', element: e.jsx(S, {}) }),
                    e.jsx(o, { path: '/blog/:slug', element: e.jsx(z, {}) }),
                    e.jsx(o, { path: '/contact', element: e.jsx(V, {}) }),
                    e.jsx(o, { path: '/testimonials', element: e.jsx(C, {}) }),
                    e.jsx(o, {
                        path: '*',
                        element: e.jsxs('div', {
                            className: 'min-h-screen flex flex-col items-center justify-center text-center p-8',
                            children: [
                                e.jsx('h1', {
                                    className: 'font-title text-6xl text-grimoire-glow mb-4',
                                    children: '404',
                                }),
                                e.jsx('p', {
                                    className: 'font-body text-xl text-grimoire-paper',
                                    children: 'Spell miscast. The page you seek has vanished into the aether.',
                                }),
                            ],
                        }),
                    }),
                ],
            },
            u.pathname
        ),
    });
}

function q() {
    return e.jsxs(y, {
        children: [
            e.jsx(L, {}),
            e.jsx(E, {}),
            e.jsx(n.Suspense, { fallback: e.jsx(k, {}), children: e.jsx(B, {}) }),
        ],
    });
}
A.render(e.jsx(q, {}), document.getElementById('root'));