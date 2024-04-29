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
        movieinfo['movie_id'] = item['id'];

        // console.log(movieinfo);
        newmovieinfo.push(movieinfo);
        console.log(newmovieinfo);
    }
    return newmovieinfo;
}
getdata();

//카드 만들기
function makeCard(item) {
    const innerContents = `
    <div class="card" style="width: 18rem;">
    <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" class="card-img-top" alt="이미지 준비중" onclick = "alert(${item.movie_id})">
          <div class="card-body">
             <h3 class="card-title">${item.title}</h3>
                <p class="card-text">${item.overview}</p>
    </div>
    <div>
        <small class = "score"> ${"raiting: " + item.vote_average}</small>
    </div>
</div>
    `;
    document.querySelector("#movieCard").insertAdjacentHTML('beforeend', innerContents);
}

//카드 알러트 함수

// document.getElementsByClassName("card-img-top").addEventListener("click", function () {
//     alert();
//  console.log(`ID: + ${item.movie_id}`)
// });

//검색기능함수 트라이1

// function movieSearch() {
//     // 검색을 위해 모두 소문자로 통일시키기
//     const makesametitle = document.querySelector("#searchbtn").Value.toLowerCase();
//     // 검색한것이 제목과 같은지 비교하기
//     const searchContext = function newmovieinfo() {
//         if (i['title'].toLowerCase().search(makesametitle) === newmovieinfo) {
//             return i['title'];
//         }
//     }
// }

// //  트라이2
//     let titles = newmovieinfo['title'];

//     let searchedTitle = titles.filter(function(title){
//         if(searchedTitle == )
//     }
// )

// function movieSearch (){
//     const makesametitle = document.querySelector("#searchbtn").Value.toLowerCase();
//     if (makesametitle == newmovieinfo){
//         return results;
//     }
//     console.log("되나?");
// }
// movieSearch();       ㅇ ㅏ 필터쓰면 될거같은데  


// //출력함수


async function print() {
    const data = await getdata();
    let count = 0;
    data.forEach(function (item) {
        makeCard(item);
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


