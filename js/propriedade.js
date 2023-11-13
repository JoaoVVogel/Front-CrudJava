const endpointPropriedade = "http://18.227.26.15:8080/api/propriedade";

async function propriedades(){
    const result = await fetch(endpointPropriedade, {
        method: "GET"
    });

    const data = await result.json();

    const cardPropriedades = document.getElementById("card-propriedades");
    const propriedadesInfo = data;

    propriedadesInfo.forEach(propriedade => {
        const card = document.createElement("div");
        card.classList.add("card-curso");

        

        cardPropriedades.appendChild(card);
    });
}
cursos();