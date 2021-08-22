//esta atento a todo lo que pasa en la pagina y prioriza lo que le pongas 
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           
            array = resultObj.data;
            showProductsList(array)



           
         
    }
});
});


var  array = [];
// esto muestra la lista de productos buscando  la url de product y muestra las variables de cada uno de los productos
function showProductsList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let product = array[i];

        

        

     htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            <small class="text-muted">` + product.soldCount + ` vendidos</small>
                        </div>
                        <p class="mb-1">` + product.description + `</p>
                        <p class="mb-1">` + product.currency +" "+ product.cost + `</p>
                       
                    </div>
                </div>
            </a>
            `
      

        document.getElementById("productslist").innerHTML = htmlContentToAppend;
    } }




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
