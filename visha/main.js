let mainSection =document.getElementById("data-list-wrapper")

let productData = [];


function fetchData()
{
  fetch("http://localhost:3000/products")
    .then((res) =>
      res.json())

    .then((data) => {
      setData(data)
      productData = data;
      storeData(data)
      
     
    })

    .catch((err) => console.log(err));
}

fetchData()




function setData(data) {
  let show = data.map((el) =>
    storeData(el.id,el.image,el.image2,el.title,el.price,el.description)

  )
 
  mainSection.innerHTML=show; 
  console.log(show);


}


function storeData(id,image,image2,title,price,description) {
  let store =

  `
    
              <div class="card data-id="${id}" style="border:1px solid black; width:25%; margin:30px 50px" >
               <a href="desc.html?id=${encodeURIComponent(id)}&image2=${encodeURIComponent(image2)}&image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}">
                <div class="card-img" width="100%" >
                  <img src="${image}" alt="" height="500px" width="100%" >
                
                  
                </div>
                </a>
                <div class="card-body">
                  <div class="card-title"><h4><b><u>${title}</u></b></h4></div>
                  
                  <div class="card-price"><h5><b>${price}</b></h5></div>
                 
                </div>
              </div>
            
    `





  return store
}







          