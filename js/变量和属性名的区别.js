var name = 10;
var obj = {
    name: '珠峰培训',
    [12]:1000,//属性名写成这样，属性名也会转成数字12
    null:234,//null当成字符串也能识别
    cash:"only"
};
//获取obj这个对象的name属性对应的值
console.log(obj.name);
//一个对象的属性名只有两个格式：数字或者字符串(等基本类型),加双引号表示值
console.log(obj['name']);
//obj[name变量代表的值]=>obj[10]=>10在对象里面不是属性名=>undefined
console.log(obj[name]);//undefined

var cash = 10;
var obj= {
    //属性名：属性值（属性值放变量也是把变量存储的值拿过来做属性值）
    cash:cash,
    10:666
}
console.log(obj[cash]);

//for in循环：用来循环遍历对象中的键值对的（continue和break同样适用）
var obj= {
    name:'chunliang',
    age:52,
    friends:'wangpeng,zhigang',
    1:20,
    2:149,
    3:140
}
//for(var 变量 in 对象) 对象中有多少组键值对，循环就执行几次（除非break结束）
for(var key in obj) {
    //每一次循环key变量存储的值：当前对象的属性名
    //想要获取属性值：obj[属性名] =>obj[key]
    console.log('属性名：'+key+'属性值：'+obj[key]);
}
//for in 在遍历的时候，优先循环数字属性名（从小到大）