/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)*/

function persistence(num) {
    //set a counter to 0 first
       let counter = 0;
    //turn num into a string so we can check if num's length is more than 1
       num = num.toString();
    //while num's length is greater than a single digit number, 1 is added to the counter
    //and the digits are multiplied
       while (num.length > 1) {
         counter++;
         num = num.split('').map(Number).reduce((a, b) => a * b).toString();
       }
       
       return counter;
    }