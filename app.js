const  botoncontador=document.querySelectorAll(".porduct-icons")
const  cuantasCompras=document.querySelector(".nav-contador")
const  carrito=document.querySelector(".acceder-carrito")
const  carritoComp=document.querySelector(".conteiner-mis-compras")
const   misCompras=document.querySelector(".compras")


 let cont=0;
 botoncontador.forEach( Intens =>{
   Intens.addEventListener("click",()=>{
    cont++
    cuantasCompras.textContent=cont
    
   })
   
})

carrito.addEventListener("click", ()=>{
    carritoComp.classList.add("compras-javas")
})

carritoComp.addEventListener("click", (e)=>{
  if(e.target.classList.contains("close-car")){
    carritoComp.classList.add("car-close")

    carritoComp.classList.remove("car-close")
    carritoComp.classList.remove("compras-javas")
  }

})

/* las compras*/
const arrayProducts = [
  {
    price: "US$ 10.5",
    id: 0,
    name: "Camisas",
    stock: 10,
    description: "Rojo",
    img: "./img/featured1.png",
  },
  {
    price: "US$ 10.5",
    id: 1,
    name: "Camisas",
    stock: 10,
    description: "Negro",
    img: "./img/featured2.png",
  },
  {
    price: "US$ 10.5",
    id: 2,
    name: "Sudaderas",
    stock: 10,
    description: "Blanco",
    img: "./img/featured3.png",
  },
];




   const shoppingArray = Object.values(arrayProducts);

 
        botoncontador.forEach( Intens =>{
        let ind=0
        Intens.addEventListener("click",()=>{
        ind++
      
       let html = "";
       shoppingArray.forEach(({ id, name, price, stock, img}) => {
         html += `
                <div class="shopping ${id}">
                    <div class="shopping-cont ">
                        <div class="shopping__img  " >
                            <img src="${img}" alt="${name}">
                        </div>
                        <div class="shopping-info">
                            <p>nombre: ${name}</p>
                            <p>precio: ${price}</p>
                            <p>stock: ${stock}</p>
                        </div>
                    </div>
                    <div class="shopping__actions" id="${id}">
                        <button class="rest">-</button>
                        <b class="amount">${ind}</b>
                        <button class="add">+</button>
                        <button class='bx bxs-trash del  ${id}'>delete</button>
                    </div>
   
                </div>`;
        }
        );
        
           misCompras.innerHTML = html;

                  const comprasTo=document.querySelectorAll(".del")
                  const comprasCho=document.querySelectorAll(".shopping")
                  const contadorPro=document.querySelectorAll(".amount")
                  const  botnMas=document.querySelectorAll(".add")
                  const btnMens=document.querySelectorAll(".rest")
                  console.log(contadorPro)
                  for( let i=0; i<comprasTo.length;i++) {
                   

                     botnMas[i].addEventListener("click" , ()=>{
                      
                       if(contadorPro[i].textContent !==0){

                         contadorPro[i].textContent++
                      }
                     })
                     
                     btnMens[i].addEventListener("click" , ()=>{
                      
                      if(contadorPro[i].textContent !==0 && contadorPro[i].textContent>0 ){

                         contadorPro[i].textContent--
                     }
                    })


                    comprasTo[i].addEventListener("click", ()=>{
                        contadorPro[i].textContent=0;               
                        comprasCho[i].remove(i)
                        ind=0;
                        cuantasCompras.textContent=0
                        cont=0;
                         })



                  }

              
  })
})




  
  
