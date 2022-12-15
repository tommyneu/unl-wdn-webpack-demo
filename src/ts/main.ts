const plugins = [
    "./plugins/plugin-card",
    "./plugins/plugin-header",
]

function dom_loaded(){

    // plugins.forEach((plugin_path) => {
    //     import(`${plugin_path}`).then((plugin: dcf.plugin) => {
    //         plugin.init(document.querySelectorAll(plugin.selector))
    //     })
    // })
}

const dom_changed: MutationCallback = (mutation_list, observer) => {
    // console.log("mutated", mutation_list);

    // for (const mutation of mutation_list) {
    //     if (mutation.type === 'childList') {
    //         console.log('A child node has been added or removed.');
    //     } else if (mutation.type === 'attributes') {
    //         console.log(`The ${mutation.attributeName} attribute was modified.`);
    //     }
    // }
}

const observer = new MutationObserver(dom_changed);
