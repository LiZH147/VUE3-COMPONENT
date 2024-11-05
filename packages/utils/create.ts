function _bem(prefixName: string, block: string, element: string, modifier: string) {
    if (block) {
        prefixName += `-${block}`;
    }
    if (element) {
        prefixName += `__${element}`;
    }
    if (modifier) {
        prefixName += `--${modifier}`;
    }
    return prefixName;
}

function createBEM(prefixName: string) {
    const b = (block: string) => _bem(prefixName, block, '', '');
    const e = (element: string) => element ? _bem(prefixName, '', element, '') : '';
    const m = (modifier: string) => modifier ? _bem(prefixName, '', '', modifier) : '';
    const be = (block: string, element: string) => block && element ? _bem(prefixName, block, element, '') : '';
    const em = (element: string, modifier: string) => element && modifier ? _bem(prefixName, '', element, modifier) : '';
    const bm = (block: string, modifier: string) => block && modifier ? _bem(prefixName, block, '', modifier) : '';
    const bem = (block: string, element: string, modifier: string) => block && element && modifier ? _bem(prefixName, block, element, modifier) : '';
    const is = (name: string, state: string | boolean) => { state ? `is-${name}` : '' }
    return {
        b,
        e,
        m,
        be,
        em,
        bm,
        bem
    }
}

export function createNamespace(name: string) {
    const prefixName = `z-${name}`;
    return createBEM(prefixName);
}

// const bem = createNamespace('icon');

// console.log(bem.b('box'));
// console.log(bem.e('elemate'));
// console.log(bem.m('modefier'));
// console.log(bem.be('box', 'elemate'));
// console.log(bem.em('elemate', 'modefier'));
// console.log(bem.bm('box', 'modefier'));
// console.log(bem.bem('box', 'elemate', 'modefier'));
