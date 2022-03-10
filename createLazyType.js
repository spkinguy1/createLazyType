// first we'll get an Object includes 3 prob
//  {element : someele , text : some text , duration : some number }
// then we append the text inside the elements by duration that specified

function createLazyType({ element: el, text: txt, duration: duration }) {
    // the repository that we'll seperate texts
    let buffer = [];

    // we're parsing text and push into array
    for (let i = 0; i <= txt.length; i++) {
        buffer.push(txt[i]);
    }

    //pointer for pick up letter from  []buffer
    let g = 0;

    // per every "duration" we manually release an event on the element
    // by the (key) of current letter in the []buffer that g is pointing to ..
    // and whenever the event would happen we'll push the key to the textContent of
    // element
    setInterval(() => {
        el.dispatchEvent(
            new KeyboardEvent("keydown", {
                key: buffer[g],
            })
        );
        g++;
    }, duration);

    //
    el.addEventListener("keydown", (e) => {
        el.textContent += e.key;
    });
}

exports = {
    createLazyType
};
