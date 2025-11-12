let query = ""
let ans;
let complate = false
let keyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let operators = ["/", "*", "+", "-"]
let lastOp = false;
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let calc = document.getElementById("calc")
        calc.style.filter = "blur(0px)"
        setTimeout(() => {
            calc.style.width = "325px"
        }, 500);
    }, 1)
})

const add = async (value) => {
    ans = await document.getElementById("ans");
    if (complate) {
        query = ""
        ans.innerText = ""
        complate = false
    }
    query = query + value
    ans.innerText = ans.innerText + value
    console.log(query)
}

const addOp = (value) => {
    try {
        query = query + value
        ans.innerText = ans.innerText + value
        lastOp = value
        complate = false
    } catch (error) {
        console.log(error);
    }
}

const equal = () => {
    let temp;
    try {
        temp = eval(query)
    } catch (error) {
        return
    }
    complate = true
    ans.innerText = eval(query)
    lastOp = false
}

const backspace = () => {
    query = ans.innerText
    query = query.substring(0, query.length - 1)
    ans.innerText = query
}

const clear = () => {
    query = ""
    ans.innerText = ""
    lastOp = false;
}

const invert = () => {
    let temp0 = ans.innerText
    if (!/[+\-*/]/.test(temp0)) {
        let temp = query
        temp = "(" + temp + ")"
        query = temp
        ans.innerText = query
    } else {
        let temp = query
        temp = temp.split(lastOp)
        let temp1 = temp[0] + lastOp + "(-" + temp[1] + ")"
        query = temp1
        ans.innerText = query
    }
}

document.addEventListener("keypress", (key) => {
    // console.log(key)
    let k = key.key
    if (k in keyValue) {
        add(k)
    } else if ((/[+\-*/]/.test(k))) {
        console.log("Hi")
        addOp(k)
    } else if (k === "Enter") {
        equal()
    } else if (k === "c") {
        clear()
    } /*else if (k == "+") {
        addOp("+")
    } else if (k == "-") {
        addOp("-")
    } else if (k == "*") {
        addOp("*")
    } else if (k == "/") {
        addOp("/")
    }*/

})
