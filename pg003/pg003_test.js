let  numbers = [10,20,30,4,2,8,3,7,9,6]
let convertedEvenNumber = []
function evenNumber(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 == 0) {
            convertedEvenNumber.push(numbers[i]);
        }
    }
}
evenNumber([1,2,3,4,5,6]);
console.log(convertedEvenNumber)