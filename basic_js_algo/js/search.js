console.log("===========================================================================")
console.log("                              SEARCH JS")

const fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
];

function searchByKey(data, key, value) {
    value = value.toString().toLowerCase();

    for (let i = 0; i < data.length; i++) {
        const _data = data[i];

        if (_data[key].toString().toLowerCase() === value) {
            return _data;
        }
    }

    return undefined;
}

function searchByName(data, name) {
    return searchByKey(data, "name", name);
}


console.log(searchByName(fruits, "apple"))
console.log(searchByKey(fruits, "id", 1))

console.log("                             END SEARCH JS")
