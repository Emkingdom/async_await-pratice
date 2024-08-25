const url = 'http://numbersapi.com';
let favorite = 15;
let favoritesNumbers  = [10, 11, 15];
let favNumbers = [];


for (let i = 1; i < 5; i++) {
    favNumbers.push(
    axios.get(`${url}/${favorite}?json`)
  );
}

async function favoriteNumberFact(favNumber) {
    let res = await axios.get(`${url}/${favNumber}?json`)
    console.log(res.data)
}

async function favoriteNumbersFacts(favNumbers) {
    let res = await axios.get(`${url}/${favNumbers}?json`)
    console.log(res.data)
}   

favoriteNumberFact(favorite);
favoriteNumbersFacts(favoritesNumbers);


async function showFavoriteNumbers () {
    let facts  = await Promise.all(favNumbers)
        .then(res=> { 
            for( data of res){
                let p = document.createElement('p');
                p.innerText = data.data.text
                document.body.append(p)
            }
        })

}


showFavoriteNumbers()