function cDP() {    
    var DPP = document.getElementsByClassName("DPP").value;
    var Price = document.getElementsByClassName("Price").value;
    if (DPP < 20) {
        alert("Down Payment Amount is Below 20%")
        }
    else if (DPP >= 80) {
        alert("Just buy the car in cash")   
        } 
    else if (DPP >= 20 && DPP < 80) {
        document.getElementsByClassName("DPA").innerHTML = (Price * (DPP/100))
        console.log(Price * (DPP/100))
        }
    else {
        alert('Syntax Error')
        console.log(Price * (DPP/100))
        }
    }