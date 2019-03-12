let gradeCalc = function (studentScore, testScore) {
    let result = (studentScore / testScore) * 100
    let output = ""

    if (result >= 90) {
        output = "A"
    } else if (result >= 80) {
        output = "B"
    } else if (result >= 70) {
        output = "C"
    } else if (result >= 60) {
        output = "D"
    } else {
        output = "F"
    }

    console.log(`You scored ${result}%. Your grade is ${output}.`)
}

gradeCalc(18,20)