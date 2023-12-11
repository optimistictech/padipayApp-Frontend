import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// To save registration data on localStorage
let saveData = (e) => {
  e.preventDefault();

  // collect data for registered users
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let users = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
  };

  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "/dist/logIn.html";
};

// To Check for login.
let login = (e) => {
  e.preventDefault();

  let registeredUsers = JSON.parse(localStorage.getItem("users"));

  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  let loginDetail = {
      loginEmail,
      loginPassword,
  };

  loginDetail = JSON.stringify(loginDetail);

  let filteredDetail = JSON.parse(loginDetail);
  console.log(filteredDetail);
  console.log(registeredUsers);
  console.log(registeredUsers.email);

  if (
      filteredDetail.loginEmail === registeredUsers.email &&
      filteredDetail.loginPassword === registeredUsers.password
  ) {
      alert("Welcome onboard " + registeredUsers.firstName + "!");

      // Redirect to a new HTML page
      window.location.href = "/dist/lender-borrower.html";
  } else if (filteredDetail.loginEmail === null) {
      alert("Enter the Correct Email or Password");
  } else {
      alert("Enter the Correct Email or Password");
  }
};

// To get account Type
let updateProfile = (e) => {
  e.preventDefault();
  const account = document.getElementsByName("account");
  let selectedOption = false;

  for (let i = 0; i < account.length; i++) {
      if (account[i].checked) {
          selectedOption = true;
          break;
      }
  }

  if (selectedOption) {
      // Proceed to the next page
      // Replace the following line with the code to navigate to the next page
      window.location.href = "/dist/kyc.html";
      // Hide the error message
      document.getElementById("error").style.display = "none";
  } else {
      // Display the error message
      // document.getElementsByName('account').style.border = '1px solid red';
      document.getElementById("error").style.display = "block";
  }
};

// // Global variable to track the current section
// let currentSection = "getStartedSection";

// function showSection(section) {
//   // Check if skipping sections
//   const sections = [
//     "getStartedSection",
//     "personalDetailsSection",
//     "accountDetailsSection",
//     "createPinSection",
//     "tncSection",
//   ];
//   const currentIndex = sections.indexOf(currentSection);
//   const newIndex = sections.indexOf(section);

//   if (newIndex > currentIndex + 1) {
//     // Shake the form
//     const form = document.querySelector(".w-[60%]");
//     form.classList.add("shake");

//     // Display error message
//     const errorMessage = document.getElementById("errorMessage");
//     errorMessage.style.display = "block";

//     // Remove the shake class after 1 second
//     setTimeout(function () {
//       form.classList.remove("shake");
//       errorMessage.style.display = "none";
//     }, 1000);
//   } else {
//     // Smoothly transition to the selected section
//     const currentSectionElement = document.getElementById(currentSection);
//     const nextSectionElement = document.getElementById(section);

//     // Hide the current section
//     currentSectionElement.style.display = "none";

//     // Show the next section
//     nextSectionElement.style.display = "block";

//     // Update the current section variable
//     currentSection = section;

//     // Update the section title
//     const sectionTitleElement = document.getElementById("sectionTitle");
//     const sectionTitle = nextSectionElement.getAttribute("data-section-title");
//     sectionTitleElement.innerText = sectionTitle;
//   }
// }

// KYC VALIDATION
// Your JavaScript code here
const sections = {
  getStarted: {
      id: "getStartedSection",
      completed: false,
  },
  personalDetails: {
      id: "personalDetailsSection",
      completed: false,
  },
  employmentStatus: {
      id: "employmentStatusSection",
      completed: false,
  },
  nextOfKin: {
      id: "nextOfKinSection",
      completed: false,
  },

  accountDetails: {
      id: "accountDetailsSection",
      completed: false,
  },
  createPin: {
      id: "createPinSection",
      completed: false,
  },
  tnc: {
      id: "tncSection",
      completed: false,
  },
};

let currentSection = "getStarted";

function handleCheckboxChange(event) {
  const selectedStep = event.target.value;

  if (event.target.checked) {
      hideSection(currentSection);
      showSection(selectedStep);
      currentSection = selectedStep;

      updateCheckboxLabels();
  }
}

function hideSection(sectionId) {
  const section = document.getElementById(sections[sectionId].id);
  section.style.display = "none";
}

function showSection(sectionId) {
  const section = document.getElementById(sections[sectionId].id);
  section.style.display = "block";
}

function updateCheckboxLabels() {
  const sectionKeys = Object.keys(sections);

  for (const section of sectionKeys) {
      const checkbox = document.getElementById(section);
      const label = checkbox.nextElementSibling;

      if (sections[section].completed) {
          checkbox.checked = true;
          label.classList.add("completed");
      } else {
          checkbox.checked = false;
          label.classList.remove("completed");
      }
  }
}

function proceedButtonClick() {
  const currentSectionObj = sections[currentSection];
  const sectionFields = Array.from(
      document
          .getElementById(currentSectionObj.id)
          .querySelectorAll("input, textarea")
  );
  let sectionCompleted = true;

  for (const field of sectionFields) {
      if (field.value === "") {
          field.classList.add("error");
          sectionCompleted = false;
      } else {
          field.classList.remove("error");
      }
  }

  if (sectionCompleted) {
      currentSectionObj.completed = true; // Mark the current section as completed

      // Update the checkboxes immediately after marking the section as completed
      updateCheckboxLabels();

      const nextSection = getNextSection();
      if (nextSection) {
          hideSection(currentSection);
          showSection(nextSection);
          currentSection = nextSection;
          slideInSection(nextSection);
      }
  } else {
      shakeForm();
  }
}

function goBack() {
  const previousSection = getPreviousSection();
  hideSection(currentSection);
  showSection(previousSection);
  currentSection = previousSection;
  updateCheckboxLabels();
}

function slideInSection(sectionId) {
  const section = document.getElementById(sections[sectionId].id);
  section.style.animation = "slide 0.5s";
}

function getNextSection() {
  const sectionKeys = Object.keys(sections);
  const currentIndex = sectionKeys.indexOf(currentSection);
  if (currentIndex < sectionKeys.length - 1) {
      return sectionKeys[currentIndex + 1];
  }
  return null;
}

function getPreviousSection() {
  const sectionKeys = Object.keys(sections);
  const currentIndex = sectionKeys.indexOf(currentSection);
  if (currentIndex > 0) {
      return sectionKeys[currentIndex - 1];
  }
  return null;
}

function shakeForm() {
  const form = document.getElementById("kycForm");
  form.classList.add("error");
  setTimeout(() => {
      form.classList.remove("error");
  }, 500);
}

function submitForm() {
  const currentSectionObj = sections[currentSection];
  const sectionFields = Array.from(
      document
          .getElementById(currentSectionObj.id)
          .querySelectorAll("input, textarea")
  );
  let sectionCompleted = true;

  for (const field of sectionFields) {
      if (
          field.value === "" ||
          (field.type === "checkbox" && !field.checked)
      ) {
          field.classList.add("error");
          sectionCompleted = false;
      } else {
          field.classList.remove("error");
      }
  }

  if (sectionCompleted) {
      currentSectionObj.completed = true;
      updateCheckboxLabels();

      if (currentSection === "tnc") {
          // Check if the current section is the "Terms and Conditions" section
          const submissionPopup = document.getElementById("submissionPopup");
          submissionPopup.style.display = "block";

          // Set the submission message content
          document.getElementById("popupSubmissionStatus").textContent =
              "Form Submitted Successfully";
          document.getElementById("popupSubmissionText").textContent =
              "Thank you for completing the KYC form.";
      } else {
          const nextSection = getNextSection();
          if (nextSection) {
              hideSection(currentSection);
              showSection(nextSection);
              currentSection = nextSection;
              slideInSection(nextSection);
          } else {
              shakeForm();
          }
      }
  } else {
      shakeForm();
  }
  setTimeout(() => {
      window.location.href = "/dist/BD2.html";
  }, 500);
}

// Add an event listener to the "Proceed" buttons in each section
const proceedButtons = document.querySelectorAll(".proceed-button");
proceedButtons.forEach((button) => {
  button.addEventListener("click", proceedButtonClick);
});

// Add an event listener to the checkboxes
const checkboxes = document.querySelectorAll(".section-checkbox");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckboxChange);
});

// Add an event listener to the checkbox labels for improved usability
const checkboxLabels = document.querySelectorAll("label");
checkboxLabels.forEach((label) => {
  label.addEventListener("click", () => {
      const checkbox = label.previousElementSibling;
      checkbox.checked = !checkbox.checked;
      handleCheckboxChange({ target: checkbox });
  });
});

// Update checkbox labels when the page loads
window.addEventListener("load", updateCheckboxLabels);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

