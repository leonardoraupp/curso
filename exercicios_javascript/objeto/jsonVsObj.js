const obj = {a:1, b:2, c:3}
console.log(JSON.stringify(obj));   //JSON.stringify() passar um objeto para JSON 

// console.log(JSON.parse("{a:1, b:2, c:3}"));        //JSON.parse() passar um JSON um para objeto
// console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"));
console.log(JSON.parse('{"a":1, "b":2, "c":3}'));
console.log(JSON.parse('{"a":1.7, "b":"string", "c":true, "d":{}, "e":[] }'));