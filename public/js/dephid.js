const func = () => {
    // for (let i = 0; i < dep.length; i++) {
    //   for (let j = 1; j < dep.events[i].length; j++) {
    //     var elem = document.querySelector("#" + i);
    //     elem.display = block;
    //   }
    // }

    let depEl = document.getElementById('1')
    console.log("inside func");
    while (depEl) {
        depEl.style.display = 'block'
        let nextId = parseInt(depEl.id) + 1;
        depEl = document.getElementById(toString(nextId))
    }
};

export default func;
