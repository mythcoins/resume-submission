var form = document.getElementById('resume');
var resumeDisplayElement = document.getElementById('display-resume');
var editFormButton = document.getElementById('edit-form');
var shareResumeButton = document.getElementById('share-resume');
var printResumeButton = document.getElementById('print-resume');
var isEditing = false;
// Toggle the form between editable and non-editable
editFormButton.addEventListener('click', function () {
    var inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
        input.readOnly = !input.readOnly;
    });
    isEditing = !isEditing;
    editFormButton.textContent = isEditing ? 'Edit Form' : 'Save Form';
});
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    // Generate the resume content
    var resumeContent = "\n        <h2><b>Your Resume</b></h2>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <p><b>Address:</b> ").concat(address, "</p>\n        <p><b>Skills:</b> ").concat(skills, "</p>\n        <p><b>Education:</b> ").concat(education, "</p>\n        <p><b>Experience:</b> ").concat(experience, "</p>\n    ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeContent;
    // Enable the share and print buttons after generating the resume
    shareResumeButton.disabled = false;
    printResumeButton.disabled = false;
    // Handle share resume button click
    shareResumeButton.addEventListener('click', function () {
        var uniqueURL = "https://".concat(username, ".vercel.app/resume"); // Generate unique URL based on username
        navigator.clipboard.writeText(uniqueURL).then(function () {
            alert("Resume link copied to clipboard! Here's your link: " + uniqueURL);
        });
    });
    // Handle print resume button click using browser's print functionality
    printResumeButton.addEventListener('click', function () {
        window.print(); // This opens the print dialog, allowing the user to print or save as PDF
    });
});
