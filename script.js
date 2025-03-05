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


const input = document.getElementById("BSN");
const validityState = input.validity;

// BSN.addEventListener('input', validate(BSN) {
  
// });

// BSN.addEventListener('input', validate(BSN) {
//     console.log(BSN);
// });

BSN.addEventListener('input', function(BSN) {
    if (validityState.tooShort) {
        input.setCustomValidity("Uw BSN nummer is te kort.");
      } else if (validityState.patternMismatch) {
        input.setCustomValidity("Volg alstublieft het format: 123-456-789");
      } else if (validityState.valueMissing) {
        input.setCustomValidity("Vul alstublieft uw BSN nummer in.");
      } else if (validityState.tooLong) {
        input.setCustomValidity("Uw BSN nummer is te lang.");
      } else {
        input.setCustomValidity("");
      }
    
      input.reportValidity();
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

console.log(test)