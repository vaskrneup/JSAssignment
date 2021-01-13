// From this
console.log("===========================================================================")
console.log("                              NORMALIZATION JS")

const input = {
    '1': {
        id: 1,
        name: 'John',
        children: [
            {id: 2, name: 'Sally'},
            {id: 3, name: 'Mark', children: [{id: 4, name: 'Harry'}]}
        ]
    },
    '5': {
        id: 5,
        name: 'Mike',
        children: [{id: 6, name: 'Peter'}]
    }
};


function getNormalizedData(data) {
    function addNormalizedData(obj) {
        const keys = Object.keys(obj);
        if (obj.id) {
            normalizedData[obj.id.toString()] = obj
        }

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = obj[key];

            if (Array.isArray(value)) {
                const children = [];

                for (let i = 0; i < value.length; i++) {
                    const arrayData = value[i];
                    children.push(arrayData.id);
                    addNormalizedData(arrayData);
                }

                obj[key] = children;
            } else if (typeof value === "object") {
                addNormalizedData(value);
            }
        }
    }

    const normalizedData = {};
    addNormalizedData(JSON.parse(JSON.stringify(data)));
    return normalizedData;
}


console.log(getNormalizedData(input))
console.log(input)


console.log("                             END NORMALIZATION JS")
