$(document).ready(function(){
//Exercise 1
//1.Create input form which will contain info about book(Name,Author,Telephone,Date). After clicking on the add button the book ////will be inserted into unordered list.

// $("button").click(function(){
//     var name = $("input#name").val();
//     var author = $("input#author").val();
//     var telephone = Number($("input#phone").val());
//     var date = $("input#date").val();

//     $("ul").first().after(
//         `<li>${name}<br>
//             ${author}<br>
//             ${telephone}<br>
//             ${date}</li>`
//         )


// })

//Exercise 2
//2.Create table which will have info about cars(Licence plates,Model,Color). Every even row will have red color and every first and last td border will have background color.

// $("tr:even").css("color", "red");
// $("td:first-child").css("backgroundColor", "gray");
// $("td:last-child").css("backgroundColor", "gray");


//Exercise 3
//3.Create Menu option which will have 3 options(Starting,Increased,Reduce), after clicking every one of them it will afect the font in the paragraph.

// $("#starting").click(function(){
//     $("p").text(`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quidem dolore accusantium ad tempore ducimus commodi. Repellat maiores ipsum asperiores soluta, excepturi quo quia ut aperiam nulla temporibus eveniet iste?`);
// })

// $("#increased").click(function(){
//     $("p").css("font-size", "40px");
// })

// $("#reduce").click(function(){
//     $("p").css("font-size", "5px");
// })

//Exercise 4
//4.Create Navigation Menu with 3 options. Initially on loading the page the first will be showed. After clicking on another option the currentlly active content will be hiden and the selected one will be shown.

// $("#optionOne").click(function(){
//     $("#divTwo, #divThree").hide();
//     $("#divOne").css("color", "blue").show();
// })

// $("#optionTwo").click(function(){
//     $("#divOne, #divThree").hide();
//     $("#divTwo").css("color", "pink").show();
// })

// $("#optionThree").click(function(){
//     $("#divOne, #divTwo").hide();
//     $("#divThree").css("color", "green").show();
// })

})

//Exercise 5
//5.Use this link https://api.openaq.org/v1/cities to make ajax call with jQuery. The returned data need to be shown in unordered list.

//slikite da se zemat od url i da se pokazat
//ne e doresena
document.getElementById("btn").addEventListener("click", function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        dataType: "json",
        type: "GET",
        success: function(result) {
            if(result !== undefined && result.length > 0) {
                document.getElementById("resultInDiv").innerHTML = (
                    `
                    <ul>
                    ${result.map((picture, index) => {
                        return (
                            `
                            <li key=${index}>
                                title: ${picture.title}<br>
                                url: ${picture.url}<br>
                                thumbnailUrl: ${picture.thumbnailUrl}<br>
                            </li><br>
                            `
                        )
                    }).join("")}

                    </ul>

                    `
                )
            }
        },
        error: function(error){
            console.error(error);
        }
    })
}, false)

