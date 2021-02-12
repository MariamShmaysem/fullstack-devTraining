

fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => { 
    var content = `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Population</small></p>
        </div>
      </div>
    </div>
  </div> `
   for(let i=0; i< json.length; i++){

   var x = document.createElement('div')
   x.src= json[i].flag;
   var z= content.replace('...',json[i].flag);
    z= z.replace('Card title',json[i].name);
    z= z.replace('Population',json[i].population);
   x.innerHTML= z;
  // if(json[i].name== 'Lebanon'){
    // x.className='meow'; 
  // }
   document.getElementById('xx').appendChild(x)
   }

  }) 
  
 