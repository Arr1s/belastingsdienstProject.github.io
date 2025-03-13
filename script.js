// const elfproef = document.querySelector('.BSN');

// console.log(elfproef);

// const BSN = document.getElementById("BSN");
// const BSNValue = BSN.value;

// if(BSNvalue.length !== 9) {
//     console.log("BSN is niet 9 cijfers lang");
// } else {
//     console.log(BSNvalue);
// }

// BSN.addEventListener('input', function(e) {
//     console.log(e.target.value);
//     if(e.target.value.length !== 9) {
//         console.log("BSN is niet 9 cijfers lang");
//     } else {
//         console.log(e.target.value);
//     }
// });

// const BSNtest = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// BSNtest.forEach((number) => console.log(number * BSNtest.length - ));


// Het BSN nummer moet per cijfer vermenigvuldigd worden met de hoeveelheid cijfers die na hem komen + zichzelf.

const inputBSN = document.getElementById("BSN");
const inputDOD = document.getElementById("dod");
// const inputLname = document.getElementById("lname");
const validityStateBSN = inputBSN.validity;
const validityStateDOD = inputDOD.validity;

// BSN.addEventListener('input', validate(BSN) {
  
// });

// BSN.addEventListener('input', validate(BSN) {
//     console.log(BSN);
// });

BSN.addEventListener('blur', function() {
    if (validityStateBSN.tooShort) {
        inputBSN.setCustomValidity("Uw BSN nummer is te kort.");
      } else if (validityStateBSN.patternMismatch) {
        inputBSN.setCustomValidity("Volg alstublieft het format: 123-456-789");
      } else if (validityStateBSN.valueMissing) {
        inputBSN.setCustomValidity("Vul alstublieft uw BSN nummer in.");
      } else if (validityStateBSN.tooLong) {
        inputBSN.setCustomValidity("Uw BSN nummer is te lang.");
      } else {
        inputBSN.setCustomValidity("");
        // inputBSN.classList.add("valid");
      }
    
});

dod.addEventListener('blur', function() {
    if (validityStateDOD.rangeUnderflow) {
        inputDOD.setCustomValidity("Kies een actuele datum.");
      } else if (validityStateDOD.rangeOverflow) {
        inputDOD.setCustomValidity("Kies een actuele datum.");
      } else if (validityStateDOD.valueMissing) {
        inputDOD.setCustomValidity("Vul alstublieft een datum in.");
      } else {
        inputDOD.setCustomValidity("");
        inputDOD.classList.add("valid");
      }
});

const test = document.getElementById("geenTestament");
const vraag2 = document.getElementById("vraag2");

// vraag2.addEventListener("toggle", (event) => {
//     console.log("hallo");
//     if (test.checked) {
//         console.log("checked");
//         open = true;

//     } else {
//         console.log("unchecked");
//     }
// }
// );

test.addEventListener('input', function() {
    if (test.checked) {
        console.log("checked");
        vraag2.open = true;
    } else {
        console.log("unchecked");
    }
});

// const form = 
// localStorage.setItem()
// new URLSearchParams(new FormData($0)).toString()

// constrain validation
// input.parentNode.classList.add('error')
// ev.preventDefault()
// Rangeoverflow voor date input

// document.querySelectorAll('.checkboxes fieldset:first-of-type input').forEach(function(radio) {
//     radio.addEventListener('change', function() {
//         const fieldsets = document.querySelectorAll('.checkboxes fieldset:nth-of-type(2),.checkboxes fieldset:nth-of-type(3)');
//         fieldsets.forEach(function(fieldset) {
//             const nee = (document.querySelector('.checkboxes fieldset:first-of-type input:checked').value === 'nee');
//             fieldset.disabled = nee;
//             fieldset.querySelectorAll('input').forEach(function (input) {
//                 if (nee) {
//                     input.removeAttribute('required');
//                 } else {
//                     input.setAttribute('required', 'required');
//                 }
//             });
//         });
//     });
// });

// const overledenPartner = document.getElementById("overledenePartnerJa");
// const vraag1B = document.querySelectorAll('#vroegerePartner');

// overledenPartner.addEventListener("change", () => {
//   vraag1B.forEach((item) => {
//     item.disabled = !item.disabled;
//   });
// });




// SESSION STORAGE EXPERIMENT
// Get the text field that we're going to track
// const field = document.getElementById("vraag1");
// const fname = document.getElementById("fname");

// console.log(field);
// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
// if (field.value != undefined) {
  // Restore the contents of the text field
//   field.value = sessionStorage.getItem("vraag1");
//   sessionStorage.setItem("vraag1", fname.value);
// }

// Listen for changes in the text field
// fname.addEventListener("blur", () => {
  // And save the results into the session storage object
//   sessionStorage.setItem("vraag1", fname.value);
//   console.log(fname.value);
// });





// FORMDATA API EXPERIMENT
let savedData = {};
let autocompletedData;

const inputs = document.getElementsByTagName("input");

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form");

  if (!window.sessionStorage) {
    return;
  }

  if (!form.dataset.formTopic) {
    return;
  }

  let getFormTopic = sessionStorage.getItem(form.dataset.formTopic);
  if (!getFormTopic) {
    return;
  }

  autocompletedData = JSON.parse(getFormTopic);
  var formTopic = form.dataset.formTopic;

  console.log(form);

  // Function to set the values from sessionStorage to the form fields
  function getKeyValue() {
    for (const dataKey in autocompletedData) {
      let value = autocompletedData[dataKey];

      let formField = document.querySelector(
          "[name = " + dataKey + "]"
      );

      switch (formField.type) {
          case "radio":
              formField = document.querySelector(
                  `input[name = '${dataKey}'][value = '${value}']`
              );
              formField.setAttribute("checked", "checked");
              break;
          case "checkbox":
              formField.setAttribute("checked", "checked");
              break;
          case "file":
              break;
          default:
              formField.value = value;
      }
    }
  }

  // Function to toggle the visibility of fieldsets based on the checked radio button
  function toggleFieldsetVisibility() {
    // Loop through all the radio button groups
    document.querySelectorAll('input[type="radio"][data-toggle-fieldset]').forEach((radioButton) => {
      const fieldsetId = radioButton.getAttribute("data-toggle-fieldset"); // Get the ID of the fieldset to toggle
      const fieldset = document.getElementById(fieldsetId);
      const targetFieldset = document.querySelector("[data-toggle-fieldset-target]");
      
      // Check if the radio button is checked and if it should display the fieldset
      const isChecked = radioButton.checked;
      if (isChecked) {
        fieldset.style.display = 'block'; // Show the fieldset
        targetFieldset.querySelectorAll('input').forEach(input => input.setAttribute("required", "true"));

      } else {
        fieldset.style.display = 'none'; // Hide the fieldset
        targetFieldset.querySelectorAll('input').forEach(input => input.removeAttribute("required"));
      }
    });
  }

  // Ensure the fieldset visibility matches the stored radio button state when the page loads
  getKeyValue(); // Populate form fields from sessionStorage
  toggleFieldsetVisibility(); // Set the fieldset visibility on page load

  // Event listener for changes in radio buttons
  document.querySelectorAll('input[type="radio"][data-toggle-fieldset]').forEach((radioButton) => {
    radioButton.addEventListener('change', function () {
      // Save the selected value to sessionStorage
      savedData[radioButton.name] = radioButton.value;
      sessionStorage.setItem(form.dataset.formTopic, JSON.stringify(savedData));

      // Toggle the fieldset visibility
      toggleFieldsetVisibility();
    });
  });
});

// Save form data to sessionStorage on blur (when the user moves out of the input)
if (window.sessionStorage) {
  function saveFormDataToSessionStorage(e) {
    const form = e.target.closest("form");
    let submitData = new FormData(form);

    for (let [dataKey, value] of submitData.entries()) {
      savedData[dataKey] = value;
      console.log(dataKey, value);
    }

    window.sessionStorage.setItem(
      form.dataset.formTopic,
      JSON.stringify(savedData)
    );
  }

  Array.prototype.forEach.call(inputs, function (input) {
    input.addEventListener("blur", function (e) {
      e.preventDefault();
      saveFormDataToSessionStorage(e);
    });
  });
}



/* ===================================================================================== */



// :has(#partneresSchapsvoorwaardenJa:checked) #akteBestandSturen {
//   display: block;
// }

// document.addEventListener('DOMContentLoaded', () => { 
//    const verborgenVraag = document.getElementById("akteBestandSturen").style.display = 'none';
//     console.log(verborgenVraag)

// });

// document.querySelectorAll('#partneresSchapsvoorwaarden #akteBestandSturen input').forEach(function (radio) {
// radio.addEventListener('change', function () {
//   const fieldsets = document.querySelectorAll('#partneresSchapsvoorwaardenJa #akteBestandSturen');
//   const ja = (document.querySelector('#partneresSchapsvoorwaardenJa input:checked').value === 'ja');
//   function toggle (fieldset) {
//       if (ja) {
//           fieldset.style.display = 'block';
//           console.log("ja")
//       } else {
//           fieldset.style.display = 'none';
//           console.log("nee")
//       } }
      // fieldset.disabled = !ja;
      // fieldset.querySelectorAll('input').forEach(function (input) {
      //     if (ja) {
      //         input.setAttribute('required', 'required');
      //     } else {
      //         input.removeAttribute('required');
      //     }
      // });
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   var radioButton = document.querySelector("#partnersSchapsvoorwaardenJa input")
//   if (radioButton) {
//     radioButton.addEventListener('change', function () {
//       const fieldset = (document.getElementById("akteBestandSturen"));
//       const ja = (document.querySelector("#partnersSchapsvoorwaardenJa input:checked")?.value === 'ja');
//       console.log(ja)
//         if (ja) {
//           fieldset.style.display = 'block';
//           console.log("ja")
//         } else {
//           fieldset.style.display = 'none';
//           console.log("help")
//         }
//         console.log(ja,fieldset)
//         console.log("hallo")
//       });
//   }

// });

// document.addEventListener('DOMContentLoaded', () => {
//   var radioButtons = document.querySelectorAll(' #partnersSchapsvoorwaardenJa partnerSchapsvoorwaardenNee input');
//   console.log(radioButtons)
  // if (radioButtons) {
  //   radioButtons.addEventListener('change', function () {
  //     const fieldset = (document.getElementById("akteBestandSturen"));
  //     const ja = (document.querySelectorAll('.partnersSchapsvoorwaarden input:checked')?.value === 'ja');
  //     if (ja) {
  //       fieldset.style.display = 'block';
  //     }
  //     else {
  //       fieldset.style.display = 'none';
  //     }
  //   })
  // }
// })

// document.addEventListener('DOMContentLoaded', () => {
//   var radioButton = document.getElementById("partnersSchapsvoorwaardenJa"); // Select the single radio button

//   if (radioButton) {
//     radioButton.addEventListener('change', function () {
//       const fieldset = document.getElementById("akteBestandSturen");
//       console.log("verander")

//       if (radioButton.checked) {
//         fieldset.style.display = 'block'; // Show the fieldset if checked
//         console.log("Radio button is checked. Showing fieldset.");
//       } 
//       else {
//         fieldset.style.display = 'none'; // Hide the fieldset if unchecked
//         console.log("Radio button is unchecked. Hiding fieldset.");
//       }
//     });
//   } else {
//     console.error("Radio button with ID 'partnersSchapsvoorwaardenJa' not found.");
//   }
// });


// document.querySelectorAll('#partnersSchapsvoorwaardenJa input').forEach(function (radio) {
//   console.log(radio)
//   console.log("bruh")
//   radio.addEventListener('change', function () {
//     const fieldset = document.getElementById("akteBestandSturen");
//     const ja = document.querySelectorAll('#partnersSchapsvoorwaardenJa input:checked').value === 'ja';
//     console.log("verander")
//     console.log(ja)
//     console.log(fieldset)
//     console.log(radio)
//     if (ja) {
//       fieldset.style.display = 'block';
//       console.log("ja")
//     } else {
//       fieldset.style.display = 'none';
//       console.log("ee")
//     }
//   })
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const fieldset = document.getElementById("akteBestandSturen");
//   const radioJa = document.getElementById("partnersSchapsvoorwaardenJa");
//   const radioNee = document.getElementById("partnersSchapsvoorwaardenNee");

//   // Ensure elements exist
//   if (!fieldset || !radioJa || !radioNee) {
//     console.error("One or more elements not found!");
//     return;
//   }

//   // Hide the fieldset by default
//   fieldset.style.display = "none";

//   // Function to toggle fieldset visibility
//   function toggleFieldset() {
//     if (radioJa.checked) {
//       fieldset.style.display = "block";
//     } else {
//       fieldset.style.display = "none";
//     }
//   }

//   // Add event listeners
//   radioJa.addEventListener("change", toggleFieldset);
//   radioNee.addEventListener("change", toggleFieldset);
// });

// document.addEventListener("DOMContentLoaded", function () {
  
//   document.querySelectorAll("[data-toggle-fieldset]").forEach((radio) => {
//     radio.addEventListener("change", function () {
//       const targetFieldsetId = this.dataset.toggleFieldset;
//       const targetFieldset = document.getElementById(targetFieldsetId);

//       if (!targetFieldset) {
//         console.error(`Fieldset with ID "${targetFieldsetId}" not found!`);
//         return;
//       }

      // Show fieldset if the selected radio button is "yes", hide otherwise
  //     if (this.value === "ja") {
  //       targetFieldset.style.display = "block";
  //     } else {
  //       targetFieldset.style.display = "none";
  //     }
  //   });
  // });

  // Hide all controlled fieldsets by default
//   document.querySelectorAll("fieldset[data-toggle-fieldset-target]").forEach((fieldset) => {

//   });
// });




// console.log("haal")

  

