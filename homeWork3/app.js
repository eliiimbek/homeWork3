let hundredPointSystem = [40, 55, 22, 89, 14, 78, 56, 47, 59]

for(let i of hundredPointSystem) {
    if (i>=1 && i<20){
        console.log("1")
    }else if(i>=20 && i<40){
        console.log("2")
    }else if(i>=40 && i<60){
        console.log("3")
    }else if(i>=60 && i<80){
        console.log("4")
    }else if(i>=80 && i<100){
        console.log("5")
    }else{
        console.log("ne produmano pod takoye")
    }
}


let num = prompt("1-10: ")

for(let i = 2; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (i*num))
}