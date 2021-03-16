/* List of bands
Create a webpage that will display bands data on load

1.Make a list with bands, where on each page you will display 10 bands and each band
should have the following fields displayed
-row number
-name of the band
-visual indication is band active
-comma separated list of tags
-list of current band members (each in seperate line)
-total number of albums

-sort the list by band name or total number of albums

2.Search box that allows the user to filter the bands by name
-Dropdown menu with tags, and filter only bands that are having that tag
-paging controls*/


let bandsApp = {
    showBandsBtn: document.getElementById("showBands"),
    resultDiv: document.getElementById("result"),
    inputField: document.getElementById("input"),
    searchBtn: document.getElementById("searchBtn"),
    sortByName: document.getElementById("sort"),

    baseUrl: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",

    init: function() {
        bandsApp.showBands();
        bandsApp.sort();
    },

    showBands: function () {
        this.showBandsBtn.addEventListener("click", () => {
            $.ajax({
                url: this.baseUrl,
                success: function (response) {
                    let responseObj = JSON.parse(response);
                    bandsApp.displayBands(responseObj);
                },
                error: function (error) {
                    console.log("An error has occurred");
                }
            })
        })
    },

    displayBands: function (bands) {
        this.resultDiv.innerHTML = ""

        for(let band of bands) {
        
        this.resultDiv.innerHTML += 
        `
        <table class="table" id="tbl">
            <thead>
                <tr>
                    <th scope="col">Band Name</th>
                    <th scope="col">Active</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Band Members</th>
                    <th scope="col">No. of albums</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">${band.name}</th>
                <td>${band.active ? "Active" : "Not Active"}</td>
                <td>${band.tags}, <br></td>
                <td>${band.members.map((member) => {
                    if(member.former){
                        return 
                    } else {
                        return`${member.name}<br>`
                    }
                }).join("")}</td>
                <td>${band.albums.length} <br></td>
            </tr>
            </tbody>
        </table> 
        `          
        }
    },

    sort: function () {
        this.sortByName.addEventListener("click", () => {
            $.ajax({
                url: this.baseUrl,
                success: function(response) {
                    obj = JSON.parse(response)
                    obj.sort((a, b) => a.name.localeCompare(b.name))
                    bandsApp.displayBands(obj);
                },
                error: function(error) {
                    console.log("An error has occured")
                }
            })

        })
    },

    //ne e funkcionalno
    /*searchBandsByName: function () {
        this.searchBtn.addEventListener("click", () =>{
            let inpt = this.inputField.value;
            console.log(inpt);
            $.ajax({
                url: this.baseUrl,
                success: function (response) {
                    let parsedObj = JSON.parse(response);
                    let search = parsedObj
                        .filter((band) => band.name)
                    bandsApp.displayBands(search);
                    
                },
                error: function (error) {
                    console.log("Error");
                }
            })
        })
    } */
}

bandsApp.init();


//bandsApp.searchBandsByName();


