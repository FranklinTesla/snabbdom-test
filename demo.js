const snabbdom = require('snabbdom');
const patch = snabbdom.init([ // Init patch function with chosen modules
    require('snabbdom/modules/class').default, // makes it easy to toggle classes
    require('snabbdom/modules/props').default, // for setting properties on DOM elements
    require('snabbdom/modules/style').default, // handles styling on elements with support for animations
    require('snabbdom/modules/eventlisteners').default // attaches event listeners
]);
const h = require('snabbdom/h').default; // helper function for creating vnodes

const container = document.getElementById('container');
let vnode = h('div.row', {
        key: 'HEHE',
        hook: {
            init: (vnode) => {
                console.log('init');
            },
            create: (emptyVnode, vnode) => {
                console.log(emptyVnode)
                console.log(vnode)
            },
            insert: (vnode) => {
                console.log('insert');
            }
        }
    }, 'hehehehehe');
patch(container, vnode);