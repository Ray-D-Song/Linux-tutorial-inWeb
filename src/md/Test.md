## Javascript基础

### 变量

Javascript中的变量类型

**基本类型**:

| 类型      | 作用                                                         |
| :--------- | :------------------------------------------------------------ |
| boolean   | true/false                                                   |
| null      | null                                                         |
| undefined | 没有被赋值的变量默认为Undefined                              |
| number    | `-(2^53 -1)` 到 `2^53 - 1` 之间的数字,除了浮点数外,还有+Infinity和-Infinity来表示正负值,用NaN来表示非数值(Not a Number) |
| BigInt    | 可以表示任意精度的整数,但BigInt不能与Number相互运算,会抛出TypeError |
| string    | 一旦创建,不可更改.但可以通过方法来操作字符串.例如String.substr()获取子串,String.concat()来连接子串 |

**引用类型**

即Javascript中的对象和函数

### JavaScript条件判断

|  等于  | ===  |
| :----: | ---- |
| 不等于 | !==  |
|  取非  | !    |

### JS中字符串和数组的相互转换:

* 字符串转化为数组用split('分隔符')
* 数组转化为字符串用join('分隔符')  //还可用toString方法,缺点是不可指定分隔符

### JS将数字转换为字符串

``String(x) //将变量x转换为字符串并返回`` 

### 数组操作

1. 数组末尾添加或删除元素:push()和pop(),push完成时会返回数组的长度,pop完成时会返回被删除的元素
2. 数组头部添加或删除用unshift()和shift()

方法是在对象内定义的函数。浏览器内置函数（方法）和变量（称为属性）存储在结构化对象内，以使代码更加高效，易于处理。

JavaScript有匿名函数,一般用于事件处理

例如:

```jsx
var myFunction=function(){

alert('hello');

}
```

此处为将函数声明为变量

### JavaScript作用域

在函数外声明则为全局变量,在函数内以``var``声明的为局部变量,无``var``则为全局变量.

> 在 HTML 中, 全局变量是 window 对象: 所有数据变量都属于 window 对象。

### 常见的HTML-JavaScript事件

| 事件        | 描述                     |
| :----------- | :------------------------ |
| onchange    | HTML事件改变             |
| onclick     | 用户点击HTML元素         |
| onmouseover | 鼠标指针移动到指定元素上 |
| onmouseout  | 从一个HTML元素上移开鼠标 |
| onkeydown   | 按下鼠标按键             |
| onload      | 浏览器完成页面加载       |

### JavaScript typeof, null, 和 undefined

typeof检测变量的数据类型``typeof``

``` javascript
typeof 3.14         // 返回 number
typeof false         // 返回 boolean
typeof [1,2,3,4]       // 返回 object
typeof {name:'John', age:34} // 返回 object```
```

JavaScript中null和undefined并不相同,undefined表示没有设置值,而null本身就为"空值",二者值相等,类型不等.

### Javascript中的this

与Java不同的是,JavaScript的``this``可以单独使用,代表全局对象``Windows``,在严格模式下同意. 但是在严格模式下函数是没有绑定到``this``上的,此时会返回undefined.

```"use strict"; function myFunction() {  return this; }```

HTML事件中,this指向接收事件的HTML元素

```<button onclick="this.style.display='none'"> 点我后我就消失了 </button>```

### $符号
1. 表示变量,如

```javascript
var s="abcdef";
var $s="abcdefg";
```
2. ${}字符串拼接

   ```javascript
   let a = 1;
   console.log("一共有${a}个鸡蛋");
   //等价于
   console.log("一共有"+a+"个鸡蛋");
   ```

   在ajax中常用这种方法在字符串中使用js语法和js表达式

### javascript:(var/let/const)区别

#### var:

**作用域**:当var在函数外声明时,作用域是全局的,当var在函数内声明时,作用域在函数内.

**var变量可以重新修改和声明**:

这意味着我们可以在相同的作用域内执行下面的操作，并且不会出错

```javascript
var greeter = 'hey hi';
var greeter = 'say Hello instead';
```

**var拥有[变量提升](#Javascript的变量提升)**

**var的缺陷**:

```javascript
    var greeter = "hey hi";
		var times = 3;
		......
    var times = 4;
if (times &gt; 3) {
    var greeter = "say Hello instead";
}

console.log(greeter) // "say Hello instead"
```

如果此处times的值是故意重新定义的,则没有问题,如果是不知道前面已经定义过了,则会产生相应的问题,这就是为什么需要`let`和`const`关键字.

#### let:(首选关键字)

**作用域**:与var不同,let关键字是块级作用域,即定义的函数和变量仅在当前`{ }`代码块中有效.

**let关键字可以被修改但不可被重新声明**:

也就是说我们可以进行如下操作:

```javascript
let greeter = 'hey ray';
greeter = 'hey jenny';
```

但不可进行这种操作:

```javascript
let greeter = 'hey ray';
let greeter = 'hey jenny';
```

这避免了var的缺陷

**let的变量提升与var不同**:

- 用`var`声明的变量会被提升到其作用域的顶部，并使用 undefined 值对其进行初始化。
- 用`let`声明的变量会被提升到其作用域的顶部，不会对值进行初始化。

因此不能在声明前使用`let`变量,会受到`Reference error`.

#### const关键字:

**作用域为块级作用域**

**const不能被修改且不能被重新声明**(类似Java中的static)

但是我们可以更新const对象的属性

```javascript
const greeting = {
  times: 4,
  message: 'hi ray',
};  

//不可以这样
const greeting = {
    words: 'Hello',
    number: 'five',
}; // error:  Assignment to constant variable.

//但是可以这样
greeting.message= 'hi jenny';
```

**变量提升**:就像`let`一样，`const`声明也被提升到顶部，但是没有初始化.

## JavaScript特性

### Javascript的变量提升

变量提升是 JavaScript 的一种机制:在执行代码之前，变量和函数声明会移至其作用域的顶部。这意味着我们可以先使用再声明.

### JavaScript链式作用域
子函数可以一级一级的访问所有的父函数变量,反过来父函数无法访问子函数的变量.
```JavaScript
function f1(){
    var n1=1;
    function f2(){
        var n2=2;
    }
}
```
例如上面的f2可以访问到n1,但f1不能访问n2
那么问题来了,如果要在f1的外部访问n1,就可以让f2作为一个返回值.
```JavaScript
function f1(){
    var n1=1; //函数全局作用域,函数外无法访问(undefined)
    function f2(){
        console.log(n1);
    }
    return f2;
}

var result=f1();
result();
```
### 闭包
#### 闭包的概念
闭包实际就是可以读取其他函数内部变量的函数.
在JavaScript中,只有子函数能读取父函数中的变量,因此闭包可以理解成"子函数"
本质上闭包是将函数内部和外部连接起来的桥梁.
#### 闭包的用途
1. 读取函数内部变量
2. 让变量的值始终保持在内存中.
   
