<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/zudukajife/1/edit)

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
let myMap = new Map(); 
myMap.set('1', 'string');
myMap.set(1, 'number');
myMap.set(true, 123);

for (let elem of myMap)
  
 console.log(elem);
</script>
</body>
</html>