$(document).ready(function () {
    const API_URL = "http://localhost:3000";

    $(".bnt-mensagem").on("click", function () {
        const mensagem = $(this).data("mensagem");

        $.ajax({
            url: `${API_URL}/${mensagem}`,
            method: "POST",
            contentType: "application/json",
            success: function (response) {
                 $("#resultado").text(response.mensagem);
            },
            error: function (err) {
                  $("#resultado").text("Erro ao buscar a mensagem!");
            }
        });
    });

      $(".bnt-data").on("click", function () {
        const data = $(this).data("data");
        $.ajax({
            url: `${API_URL}/${data}`,
            method: "POST",
            contentType: "application/json",
            success: function (response) {
                   $("#resultadodata").fadeOut(300, function() {
                    $(this).text(response.data).fadeIn(600);
            });
        },
            error: function (err) {
                  $("#resultadodata").text("Erro ao buscar a mensagem!");
            }
        });
    });
});


