//factorial of number 12
const num = 12

//result that gets looped (cannot be const)
let solution = 1

//loop runs 12*11*10*9*8....*1
//i cannot be less than 1
//each iteration multiplies by i - 1
for (var i = num; i >= 1; i--){
    solution = solution * i;
}

//solution
console.log(solution);