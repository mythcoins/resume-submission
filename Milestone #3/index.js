var form = document.getElementById('resume');
var resumedisplayelement = document.getElementById('display-resume');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    //generate the resume content
    var resumeContent = "\n    <h2>Generated Resume</h2>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    <p><strong>Skills:</strong> ").concat(skills, "</p>\n    <p><strong>Education:</strong> ").concat(education, "</p>\n    <p><strong>Experience:</strong> ").concat(experience, "</p>\n    ");
    //displaying the generated resume
    resumedisplayelement.innerHTML = resumeContent;
});
