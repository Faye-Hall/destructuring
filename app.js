const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

let {
    a,
    b
} = obj.numbers

let arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]];

function raceResult([first, second, third, ...rest]) {
    return {
        first,
        second,
        third,
        rest
    }
}

const raceResults = ([first, second, third, ...rest]) => ({
    first,
    second,
    third,
    rest
})