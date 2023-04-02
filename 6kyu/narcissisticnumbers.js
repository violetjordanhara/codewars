function narcissistic(value) {
    // count length of value
    // multiply each digit in value by length of value, get the total
    //if total = value, true
    
    let valueLength = value.toString().length;
    let valueAsArr = value.toString().split('').map(Number)
      let total = valueAsArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue ** valueLength, 0
      )
    if (total === value){
      return true
    }else{
      return false
    }
  }