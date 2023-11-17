async function propriedades(){
    const endpointPropriedade = "http://3.136.11.244:8080/api/propriedade";
    const result = await fetch(endpointPropriedade, {
        method: "GET"
    });

    const data = await result.json();
    console.log(result)
    console.log(data)

    const cardPropriedades = document.getElementById("card-propriedades");
    const propriedadesInfo = data;

    propriedadesInfo.forEach(propriedade => {
        const card = document.createElement("div");
        card.classList.add("card-prorpiedade");

        const cardIndividual = document.createElement("div");
        cardIndividual.classList.add("card-individual");

        card.appendChild(cardIndividual);

        const idPropriedade = document.createElement("h3");
        idPropriedade.innerText = "ID: " + propriedade.id;

        const nome = document.createElement("p");
        nome.innerText = "Propriedade: " + propriedade.nome;

        const ultimaVisita = document.createElement("p");
        ultimaVisita.innerText = "Ultima visita: " + propriedade.ultimaVisita;

        const proximaVisita = document.createElement("p");
        proximaVisita.innerText = "Proxima visita: " + propriedade.proxVisita;
        
        const vencimentoContrato = document.createElement("p");
        vencimentoContrato.innerText = "Vencimento do contrato: " + propriedade.dataVencimentoContrato;

        const tecnologias = document.createElement("p");
        tecnologias.innerText = "Tecnologias: " + propriedade.tecnologiasUsadas;

        cardIndividual.appendChild(idPropriedade);
        cardIndividual.appendChild(nome);
        cardIndividual.appendChild(ultimaVisita);
        cardIndividual.appendChild(proximaVisita);
        cardIndividual.appendChild(vencimentoContrato);
        cardIndividual.appendChild(tecnologias);

        cardPropriedades.appendChild(card);
    });
}
propriedades();