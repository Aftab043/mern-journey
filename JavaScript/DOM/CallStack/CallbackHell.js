h1 = document.querySelector("h1");

function changeColor(color, delay , nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
}
changeColor("red",1000,() =>{
    changeColor("orange",1000,()=>{
        changeColor("aqua",1000,()=>{
            changeColor("grey",1000,()=>{
                changeColor("pink",1000)
            });
        });
    });
},);


//  Callback Nesting -> Callback Hell.
