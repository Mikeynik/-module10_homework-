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
const arr = [1,1,1]
let flag = true
arr.forEach((element, index)=>{
  arr.forEach ((element2, index2)=>{
    if(element!==element2 && index !== index2 && flag===true){
       flag = false
    }
  })
})

</script>
</body>
</html>