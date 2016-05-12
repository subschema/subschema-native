"use strict";

import {loaderFactory} from 'subschema';
import Validators from 'subschema/validators';


function toLoader(ctx, defaults = {}) {
    return ctx.keys().reduce(function toLoader$return(o, k) {
        const key = k.replace(/^\.\/(.+?)(\.ios|\.android)?\.(?:(style\.)?jsx?|less)$/, '$1');
        if (/\.style\.js|\.less/.test(k)) {
            loader.addStyle(key, ctx(k));
        } else {
            o[key] = ctx(k).default;
        }
        return o;
    }, defaults);
}
function load(loader, {type, ctx, src = {}}) {
    const Types = toLoader(
        ctx,
        src
    );
    loader[`add${type}`](toLoader(ctx, src));
}
export default (...contexts)=> {
    const loader = loaderFactory();
    contexts.forEach((v)=>load(loader, v));
    loader.addValidator(Validators);
    return loader;
}