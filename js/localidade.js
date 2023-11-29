async function localidades() {
    const endpointLocalidade = "http://3.136.11.244:8080/api/localidade";
    const result = await fetch(endpointLocalidade, {
      method: "GET",
    });
  
    const data = await result.json();
  
    const cardLocalidade = document.getElementById("card-localidades");
    const localidadesInfo = data;
  
    localidadesInfo.forEach((localidade) => {
      const card = document.createElement("div");
      card.classList.add("card-localidade");
  
      const cardIndividual = document.createElement("div");
      cardIndividual.classList.add("card-individual");
  
      card.appendChild(cardIndividual);
  
      const idLocalidade = document.createElement("h3");
      idlLocalidade.innerText = "ID: " + localidade.id;
  
      const estado = document.createElement("p");
      estado.innerText = "Estado: " + localidade.estado;
  
      const nomeEstrada = document.createElement("p");
      nomeEstrada.innerText = "Nome da estrada: " + localidade.nomeEstrada;
      
      const numero = document.createElement("p");
      numero.innerText = "Numero: " + localidade.numero;
  
      const latitude = document.createElement("p");
      latitude.innerText ="Latitude: " + localidade.latitude;
  
      const longitude = document.createElement("p");
      longitude.innerText = "Longitude: " + localidade.longitude;
  
      cardIndividual.appendChild(idLocalidade);
      cardIndividual.appendChild(estado);
      cardIndividual.appendChild(nomeEstrada);
      cardIndividual.appendChild(numero);
      cardIndividual.appendChild(latitude);
      cardIndividual.appendChild(longitude);
  
      cardLocalidade.appendChild(card);
    });
  }
  localidades();
  