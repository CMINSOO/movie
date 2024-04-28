
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWIwNDE1OTlmNzBkMDkwYjVmYTg2NjJlOWNkYTVhZCIsInN1YiI6IjY2MmE0NzFmMWM2YWE3MDBiMjkyNzg3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P1vJ1UkEQN1GdOv7kd_C2XL1bxFKy16ySE3ZvkrXtxU'
    }
};

async function getdata() {

    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const data = await response.json()
    // .then(response => console.log(response))
    // .catch(err => console.error(err));

    // console.log(data)


    // data.forEach(item => {
    //     console.log(item.title)
    // });

    const newmovieinfo = [];

    for (item of data['results']) {
        const movieinfo = {};
        movieinfo['title'] = item['title'];
        movieinfo['overview'] = item['overview'];
        movieinfo['poster_path'] = item['poster_path'];
        movieinfo['vote_average'] = item['vote_average'];
        movieinfo['movie_id'] = item['movie_id '];

        // console.log(movieinfo);
        newmovieinfo.push(movieinfo);
        // console.log(newmovieinfo);
    }
    return newmovieinfo;
}
getdata();

//카드 만들기
function makeCard(item, count) {
    const innerContents = `
    <div class="card" style="width: 18rem;">
       <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" class="card-img-top" alt="...">
          <div class="card-body">
             <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.overview}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> ${"raiting: " + item.vote_average}</li>
    </ul>
</div>
    `;
    document.querySelector("#movieCard").insertAdjacentHTML('beforeend', innerContents);
}



//출력하기
async function print () {
    const data =await getdata();
    let count = 0;
    data.forEach(function(item){
        makeCard(item, count);
        count++;
    });
    
}
print();







// // api 가져온것들
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWIwNDE1OTlmNzBkMDkwYjVmYTg2NjJlOWNkYTVhZCIsInN1YiI6IjY2MmE0NzFmMWM2YWE3MDBiMjkyNzg3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P1vJ1UkEQN1GdOv7kd_C2XL1bxFKy16ySE3ZvkrXtxU'
//     }
// };

// let moviedata = [];

// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then((response) => {
//         // moviedata = response;
//         // console.log(moviedata);
//         for (const prop of response['results']) {
//             // console.log(prop["title"]);
//             moviedata.push(prop["title"]);
//         }
//     })
//     // .then(response => console.log(response["results"][0]["title"]))
//     .catch(err => console.error(err));


// console.log(moviedata);


