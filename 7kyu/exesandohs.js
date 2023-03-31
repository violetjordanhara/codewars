/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/

function XO(str) {
    let countX = 0
    let countO = 0
    for (let i = 0; i <str.length; i++){
      if (str.charAt(i) == 'x' || str.charAt(i) == 'X'){
        countX += 1;
      } else if (str.charAt(i) == 'o' || str.charAt(i) == 'O'){
        countO += 1;
      }
    }
      if (countX == countO){
        return true
      }else{
        return false
      }
  }

