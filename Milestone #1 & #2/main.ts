// src/app.ts

// Function to toggle the visibility of the skills section
function toggleSkills(): void {
    const skillsText = document.getElementById("skillsText") as HTMLElement;
    const toggleBtn = document.getElementById("skillsbtn") as HTMLButtonElement;

    if (skillsText.style.display === "none" || skillsText.style.display === "") {
        skillsText.style.display = "block";
        toggleBtn.innerHTML = "Hide Skills";
    } else {
        skillsText.style.display = "none";
        toggleBtn.innerHTML = "Show Skills";
    }
}

// Add an event listener to the button to call the toggleSkills function
const toggleSkillsBtn = document.getElementById("skillsbtn");
if (toggleSkillsBtn) {
    toggleSkillsBtn.addEventListener("click", toggleSkills);
}
