    const form = document.querySelector('form');
    console.log(form);
    // actually when form submitted by clicking the submit button
    // the details in the form will be sent to server
    // to prevernt that we use preverntDefault() method
    // const result = document.querySelector('.result');
    // console.log(result);
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const height = parseInt(documnet.querySelector('#height').value)
        const weight = parseInt(documnet.querySelector('#weight').value)
        const result = document.querySelector('.result');

        if(height === ' ' || height < 0 || isNaN(height)){
            result.innerHTML  = "please provide valid height";
        }
        result.innerHTML = `${height}`;
    })