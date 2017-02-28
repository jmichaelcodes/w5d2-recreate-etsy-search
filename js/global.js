createCard({
    src: 'http://unsplash.it/400/300?image=100',
    caption: 'Item Name',
    seller: 'Seller',
    price: '$$$.$$'
});
createCard({
    src: 'http://unsplash.it/400/300?image=200',
    caption: 'Item Name',
    seller: 'Seller',
    price: '$$$.$$'
});
createCard({
    src: 'http://unsplash.it/400/300?image=300',
    caption: 'Item Name',
    seller: 'Seller',
    price: '$$$.$$'
});
createCard({
    src: 'http://unsplash.it/400/300?image=400',
    caption: 'Item Name',
    seller: 'Seller',
    price: '$$$.$$'
});
createCard({
    src: 'http://unsplash.it/400/300?image=500',
    caption: 'Item Name',
    seller: 'Seller',
    price: '$$$.$$'
});
createCard({
    src: 'http://unsplash.it/400/300?image=600',
    caption: 'Item Name',
    seller: 'Seller',
    price: '$$$.$$'
});

function createCard(image) {
    var card = `<div class="card">
            <img src="${image.src}" alt="Image"/>
            <h5 class="card-caption">${image.caption}</h5>
            <h5 class="col-sm-6 card-caption seller">${image.seller}</h5>
            <h5 class="col-sm-6 card-caption price">${image.price}</h5>
        </div>`;

    document.querySelector('#app').innerHTML += card;
}