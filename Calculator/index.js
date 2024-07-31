let string = "";
let buttons = document.querySelectorAll(".button"); //button is object
 //size is array. 
buttons.forEach((element)=> {
    element.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string=string.replace("x","*").replace("÷","/");
                string = eval(string);
                document.querySelector(".cal").value = string ;
                string="";
            }
            catch(error){
                string="error";
                document.querySelector(".cal").value = string ;
            }
            
        }
        else if(e.target.innerHTML=="del"){
            string = string.slice(0,-1);
            document.querySelector(".cal").value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector(".cal").value = string;
        }
        else if(string=="error") {
            string = "";
            string=string+e.target.innerHTML;
            document.querySelector(".cal").value = string;
        }
        else{
            string=string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }

    })
})