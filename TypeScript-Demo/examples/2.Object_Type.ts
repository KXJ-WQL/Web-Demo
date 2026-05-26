// 声明基础对象类型
let pensons : {name: string, age: number};
pensons = {name: "wql", age: 100} // 正确
// pensons = {name: "woof", age: "100"} // 错误：age类型错误
// persons = {name: "woof"} // 错误：缺少属性age
console.log(`${pensons.name}\n${pensons.age}\n`)

// 声明数组类型
let arr1 : number[]; // 方式1
let arr2 : Array<string>; //方式2
arr1 = [1,2,3,4,5]
arr2 = ["apple", "banana", "orange"]
console.log(`${arr1.join(", ")}\n${arr2.join(", ")}`)

// 函数定义 - 多种方式
// 方式1：函数声明式定义
function add(name: string, age: number) : string{
    return `Name: ${name}, Age: ${age}`
}
console.log(add("kxj", 18))
// 方式2：函数表示式定义, 格式：变量名: (参数列表) => 返回值 = 实际函数
const multiply : (a: number, b: string)  => string = (a, b) => a + b;
console.log(multiply(18, "WQL"))
// 方式3：使用类型别名
type MathOp = (a: number, b: number) => number
const divide : MathOp = (a, b) => a / b;
console.log(divide(18, 2))



