/* 




https://api.tvmaze.com/shows

 Ideia:

Landing page estilo Netflix simples.

 Mostrar:

Imagem do filme

Nome

Gênero

Nota

 Desafio extra:

Campo de busca para filtrar pelo nome. faça uma imagem com essa interface



*/

// dom
const boxFilmes = document.querySelector(".main-filmes__containerFilmes");

function mostrarFilmes() {

    fetch("https://api.tvmaze.com/shows")
        .then((resposta) => {
            if (!resposta.ok) {
                throw new Error("Filmes não encontrados");
            }
            return resposta.json();
        })

        .then((dados) => {

            dados.slice(0, 20).forEach(show => {

                if (show.image) {

                    const div = document.createElement("div");
                    div.classList.add("card", "bg-dark", "text-white", "p-2", "m-2");
                    div.style.width = "250px";

                    const nota = show.rating.average ?? "Sem nota";

                    div.innerHTML = `
                        <img src="${show.image.medium}" class="card-img-top img-fluid">
                        <div class="card-body">
                            <h5 class="card-title">${show.name}</h5>
                            <p class="card-text">⭐ ${nota}</p>
                        </div>
                    `;

                    boxFilmes.appendChild(div);

                }



            });




        })

        .catch((erro) => {
            console.log("Erro:", erro);
        });
}

mostrarFilmes();






