async function cursos(){
    const endpointCurso = "http://3.136.11.244:8080/api/curso";
    
    const result = await fetch(endpointCurso, {
        method: "GET"
    });

    const data = await result.json();

    const cardCursos = document.getElementById("card-cursos");
    const cursosInfo = data;

    cursosInfo.forEach(curso => {
        const card = document.createElement("div");
        card.classList.add("card-curso");

        const nomeCurso = document.createElement("h1");
        nomeCurso.classList.add("titulo-curso");
        nomeCurso.innerText = curso.nome;

        const tipoCurso = document.createElement("h2");
        tipoCurso.classList.add("tipo-curso");
        tipoCurso.innerText = "Tipo: " + curso.tipo;

        const instrutorCurso = document.createElement("h2");
        instrutorCurso.classList.add("instrutor-curso");
        instrutorCurso.innerText = "Instrutor: " + curso.instrutor;

        const statusCurso = document.createElement("div");

        if(curso.statusCurso != 1){
            statusCurso.classList.add("status-curso-encerrado");
            statusCurso.innerText = "indisponivel";

        }else{
            statusCurso.classList.add("status-curso");
            statusCurso.innerText = "Em andamento";
        }
        
        card.appendChild(nomeCurso);
        card.appendChild(tipoCurso);
        card.appendChild(instrutorCurso);
        card.appendChild(statusCurso);
    
        cardCursos.appendChild(card);
    });
}
cursos();