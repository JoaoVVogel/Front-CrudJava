async function tecnologia() {
  const endpointTecnologia = "http://3.136.11.244:8080/api/tecnologia";

  const result = await fetch(endpointTecnologia, {
    method: "GET",
  });

  const data = await result.json();

  console.log(result);

  const cardTecnologias = document.getElementById("card-tecnologias");
  const tecnologiasInfo = data;

  tecnologiasInfo.forEach((tecnologia) => {
    const card = document.createElement("div");
    card.classList.add("card-tecnologia");

    const nomeTecnologia = document.createElement("h1");
    nomeTecnologia.classList.add("titulo-tecnologia");
    nomeTecnologia.innerText = tecnologia.tipoQueijo;

    const processoUtilizado = document.createElement("h2");
    processoUtilizado.classList.add("tipo-te");
    processoUtilizado.innerText =
      "Processo utilizado: " + tecnologia.processoUtilizado;

    const modoPreparo = document.createElement("h2");
    modoPreparo.classList.add("modo-preparo");
    modoPreparo.innerText = "Modo de preparo: " + tecnologia.modoPreparo;

    card.appendChild(nomeTecnologia);
    card.appendChild(processoUtilizado);
    card.appendChild(modoPreparo);

    cardTecnologias.appendChild(card);
  });
}

tecnologia();
