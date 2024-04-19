document.querySelector("#search_button").addEventListener("click", function () {
  let looking_for = document.getElementById("text_search").value;
  document.getElementById("cards-search-results").innerHTML = "";
  fetch(`/api/search?search=${looking_for}`)
    .then((res) => res.json())
    .then((data) =>
      data.forEach(
        (element) =>
          (document.getElementById(
            "cards-search-results"
          ).innerHTML += `<article class="card">
                    <h2>Título: ${element.tituloOferta}</h2>
                    <p>Fecha: ${element.fechaOferta}</p>
                    <p>Salario ${element.salarioOferta}</p>
                    <h4>Descripción ${element.descripcionOferta}</h4>
                    <label class="add-fav">
                    <input type="checkbox" />
                    <i class="fa-solid fa-heart"></i>
                  </label>
                    <a href="${element.linkOferta}" target="_blank">Link</a>
                </article>`)
      )
    );
});
