console.log("before then")

axios.get("https://sei12.herokuapp.com/movei/json")
    .then(res => {
        var allMoveis = res.data
        let copyMoveis = allMoveis.map(ele => {
            return `<div class="col-3" style="border: 1px solid black; ">
                        <img src="${ele.link}" alt="">
                            <p>name:${ele.name} </p>
                         <p>history: ${ele.history} </p>
                        <div>
                          <h5>${ele.YourName}</h5>
                          </div>
                        </div>`
        })
        console.log(copyMoveis)

        $('#AllFilms').append(copyMoveis.join())

    }).catch(err => console.log(err))

console.log("after then")