const form = document.getElementById('resume') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('display-resume') as HTMLDivElement;
const editFormButton = document.getElementById('edit-form') as HTMLButtonElement;
const shareResumeButton = document.getElementById('share-resume') as HTMLButtonElement;
const printResumeButton = document.getElementById('print-resume') as HTMLButtonElement;

let isEditing = false;

// Toggle the form between editable and non-editable
editFormButton.addEventListener('click', () => {
    const inputs = form.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;

    inputs.forEach(input => {
        input.readOnly = !input.readOnly;
    });

    isEditing = !isEditing;
    editFormButton.textContent = isEditing ? 'Edit Form' : 'Save Form';
});

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
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

    // Enable the share and print buttons after generating the resume
    shareResumeButton.disabled = false;
    printResumeButton.disabled = false;

    // Handle share resume button click
    shareResumeButton.addEventListener('click', () => {
        const uniqueURL = `https://${username}.vercel.app/resume`; // Generate unique URL based on username
        navigator.clipboard.writeText(uniqueURL).then(() => {
            alert("Resume link copied to clipboard! Here's your link: " + uniqueURL);
        });
    });

    // Handle print resume button click using browser's print functionality
    printResumeButton.addEventListener('click', () => {
        window.print(); // This opens the print dialog, allowing the user to print or save as PDF
    });
});
