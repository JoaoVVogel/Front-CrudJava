
async function produtores(){
    const endpointProdutor = "http://3.136.11.244:8080/api/produtor";
    
    const result = await fetch(endpointProdutor, {
        method: "GET"
    });

    const data = await result.json();

    const cardProdutores = document.getElementById("card-produtores");
    const cursosInfo = data;

    cursosInfo.forEach(produtor => {
        const card = document.createElement("div");
        card.classList.add("card-produtor");

        const cardIndividual = document.createElement("div");
        cardIndividual.classList.add("card-individual");

        card.appendChild(cardIndividual);

        const idProdutor = document.createElement("p");
        idProdutor.innerText = "ID: " + produtor.id;

        const nomeProdutor = document.createElement("p");
        nomeProdutor.innerText = "Produtor: " + produtor.nome;

        const cnpjProdutor = document.createElement("p");
        cnpjProdutor.innerText = "CNPJ: " + produtor.cnpj;

        const statusProdutor = document.createElement("div");

        if(produtor.situacao == 1){
            statusProdutor.classList.add("status-produtor-indisponivel");
            statusProdutor.innerText = "indisponivel";

        }else if(produtor.situacao == 2){
            statusProdutor.classList.add("status-produtor-contemplacao");
            statusProdutor.innerText = "Em contemplação";

        }else if(produtor.situacao == 3){
            statusProdutor.classList.add("status-produtor-ativo");
            statusProdutor.innerText = "Atívo";

        }

        cardIndividual.appendChild(idProdutor);
        cardIndividual.appendChild(nomeProdutor);
        cardIndividual.appendChild(cnpjProdutor);
        cardIndividual.appendChild(statusProdutor);

        card.appendChild(cardIndividual);

        cardProdutores.appendChild(card);
    });
}
produtores();