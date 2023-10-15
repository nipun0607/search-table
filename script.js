let input1 = document.querySelector("input");
let items = document.querySelectorAll(".tbody tr ");
let bodyTable = document.querySelector(".tbody")

input1.addEventListener('input',()=>{
    let arrayConvert = Array.from(items);


     let result = arrayConvert.filter((ele) =>{
        let arr = ele.children[0].innerText;
        if(arr.toLowerCase().startsWith(input1.value.toLowerCase())){
           
            return ele;
        }
    })

    bodyTable.replaceChildren(...result);

})