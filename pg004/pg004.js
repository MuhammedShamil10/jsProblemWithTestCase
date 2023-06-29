function checkingAnagramString(strOne, strTwo) {
let stringOne = strOne.length
let stringTwo = strTwo.length


    if(stringOne !== stringTwo) {
        return false;
    }
    for(let i = 0; i < stringOne.length; i++) {
        for(let j = 0; i < stringTwo.length; i++) {
            if(stringOne[i] == stringTwo[j]) {
                console.log(newstringOne[i]);
                console.log(newstringTwo[j]);
            }
        }
    }
    let newstringTwo = stringTwo.split(' ')
    let newstringOne = stringOne.split(' ')
}



// let result = checkingAnagramString('sas', 'ssa');
// console.log(result);
