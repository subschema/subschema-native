import {loaderFactory} from 'subschema';
import ObjectType from 'subschema/types/Object';
import {Form} from 'subschema/index.js';
const loader = loaderFactory();

function toLoader(ctx, defaults = {}) {
    return ctx.keys().reduce(function toLoader$return(o, k) {
        const key = k.replace(/^\.\/(.+?)\.(?:(style\.)?jsx?|less)$/, '$1');
        if (/\.style\.js|\.less/.test(k)) {
            loader.addStyle(key, ctx(k));
        } else {
            o[key] = ctx(k).default;
        }
        return o;
    }, defaults);
}

const Types = toLoader(
    require.context('./types', true, /^(?!(.+?)\.android\.jsx?$).*\.(jsx?|less)$/),
    {Object: ObjectType}
);
const Templates = toLoader(require.context('./templates', true, /^(?!(.+?)\.android\.jsx?$).*\.(jsx?|less)$/), {});

loader.addType(Types);
loader.addTemplate(Templates);


export default loader;