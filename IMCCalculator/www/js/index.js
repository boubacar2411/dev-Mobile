$(document).on("pagecreate", "#mainPage", function () {
    $("#calculateBtn").on("click", function () {
        var weight = parseFloat($("#weight").val());
        var height = parseFloat($("#height").val());
        var bmi = weight / (height * height);
        var resultDiv = $("#result");

        resultDiv.html("Votre IMC est : " + bmi.toFixed(2));

        

        var category = "";
        if (bmi < 18.5) {
            category = "Insuffisance pondérale";
        } else if (bmi < 24.9) {
            category = "Poids normal";
        } else if (bmi < 29.9) {
            category = "Surpoids";
        } else {
            category = "Obésité";
        }

        var list = $('<ul data-role="listview" data-inset="true"></ul>');
        list.append('<li data-role="list-divider">Catégorie</li>');
        list.append('<li>' + category + '</li>');

        list.listview().listview("refresh");

        resultDiv.append(list);
    });
});
