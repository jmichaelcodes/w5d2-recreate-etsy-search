var items = [];

getItems();

// createCard({
//     src: items[0],
//     title: items[0],
//     seller: items[0],
//     price: items[0]
// });

document.querySelector('#searchButton').addEventListener('click', getItems);

function getItems(e) {
    var searchValue = document.querySelector('#searchField').value;
    var searchTermValue = document.querySelector('#searchTerm');

    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchValue) + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
            items = data.results;

            renderCards();
            searchTermValue.innerHTML = searchValue;
        })

}

function renderCards() {
    document.querySelector('#app').innerHTML = '';

    items.forEach(function(user) {

        createCard(user);

    })
}


function createCard(items) {
    var card = `<div class="card">
            <img class="cardImage" src="${items.Images[0].url_75x75}" alt="Image"/>
            <h5 class="card-caption">${items.title}</h5>
            <h5 class="col-sm-6 card-caption seller">${items.Shop.shop_name}</h5>
            <h5 class="col-sm-6 card-caption price">${items.price}</h5>
        </div>`;

    document.querySelector('#app').innerHTML += card;
}