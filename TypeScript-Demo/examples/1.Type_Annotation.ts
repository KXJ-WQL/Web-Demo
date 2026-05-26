// -------------------------变量类型注解-------------------------
// 基本类型注解
let username: string = "Alice"
let age: number = 30
let isOnline: boolean = true
console.log(`Username: ${username}, Age: ${age}, Online: ${isOnline}`)

// 数组类型注解, 有两种方式
let nums :number[] = [1,2,3,4,5]
let fruits: Array<string> = ["apple", "banana", "orange"]
console.log(`Numbers: ${nums.join(", ")}, Fruits: ${fruits.join(", ")}`)

// 元组(Tuple)类型注解
let user : [string, number] = ["Bob", 25]
console.log(`User: ${user[0]}, Age: ${user[1]}`)

// 对象类型注解
let person: { name: string, age: number } = {
    name: "Charlie",
    age: 28
}
console.log(`Person: ${person.name}, Age: ${person.age}`)

// --------------------------------------函数类型注解--------------------------------------
// 参数类型
function greet(name: string, age: number){
    console.log(`Hello, ${name}!`)
}
// 返回值类型
function add(a:boolean, b:string): string{
    return a ? b : "false"
}
// 无返回值
function logMessage(message: string): void{
    console.log(`Log: ${message}`)
}

// 自动推断
let count = 100 // TypeScript会自动推断count的类型为number
console.log(`Count: ${count}`)

// -------------------------------------特殊类型--------------------------------------------------
// any类型注解，关闭类型检测，可以赋值任何类型
let anyType : any = 1000
anyType = "Now I'm a string" // 不会报错
console.log(`Any Type: ${anyType}`)

// unknown类型注解，安全的any，必须进行类型检查才能使用
let unknownType: unknown = "This is an unknown type"    
if (typeof unknownType === "string"){
    console.log(`Unknown Type: ${unknownType}`)
}

// 联合类型注解，表示变量可以是多种类型之一
let unionType: string | number = "Hello"
unionType = 42 // 也可以赋值为number
console.log(`Union Type: ${unionType}`) 

//字面量类型注解，限制变量只能是特定的值
let literalType: "success" | "error" = "success"
//literalType = "warning" // 这行会报错，因为"warning"不在允许的值范围内
console.log(`Literal Type: ${literalType}`) 
