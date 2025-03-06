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
        input.setCustomValidity("Volg alstublieft het format: 123-456-789");
      } else if (validityStateBSN.valueMissing) {
        inputBSN.setCustomValidity("Vul alstublieft uw BSN nummer in.");
      } else if (validityStateBSN.tooLong) {
        inputBSN.setCustomValidity("Uw BSN nummer is te lang.");
      } else {
        inputBSN.setCustomValidity("");
        inputBSN.classList.add("valid");
      }
    
      inputBSN.reportValidity();
});

dod.addEventListener('blur', function(BSN) {
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
      inputDOD.reportValidity();
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

const overledenPartner = document.getElementById("overledenePartnerJa");
const vraag1B = document.querySelectorAll('#vroegerePartner');

overledenPartner.addEventListener("change", () => {
  vraag1B.forEach((item) => {
    item.disabled = !item.disabled;
  });
});