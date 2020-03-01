function drawRec() {
    let line = "*";
    let shape ="";
    for (let index = 0; index < 7; index++) {
        if (index > 0 && index < 6) {
            shape += line + "<span>" + line.repeat(19) + "</span>" + line + "<br>";
        } else {
            shape += line.repeat(21) + "<br>";
        }
    }
    document.getElementById('shape').innerHTML = shape;
}