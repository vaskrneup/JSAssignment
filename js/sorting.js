console.log("===========================================================================")
console.log("                              SORTING JS")
console.log("===========================================================================")

let arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];

// [6,5,4,3,2,1]

function sortBy(array, key, asc = true) {
    const sortedArray = array.slice();

    for (let i = 0; i < sortedArray.length; i++) {
        let sorted = true;

        for (let j = 0; j < (sortedArray.length - 1); j++) {
            const first = sortedArray[j];
            const sec = sortedArray[j + 1];

            if (asc ? first[key] > sec[key] : first[key] < sec[key]) {
                sortedArray[j] = sec;
                sortedArray[j + 1] = first;

                sorted = false;
            }
        }

        if (sorted) {
            break
        }
    }

    return sortedArray;
}

let sorted = sortBy(arr, 'name');
console.log(sorted)
console.log("===========================================================================")
console.log("                             END SORTING JS")
console.log("===========================================================================")
