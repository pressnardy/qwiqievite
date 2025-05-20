
const escortNames = ["Diana", "Jane", "Mary", "Susan", "Linda", "Rose",];

const vipAds = document.getElementById("vip-ads");
const generalAds = document.getElementById("general-ads");



const cardHTML = `
    <div class="image-wrapper">
      <img src="./assets/images/escort.jpg" alt="Card Image" class="card-image">
      <div class="transparent-details">
        <div class="escort-name">Diana</div>
        <div class="escort-location">Thika</div>
      </div>
    </div>
    <div class="escort-phone">
      <span class="phone-icon"></span>
      <a href="tel:+254712345678" class="escort-phone">+254712345678</a>
    </div> 
    `

function createCard(){
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = cardHTML;
  return card;
}


function insertVIPCards(escortNames) {
  const card = createCard();
  for (let escortName of escortNames) {
    const newCard = card.cloneNode(true);
    newCard.querySelector(".escort-name").textContent = escortName;
    vipAds.appendChild(newCard);
    
  }
}

function insertVerifiedCards(escortNames) {
  const card = createCard();
  const verifiedAds = document.getElementById("verified-ads");
  for (let escortName of escortNames) {
    const newCard = card.cloneNode(true);
    newCard.querySelector(".escort-name").textContent = escortName;
    verifiedAds.appendChild(newCard);
    
  }
}

function insertGeneralCards(escortNames) {
  const card = createCard();
  const generalAds = document.getElementById("general-ads");
  for (let escortName of escortNames) {
    const newCard = card.cloneNode(true);
    newCard.querySelector(".escort-name").textContent = escortName;
    generalAds.appendChild(newCard);
    
  }
}


insertVIPCards(escortNames);
insertVerifiedCards(escortNames);
insertGeneralCards(escortNames);


const counties = [
  {"name": "nairobi", "towns": ["embakasi", "kilimani", "karen", "westlands", "langata", "nairobi central"]},
  {"name": "mombasa", "towns": ["likoni", "nyali", "changamwe", "kisauni", "mtongwe", "shanzu"]},
  {"name": "kisumu", "towns": ["milimani", "nyalenda", "kondele", "mamboleo", "dunga", "kibos"]},
  {"name": "nakuru", "towns": ["naivasha", "gilgil", "rongai", "njoro", "molo", "subukia"]},
  {"name": "kiambu", "towns": ["thika", "ruiru", "githunguri", "limuru", "kikuyu", "kiambu town"]},
  {"name": "machakos", "towns": ["kangundo", "mavoko", "masinga", "matungulu", "machakos town", "yatta"]},
  {"name": "nyeri", "towns": ["karatina", "othaya", "mukurweini", "nyeri town", "kieni", "tetu"]},
  {"name": "meru", "towns": ["timau", "maua", "nkubu", "meru town", "tigania", "igembe"]},
  {"name": "embu", "towns": ["runyenjes", "siakago", "embu town", "kiritiri", "manyatta", "mbeere"]},
  {"name": "kakamega", "towns": ["mumias", "butere", "shinyalu", "malava", "kakamega town", "navakholo"]},
  {"name": "bungoma", "towns": ["webuye", "kimilili", "chwele", "sirisia", "bungoma town", "mt elgon"]},
  {"name": "kisii", "towns": ["nyamache", "suneka", "kisii town", "masimba", "tabaka", "keumbu"]},
  {"name": "nyamira", "towns": ["nyamira town", "keroka", "ekerenyo", "magwagwa", "manga", "gesima"]},
  {"name": "kericho", "towns": ["litein", "kericho town", "sosiot", "kipkelion", "chepseon", "fort tenan"]},
  {"name": "bomet", "towns": ["bomet town", "sotik", "kaplong", "longisa", "silibwet", "chebole"]},
  {"name": "narok", "towns": ["narok town", "kilgoris", "lolgorien", "suswa", "entasekera", "ololulung'a"]},
  {"name": "kajiado", "towns": ["kajiado town", "ngong", "kitengela", "isinya", "loitokitok", "namanga"]},
  {"name": "laikipia", "towns": ["nyahururu", "nanyuki", "rumuruti", "kinamba", "sipili", "wiyumiririe"]},
  {"name": "nyandarua", "towns": ["ol kalou", "njabini", "engineer", "mirangine", "kipipiri", "shamata"]},
  {"name": "murang'a", "towns": ["murang'a town", "kangema", "kandara", "kenol", "maragua", "kiria-ini"]},
  {"name": "tharaka nithi", "towns": ["chuka", "marimanti", "gatunga", "muthambi", "kathwana", "chiakariga"]},
  {"name": "kitui", "towns": ["kitui town", "mwingi", "mutomo", "kyuso", "ikutha", "kabati"]},
  {"name": "makueni", "towns": ["wote", "mtito andei", "makindu", "kibwezi", "sultan hamud", "kathonzweni"]},
  {"name": "taita taveta", "towns": ["voi", "taveta", "wundanyi", "mwatate", "maungu", "ndii"]},
  {"name": "kwale", "towns": ["ukunda", "diani", "kwale town", "kinango", "lunga lunga", "shimba hills"]},
  {"name": "kilifi", "towns": ["malindi", "kilifi town", "watamu", "mtwapa", "kaloleni", "gongoni"]},
  {"name": "lamu", "towns": ["lamu town", "mpeketoni", "kiunga", "faza", "shela", "matondoni"]},
  {"name": "tana river", "towns": ["hola", "bura", "garsen", "madogo", "wenje", "kipini"]},
  {"name": "garissa", "towns": ["garissa town", "dadaab", "masalani", "hulugho", "modogashe", "balambala"]},
  {"name": "wajir", "towns": ["wajir town", "griftu", "habaswein", "eldas", "tarbaj", "bute"]},
  {"name": "mandera", "towns": ["mandera town", "elwak", "lafey", "takaba", "banisa", "rhamu"]},
  {"name": "marsabit", "towns": ["marsabit town", "moyale", "sololo", "loiyangalani", "north horr", "laisamis"]},
  {"name": "isiolo", "towns": ["isiolo town", "garbatulla", "kina", "merti", "kipsing", "oldonyiro"]},
  {"name": "samburu", "towns": ["maralal", "baragoi", "archers post", "wamba", "lodokejek", "south horr"]},
  {"name": "turkana", "towns": ["lodwar", "kalokol", "lokichoggio", "kakuma", "lokitaung", "lorugum"]},
  {"name": "west pokot", "towns": ["kapenguria", "chepareria", "ortum", "lomut", "sigor", "alale"]},
  {"name": "elgeyo marakwet", "towns": ["itens", "kapsowar", "chebiemit", "tambach", "chesoi", "kapcherop"]},
  {"name": "nandi", "towns": ["kapsabet", "nandi hills", "mosoriot", "kabiyet", "chepterit", "lessos"]},
  {"name": "uasin gishu", "towns": ["eldoret", "moiben", "ziwa", "kesses", "turbo", "kapseret"]},
  {"name": "trans nzoia", "towns": ["kitale", "kiminini", "endebess", "cherangany", "saboti", "kesogon"]},
  {"name": "bungoma", "towns": ["bungoma town", "webuye", "kimilili", "chwele", "sirisia", "mt elgon"]},
  {"name": "busia", "towns": ["busia town", "malaba", "nambale", "butula", "funyula", "port victoria"]},
  {"name": "siaya", "towns": ["siaya town", "bondo", "ugenya", "gem", "rarieda", "alego usonga"]},
  {"name": "homabay", "towns": ["homabay town", "mbita", "kendu bay", "oyugis", "rangwe", "ndhiwa"]},
  {"name": "migori", "towns": ["migori town", "awendo", "rongo", "kuria", "nyatike", "uriri"]},
  {"name": "vihiga", "towns": ["mbale", "luanda", "hamisi", "sabatia", "emuhaya", "tiriki"]},
  {"name": "tharaka nithi", "towns": ["chuka", "marimanti", "gatunga", "muthambi", "kathwana", "chiakariga"]}
]


const countiesContainer = document.getElementById('counties');

counties.forEach(county => {
    const countyElement = document.createElement('div');
    countyElement.classList.add('county');
    countyElement.innerHTML = `
        <div class="county-name">
            ${county.name.charAt(0).toUpperCase() + county.name.slice(1)}
            <img src="./assets/svg/heart.svg" alt="caret-down-solid" class="caret">
        </div>
        <ul class="towns" style="display: none;">
            ${county.towns.map(town => `<li class="town">${town.charAt(0).toUpperCase() + town.slice(1)}</li>`).join('')}
        </ul>
    `;
    countiesContainer.appendChild(countyElement);
});



const countyNames = document.querySelectorAll('.county-name');

countyNames.forEach(countyName => {
    countyName.addEventListener('click', () => {
        const towns = countyName.nextElementSibling;
        const caret = countyName.querySelector('img.caret');

        if (towns && towns.classList.contains('towns')) {
            const isVisible = towns.style.display === 'block';
            towns.style.display = isVisible ? 'none' : 'block';

            if (caret) {
                caret.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        }
    });
});

// Updated version using counties.querySelector('.towns')


const towns = document.querySelectorAll('li.town');

towns.forEach(town => {
    town.addEventListener('click', () => {
        const filterForm = document.getElementById('escort_filters');
        filterForm.submit()
    })
})


const genderInputs = document.querySelectorAll('.input-gender');

genderInputs.forEach(gender => {
    gender.addEventListener('click', () => {
        const genderFilter = document.getElementById('gender-filter')
        genderFilter.submit()
    })
})


