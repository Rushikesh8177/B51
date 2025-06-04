isLogin = false;
if (isLogin) {
    console.log("You are login");

} else {
    console.log("You are not login");

}

// 0-35 fail 36-60 pass 61-75 frist class 76-100 dis

let mark = 90;
if (mark < 35) {
    console.log("You are fail");
} else if (mark > 36 && mark < 60) {
    console.log("You are pass");

} else if (mark < 61 && mark > 75) {
    console.log("You are frist class ");

} else {
    console.log("You are diss");
}

day="mon";
switch (day) {
    case "mon":
        console.log("Today working day");
        break;

    case "tus":
        console.log("Today working day");
        break;

    case "sun":
        console.log("Today rest day");
        break;

    default:

}

// exp 0-1 0-10
// dis sd pm 
let exp;
let dis;

if(exp<1){
    if(dis="pm"){
        console.log("giv Boues 1")
    }else if(dis=sd){
        console.log("boues 1");
    }
    console.log("Boues 1");

}else if(exp<1 && exp>10){
    if(dis="pm"){
        console.log("giv Boues 2")
    }else if(dis=sd){
        console.log("boues 2");
    }
    console.log("Boues 1");

}
