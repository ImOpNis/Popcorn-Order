let order = prompt("Order Your PopCorn -- Select Your Size -- 'XL' 'L' 'M' 'S'");

let data = order.valueOf(prompt);

let greeting;

if(data === "XL"){
    alert("Your price is 250!!");
    confirm("Are you sure to confirm your order?");
    greeting = document.getElementById("greet").innerHTML = "Thanks for ordering. You are order is on way!!";
}else if(data === "L"){
    alert("Your price is 200!!");
    confirm("Are you sure to confirm your order?");
    greeting = document.getElementById("greet").innerHTML = "Thanks for ordering. You are order is on way!!";
} else if(data === "M"){
    alert("Your price is 100!!");
    confirm("Are you sure to confirm your order?");
    greeting = document.getElementById("greet").innerHTML = "Thanks for ordering. You are order is on way!!";
}else if(data === "S"){
    alert("Your price is 50!!");
    confirm("Are you sure to confirm your order?");
    greeting = document.getElementById("greet").innerHTML = "Thanks for ordering. You are order is on way!!";
}else{
    alert("INVALID ORDER!! (Kindly Refer to order menu INFO!!)");
}
