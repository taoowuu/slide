// 给圆点绑定切换图片功能
var bindDot = function() {
    bindEvent('.indis', 'click', function(event) {
        // 改变被点击圆点颜色
        var target = event.target
        removeClassAll('indi-active')
        target.classList.add('indi-active')

        // 显示所对应圆点的图片
        var activeIndex = target.dataset.index
        var img = e('.imgs')
        var selector = '.imgs-' + activeIndex
        var activeImg = e(selector)
        removeClassAll('img-active')
        activeImg.classList.add('img-active')

        // 给当前显示的图片下标重新赋值
        img.dataset.active = activeIndex
    })
}

var play = function(number) {
    // 获得图片的下标
    var img = e('.imgs')
    var sumOfImgs = parseInt(img.dataset.imgs)
    var activeImg = parseInt(img.dataset.active)
    var next = String((activeImg + (number) + sumOfImgs) % sumOfImgs)

    // 显示图片
    var selector = '.imgs-' + next
    var activeImg = e(selector)
    removeClassAll('img-active')
    activeImg.classList.add('img-active')

    // 改变所对应图片的圆点颜色
    var index = '.indis-' + next
    var activeIndex = e(index)
    removeClassAll('indi-active')
    activeIndex.classList.add('indi-active')

    // 给当前显示的图片下标重新赋值
    img.dataset.active = next
}

var playNext = function() {
    // 获得图片的下标
    var img = e('.imgs')
    var sumOfImgs = parseInt(img.dataset.imgs)
    var activeImg = parseInt(img.dataset.active)
    var next = String((activeImg + 1 + sumOfImgs) % sumOfImgs)

    // 显示图片
    var selector = '.imgs-' + next
    var activeImg = e(selector)
    removeClassAll('img-active')
    activeImg.classList.add('img-active')

    // 改变所对应图片的圆点颜色
    var index = '.indis-' + next
    var activeIndex = e(index)
    removeClassAll('indi-active')
    activeIndex.classList.add('indi-active')

    // 给当前显示的图片下标重新赋值
    img.dataset.active = next
}

// 自动播放图片
var autoPlay = function() {
    var auto = setInterval(playNext, 4000)
    return auto
}

// 鼠标滑轮播放图片
var bindWheel = function() {
    bindEvent('.imgs', 'mousewheel', function(event) {
        var detail = event.wheelDelta
        if (detail < 0) {
            play(1)
        } else {
            play(-1)
        }
    })
}

// 函数执行入口
var bindEvents = function() {
    bindDot()
    bindWheel()
}

var __main = function() {
    bindEvents()
    autoPlay()
}

__main()
