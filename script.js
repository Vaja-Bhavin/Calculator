let query = ""
let ans;
let complate = false
let keyValue = ["1","2","3","4","5","6","7","8","9","0"]
let operator = ["/","*","+","-"]
let lastOp = false;
document.addEventListener("DOMContentLoaded",()=>{
    let btns = document.getElementById("buttons")
    btns.className = btns.className + " animation"
})

const add = async (value) => {
    ans = await document.getElementById("ans");
    if (complate) {
        query = ""
        ans.innerText = ""
        complate = false
    }
    query = query+value
    ans.innerText = ans.innerText + value
    console.log(query)
}

const addOp = (value) => {
    query = query+value
    ans.innerText = ans.innerText + value
    lastOp = value
    complate=false
}

const equal =  () => {
    let temp;
    try {
        temp = eval(query)
    } catch (error) {
        return
    }
    complate = true
    ans.innerText = eval(query)
    // console.log(eval(query))
    lastOp = false
}

const backspace = () => {
    query = ans.innerText
    query = query.substring(0,query.length-1)
    ans.innerText = query
}

const clear = () => {
    query = ""
    ans.innerText = ""
    lastOp = false;
}

const invert = () => {
    // if (lastOp) {
    //   let temp = query
    //   temp = "("+temp+")" 
    //   query = temp
    //   ans.innerText = query
    // }
    let temp = query
    temp = temp.split(lastOp)
    let temp1 = temp[0] + lastOp+ "(-" + temp[1]+")"
    query =  temp1
    ans.innerText = query
}

document.addEventListener("keypress",(key)=>{
    console.log(key.key)
    if (key.key in keyValue) {
        add(key.key)
    } else if (key.key in operator) {
        addOp(key.key)
    } else if(key.key === "Enter") {
        equal()
    } else if(key.key === "c") {
        clear()
    }
})