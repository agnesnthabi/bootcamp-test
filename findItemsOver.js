function findItemsOver(fruits, threshold){
    let fruitArray = [];
  var itemOverThreshold = 0;
    for (i = 0; i < fruits.length; i++) {
      const fruit = fruits[i];
    if (fruit.qty > threshold) {
    console.log(fruit);
      fruitArray.push(fruit);
      
    }
   }
    return fruitArray;
  }
  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}
  ];