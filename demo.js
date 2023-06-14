// arr=[{a:1,b:2,c:3},{a:1,b:4,c:5},{a:2,b:2,c:5}] 
// 一个数组
// 我现在需要把里面的 a和b去重变成一个数组
// arr1=[1,2,4]

//方法1
let arr = [{a:1,b:2,c:3},{a:1,b:4,c:5},{a:2,b:2,c:5}];
let arr1 = [...new Set(arr.flatMap(x => [x.a, x.b]))];



//方法2

// let arr = [{a:1,b:2,c:3},{a:1,b:4,c:5},{a:2,b:2,c:5}];
// let arr1 = [];
// arr.forEach(item => {
//     if (!arr1.includes(item.a)) {
//         arr1.push(item.a);
//     }
//     if (!arr1.includes(item.b)) {
//         arr1.push(item.b);
//     }
// });
