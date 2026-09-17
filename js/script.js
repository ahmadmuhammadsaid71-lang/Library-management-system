// ==============================
// 1. Welcome Message
// ==============================

function welcomeUser() {

    let name = prompt("Please enter your name:");

    if (name === null || name.trim() === "") {

        document.getElementById("welcome-message").textContent =
            "Welcome to Smart Library!";

    } else {

        document.getElementById("welcome-message").textContent =
            "Welcome, " + name + "! We hope you enjoy our library.";
    }
}


// ==============================
// 2. Show / Hide Book Details
// ==============================

function toggleDetails(bookId) {

    const details = document.getElementById(bookId);

    if (details.style.display === "block") {

        details.style.display = "none";

    } else {

        details.style.display = "block";
    }
}


// ==============================
// 3. Search / Filter Books
// ==============================

function searchBooks() {

    const searchInput =
        document.getElementById("bookSearch").value.toLowerCase();

    const books =
        document.querySelectorAll(".book-card");

    let foundBooks = 0;

    books.forEach(function(book) {

        const bookText =
            book.textContent.toLowerCase();

        if (bookText.includes(searchInput)) {

            book.style.display = "block";
            foundBooks++;

        } else {

            book.style.display = "none";
        }
    });

    const noResults =
        document.getElementById("noResults");

    if (foundBooks === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";
    }
}


// ==============================
// 4. Contact Form Validation
// ==============================

function validateForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const subjectError =
        document.getElementById("subjectError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    // Name validation
    if (name === "") {

        nameError.textContent =
            "Please enter your full name.";

        nameError.className = "error";

        valid = false;
    }

    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        emailError.className = "error";

        valid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailError.className = "error";

        valid = false;
    }

    // Subject validation
    if (subject === "") {

        subjectError.textContent =
            "Please enter a subject.";

        subjectError.className = "error";

        valid = false;
    }

    // Message validation
    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        messageError.className = "error";

        valid = false;
    }

    // Successful submission
    if (valid) {

        successMessage.textContent =
            "Your message has been submitted successfully!";

        successMessage.className = "success";

        document.getElementById("contactForm").reset();
    }
}
// Mobile navigation menu
function toggleMenu() {

    const navMenu =
        document.getElementById("nav-menu");

    navMenu.classList.toggle("show");
}
