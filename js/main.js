// // main variable
let input = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let showData = document.querySelector(".show-data");

getButton.addEventListener("click", function () {
  if (input.value !== "") {
    getUser(input.value);
  }
});
input.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    getUser(input.value);
  }
});
async function getUser(inputValue) {
  try {
    const response = await fetch(`https://api.github.com/users/${inputValue}`);
    const data = await response.json();
    showData.innerHTML = `
    <div class="pic">
      <img src="${data.avatar_url}" alt="" />
    </div>

  <div class="information">

    <header>
      <h2 class="userName">${data.login}</h2>
      <span class="span-joined">joined ${data.created_at.split("T")[0]}</span>
      <p>${data.bio == null ? "This profile has no bio" : data.bio}</p>
    </header>

    <aside>
      <div><span>repos </span><br><h4>${data.public_repos}</h4></div>
      <div><span>followers</span><br><h4>${data.followers}</h4></div>
      <div><span>following </span><br><h4>${data.following}</h4></div>
    </aside>

    <footer>
      <span>
        <i class="fas fa-map-marker-alt"></i>${data.location == null ? "This profile has no location" : data.location}
      </span>
      <span>
        <i class="fas fa-link"></i>
        <a href="https://github.com/${data.login}" target="_blank">https://github.com/${data.login}</a>
      </span>
    </footer>
  </div>
  `;
  } catch (error) {
    console.log(error);
  }
}
