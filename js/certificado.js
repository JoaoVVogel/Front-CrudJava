async function certificados() {
  const endpointCertificado = "http://3.136.11.244:8080/api/certificado";
  const result = await fetch(endpointCertificado, {
    method: "GET",
  });

  const data = await result.json();

  const cardCertificados = document.getElementById("card-certificados");
  const certificadosInfo = data;

  certificadosInfo.forEach((certificado) => {
    const card = document.createElement("div");
    card.classList.add("card-certificado");

    const nome = document.createElement("h1");
    nome.classList.add("titulo-curso");
    nome.innerText = certificado.nome;

    const assinatura = document.createElement("h2");
    assinatura.classList.add("tipo-curso");
    assinatura.innerText = "Assinado por: " + certificado.assinatura;

    const data = document.createElement("h2");
    data.classList.add("instrutor-curso");
    data.innerText = "Data de emissão: " + certificado.data;

    const statusCertificado = document.createElement("div");

    if (certificado.statusCertificado != 1) {
      statusCertificado.classList.add("status-certificado-encerrado");
      statusCertificado.innerText = "indisponivel";
    } else {
      statusCertificado.classList.add("status-certificado");
      statusCertificado.innerText = "Em andamento";
    }

    card.appendChild(nome);
    card.appendChild(assinatura);
    card.appendChild(data);
    card.appendChild(statusCertificado);

    cardCertificados.appendChild(card);
  });
}
certificados();
