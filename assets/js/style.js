
console.log("LEVEL_1_5_!");
// let clickMe = document.getElementById('clickMe');
// let count = 0;
// clickMe.addEventListener("click", () => {
//     count += 1;
//     clickMe.innerHTML = "Click me: " + count;
// })

console.log("LEVEL_1_6_!");

// let mySelect = document.getElementById('my-select');
// let optionSelected = document.getElementById('option-selected');

// mySelect.addEventListener("change", (e) => {
//     optionSelected.innerHTML = "Sie haben ausgewählt: " + e.target.value;
// })

// console.log("LEVEL_2_1_!");

// let grauTaste = document.getElementById('grauTaste');
// let weissTaste = document.getElementById('weissTaste');
// let blauTaste = document.getElementById('blauTaste');
// let gelbTaste = document.getElementById('gelbTaste');


// grauTaste.addEventListener("click", () => {
//     document.body.style.backgroundColor = "grey";
// });
// weissTaste.addEventListener("click", () => {
//     document.body.style.backgroundColor = "white";
// });
// blauTaste.addEventListener("click", () => {
//     document.body.style.backgroundColor = "blue";
// })
// gelbTaste.addEventListener("click", () => {
//     document.body.style.backgroundColor = "yellow";
// });

// console.log("LEVEL_2_2_!");
// let tastenNum = document.getElementById('tastenNum');
// let keyOut = document.getElementById('key');
// let keyCodeOut = document.getElementById('keyCode');
// let codeOut = document.getElementById('code');

// document.body.addEventListener("keydown", (e) => {
//     console.log(e);
//     console.log(e.key);
//     keyOut.innerHTML = e.key;
//     console.log(e.code);
//     codeOut.innerHTML = e.code;
//     console.log(e.keyCode);
//     keyCodeOut.innerHTML = e.keyCode;
// });

console.log("LEVEL_3_1_!");
let red = document.getElementById("rot");
let green = document.getElementById("grun");
let blue = document.getElementById("blau");
let demo = document.getElementById('demo');
let count = 0;

let changeBackground = (ele) => {
    // switch (ele) {
    //     case "pink":
    //         document.body.style.backgroundColor = ele;
    //         break;
    //     case "purple":
    //         document.body.style.backgroundColor = ele;
    //         break;
    //     case "orange":
    //         document.body.style.backgroundColor = ele;
    //         break;
    // }
    document.body.style.backgroundColor = ele;
    count++;
    demo.innerHTML = `Wir haben die Farbe ${count} Mal gewechselt.`
}
let convert = (ele) => {
    let hex = ele.toString(16);
    if (hex.length == 1) {
        return "0" + hex;
    }
    return hex;
}

let changeHandle = () => {
    let r = Number(rot.value);
    let g = green.value * 1;
    let b = Number(blue.value);
    let rgbToHex = `#${convert(r)}${convert(g)}${convert(b)}`;
    let rgb = `rgb(${r.toString(16)}, ${g.toString(16)}, ${b.toString(16)})`;
    document.body.style.backgroundColor = rgb;
    demo.innerHTML = `${rgb} – ${rgbToHex}`;
}