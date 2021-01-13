console.log("===========================================================================")
console.log("                              PATTERN JS")


function repeatNTimes(n, text) {
    let finalText = "";

    for (let i = 0; i < n; i++) {
        finalText += text;
    }

    return finalText;
}

function printPattern(n) {
    for (let i = n; i >= 1; i--) {
        console.log(repeatNTimes(i, "*"))
    }
}

printPattern(5);

console.log("                             END PATTERN JS")
