let beerApp = {
    beerBtn: document.getElementById("beers"),
    baseUrl: "https://api.punkapi.com/v2/",
    containerDiv: document.getElementById("container"),
    homeBeerCard: document.getElementById("cardHomeBeer"),
    randomBeer: document.getElementById("randomBeer"),
    searchInput: document.getElementById("searchInput"),
    searchBtn: document.getElementById("searchBtn"),
    sortBy: document.getElementById("sortBy"),
 

    init: function () {
        beerApp.beerBtnFunc();
        beerApp.getRandomBeer();
        beerApp.searchBeerFromInpt();
        beerApp.showBy();
        beerApp.beerInfoFunction();
        beerApp.enter();
    },

    beerInfoFunction: function () {
        this.containerDiv.addEventListener("click", (event) => {
            this.sortBy.style.display = "none"
            let ids = event.target.id;
            $.ajax({
                url: `${this.baseUrl}beers/${ids}`,
                success: function(response) {
                    beerApp.getMoreInfo(response[0]);
                },
                error: function(error) {
                    console.log("Beer not found");
                }
            })
            
        },)
    },

    beerBtnFunc: function () {
        this.beerBtn.addEventListener("click", () => {
            $.ajax({
                url: `${this.baseUrl}beers/`,
                success: function (response) {
                    beerApp.printBeersOnScreen(response);  
                },
                error: function (error) {
                    console.log("An error has occurred");
                }
            })
        })
    },


    printBeersOnScreen: function (beers) {
        beerApp.sortBy.style.display = "inline";
        beerApp.homeBeerCard.style.display = "none";
        beerApp.containerDiv.innerHTML = "";
        let html = `<div class="row ml-3">`;
        for(let beer of beers) {
            beerApp.containerDiv.innerHTML =
            `
            <div class="card mt-3 ml-5 bg-light border-warning rounded"" style="height: 29rem; width: 20rem;">
                <img src="${beer.image_url}" class="h-75 w-50 mt-3 ml-5" alt="${beer.name}>
                <div class="card-body">
                    <h5 class="card-title ml-2 mt-1">${beer.name}</h5>
                    <a href="#" class="btn bg-warning mt-4" id="${beer.id}">More Info</a>
                </div>  
            </div>
    
            `
            html += beerApp.containerDiv.innerHTML;
        }
        html += "</div>";
        beerApp.containerDiv.innerHTML = html;
    
    },

    getRandomBeer: function () {
        this.randomBeer.addEventListener("click", () => {
            this.sortBy.style.display = "none"
            $.ajax({
                url: `${this.baseUrl}beers/random`,
                success: function (response) {
                    beerApp.showRandomBeer(response);
                },
                error: function (error) {
                    console.log("An error has occurred, we can't get a random beer at the moment");
                }
            })
        })
    },

    showRandomBeer: function(randomBeers) {
        this.sortBy.style.display = "none";
        
        beerApp.homeBeerCard.style.display = "none";
        beerApp.containerDiv.innerHTML = "";
        let html = `<div class="row ml-3">`;
        for(let beer of randomBeers) {
            beerApp.containerDiv.innerHTML =
            `
            <div class="card mt-3 ml-5 bg-light border-warning"" style="height: 31rem; width: 40rem;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${beer.image_url}" alt="${beer.name}" class="h-100 w-50 mt-3 ml-5">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${beer.name}</h4>
                            <h5 class="card-title">${beer.tagline}</h5>
                            <p class="card-text">First Brewed: ${beer.first_brewed}</p>
                            <p class="card-text">${beer.description}</p>
                            <p class="card-text"><em>Food Pairing:</em> ${beer.food_pairing}</p>

                        </div>
                    </div>
                </div>
            </div>
    
            `
            html += beerApp.containerDiv.innerHTML;
        }
        html += "</div>";
        beerApp.containerDiv.innerHTML = html;
    },

    searchBeerFromInpt: function () {
        this.searchBtn.addEventListener("click", (name) => {
            name = this.searchInput.value;
            $.ajax({
                url: `${this.baseUrl}beers?beer_name=${name}`,
                success: function(response) {
                    if (name) {
                        beerApp.showRandomBeer(response);
                        beerApp.enter(response); 
                    } else {
                        beerApp.containerDiv.innerHTML = "";
                        beerApp.containerDiv.innerHTML += `<h3>No beer found</h3>`
                    }
                },
                error: function(error) {
                    console.log("Beer not found");
                }
            })
        })
    },

    enter: function () {
        this.searchInput.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                beerApp.searchBtn.click();
            }
        })
    },

    getMoreInfo: function (beer) {
        beerApp.homeBeerCard.style.display = "none";
        beerApp.containerDiv.innerHTML = "";
            beerApp.containerDiv.innerHTML =
            `
            <div class="card mt-3 ml-5 bg-light border-warning"" style="height: 31rem; width: 40rem;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${beer.image_url}" alt="${beer.name}" class="h-100 w-50 mt-3 ml-5">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${beer.name}</h4>
                            <h5 class="card-title">${beer.tagline}</h5>
                            <p class="card-text">First Brewed: ${beer.first_brewed}</p>
                            <p class="card-text">${beer.description}</p>
                            <p class="card-text"><em>Food Pairing:</em> ${beer.food_pairing}</p>

                        </div>
                    </div>
                </div>
            </div>
    
            `     
    },

    showBeerByName: function () {
        $.ajax({
            url:`${this.baseUrl}beers?beer_name/`,
            success: function(response) {
                response.sort((a, b) => a.name.localeCompare(b.name))
                beerApp.printBeersOnScreen(response);
            },
            error: function(error) {
                console.log("An error has occured")
            }
        })
    },

    showBeerByFirstBrewed: function () {
        $.ajax({
            url:`${this.baseUrl}beers/`,
            success: function(response) {
                response.sort((a, b) => a.first_brewed.localeCompare(b.first_brewed))
                beerApp.printBeersOnScreen(response);
            },
            error: function(error) {
                console.log("An error has occured")
            }
        })
    },

    showBeerByBitterness: function () {
        $.ajax({
            url:`${this.baseUrl}beers/`,
            success: function(response) {
                response.sort((a, b) => a.ibu - b.ibu);
                beerApp.printBeersOnScreen(response);
            },
            error: function(error) {
                console.log("An error has occured")
            }
        })
    },

    showBy: function () {
        beerApp.sortBy.addEventListener("change", () => {
            btnName = beerApp.sortBy.value;
            if(btnName === "name") {
                beerApp.showBeerByName();
            }
            if(btnName === "firstBrewed") {
                beerApp.showBeerByFirstBrewed();
            }
            if(btnName === "bitterness") {
                beerApp.showBeerByBitterness();
            }

        })
        
    }

}

beerApp.init();


let btnToTop = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
};

btnToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

