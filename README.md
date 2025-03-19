# Belastingsdienst project - Minor Web Design & Development
Dit is een school project, en niet daadwerkelijk een belastingsformulier, deze dus ook niet invullen met persoonlijke gegevens!

## Briefing:


## Week 1

### Proces
In de eerste week heb ik zoveel mogelijk gefocusd op het bestuderen van het formulier en het schrijven van de basis HTML. Hiervoor heb ik gekeken naar input types, verschillende soorten patronnen die terug komen, schetsen en bedenken welke vragen uit het formulier mij leuk leken om te maken. Vanaf het begin leek mij deze opdracht in het aglemeen erg leuk, maar ook wel ingewikkeld gezien we rekening moesten houden met pittig veel, en dit de eerste keer is dat ik zo'n opdracht heb moeten maken.

FOTO'S

Daarnaast kregen we een HTML workshop van Krijn, waar ik aantekingen heb gemaakt en van heb bedacht waar ik wanneer welke elementen kon gebruiken uit zijn les. 
Aantekingen workshop:

#### Links:
* ChatGPT is rampzalig, en weet niets over CSS!
* <a href="#test" download="linkje.html">Testlinkje</a>
* Download attribuut
* `<button>`Geeft niet dezelfde features`</button>`

#### Afbeeldingen:
* width & height aangeven binnen img attribute is tegenwoordig aangeraden wegens performance
* Responsive images in CSS: max-width 100% + height: auto

#### Labels:
* Aria-labels NIET gebruiken, het is ALTIJD rampzalig
* Label om de input zodat de tekst voor de input ook aanklikbaar is (checkboxes & radiobuttons)
* Multicursor editing = MAGICCC = option + command + pijltjes
* Small gebruiken

#### Accordions (progressive disclosure)
* Details en summary gebruiken *(LESGOOOOO)*
* Zelfde name geven zorgt dat de andere dichtgaat + open attribuut

#### Pop up's 
* Popovers gebruiken wordt easy peasy
* &::Backdrops doen wat tegen de achtergrond van de popover, in de selector van dialog

#### Forms
* Datalist gebruiken na list options op input gebruikt te hebben
* fieldset kan (in)valid zijn
* Er zijn twee manieren van het koppelen van labels en inputs, kan je door elkaar gebruiken? **NEE!**
* Fieldsizing met textarea ding iets
* 1 veld per naam, kan beter zijn, maar mag het wel juridisch gezien?
* 11a dropdown? Of te weinig opties?
* hr is horizontal rule kan gebruikt worden als lijntje in forms
* output: rekenformulier maken bij 12k
* progress & meter element

### Conclusie
Aan het eind van de week had ik veel HTML geschreven met verschillende inputs en labels, hier was ik al best ver mee, maar uit het feedback gesprek kreeg ik het volgende:
* Van klein naar groot werken
  * 280 pixels breed eerst maken en met max-width verbeteren
  * Met grid een formule maken dat responsive is ZONDER media quaries
* Custom properties in de root schrijven

- - - - 

## Week 2

### Proces
De tweede week was ik voornamelijk nog steeds gefocusd op de HTML, en bij deze extra attributen toe voegen, zorgen dat er wat meer inputs tevoorschijn kwamen en beginnen met progressive disclosure. Hiervoor heb ik gekeken naar de `:has` selector in CSS wat in het begin erg goed leek te werken. Echter, zoals later werd aangewezen door Krijn, als de CSS automatisch op onzichtbaar staat, maar de input/fieldset wel op `required` staat, klopt er niet heel veel meer van. Dit heb ik later in week 3 opgelost, hier later meer over.

De grootste vooruitgang die ik boekte deze week, was dat ik user-(in)valid had gebruikt, samen met het `title` attribuut in HTML om ervoor te zorgen dat ik de input velden kon valideren wanneer erg gesubmit werd. Hier heb ik voornamelijk veel hulp gekregen van Krijn over `set.CustomValidity` waarna ik zelf nadere onderzoek heb gedaan en verwerkt heb in de code. 

```

const inputBSN = document.getElementById("BSN");
const validityStateBSN = inputBSN.validity;

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

```

Daarnaast probeerde ik zelf de code te schrijven om de *elfproef* uit te voeren voor het BSN nummer. Echter is deze poging nergens op uitgekomen, maar heb ik wel voor het eerst in lange tijd zelf nagedacht en JS geschreven in poging tot.

```
const elfproef = document.querySelector('.BSN');

console.log(elfproef);

const BSN = document.getElementById("BSN");
const BSNValue = BSN.value;

if(BSNvalue.length !== 9) {
    console.log("BSN is niet 9 cijfers lang");
} else {
    console.log(BSNvalue);
}

BSN.addEventListener('input', function(e) {
    console.log(e.target.value);
    if(e.target.value.length !== 9) {
        console.log("BSN is niet 9 cijfers lang");
    } else {
        console.log(e.target.value);
    }
});

const BSNtest = [0, 1, 2, 3, 4, 5, 6, 7, 8]
BSNtest.forEach((number) => console.log(number * BSNtest.length - ));

```

Ook wou ik proberen om sessionStorage toe te passen, gezien dit een van de vereiste was, echter vertelde Krijn dat ik het beste nog een weekje kon wachten tot Jeremy Keith er was, die een expert is op dit gebied en hier veel meer over kon vertellen en uitleggen. Hieronder mijn kleine experiment:
```
const field = document.getElementById("vraag1");
const fname = document.getElementById("fname");

console.log(field);
if (field.value != undefined) {
  Restore the contents of the text field
  field.value = sessionStorage.getItem("vraag1");
  sessionStorage.setItem("vraag1", fname.value);
}

fname.addEventListener("blur", () => {
  sessionStorage.setItem("vraag1", fname.value);
  console.log(fname.value);
});
```

### Conclusie
Ik was aan het eind van week 2 al erg ver met mijn HTML, echter was my styling nog nergens te bekennen, dit was ook de feedback die ik kreeg. Door styling toe te passen, kon ik ook beter zien wat er kwa layout kon veranderd worden, wat me verder kon helpen in het algemeen.

Ook zit er nog een bug in de code die ervoor zorgt dat elke wanneer de input van het BSN nummer invalid is, je vast komt te zitten in de input field, zonder dat je er uit kan switchen, hier zal ik nog even naar moeten kijken waardoor dat komt. 

- - - - 

## Week 3

### Proces
Als eerste heb ik deze week de bug gefixt die in de conclusie van week 2 stond bescheven. Dit had te maken met het `report.Vadility`, iets wat ik over het hoofd had gezien. Wat er gebeurd is, als de input field `invalid`, wordt de auto focus direct gelegd op de `invalid` input field, op het evenement `blur` wat je dus uiteindelijk vast zet.

En al moest deze week in het licht staan van styling, wat ik ook wel een beetje heb gedaan, heb ik deze week de meeste JavaScript geschreven van mijn hele leven. Dit kwam voornamelijk omdat ik graag `sessionStorage` wou toepassen, en daarnaast terug kwam op het `required` attribuut toggelen op zichtbaarheid van de **JS**, inplaats van dit overlaten aan de **CSS** die dit niet kon. 

Hiervoor heb ik veel overgenomen van code die Jeremy Keith heeft laten zien, code afgekomstig van een studente aan de HvA genaamd Rose Mulazada, die `localStorage`, de `FromData.API` en `json.stringify` gebruikte in combinatie met elkaar om data op te halen uit het formulier en terug te zetten. Echter heb ik in plaats van `localStorage` gekozen voor `sessionStorage`, omdat, aangezien beide geen beveiliging hebben, maar  er wel erg persoonlijke gegevens worden ingevuld, het mij veiliger leek om `sessionStorage` te gebruiken.

Voor het required gedeelte heb ik voornamelijk hulp en code gekregen van Quy, waarna ik de code heb aangepast om te zorgen dat het werkte voor mijn code. Dit werd een behoorlijke struggle waar ik meerdere malen opnieuw ben begonnen om ervoor te zorgen dat het uiteindelijk nou redelijk werkte.

#### Versie 1
````
document.addEventListener('DOMContentLoaded', () => {
  var radioButton = document.getElementById("partnersSchapsvoorwaardenJa"); // Select the single radio button

  if (radioButton) {
    radioButton.addEventListener('change', function () {
      const fieldset = document.getElementById("akteBestandSturen");
      console.log("verander")

      if (radioButton.checked) {
        fieldset.style.display = 'block'; // Show the fieldset if checked
        console.log("Radio button is checked. Showing fieldset.");
      } 
      else {
        fieldset.style.display = 'none'; // Hide the fieldset if unchecked
        console.log("Radio button is unchecked. Hiding fieldset.");
      }
    });
  } else {
    console.error("Radio button with ID 'partnersSchapsvoorwaardenJa' not found.");
  }
});
````

#### Versie 2
```
document.addEventListener('DOMContentLoaded', () => {
  var radioButtons = document.querySelectorAll(' #partnersSchapsvoorwaardenJa partnerSchapsvoorwaardenNee input');
  console.log(radioButtons)
  if (radioButtons) {
    radioButtons.addEventListener('change', function () {
      const fieldset = (document.getElementById("akteBestandSturen"));
      const ja = (document.querySelectorAll('.partnersSchapsvoorwaarden input:checked')?.value === 'ja');
      if (ja) {
        fieldset.style.display = 'block';
      }
      else {
        fieldset.style.display = 'none';
      }
    })
  }
})
```

#### Versie 3:
```
document.addEventListener('DOMContentLoaded', () => {
  var radioButton = document.querySelector("#partnersSchapsvoorwaardenJa input")
  if (radioButton) {
    radioButton.addEventListener('change', function () {
      const fieldset = (document.getElementById("akteBestandSturen"));
      const ja = (document.querySelector("#partnersSchapsvoorwaardenJa input:checked")?.value === 'ja');
      console.log(ja)
        if (ja) {
          fieldset.style.display = 'block';
          console.log("ja")
        } else {
          fieldset.style.display = 'none';
          console.log("help")
        }
        console.log(ja,fieldset)
        console.log("hallo")
      });
  }

});
```

#### Versie 4:
```
document.querySelectorAll('#partneresSchapsvoorwaarden #akteBestandSturen input').forEach(function (radio) {
radio.addEventListener('change', function () {
  const fieldsets = document.querySelectorAll('#partneresSchapsvoorwaardenJa #akteBestandSturen');
  const ja = (document.querySelector('#partneresSchapsvoorwaardenJa input:checked').value === 'ja');
  function toggle (fieldset) {
      if (ja) {
          fieldset.style.display = 'block';
          console.log("ja")
      } else {
          fieldset.style.display = 'none';
          console.log("nee")
      } }
      fieldset.disabled = !ja;
      fieldset.querySelectorAll('input').forEach(function (input) {
          if (ja) {
              input.setAttribute('required', 'required');
          } else {
              input.removeAttribute('required');
          }
      });
  });
});
```
Uiteindelijk heb ik de code goed gekregen en daarna geimplementeerd in de code van `sessionStorage`, wat uiteindelijk niet heel veel meer werk was. Zoals ik al zei is dit de meeste JavaScript die ik ooit in mijn leven heb geschreven, en ik heb er veel van kunnen leren. 

### Conclusie
Mijn styling is nog steeds niet geweldig, al is het al wel een stuk verbeterd. Voor de rest had ik mijn feedback gesprek al op woensdag in het begin van de middag dus was ik voornamelijk bezig met de `sessionStorage` in elkaar zetten en ging zonder echte feedback week 4 in. Het enige wat ik nog niet had gedaan was het meeste van mijn documentatie dus dat was nog wel iets waar ik veel tijd aan moest gaan besteden.

- - - - 

## Week 4

### Proces
Ik heb eerst veel aan mijn documentatie gezeten, en ervoor gezorgd dat alles tekst er wel zo'n beetje in stond, en op een redelijk overzichtelijke manier.

### Conclusie

- - - - 

## Bronnen:

### User validation
  #### CSS
* https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid
* https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid
* https://developer.mozilla.org/en-US/docs/Web/CSS/:valid
* https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid

#### JS
* Code uitleg van Krijn van `set.CustomVadility`
* https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity
* https://developer.mozilla.org/en-US/docs/Web/API/ValidityState

### Pattern:
* https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern

### Inputs:
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
* https://dev.to/codeclown/styling-a-native-date-input-into-a-custom-no-library-datepicker-2in

### Session Storage
* Code van Jeremy Keith/Rose Mulazada
* https://gist.github.com/rosemulazada/29379f3e0586491f235e0eb39d108aa5
* https://stackoverflow.com/questions/69426533/how-do-i-auto-fill-a-form-using-session-storage
* https://codedamn.com/news/javascript/how-to-use-session-storage-in-javascript

### Overige:
* https://developer.mozilla.org/en-US/docs/Web/CSS/:checked
* https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled
* https://developer.mozilla.org/en-US/docs/Web/CSS/:current
