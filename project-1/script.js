const apiKey = 'd3710ce475f3e020390f0bc74060707e'; // The Movie DB API 키

// DOM 요소 가져오기
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const movieList = document.getElementById('movieList');

// 모든 영화 목록을 저장하는 변수
let allMovies = [];

// API를 사용하여 모든 영화 목록 가져오기
const fetchAllMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    allMovies = data.results;

    // 처음에는 모든 영화 목록을 표시
    renderMovies(allMovies);
};

// 영화 목록을 렌더링하는 함수
const renderMovies = (movies) => {
    movieList.innerHTML = '';

    movies.forEach((movie) => {
        const li = document.createElement('div');
        li.addEventListener('click', ()=>{ // 이미지 클릭 시 해당 영화 ID 얼럿 노출
            alert(movie.id);
        })
        li.style.border = '1px solid #000';
        li.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" alt="${movie.title} 포스터">
            <p>${movie.overview}</p>
        `;
        movieList.appendChild(li);
    });
};

// 검색 버튼 클릭 시 영화 검색
searchButton.addEventListener('click', () => {
    const query = searchInput.value;

    // 검색어가 비어 있으면 모든 영화 목록을 표시
    if (query === '') {
        renderMovies(allMovies);
    } else {
        // 검색어를 포함하는 영화만 필터링하여 표시
        const filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
        renderMovies(filteredMovies);
    }
});

// 엔터 키로도 검색할 수 있도록 설정
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value;

        if (query === '') {
            renderMovies(allMovies);
        } else {
            const filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
            renderMovies(filteredMovies);
        }
    }
});

// 초기 영화 목록 불러오기
fetchAllMovies();