const containerEl = document.querySelector(".container");

const careers = ["Web Developer", "UX/UI Designer", "Data Analyst", "Engineer"];

let careerIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function updateTxt() {
    const currentCareer = careers[careerIndex];
    
    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    containerEl.innerHTML = `<h1>I am a ${currentCareer.slice(0, characterIndex)}</h1>`;

    if (!isDeleting && characterIndex === currentCareer.length) {
        setTimeout(() => isDeleting = true, 1000); // Pause before deleting
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        careerIndex = (careerIndex + 1) % careers.length; // Move to the next career
    }

    setTimeout(updateTxt, isDeleting ? 100 : 200); // Faster deletion
}

updateTxt();
