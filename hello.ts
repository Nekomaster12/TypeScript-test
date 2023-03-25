let num : number = 10
let isAdmin : boolean
isAdmin = true
let empty : null = null;
let userName : string = "Alex"
let date : Date = new Date()
let undef: undefined = undefined
let numArray: number[] = [1,2,3]
let tuple1: [string,number] = ["Alex", 20] // массив из строки и числа
let any1: [...any] = [true, 34, "23"] // массив из любых элементов
//^ any лучше не использовать :)

const numb: number = 15;
const anyArr: [...any] = [1,2,3,true,null,{da: true}]
const numArr: Array<number> = [1,2,3,4,5,6]
const obj : object = {
    name: "Alex",
    age: 20,
    isAdmin: true
}
type Name = string
let firstUser: Name = "John"
let secondUser: Name = "Tomiko"


enum Directions{
    up,
    down,
    left,
    right
}
Directions.down //^ 1
Directions[1] //^ "down"
enum Links{
    vk = "https://vk.com/im",
    youtube = "https://www.youtube.com",
    google = "https://www.google.com"
}
Links.vk //^ "https://vk.com/im"

//* Константный enum
const enum Links2{
    vk = "https://vk.com/im",
    youtube = "https://www.youtube.com",
    google = "https://www.google.com"
}
const linkArr: Array<string> = [Links2.vk, Links2.youtube, Links2.google] //& Тогда в JS не будет создаваться анонимная функция, а просто массив значений