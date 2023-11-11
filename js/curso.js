const endpointCurso = "http://18.227.26.15:8080/api/curso";

async function cursos(){
    const result = await fetch(endpointCurso, {
        method: "GET",
    });

    const data = await result.json();
    console.log(result)
    console.log(data)

    const cardCursos = document.getElementById("card-cursos");
    const cursosInfo = data.result;

    cursosInfo.forEach(curso => {
        const card = document.createElement("div");
        card.classList.add("card");

        const nomeCurso = document.createElement("h1");
        nomeCurso.innerText=curso.nome
    
        cardCursos.appendChild(card);
    });
}
cursos();