function pegaData() {
  const data = $("#dataInput").val();
  return data;
}

$("#envio").on("click", function (eve) {
  eve.preventDefault();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=3bgtfPtXOUcoh2Jb1UBLDErGZacAnfWFBIZ0yPo9&date=${pegaData()}`,
    type: "GET",
    dataType: "json",

    success: function (result) {
      console.log(result);

      $('.titulo').html(`<h1>${result.title}</h1>`);
      $('.txtImagem').html(`${result.explanation}`);
      $('.img').html(`<img src='${result.url}'>`);
    },

    error: function () {
      alert("Informe uma data a partir de 1995!");
    },
  });
});