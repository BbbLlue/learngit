(function () {
    // 获取容器
    var container = document.getElementById('content')
    // 把需要展示的全部文字进行切割
    const data = ' Hello Jotang'.split('')
    // 需要追加到容器中的文字下标
    let index = 0
    function writing() {
        if (index < data.length) {
            // 追加文字
            container.innerHTML += data[index++]
            let timer = setTimeout(writing, 200)
        }
    }
})();