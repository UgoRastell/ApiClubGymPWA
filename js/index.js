fetch("https://127.0.0.1:8000/api/post/")
  .then(response => response.json())
  .then(data => {
    let output = "";
    data.forEach(function(club) {
      output += 
      `
      <li>
        <h2>${club.name}</h2>
        <div class="card-content">
          <div class="infos">
            <p class="text">Description : ${club.description}</p>
            <p class="text">Lieu: ${club.lieu} </p>
          </div>
        </div>
      </li>
    `
      ;
    });
    document.getElementById("result").innerHTML = output;
  });


