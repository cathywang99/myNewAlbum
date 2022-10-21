// let tabBox=document.getElementById('tabBox');
//console.log(tabBox);


//基于getElementsByTagName或者getElementsByClassName获取到的是元素集合，想要操作某一个元素需要在集合中根据索引取出来才可以使用。[0]拿索引
// let tabBox=document.getElementsByClassName('tabBox');
// console.log(tabBox);//获得的是集合HTMLCollection


//querySelectorAll获取的是一个集合，哪怕只有一个符合，也是一个集合，集合只有一项
//let tabBox=document.querySelectorAll('.tabBox');
//querySelector获取的是一个元素对象，哪怕页面中有多个符合的，也只获取第一个
//let tabBox=document.querySelector('.tabBox');
//console.log(tabBox);


//getElementsByTagName是获取指定上下文后代中所有的标签名为N的元素集合（所有Li！）
// let navList=tabBox.getElementsByTagName('li'); 
// console.log(navList);
// let tab=tabBox.querySelector('.tab');
// let navList=tab.getElementsByTagName('li');

//用后代选择器 选择tab下面的li
let navList=document.querySelectorAll('.tab li');
console.log(navList);
let divList=tabBox.querySelectorAll('.tabBox>div');  //>表示子元素
console.log(divList);


//一般用于表单元素的name
// var sexList=document.getElementsByName('sex');
// var submit=document.getElementById('submit');
var sexList=document.querySelectorAll('[name=sex]');
var submit=document.querySelector('#submit');
console.log(sexList);
console.log(submit);
submit.onclick=function() {
    var res=null;
    for(var i=0;i<sexList.length;i++) {
        var item=sexList[i];
        if(item.checked){
            //被选中
            res=item.value;
            break;
        }
    }
    alert(res);
}