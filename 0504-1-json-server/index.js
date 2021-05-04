fetch("http://localhost:3000/articles")
    .then(res => res.json())
    .then((theActualResponse) => {
        console.log(theActualResponse)
    })


function deleteThisArticle(idPlease){
    fetch(`http://localhost:3000/articles/${idPlease}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(mystery => {
            console.log(mystery, "INSIDE DELETE")
        })
        
}