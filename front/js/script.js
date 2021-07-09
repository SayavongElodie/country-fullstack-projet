const api = 'http://localhost:3000/';

$(() => {
    getAllCountries();
    $("#btnShowData").click(clickButton);
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

// function capitalName() {
//     $('#capitalName').click(function() {
//         $('#input-g[placeholder]').placeholder();
//         $('#input-g').attr("placeholder", "Type a capital")
//     })
// }

// function countryName() {
//     $('#capitalName').click(function() {
//         $('#input-g[placeholder]').placeholder();
//         $('#input-g').attr("placeholder", "Type a capital")
//     })
// }

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

