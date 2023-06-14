# array-merge
array merge
let arr = [{a:1,b:2,c:3},{a:1,b:4,c:5},{a:2,b:2,c:5}];
let arr1 = [...new Set(arr.flatMap(x => [x.a, x.b]))];

