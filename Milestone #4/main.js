var form = document.getElementById('resume');
var resumeDisplayElement = document.getElementById('display-resume');
var editFormButton = document.getElementById('edit-form');
var isEditing = false;
// Toggle the form between editable and non-editable
editFormButton.addEventListener('click', function () {
    var inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
        input.readOnly = !input.readOnly; // Toggle readOnly attribute instead of disabled
    });
    // Toggle the button text between 'Save Changes' and 'Edit Form'
    isEditing = !isEditing;
    editFormButton.textContent = isEditing ? ' Edit Form' : 'Save Form';
});
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get the form values
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
});
