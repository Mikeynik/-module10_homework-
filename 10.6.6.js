const arr = [1,1,1]
let flag = true
arr.forEach((element, index)=>{
  arr.forEach ((element2, index2)=>{
    if(element!==element2 && index !== index2 && flag===true){
       flag = false
    }
  })
})
console.log (flag);