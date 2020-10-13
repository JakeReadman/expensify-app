const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res('This is my resolved data')
    }, 1500);
});

console.log('before')

promise.then((data) => {
    console.log(data);
});

console.log('after')