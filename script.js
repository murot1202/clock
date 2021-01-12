let hours = document.querySelector('.hours')
let mins = document.querySelector('.minutes')
let s = document.querySelector('.s')
let m = document.querySelector('.m')
let h = document.querySelector('.h')
console.log(hours, mins);

function clock() {
    let time = new Date()
    let second = time.getSeconds()
    let minut = time.getMinutes()
    let hour = time.getHours()

    mins.innerHTML = minut < 10 ? '0' + minut : minut
    hours.innerHTML = hour < 10 ? '0' + hour : hour
    
    s.style.transform = `rotate(${second * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(function () {
        clock()
    }, 1000)
}

clock()

let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function() {
        for (let i = 0; i < tabsItem.length; i++) {
            tabsItem[i].classList.remove('active')
            tabsContentItem[i].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}


let stopwatchHours = document.querySelector('.stopwatch__hours')
let stopwatchMinutes = document.querySelector('.stopwatch__minutes')
let stopwatchSeconds = document.querySelector('.stopwatch__seconds')
let stopwatchBtn = document.querySelector('.stopwatch__btn')
let tabsLinkSpan = document.querySelector('.tabsLink__span')


stopwatchBtn.addEventListener('click', function stopwatch() {
    let stop = stopwatchBtn.style
    tabsLinkSpan.style.display = 'block'
    stop.transition = '0.5s'

    let s = 0
    let m = 0
    let h = 0

    if (tabsLinkSpan.style.background == '' || tabsLinkSpan.style.background == 'none') {
        tabsLinkSpan.style.background = 'white'
        stopwatchBtn.innerHTML = 'stop'
        
        function Sekundomer() {
    
            let stopWatch = new Date()
    
            let second = stopWatch.getSeconds()
            let minut = stopWatch.getMinutes()
            let hour = stopWatch.getHours()
    
            stopwatchSeconds.innerHTML = s < 10 ? '0' + s : s
            stopwatchMinutes.innerHTML = m < 10 ? '0' + m : m
            stopwatchHours.innerHTML = h < 10 ? '0' + h : h
    
            s++
    
            if (s >= 60) {
                m = m + 1;
                s -= 60;
            } else if (m >= 60) {
                h = h + 1
                m -= 60
            }
    
    
            console.log(stopwatchSeconds);
            setTimeout(function () { Sekundomer() }, 1000)
    
        }
    
        Sekundomer()

    }  else if (tabsLinkSpan.style.background == 'white') {
        tabsLinkSpan.style.background = 'red'
        stopwatchBtn.innerHTML = 'clear'
        setTimeout(function () { Sekundomer() }, 1000)
    } else {
        tabsLinkSpan.style.background = 'none'
        stopwatchBtn.innerHTML = 'start'
    }


})