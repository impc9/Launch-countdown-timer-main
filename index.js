let stopAudio = new Audio('stop_requested.mp3')

// let targetDate = new Date("june 15, 2023 16:32:15")
// console.log(targetDate)
// console.log(targetDate)
// let currentDate = new Date()
// console.log(currentDate)
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// console.log(targetDate.getDate() - date.getDate())

// Get left seconds between current time and target time
// if(date.getSeconds()>targetDate.getSeconds()){
//     leftSeconds = 60- (date.getSeconds() - targetDate.getSeconds())
// }
// else{
//     leftSeconds = targetDate.getSeconds() - date.getSeconds() 
// } 


// // Get left minutes between current time and target time
// if(date.getMinutes()>targetDate.getMinutes()){
//     if(date.getSeconds()>targetDate.getSeconds()){
//         leftMinutes = 60 - (date.getMinutes() - targetDate.getMinutes())
//         leftMinutes--
//     }
//     else{
//         leftMinutes = 60 - (date.getMinutes() - targetDate.getMinutes())
//     }
// }
// else{
//     if(date.getSeconds()>targetDate.getSeconds()){
//         leftMinutes = targetDate.getMinutes() - date.getMinutes()
//         leftMinutes--
//     }
//     else{
//         leftMinutes = targetDate.getMinutes() - date.getMinutes()
//     }
// }


// // Get left hours between current time and target time
// if(date.getHours()>targetDate.getHours()){
//     if(date.getMinutes()>targetDate.getMinutes()){
//         leftHours = 24 - (date.getHours() - targetDate.getHours())
//         leftHours--
//     }
//     else{
//         leftHours = 24 - (date.getHours() - targetDate.getHours())
//     }
// }
// else{
//     if(date.getMinutes()>targetDate.getMinutes()){
//         leftHours = targetDate.getHours() - date.getHours()
//         leftHours--
//     }
//     else{
//         leftHours = targetDate.getHours() - date.getHours()
//     }   
// }


// // Get left days between current time and target time
// let getDaysInMonth = function(month, year){
//     return new Date(year, month+1, 0).getDate()
// }
// // console.log(getDaysInMonth(date.getMonth(), date.getFullYear()))
// if(date.getMonth()<targetDate.getMonth()){
//     let days;
//     let totalDaysBetMonths = 0;
//     diffInMonth = targetDate.getMonth() - date.getMonth()
//     leftDayInCurrMonth = getDaysInMonth(date.getMonth(), date.getFullYear()) - date.getDate()
//     // console.log(leftDayInCurrMonth);
//     leftDayInTarMonth = targetDate.getDate()
//     // console.log(leftDayInTarMonth);
//     for (i=1; i<diffInMonth; i++){
//         days = getDaysInMonth(date.getMonth()+i, date.getFullYear())
//         totalDaysBetMonths = totalDaysBetMonths + days
//         // console.log(days)
//         // console.log(totalDaysBetMonths)
//     }
//     leftDays = leftDayInCurrMonth + totalDaysBetMonths + leftDayInTarMonth
// }
// else{
//     leftDays = targetDate.getDate() - date.getDate()
// }

// function leftTime(){

//     if(leftDays==0 && leftHours==0 && leftMinutes==0 & leftSeconds==0){
//         topSecond.innerText = '0' + leftSeconds
//         seconds.setAttribute("data-before", '0' + leftSeconds)
//         seconds.setAttribute("data-after", '0' + leftSeconds)
//         bottomSecond.innerText = '0' + leftSeconds
//         stopAudio.play()
//         setTimeout(() => {
//             stopAudio.pause()
//         }, 50000);
//     }
//     else{
//         // left seconds
//         let seconds = document.getElementById("seconds")
//         let topSecond = document.getElementById("topSecond")
//         let bottomSecond = document.getElementById("bottomSecond")
//         if(leftSeconds<10){
//             leftSeconds = '0' + leftSeconds
//         }
//         topSecond.innerText = leftSeconds
//         seconds.setAttribute("data-before", leftSeconds)
//         seconds.setAttribute("data-after", leftSeconds)
//         bottomSecond.innerText = leftSeconds
//         if(leftSeconds==0){
//             leftSeconds = 60
//         }
//         leftSeconds--;

//         // left minutes
//         let topMinute = document.getElementById("topMinute")
//         let bottomMinute = document.getElementById("bottomMinute")
//         let minutes = document.getElementById("minutes")
//         topMinute.innerText = leftMinutes
//         minutes.setAttribute("data-before", leftMinutes)
//         minutes.setAttribute("data-after", leftMinutes)
//         bottomMinute.innerText = leftMinutes
//         if(leftMinutes<10){
//             topMinute.innerText = '0' + leftMinutes
//             minutes.setAttribute("data-before", '0' + leftMinutes)
//             minutes.setAttribute("data-after", '0' + leftMinutes)
//             bottomMinute.innerText = '0' + leftMinutes
//         }
//         if(leftSeconds == 59){
//             if(leftMinutes==0){
//                 leftMinutes = 59
//             }
//             else{
//                 leftMinutes--
//             }
//         }

//         // left hours
//         let topHour = document.getElementById("topHour")
//         let bottomHour = document.getElementById("bottomHour")
//         let hours = document.getElementById("hours")
//         if(leftHours<0){
//             leftHours = 23
//         }
//         topHour.innerText = leftHours
//         hours.setAttribute("data-before", leftHours)
//         hours.setAttribute("data-after", leftHours)
//         bottomHour.innerText = leftHours
//         if(leftHours<10){
//             topHour.innerText = '0' + leftHours
//             hours.setAttribute("data-before", '0' + leftHours)
//             hours.setAttribute("data-after", '0' + leftHours)
//             bottomHour.innerText = '0' + leftHours
//         }
//         if(leftSeconds == 59 && leftMinutes == 59){
//             leftHours--
//         }

//         // left days
//         let topDay = document.getElementById("topDay")
//         let bottomDay = document.getElementById("bottomDay")
//         let days = document.getElementById("days")
//         if(leftDays<=0){
//             leftDays = 0
//         }
//         topDay.innerText = leftDays
//         days.setAttribute("data-before", leftDays)
//         days.setAttribute("data-after", leftDays)
//         bottomDay.innerText = leftDays
//         if(leftDays<10){
//             topDay.innerText = '0' + leftDays
//             days.setAttribute("data-before", '0' + leftDays)
//             days.setAttribute("data-after", '0' + leftDays)
//             bottomDay.innerText = '0' + leftDays
//         }
//         if(leftSeconds == 59 && leftMinutes == 59 && leftHours == 23){
//             leftDays--
//         }
//     }  


// }
// setInterval(leftTime, 1000);
let placeHolder = "june 15, 2023 16:32:15"
let targetDateFromUser = new Date(prompt(`Please enter date and time! eg.- " ${placeHolder} "`))
console.log(targetDateFromUser)
let topSecond = document.getElementById("topSecond")
let beforeSec = document.getElementById("beforeSec")
let afterSec = document.getElementById("afterSec")
let bottomSecond = document.getElementById("bottomSecond")
let topMinute = document.getElementById("topMinute")
let beforeMin = document.getElementById("beforeMin")
let afterMin = document.getElementById("afterMin")
let bottomMinute = document.getElementById("bottomMinute")
let topHour = document.getElementById("topHour")
let beforeHour = document.getElementById("beforeHour")
let afterHour = document.getElementById("afterHour")
let bottomHour = document.getElementById("bottomHour")
let topDay = document.getElementById("topDay")
let beforeDay = document.getElementById("beforeDay")
let afterDay = document.getElementById("afterDay")
let bottomDay = document.getElementById("bottomDay")

function secAnimation(){
    beforeSec.style.animation = "flip-top 1000ms ease-in infinite"
    afterSec.style.animation = "flip-bottom 1000ms ease-out 0.5s infinite"
}

function minAnimation(){
    beforeMin.style.animation = "flip-top 1000ms ease-in"
    afterMin.style.animation = "flip-bottom 1000ms ease-out 0.5s"
}

function hourAnimation(){
    beforeHour.style.animation = "flip-top 1000ms ease-in"
    afterHour.style.animation = "flip-bottom 1000ms ease-out 0.5s"
}

function dayAnimation(){
    beforeDay.style.animation = "flip-top 1000ms ease-in"
    afterDay.style.animation = "flip-bottom 1000ms ease-out 0.5s"
}

let isTrue = true

function leftTime() {
    let currentDate = new Date()
    let diffInMilliSeconds = targetDateFromUser - currentDate
    let leftSeconds = Math.floor(diffInMilliSeconds / 1000)
    let leftMinutes = Math.floor(leftSeconds / 60)
    let leftHours = Math.floor(leftMinutes / 60)
    let leftDays = Math.floor(leftHours / 24)
    leftSeconds %= 60
    leftMinutes %= 60
    leftHours %= 24
    // console.log(diffInMilliSeconds)
    // console.log(leftDays)
    // console.log(leftHours)
    // console.log(leftMinutes)
    // console.log(leftSeconds)
    if (leftDays<0){
        alert("Please enter a valid date and time")
        isTrue = false
        beforeSec.innerText= '00'
        afterSec.innerText = '00'
        beforeMin.innerText = '00'
        afterMin.innerText = '00'
        beforeHour.innerText= '00'
        afterHour.innerText = '00'
        beforeDay.innerText = '00'
        afterDay.innerText = '00'
    }
    else if (leftDays == 0 && leftHours == 0 && leftMinutes == 0 & leftSeconds == 0) {
        topSecond.innerText = '0' + leftSeconds
        beforeSec.innerText= '0' + leftSeconds
        afterSec.innerText = '0' + leftSeconds
        bottomSecond.innerText = '0' + leftSeconds
        beforeSec.style.animation = "none"
        afterSec.style.animation = "none"
        stopAudio.play()
        setTimeout(() => {
            stopAudio.pause()
        }, 50000);
        isTrue = false
    }
    else {
        secAnimation()
        // left seconds
        if (leftSeconds < 10) {
            leftSeconds = '0' + leftSeconds
        }
        topSecond.innerText = leftSeconds
        beforeSec.innerText = leftSeconds
        afterSec.innerText = leftSeconds
        bottomSecond.innerText = leftSeconds
        // For minute animation
        if(leftSeconds==0){
            minAnimation()
        }
        if(leftSeconds==55){
            beforeMin.style.animation = "none"
            afterMin.style.animation = "none" 
        }

        // left minutes
        topMinute.innerText = leftMinutes
        beforeMin.innerText = leftMinutes
        afterMin.innerText = leftMinutes
        bottomMinute.innerText = leftMinutes
        if (leftMinutes < 10) {
            topMinute.innerText = '0' + leftMinutes
            beforeMin.innerText = '0' + leftMinutes
            afterMin.innerText = '0' + leftMinutes
            bottomMinute.innerText = '0' + leftMinutes
        }
        // For hour animation
        if(leftMinutes==0 && leftSeconds==0){
            hourAnimation()
        }
        if(leftMinutes==55){
            beforeHour.style.animation = "none"
            afterHour.style.animation = "none" 
        }

        // left hours
        topHour.innerText = leftHours
        beforeHour.innerText = leftHours
        afterHour.innerText = leftHours
        bottomHour.innerText = leftHours
        if (leftHours < 10) {
            topHour.innerText = '0' + leftHours
            beforeHour.innerText = '0' + leftHours
            afterHour.innerText = '0' + leftHours
            bottomHour.innerText = '0' + leftHours
        }
        // For day animation
        if(leftHours==0 && leftMinutes==0 && leftSeconds==0){
            dayAnimation()
        }
        if(leftHours==55){
            beforeDay.style.animation = "none"
            afterDay.style.animation = "none" 
        }

        // left days
        topDay.innerText = leftDays
        beforeDay.innerText = leftDays
        afterDay.innerText = leftDays
        bottomDay.innerText = leftDays
        if (leftDays < 10) {
            topDay.innerText = '0' + leftDays
            beforeDay.innerText = '0' + leftDays
            afterDay.innerText = '0' + leftDays
            bottomDay.innerText = '0' + leftDays
        }
    }
}
var intervalID = setInterval(()=>{
    if(isTrue){
        leftTime()
    }
    else{
        clearInterval(intervalID)
    }
}, 1000);













