// UNION TYPE

function printId(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else
        console.log(id);

}

printId('hello');

// let ID: number | string | boolean;
// ID = 123
// ID = "123"
// ID = true