
    // Function to fetch Chuck Norris joke
    function fetchChuckNorrisJoke(){
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
          const jokeElement = document.getElementById("joke");
          jokeElement.textContent = data.value;
        })
        .catch(error => {
          console.log("Error fetching Chuck Norris joke:", error);
        });
    }
    const jokes=document.querySelector("#Chuck-Norris-Joke");
    jokes.addEventListener("click",()=>{
      fetchChuckNorrisJoke()
    })
   
  
