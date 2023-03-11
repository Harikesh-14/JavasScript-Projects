let cel = document.getElementById('celsius');
let fah = document.getElementById('fahrenheit');
let btn = document.getElementById('convert');

cel.addEventListener('keyup', ()=>{
    let res1 = ((cel.value)*(1.8)) + 32
    fah.value = res1.toPrecision(5);
})

fah.addEventListener('keyup', ()=>{
    let res2 = ((fah.value - 32)*5)/9
    cel.value = res2.toPrecision(5);
})