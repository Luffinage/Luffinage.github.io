// document.getElementsByTagName('title')[0].innerHTML = 'bar';
// window.history.pushState({}, 'bar', '/bar');



// window.history.replaceState({
//     foo: 'bar'
// }, 'Luffinage', '');

// window.onpopstate = function (e) {
//     if (typeof e.state == "object" && e.state.foo == "bar") {
//         alert("Blah blah blah");
//     }
// };



// window.history.go(-1);

// console.log(location.href);
// // prints the current URL

// location.href = 'index.html';
// // redirects the user to https://code.tutsplus.com

// window.location.href = 'https://luffinage.tk';
// history.pushState({}, null, newUrl);


function randomResult() {
    const minRandom = document.getElementById("random__min-input-id").value;
    const maxRandom = document.getElementById("random__max-input-id").value;

    // console.log(typeof ("min: ", minRandom));
    // console.log('max: ', maxRandom);

    // if (length(minRandom) <= 0) {
    //     alert(`Please, enter a number in placeholder "Min"!`);
    //     location.reload();
    //     console.warn('Pashel Na huy');

    // } else if (length(maxRandom <= 0)) {
    //     alert(`Please, enter a number in placeholder "Max"!`);
    //     location.reload();
    //     console.warn('Pashel Na huy');

    // } else
    if (minRandom >= maxRandom) {
        alert(`Minimal number \(${(minRandom)}\) cannot be more than maximum number \(${maxRandom}\)`);
        location.reload();
        console.warn('No-no-no');

    } else {
        console.log("min: ", minRandom);
        console.log('max: ', maxRandom);
        // console.log(Math.round(Math.random() * (maxRandom - minRandom) + minRandom));

        const returnRandom = (min, max) => {
            const maxRandomReturn = Math.round(Math.random() * max);


            return maxRandomReturn >= min ? maxRandomReturn : returnRandom(min, max);
        }
        // console.log(Math.round);
        const result = returnRandom(minRandom, maxRandom);
        console.log(`You get ${result}!`);

        document.querySelector('.random__result').innerHTML = result;
    }


}

// const emptyFun = () => {};

const generationBtn = document.getElementById("random__btn-id");

generationBtn.addEventListener('click', randomResult);




// function getRandomArbitrary(min, max) {
//     const minRandom = document.getElementById("random__min-input-id").value;
//     const maxRandom = document.getElementById("random__max-input-id").value;
//      return Math.random() * (maxRandom - minRandom) + minRandom;
// }

// const generationBtn = document.getElementById("random__btn-id");

// generationBtn.addEventListener('click', getRandomArbitrary);


// console.log("getRandomArbitrary");

// const animationText = document.querySelector('title');

// setTimeout(() => {
//     H(animationText)
// }, 125)

// function H() {
//     animationText.textContent = ' H'

// }
// setTimeout(() => {
//     He(animationText)
// }, 250)

// function He() {
//     animationText.textContent = ' He'

// }

// setTimeout(() => {
//     Hel(animationText)
// }, 375)

// function Hel() {
//     animationText.textContent = ' Hel'

// }
// setTimeout(() => {
//     Hell(animationText)
// }, 500)

// function Hell() {
//     animationText.textContent = ' Hell'

// }

// setTimeout(() => {
//     Hello(animationText)
// }, 625)

// function Hello() {
//     animationText.textContent = ' Hello,'

// }
// setTimeout(() => {
//     HelloW(animationText)
// }, 750)

// function HelloW() {
//     animationText.textContent = ' Hello, W'

// }

// setTimeout(() => {
//     HelloWo(animationText)
// }, 875)

// function HelloWo() {
//     animationText.textContent = ' Hello, Wo'

// }
// setTimeout(() => {
//     HelloWor(animationText)
// }, 1000)

// function HelloWor() {
//     animationText.textContent = ' Hello, Wor'

// }

// setTimeout(() => {
//     HelloWorl(animationText)
// }, 1125)

// function HelloWorl() {
//     animationText.textContent = ' Hello, Worl'

// }
// setTimeout(() => {
//     HelloWorld(animationText)
// }, 1250)

// function HelloWorld() {
//     animationText.textContent = ' Hello, World'

// }

// setTimeout(() => {
//     HelloWorld1(animationText)
// }, 1375)

// function HelloWorld1() {
//     animationText.textContent = ' Hello, World!'

// }








String.prototype.trim = function () { return this.replace(/^\s*/, "").replace(/\s*$/, ""); }
var RecaptchaOptions = { theme: 'white' }; function htmlEntityDecode(str) { var ta = document.createElement("textarea"); ta.innerHTML = str.replace(/</g, "&lt;").replace(/>/g, "&gt;"); return ta.value; }
function getCheckedValue(radioObj) {
    if (!radioObj)
        return ""; var radioLength = radioObj.length; if (radioLength == undefined)
        if (radioObj.checked)
            return radioObj.value; else
            return ""; for (var i = 0; i < radioLength; i++) { if (radioObj[i].checked) { return radioObj[i].value; } }
    return "";
}
function setCheckedValue(radioObj, newValue) {
    if (!radioObj)
        return; var radioLength = radioObj.length; if (radioLength == undefined) { radioObj.checked = (radioObj.value == newValue.toString()); return; }
    for (var i = 0; i < radioLength; i++) { radioObj[i].checked = false; if (radioObj[i].value == newValue.toString()) { radioObj[i].checked = true; } }
}
function openPopup(url) { popupWin = window.open(url, 'target01_window', 'status,scrollbars,resizable,dependent,width=500,height=600') }
function setReload(obj) {
    var newUrl; newUrl = location.protocol + "//" + location.host; if (location.port != "") { newUrl = newURL + ":" + location.port; }
    newUrl = newUrl + location.pathname; if (location.hash != "") { newUrl = newURL + ":" + location.hash; }
    if (obj.value != "") { newUrl = newUrl + "?reload=" + obj.value; }
    location.replace(newUrl);
}
function pad(number, length) {
    var str = '' + number; while (str.length < length)
        str = '0' + str; return str;
}
function trimString(s) { return s.replace(/\s+/g, "").replace(/,/g, ""); }
function Comma(SS) {
    var T = "", S = String(SS), L = S.length - 1, C, j; for (j = 0; j <= L; j++) { T += (C = S.charAt(j)); if ((j < L) && ((L - j) % 3 == 0) && (C != "-")) { T += ","; } }
    return T;
}
function asMoney(d, s) { if (isNaN(d)) { return ("unknown"); } else { var parts = d.toFixed(2).split("."); return ((parts[0] < 0 ? "-" : "") + s + Comma(Math.abs(parts[0])) + "." + parts[1]); } }
function handleEnter(field, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode; if (keyCode == 13) {
        var i; for (i = 0; i < field.form.elements.length; i++)
            if (field == field.form.elements[i])
                break; i = (i + 1) % field.form.elements.length; field.form.elements[i].focus(); return false;
    } else return true;
}
function updateGeneratorForm() {
    var myrnd = document.getElementsByName("rnd"); if (myrnd.length != 3) { alert("Problem: myrnd.length was " + myrnd.length + ", not 3"); }
    var mydate = document.getElementById("date"); var myid = document.getElementById("id"); if (myrnd[0].checked) { mydate.disabled = true; myid.disabled = true; } else if (myrnd[1].checked) { mydate.disabled = false; myid.disabled = true; } else if (myrnd[2].checked) { mydate.disabled = true; myid.disabled = false; }
}
function submitGeneratorForm() { var myrnd0 = document.getElementsByName("rnd")[0]; var myrnd1 = document.getElementsByName("rnd")[1]; var myrnd2 = document.getElementsByName("rnd")[2]; var mydate = document.getElementById("date"); var myid = document.getElementById("id"); myrnd0.value = "new"; myrnd1.value = "date." + mydate.options[mydate.selectedIndex].value.trim(); myrnd2.value = "id." + myid.value.trim(); }
function createCookie(name, value, path, days) {
    if (!path) path = '/'; if (days) { var date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); var expires = "; expires=" + date.toGMTString(); }
    else var expires = ""; document.cookie = name + "=" + encodeURIComponent(value) + expires + ";domain=.random.org;path=" + path;
}
function readCookie(name) {
    var nameEQ = name + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1, c.length); if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length)); }
    return null;
}
function eraseCookie(name, path) { createCookie(name, "", path, -1); }