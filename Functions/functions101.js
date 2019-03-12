function tempConvert (far) {
    let celcius = (far - 32) * (5/9)
    return celcius
}

console.log(tempConvert(68))
console.log(tempConvert(32))

