<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/tekebeyomu/1/edit)

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
let value = prompt()
value = +value
console.log(value)
if(typeof value == "number" && !isNaN(value)){
  if(value % 2 === 0){
    console.log("четное")
  }
  else{
    console.log("нечетное")
  }
}
else{
  console.log("Упс, кажется, вы ошиблись")
}
</script>
</body>
</html>