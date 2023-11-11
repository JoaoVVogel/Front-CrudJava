const endpointCurso = "http://18.227.26.15:8080/api/curso";

async function cursos(){
    const result = await fetch(endpointCurso, {
        method: "GET"
    });

    const data = await result.json();
    console.log(result)
    console.log(data)

    const cardCursos = document.getElementById("card-cursos");
    const cursosInfo = data;

    cursosInfo.forEach(curso => {
        const card = document.createElement("div");
        card.classList.add("card-curso");

        const nomeCurso = document.createElement("h1");
        nomeCurso.classList.add("titulo-curso");
        nomeCurso.innerText=curso.nome;

        const tipoCurso = document.createElement("h2");
        tipoCurso.classList.add("tipo-curso");
        tipoCurso.innerText=curso.titulo;

        card.appendChild(nomeCurso)
    
        cardCursos.appendChild(card);
    });
}
cursos();