const btns = document.querySelectorAll('.button')
// console.log(btns);
const body = document.body;
// console.log(body);
btns.forEach( function(bt){
    // console.log(bt);  //selects all btns
    bt.addEventListener('click',(e)=>{
        // console.log(e.target);  //when clicked gives the tag details with its class & Object

        if(e.target.id === 'gold'){
            body.style.backgroundColor = 'gold'
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = 'green'
        }
        else if(e.target.id === 'crimson'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'purple'){
            body.style.backgroundColor = 'purple'
        }
    })
})

