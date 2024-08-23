let myMap = new Map(); 
myMap.set('1', 'string');
myMap.set(1, 'number');
myMap.set(true, 123);

for (let elem of myMap)
  
 console.log(elem);