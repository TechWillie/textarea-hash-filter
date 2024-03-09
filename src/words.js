//  https://www.youtube.com/watch?v=DwU6Q4bCAB0

import App from "./App";

const inPut1 = document.getElementById('txt')
// const subMit = document.getElementById("sub")
const outPut = document.getElementById("out1")
const outPut2 = document.getElementById("out2")
const word = ["build 1"]

const words = ["sent"]


inPut1.addEventListener("keypress", debounce(wordsPush, 3000), ev => {
    word.push(ev.key)
    let _word = word
    outPut.innerHTML = _word.join("")

    // function wordsPush(){
    //     words.push(_word)
    //     outPut2.innerHTML = words.join(", ")
    //     outPut.innerHTML = []
    // }

})

function wordsPush(){
    words.push(this._word)
    outPut2.innerHTML = words.join(", ")
    outPut.innerHTML = []
}


function debounce(fn, delay){
    let timer;
    return ()=> {
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn()
        }, delay)
    };
}
