// GLOBAL
let ramenMenuDiv = document.querySelector("div#ramen-menu")
let ramenDetailDiv = document.querySelector("div#ramen-detail")
    let nameH2 = ramenDetailDiv.querySelector("h2.name")
    let restaurantH3 = ramenDetailDiv.querySelector("h3.restaurant")
    let mainRamenImg = ramenDetailDiv.querySelector("img.detail-image")

let ramenRatingForm = document.querySelector("form#ramen-rating")
    let ratingInput = ramenRatingForm.rating
    let commentTextarea = ramenRatingForm.comment

function getAllRamens(){
    // GETALLRAMENS SCOPE
    fetch("http://localhost:3000/ramens")
        .then(response => response.json())
        .then((ramensArr) => {
            // SCOPE WITHIN THE CALLBACK
            // [{}, {}, {}]
            ramensArr.forEach((ramenObj) => {
                let ramenImg = document.createElement("img")
                    ramenImg.src = ramenObj.image
                ramenMenuDiv.append(ramenImg)

                ramenImg.addEventListener("click", (evt) => {
                    getOneRamen(ramenObj)
                })  

            })
        })
}

getAllRamens()


function getOneRamen(ramenParameter){
    fetch(`http://localhost:3000/ramens/${ramenParameter.id}`)
    .then(res => res.json())
    .then((upToDateRamenObj) => {
        console.log(upToDateRamenObj)

        mainRamenImg.src = upToDateRamenObj.image
        nameH2.textContent = upToDateRamenObj.name
        restaurantH3.textContent = upToDateRamenObj.restaurant
        ratingInput.value = upToDateRamenObj.rating
        commentTextarea.value = upToDateRamenObj.comment
        
        ramenRatingForm.dataset.id = upToDateRamenObj.id
        // ramenRatingForm.setAttribute("data-id", upToDateRamenObj.id)
    })
}








ramenRatingForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let newComment = commentTextarea.value
    let newRating = ratingInput.value


    fetch(`http://localhost:3000/ramens/${e.target.dataset.id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            comment: newComment,
            rating: newRating
        })
    })
        .then(res => res.json())
        .then((updatedRamen) => {
            // DOM Manipulation with updatedRamen
        })

})