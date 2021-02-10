const fetch = require("node-fetch");
// const obj= {
//     name: 'Tony',
//     age: 18,
//     links:[
//         { name: 'Amazon', key: 324234},
//         { name:'Facebook', key:34234234},
//         {name: 'Google', key:5646546}
//     ]
// };

// // console.log(obj.links.filter(x => x.name == 'Facebook')[0]["key"]);

// // for(var propName in obj){
// //     console.log(obj[propName]);
// // }

// // console.log(Object.getOwnPropertyNames(obj));

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((a,b) => a-b);
// console.log(array1);

async function FetchData(){
    const res = await fetch('http://127.0.0.1:2379/v2/keys/interview?recursive=true&wait=true&watchIndex=4');
    const data = await res.json();
    console.log(data);
}

FetchData();