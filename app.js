let string="";
let buttons=document.querySelectorAll('.button');
let back=document.querySelector('.button-img');
back.addEventListener('click',(e)=>{
    string=string.slice(0,-1);
            document.querySelector('input').value=string;
})
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(string[0]=='%'||string[0]=='*'||string[0]=='/'){
            string="ERROR";
            document.querySelector('input').value=string;
        }
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
           string="";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})