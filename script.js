window.addEventListener("DOMContentLoaded", function () {
    alert("Hello and welcome to Elihle Stali's Portfolio!");
    alert("Please note that this is a work in progress and not all links are functional yet.");
  
    // Show current date in footer
    const dateTime = new Date().toLocaleString();
    const footer = document.querySelector("footer");
    const dateEl = document.createElement("p");
    dateEl.textContent = `📅 Current Date and Time: ${dateTime}`;
    footer.appendChild(dateEl);
  
    // GitHub Repos Fetch
    fetch("https://api.github.com/users/elihles/repos")
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("github-projects");
        list.innerHTML = ""; // Clear loading text
        data.forEach(repo => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${repo.html_url}" target="_blank">📌 ${repo.name}</a>`;
          list.appendChild(li);
        });
      })
      .catch(err => {
        const list = document.getElementById("github-projects");
        list.innerHTML = "<li>⚠️ Failed to load GitHub projects.</li>";
      });
  });
  
  