console.log("===========================================================================")
console.log("                              TRANSFORM JS")
console.log("===========================================================================")

let numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) {
    const transformedNumberCollection = [];

    for (let i = 0; i < collection.length; i++) {
        const transformedNumber = tranFunc(collection[i]);

        transformedNumberCollection.push(transformedNumber);
    }

    return transformedNumberCollection;
}

let output = transform(numbers, function (num) {
    return num * 2;
});

console.log(output)
console.log("===========================================================================")
console.log("                             END TRANSFORM JS")
console.log("===========================================================================")
