// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'))

function cardMaker(cardData){
    const {authorName, authorPhoto, headline} = cardData;

    //creating elements
    const card = document.createElement('div');
    const cardHead = document.createElement('div');
    const cardAuth = document.createElement('div');
    const imgBox = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardBy = document.createElement('span');

    //adding classes
    card.classList.add('card');
    cardHead.classList.add('headline');
    cardAuth.classList.add('author');
    imgBox.classList.add('img-container');

    // adding content
    cardHead.textContent = headline;
    cardImg.src = authorPhoto;
    cardBy.textContent = `By ${authorName}`;

    // composing content
    card.appendChild(cardHead);
    card.appendChild(cardAuth);
    cardAuth.appendChild(imgBox);
    imgBox.appendChild(cardImg);
    cardAuth.appendChild(cardBy);

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articleObj = response.data.articles;
        const topicsArr = [
            articleObj.bootstrap,
            articleObj.javascript,
            articleObj.jquery,
            articleObj.node,
            articleObj.node
        ]
        topicsArr.forEach(topic => {
            topic.forEach(article => {
                const newArticle = cardMaker(article);
                const cardsBox = document.querySelector('.cards-container');
                cardsBox.appendChild(newArticle);

            });
        });
    });