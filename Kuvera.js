//function for calculating the random numbers
function main(input) {
    //Enter your code here
    var high = 15;
    var low = 6;
    var randomNumber = Math.floor(Math.random() * (high - low + 1) + low);
    console.log(input+randomNumber);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

//for taking the inputs
process.stdin.on("data", function (input) {
    stdin_input += input;
});

//calling the function for calculating the random numbers
process.stdin.on("end", function () {
   main(stdin_input);
});

