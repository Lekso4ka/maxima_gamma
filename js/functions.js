function getNumber(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getColor(a = 100) {
    // rgb(123, 95, 76)
    let red = getNumber(256);
    let green = getNumber(256);
    let blue = getNumber(256);

    return `rgba(${red},${green},${blue},${a / 100})`
}