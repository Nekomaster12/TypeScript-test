var num = 10;
var isAdmin;
isAdmin = true;
var empty = null;
var userName = "Alex";
var date = new Date();
var undef = undefined;
var numArray = [1, 2, 3];
var tuple1 = ["Alex", 20]; // массив из строки и числа
var any1 = [true, 34, "23"]; // массив из любых элементов
//^ any лучше не использовать :)
var numb = 15;
var anyArr = [1, 2, 3, true, null, { da: true }];
var numArr = [1, 2, 3, 4, 5, 6];
var obj = {
    name: "Alex",
    age: 20,
    isAdmin: true
};
var firstUser = "John";
var secondUser = "Tomiko";
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 0] = "up";
    Directions[Directions["down"] = 1] = "down";
    Directions[Directions["left"] = 2] = "left";
    Directions[Directions["right"] = 3] = "right";
})(Directions || (Directions = {}));
Directions.down; //^ 1
Directions[1]; //^ "down"
var Links;
(function (Links) {
    Links["vk"] = "https://vk.com/im";
    Links["youtube"] = "https://www.youtube.com";
    Links["google"] = "https://www.google.com";
})(Links || (Links = {}));
Links.vk; //^ "https://vk.com/im"
var linkArr = ["https://vk.com/im" /* Links2.vk */, "https://www.youtube.com" /* Links2.youtube */, "https://www.google.com" /* Links2.google */]; //& Тогда в JS не будет создаваться анонимная функция, а просто массив значений
