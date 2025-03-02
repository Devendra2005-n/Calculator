function clear(){
    document.getElementById('fnumber').value = '';
    document.getElementById('snumber').value = '';
    document.getElementById('result').textContent = '0';
}
function Add(){
    let firstnumber = Number(document.getElementById("fnumber").value)
    let secondnumber = Number(document.getElementById("snumber").value)
    alert(firstnumber + secondnumber)
}
function Sub(){
    let firstnumber = Number(document.getElementById("fnumber").value)
    let secondnumber = Number(document.getElementById("snumber").value)
    alert(firstnumber - secondnumber)
}
function mul(){
    let firstnumber = Number(document.getElementById("fnumber").value)
    let secondnumber = Number(document.getElementById("snumber").value)
    alert(firstnumber * secondnumber)
}
function div(){
    let firstnumber = Number(document.getElementById("fnumber").value)
    let secondnumber = Number(document.getElementById("snumber").value)
    alert(firstnumber / secondnumber)
}
function fact(){
    let firstnumber = Number(document.getElementById("fnumber").value)
    i = 0
    fact = 1
    for(i=1;i<=firstnumber;i++){
        fact = fact * i ;
    }
    alert(fact)
}
function Percentage(){
    let firstnumber = Number(document.getElementById("fnumber").value)
    let secondnumber = Number(document.getElementById("snumber").value)
    let per;
    per = ( firstnumber / secondnumber) * 100;
    alert(per)
}


