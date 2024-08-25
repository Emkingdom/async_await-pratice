let baseURL = 'https://deckofcardsapi.com/api/deck';
let deckCardID = '';
const drawButton = document.querySelector('button');
const imageBox = document.querySelector('.images-box');


class Deck {
    constructor(url){
        this.url = url;
        this.id  = '';
        this.cardSuit = '';
        this.cardValue = '';
        this.cardImage = '';
    }

    async getDeck() {
        let res = await axios.get(`${this.url}/new/`);
        this.id = res.data.deck_id;
        let shuffle = await axios.get(`${this.url}/${this.id}/shuffle/`)
        console.log(this.id)
        
    }
    
    async getCard() {
        if(this.id === '') {
            await this.getDeck()
        }

        let deckURL  = `${this.url}/${this.id}/draw/?count=1`;
        let res = await axios.get(deckURL)
        let { suit, value, image } = res.data.cards[0];
        this.cardSuit = suit;
        this.cardValue = value;4
        this.cardImage = image
        console.log(`${this.cardValue.toLowerCase()} of ${this.cardSuit.toLowerCase()}`);
        
        return {
            cardSuit: this.cardSuit,
            cardValue: this.cardValue,
            cardImage: this.cardImage 
        }
    
    }
}


drawButton.addEventListener('click', async function(){
    const deck = new Deck(baseURL)
    let deckCard =  await deck.getCard();
    imgSrc = deckCard.cardImage;
    let img = document.createElement('img');
    img.src = imgSrc;
    imageBox.append(img)
     
})
