const test = require(ava);

// test('random test',t =>{
//     t.pass();
// })

const addNumbers = (a,b) => a+b;
test('addNumbers',t =>{
    t.is(addNumbers(1,2),3);
})