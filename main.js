document.addEventListener('DOMContentLoaded', ()=> {
    const steps = document.getElementsByClassName('step');

    console.log(steps);
    
    for(let i = 0; i<= steps.length-1; i++){
        console.log(steps[i]);
        steps[i].style.display = 'none';
        // setInterval(() => {
            
        // }, `5000`);
    }
    steps[0].style.display = 'block';
})
