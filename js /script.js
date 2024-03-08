const selectItems = document.querySelectorAll(".select");
console.log(selectItems);
const pizzaItems = document.querySelectorAll(".category__pizza");
console.log(pizzaItems);

for (let i = 0; i < selectItems.length; i++) {
  // console.log(selectItems[i])
  let elements = selectItems[i];
  if (elements.textContent === `Chicken Pizza`) {
    // console.log(elements);
    elements.classList.add("active");
  }
}


for (let i = 0; i < pizzaItems.length; i++) {
  console.log(pizzaItems[i]);
  let elements = pizzaItems[i];
  if (elements.classList.contains("chicken")) {
    elements.style.display = "flex";
  } else {
    elements.style.display = "none";
  }
}


for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    // console.log(selectItems[i]);
    for(let i=0; i< selectItems.length; i++){
    
    selectItems[i].classList.remove('active')
    }
    selectItems[i].classList.add('active')
  
  let filterName=selectItems[i].textContent
    console. log(filterName)
    if(filterName==="Chicken Pizza"){
        for (let i = 0; i < pizzaItems.length; i++) {
            let elements = pizzaItems[i];
            if (elements.classList.contains("chicken")) {
                elements.style.display = "flex";
              } else {
                elements.style.display = "none";
              }
            }
    }

    else if(filterName==="Perpperoni"){
        for (let i = 0; i < pizzaItems.length; i++) {
            let elements = pizzaItems[i];
            if (elements.classList.contains("Perpperoni")) {
                elements.style.display = "flex";
            } else {
                elements.style.display = "none";
            }
        }

    }



   else  if(filterName==="margherita"){
        for (let i = 0; i < pizzaItems.length; i++) {
            let elements = pizzaItems[i];

            if (elements.classList.contains("margherita")) {
                elements.style.display = "flex";
            } else {
                elements.style.display = "none";
            }
        }

    }



   else if(filterName==="Hawaiian"){
        for (let i = 0; i < pizzaItems.length; i++) {
            let elements = pizzaItems[i];

            if (elements.classList.contains("Hawaiian")) {
                elements.style.display = "flex";
            } else {
                elements.style.display = "none";
            }
        }

    }




    else{ (filterName==="Meat")
        for (let i = 0; i < pizzaItems.length; i++) {
            let elements = pizzaItems[i];

            if (elements.classList.contains("Meat")) {
                elements.style.display = "flex";
            } else {
                elements.style.display = "none";
            }
        }

    
    }

})
  }