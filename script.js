const navbar = document.getElementById("navbar");
const scrollThreshold = 5;

window.addEventListener("scroll", () => {
  //   console.log("scroll top: " + document.documentElement.scrollTop);
  //   console.log("scroll Y: " + window.scrollY);

  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("drop-shadow-xl", "border-transparent");
  } else {
    navbar.classList.remove("drop-shadow-xl", "border-transparent");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".letter");

  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.remove("opacity-0", "blur-sm", "translate-y-5");
    }, index * 100);
  });
});

fetch("projects.json")
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    console.log(data); // Check if the data is being fetched and logged

    const projects = data.projects;
    console.log(projects);

    // console.log(projectsContainer);

    projects.forEach((project) => {
      const projectsContainer = document.getElementById("projects-container");

      console.log(project.technologies);

      //   const technologyList = document.createElement("ul");
      //   technologyList.classList.add();

      //   for (const tech of project.technologies) {
      //     console.log(tech);
      //     const techListItem = document.createElement("li");
      //     techListItem.textContent = tech;
      //     console.log(techListItem);
      //   }

      const techList = project.technologies
        .map((tech) => `<li class="border rounded-3xl px-2">${tech}</li>`)
        .join("");

      projectsContainer.innerHTML += `<div
          class="bg-neutral-100 p-6 pb-8 rounded-3xl transition-all duration-300"
        >
          <!-- First and Second columns -->
          <div class="flex justify-between">
            <!-- First column -->
            <!-- Text and technologies -->
            <div class="flex flex-col gap-5">
              <h3 class="project-title text-xl">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <!-- Technologies -->
              <ul class="technologies flex gap-3 mt-auto">
                ${techList}
              </ul>
            </div>
            <div class="flex flex-col gap-4">
              <!-- Image and buttons -->
              <img
                class="project-image"
                src="${project.image}"
                alt="${project.alt}"
                width="300"
                height="200"
              />
              <div class="flex justify-center gap-4">
                <!-- Source Code Link -->
                <a
                  class="group rounded-lg bg-white hover:bg-stone-200 px-3 py-1.5 text-sm font-medium text-black-300 transition-colors duration-300"
                  href="${project.link}"
                >
                  <span>Source Code</span>
                  <i
                    class="ml-2 fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"
                  ></i>
                </a>
                <!-- Live Demo Link -->
                <a
                  class="group rounded-lg bg-slate-800 hover:bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors duration-300"
                  href="${project.demo}"
                  ><span>Live Demo</span
                  ><i
                    class="ml-2 fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"
                  ></i
                ></a>
              </div>
            </div>
          </div>
        </div>`;
    });
  });
