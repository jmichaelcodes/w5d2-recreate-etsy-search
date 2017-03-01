var items = [];

getItems();

// createCard({
//     src: items[0],
//     title: items[0],
//     seller: items[0],
//     price: items[0]
// });


function getItems() {
    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
            items = data.results;
        })

        .then(whatever => console.log(items[0]))
        .then(whatever => renderUserCards());

}

function renderUserCards() {
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