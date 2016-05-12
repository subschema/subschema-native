"use strict";
import _loader from './loader';
import ObjectType from 'subschema/types/Object';

export default _loader({
    type: 'Type',
    ctx: require.context('./types', true, /^(?!(.+?)\.android\.jsx?$).*\.(jsx?|less)$/),
    src: {Object: ObjectType}
}, {
    type: 'Template', ctx: require.context('./templates', true, /^(?!(.+?)\.android\.jsx?$).*\.(jsx?|less)$/),
    src: {}
});
