let hola = document.getElementById("hola")


function increase () {
    let num = 0;

    hola.addEventListener("click", function(){
        console.log(num=num+1)
    })
    console.log(num)
}

increase()


