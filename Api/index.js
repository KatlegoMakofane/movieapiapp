
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=10b024d7";

export const fetchMovies = async (title) => {
  try {
    const res = await fetch(`${url}&s=${title}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.response);
  }
};