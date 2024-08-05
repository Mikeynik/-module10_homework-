<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/vuvesitoza/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
const arr = [1,2,1]
let even = 0
let odd = 0
let zero = 0
arr.forEach((element)=>{
  if(typeof element === "number"){
    if (element!==0){
      if(element % 2 === 0){
        console.log("четное")
        even++
      }
      else{
        console.log("нечетное")
        odd++
      }
    }
    else{
      zero++
    }
  }
})
console.log("четные: ", even)
console.log("нечетные: ", odd)
console.log("нули: ", zero)



// let flag = true
// arr.forEach((element, index)=>{
//   arr.forEach ((element2, index2)=>{
//     if(element!==element2 && index !== index2 && flag===true){
//        flag = false
//     }
//   })
// })
// console.log(flag)
</script>
</body>
</html>