const api = 'http://localhost:3000/';

$(() => {
    getAllCountries();
    $("#btnShowData").click(clickButton);
    $('#capital').click(capitalName);
    $('#country-name').click(countryName);
})

function getAllCountries() {
    $.ajax({
        url: `${api}all`,
        success: function(res) {
            const countryName = res.data;

            updateList(countryName);
        }
    })
}

function updateList(list) {
    $('#list').empty();

    list.forEach(country => {
        $("#list").append(
            `
            <li class="list">
            <p>${country.name} / ${country.capital}</p>
            </li>
            `
    )})
}

function capitalName() {
    $('#input-g').attr("placeholder", "Type a capital")
    $('#country-name').prop("checked", false)
}

function countryName() {
    $('#input-g').attr("placeholder", "Type a country name")
    $('#capital').prop("checked", false)
}

function clickButton() {
    const userValue = $('#userValue').val();
//    const regex = 

    $.ajax({
        url: `${api}all/${userValue}`,
        success: function (res) {
            updateList(res.data);
        }
    })
};

