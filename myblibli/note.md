####去除输入框和按钮的空隙
1.去掉标签之间的空格
####flex实现文字上下布局
    display: flex;
    flex-direction: column;  /* 把主轴设置成y轴 */
    align-items: center;  /* 侧轴上的元素居中对齐(注意只有一个元素) */
    justify-content: center; /* 主轴上的元素居中对齐 (调整位置) */
####定位元素无法覆盖下方元素
![Alt text](image.png)
检查下方元素的position：absolute relative 会影响改变布局方式
####js代码无法运行，要确保元素全部加载完成
    document.addEventListener('DOMContentLoaded', function () {
    });
