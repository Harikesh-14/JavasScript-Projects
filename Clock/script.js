let setHour = document.getElementById('setHour')
let setMinute = document.getElementById('setMinute')
let setSecond = document.getElementById('setSecond')

setInterval(() => {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()

    setHour.value = hour
    setMinute.value = minute
    setSecond.value = second
}, 1000)