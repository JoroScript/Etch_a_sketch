//make divs with javascript dyniamically add them to the container flex div
//make each div have a width divided by the width and height by how many divs we want
//for example if we want a grid with 50 divs divide the width/50 and set it and do so for height as well
// then add those divs with a loop to the container div and add a mouseover event to each of them that colors them to a certain color when hovered

let container=document.querySelector('#container');
let containerWidth=container.offsetWidth;
let containerHeight=container.offsetHeight;
let randBtn=document.querySelector('#randBtn');
let button=document.querySelector('button');
let randomColors=false;
let errorMsg=document.querySelector('#error');
let clearBtn=document.querySelector('#clear');
let colorPicker=document.querySelector('#color');
let targetMode='';
clearBtn.addEventListener('click',()=>{
    let children =container.querySelectorAll('div');
    console.log(children);
    children.forEach(element => {
        element.style.backgroundColor="white";  
    });
})
button.addEventListener('click',()=>{
    
    let gridNum=document.querySelector('#gridNum').value;
    console.log(parseInt(gridNum));
    if(gridNum<100 && parseInt(gridNum)!==NaN && gridNum!=="" && gridNum>0)
    {
        errorMsg.className="hidden";
        container.textContent='';
        gridNum=parseInt(gridNum);
        console.log(gridNum);
        for(let i=1; i<=gridNum*gridNum; i++){
            let div = document.createElement('div');
            div.style.width=`${(containerWidth/gridNum)}px`;
            div.style.height=`${(containerHeight/gridNum)}px`;
            container.appendChild(div);
        }
        randBtn.addEventListener('click',()=>{
            targetMode='random';
            randBtn.style.boxShadow = "-6px 0px 23px 4px rgba(0,0,0,0.75)";
            colorPicker.style.boxShadow='none';
        })
        colorPicker.addEventListener('click',()=>{
            targetMode='picker';
            colorPicker.style.boxShadow="-6px 0px 23px 4px rgba(0,0,0,0.75)";
            randBtn.style.boxShadow="none";
            
        })
        container.addEventListener('mouseover', (event)=>{
            let target=event.target;
            if(targetMode==="random"){
                target.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1})`;
            }
            else {
               target.style.backgroundColor=colorPicker.value;
            }
        })
    }      
   else errorMsg.className="";
})

 
    
