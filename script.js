// console.log(document.querySelectorAll('.num'))

let buttons = document.querySelectorAll('.num');
let display = document.querySelector('.display-field')

// Display in field
buttons.forEach( (btn)=>{
    btn.addEventListener('click', ()=>{
        display.value += btn.value
    })
})

// Clear all
document.querySelector('.ac').addEventListener('click', ()=>{
    display.value = '';
})

// Delete all
document.querySelector('.del').addEventListener('click', ()=>{
    let curr_value = display.value;
    if(curr_value.length > 0){
        let new_value = curr_value.slice(0, -1)
        display.value = new_value;
    }
})

// Evaluate
document.querySelector('.equal').addEventListener('click', ()=>{
    display.value = eval(display.value);
})