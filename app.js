var numbers = [12, 45, 90, 7, 33, 104, 2, 25];
document.getElementById('top').innerHTML = numbers;
// document.write(numbers);
var largest = numbers[0]; // 12 , phelay hum ne kuch bhi de dia aur bad m, jo sab sy bari h wo assign krdi
for (var i = 0; i < numbers.length; i++) { // 0 < 7 = T | run 7 times
    if (numbers[i] > largest) { // 45 > Largest (12) // her bar 12 k hisaab sy check nhe Hogi condition, Nichay jo iski value reassign kr rhay hn, Us k hisaab sy check Hoga Yahn
        // reassign the value of largest
        largest = numbers[i]; // 45, 90 .....
    }
} // jab tk loop terminate nhe Hoga, Nichay ka code Jab tk execute nhe hoga | it will terminate after running 7 times
// then this code will run
// document.write( '<br><br>','The Largest Number is ', largest, '<br><br>');
function large() {
    // document.write('The Smallest Number is ', smallest);
    document.getElementById('L').innerHTML = `The Largest Number is ${largest}`
    
}
var smallest = numbers[0] // 12
for (var j = 0; j < numbers.length; j++) {  // 4 < 8 | run 8 times
    if( numbers[j] < smallest ) { // 7 < 12 // Now smallest = 7 | 25 < 2
        // reassign value of smallest
        smallest = numbers[j]; // smallest new value = 7
    }
}
function small() {
    // document.write('The Smallest Number is ', smallest);
    document.getElementById('S').innerHTML = `The Smallest Number is ${smallest}`
}