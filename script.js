document.addEventListener("DOMContentLoaded", function() {
    const githubUsername = "elihles"; // Your GitHub username
    const projectsContainer = document.getElementById("github-projects");
    let currentPage = 1;
  
    function fetchProjects(page) {
      const url = `https://api.github.com/users/${githubUsername}/repos?per_page=5&page=${page}`;
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.length === 0) {
            document.getElementById("load-more").style.display = 'none';
            return;
          }
          data.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.innerHTML = `
              <a href="${project.html_url}" target="_blank">${project.name}</a>
              <p>${project.description || "No description available"}</p>
            `;
            projectsContainer.appendChild(projectCard);
          });
        })
        .catch(error => console.error("Error fetching projects:", error));
    }
  
    fetchProjects(currentPage);
  
    document.getElementById("load-more").addEventListener("click", function () {
      currentPage++;
      fetchProjects(currentPage);
    });
  
    // Set footer date dynamically
    document.getElementById("footer-date").textContent = new Date().getFullYear();
  });
  