$(() => {
    getAllCountries();
    $("#btnShowData").click(clickButton);
})

function getAllCountries() {
    $.ajax({
        url: 'http://localhost:4000/all',
        success: function(res) {
            const countryName = res.data;

            updateList(countryName);
        }
    })
}

function updateList(list) {
    $('#list').empty();

    list.forEach(country => {
        $("#list").append(`
            <li class="list">
            <p>${country.name} - ${country.capital}</p>
            </li>`
    )})
}

function clickButton() {
    const userValue = $('#userValue').val();

    $.ajax({
        url: `http://localhost:4000/${userValue}`,
        success: function (res) {
            updateList(res.data);
        }
    })
};

