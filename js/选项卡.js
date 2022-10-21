var tabBox = document.querySelector('#tabBox');
var navList = document.querySelectorAll('#navBox li');
var divList = tabBox.querySelectorAll('div');

//实现选项卡切换
var changeTab = function (n) {
    //n为当前点击的LI的索引
    for (var i = 0; i < navList.length; i++) {
        //先将classname全清空
        navList[i].className = '';
        divList[i].className = '';
    }
    //从集合中找到当前点击的这一项
    navList[n].className = 'active';
    divList[n].className = 'active';
};

//循环给每一个LI绑定点击事件
for (var i = 0; i < navList.length; i++) {
    var item = navList[i];
    item.myIndex = i;
    item.onclick = function () {
        //i是循环结束后的结果
        changeTab(this.myIndex);
    }
}

        // 利用闭包解决
        // 1.闭包可以保存信息（栈内存不销毁即可），此处我们保存后续需要的索引信息即可
        // 2.执行事件绑定的小函数，遇到i，往全局找，找我们闭包中存储的索引即可（闭包是小函数的上级作用域，也就是小函数是在闭包中创建的） 
/* for (var i = 0; i < navList.length; i++) {
    ~function (n) {
        navList[n].onclick = function () {
            changeTab(n);
        }
    }(i);
} */

/* for(let i=0;i<navList.length;i++) {
    navList[i].onclick=function() {
        //i是循环结束后的结果
        changeTab(i);
    }
} */