let url = `https://swapi.dev/api/people`;

fetch(url)
.then (data => {
    return data.json()})
    .then (response => {
    for (let i = 0; i <= response.results.length; i++){
    

    const name = response.results[i].name;
    const height = response.results[i].height;
    const gender = response.results[i].gender;
    const image = response.results[i].image;

    const html =`
        <div class="character">
        <div class="image">${image}</div>
        <div class="name">
            <a href="${url}">${name}</a> 
        </div>
        <div class="gender">${gender}</div>
        <div class="height">${height}</div>
        </div>`;

    
        document.querySelector("#characters").insertAdjacentHTML('afterbegin', html)
    };
})