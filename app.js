document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternalData);

//get local text file
function getText() {
  fetch("test.txt")
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

//get json data
function getJson() {
  fetch("posts.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })

    .catch(function(error) {
      console.log(error);
    });
}

//get external API data
function getExternalData() {
  fetch("https://api.github.com/users")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      output = "";
      data.forEach(function(user) {
        output += `<li> User name: ${user.login},  Are they a site admin?: ${user.site_admin}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })

    .catch(function(error) {
      console.log(error);
    });
}
