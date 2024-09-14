const form = document.getElementById('resume') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('display-resume') as HTMLDivElement;
const editFormButton = document.getElementById('edit-form') as HTMLButtonElement;
let isEditing = false;

// Toggle the form between editable and non-editable
editFormButton.addEventListener('click', () => {
    const inputs = form.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;

    inputs.forEach(input => {
        input.readOnly = !input.readOnly; 
    });

    isEditing = !isEditing;
    editFormButton.textContent = isEditing ? ' Edit Form' : 'Save Form';
});

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Get the form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Generate the resume content
    const resumeContent = `
        <h2><b>Your Resume</b></h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Skills:</b> ${skills}</p>
        <p><b>Education:</b> ${education}</p>
        <p><b>Experience:</b> ${experience}</p>
    `;
    
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeContent;
});