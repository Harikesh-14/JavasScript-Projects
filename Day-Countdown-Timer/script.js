let fDate = document.getElementById('findDate')
let fHour = document.getElementById('findHour')
let fMinute = document.getElementById('findMinute')
let fSecond = document.getElementById('findSecond')

let startBtn = document.getElementById('start')

let stop = document.getElementById('stop')
let alarm = document.getElementById('alarm')

startBtn.addEventListener('click', () => {
    setInterval(() => {
        let setDate = document.getElementById("setDate").value;
        let reminderDate = new Date(setDate).getTime();

        let now = new Date().getTime()

        let remainingDate = new Date(reminderDate - now)

        if (Math.floor((remainingDate % (1000 * 60)) / 1000) <= 0 &&
            Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60)) <= 0 &&
            Math.floor((remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) <= 0 &&
            Math.floor(remainingDate / (1000 * 60 * 60 * 24)) <= 0) {
            fDate.value = "00"
            fMinute.value = "00"
            fHour.value = "00"
            fSecond.value = "00"

            startBtn.disabled = true

            let alarm = document.getElementById('alarm')
            alarm.play()

        } else {
            fDate.value = Math.floor(remainingDate / (1000 * 60 * 60 * 24))
            fMinute.value = Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60))
            fHour.value = Math.floor((remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            fSecond.value = Math.floor((remainingDate % (1000 * 60)) / 1000)

            alarm.src = "alarm.mp3"
            startBtn.disabled = false
        }
    }, 1000)
})

stop.addEventListener('click', () => {
    alarm.src = ""
})