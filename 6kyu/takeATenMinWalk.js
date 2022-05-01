/*You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.*/

function isValidWalk(walk) {

    let countedDirections = walk.reduce(function(allDirections, direction){
      if (direction in allDirections){
        allDirections[direction]++
      }else{
        allDirections[direction] = 0
      }
      return allDirections
    }, {})
    //for it to be true, it has to take 10 min (10 blocks)
    //and for every s, give an n. for every e, a w
    //countedDirections refers to an object literal. use countedDirections['direcion']
    //to access the property
    if (walk.length<10 || walk.length>10){
      return false
    }else if (countedDirections['n'] !== countedDirections['s']||
             countedDirections['w'] !== countedDirections['e']){
      return false
    }else{
      return true
    }
  }
