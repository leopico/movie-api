const movieContainer = document.querySelector(".movie_container");
const movieInput = document.querySelector(".movie_input");
const searchBtn = document.querySelector(".search_btn");

const getMovie = async (name) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=57f1c44a&s=${name}`);
  const result = await res.json();
  const movies = result.Search.map((movie) => {
    return `
            <div class="card mb-4" style="width: 18rem;">
                <img src="${movie.Poster}" class="card-img-top h-50" alt="card">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
        `;
  });
  //   console.log(movies);
  movieContainer.innerHTML = movies;
};

searchBtn.addEventListener("click", () => {
  getMovie(movieInput.value);
});
