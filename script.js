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
      // Create card container
      //   const card = document.createElement("div");
      //   card.classList.add("project-card", "flex", "flex-col");

      // Create first column

      //   Give card correct class names
      //   console.log(card);
      //   projectsContainer.appendChild(card);

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
                <li class="border rounded-3xl px-2">HTML</li>
                <li class="border rounded-3xl px-2">CSS</li>
                <li class="border rounded-3xl px-2">JavaScript</li>
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
