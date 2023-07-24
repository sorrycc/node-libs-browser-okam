
module.exports = (function() {
    if (typeof globalThis === 'object') return globalThis;
    try {
        return this || new Function('return this')();
    } catch (e) {
        if (typeof window === 'object') return window;
    }
})();
