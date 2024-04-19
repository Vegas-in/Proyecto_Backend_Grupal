document.querySelector("#search_button").addEventListener("click", function () {

    let looking_for = document.getElementById("text_search").value;
    document.getElementById("cards-search-results").innerHTML = "";
     fetch(`/api/search?search=${looking_for}`)
        .then(res => res.json())
        .then(data => data.forEach(element => 
            document.getElementById("cards-search-results").innerHTML +=               
                `<article class="cards_offers">
                    <h3>Título: ${element.tituloOferta}</h3>
                    <p>Fecha: ${element.fechaOferta}</p>
                    <p>Salario ${element.salarioOferta}</p>
                    <p>Descripción ${element.descripcionOferta}</p>
                    <p>Link ${element.linkOferta}</p>
                </article>` 
         ))
});