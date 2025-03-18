let n = getNumber()
console.log(n); // 1 random

setTimeout(function() {
    n = 0;
    console.log(n) // 2 0
}, 2000)

setTimeout(function() {
    n = 35;
    console.log(n) // 3 35
}, 100)

setTimeout(function() {
    console.log("I am here"); //4 txt
}, 0)

console.log("five") // 5 txt

// 1 5 4 3 2

// EVENT LOOP

// https://tproger.ru/articles/event-loop-dlya-chajnikov--prostymi-slovami-o-slozhnom-mehanizme-brauzera

// https://vk.com/video-179458361_456239041?list=169b88b833a877fd25