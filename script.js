//flipped card path
let flippedCard = "./Card Back.png";

//cards in hand
let handSize = 0;
let cardHand1 = document.getElementById('card1');
let cardHand2 = document.getElementById('card2');
let cardHand3 = document.getElementById('card3');
let cardHand4 = document.getElementById('card4');
let cardHand5 = document.getElementById('card5');
let cardHand6 = document.getElementById('card6');
let cardHand7 = document.getElementById('card7');
let cardHand8 = document.getElementById('card8');
let cardHand9 = document.getElementById('card9');
let cardHand10 = document.getElementById('card10');
let cardHand11 = document.getElementById('card11');
let cardHand12 = document.getElementById('card12');

//cards that are discarded, lost, or active
let discard1 = document.getElementById('discard1');
let discard2 = document.getElementById('discard2');
let discard3 = document.getElementById('discard3');
let discard4 = document.getElementById('discard4');
let discard5 = document.getElementById('discard5');
let discard6 = document.getElementById('discard6');
let discard7 = document.getElementById('discard7');
let discard8 = document.getElementById('discard8');
let discard9 = document.getElementById('discard9');
let discard10 = document.getElementById('discard10');
let lost1 = document.getElementById('lost1');
let lost2 = document.getElementById('lost2');
let lost3 = document.getElementById('lost3');
let lost4 = document.getElementById('lost4');
let lost5 = document.getElementById('lost5');
let lost6 = document.getElementById('lost6');
let lost7 = document.getElementById('lost7');
let lost8 = document.getElementById('lost8');
let lost9 = document.getElementById('lost9');
let lost10 = document.getElementById('lost10');
let active1 = document.getElementById('active1');
let active2 = document.getElementById('active2');
let active3 = document.getElementById('active3');
let active4 = document.getElementById('active4');
let active5 = document.getElementById('active5');
let active6 = document.getElementById('active6');

//buttons for play
let playCardsButton = document.getElementById('play-cards-button');
let discardButton = document.getElementById('discard-button');
let loseButton = document.getElementById('lose-button');
let activateButton = document.getElementById('activate-button');
let recoverDiscardButton = document.getElementById('recover-discard-button');
let shortRestButton = document.getElementById('short-rest-button');
let longRestButton = document.getElementById('long-rest-button');
let discardActiveCardButton = document.getElementById('discard-active-card');
let loseActiveCardButton = document.getElementById('lose-active-card');
let recoverLostCardButton = document.getElementById('recover-lost');
let loseCardFromRestButton = document.getElementById('lose-discard-button');
let rerollShortRestButton = document.getElementById('reroll-random-card-button');
let confirmCharacterButton = document.getElementById('confirm-character-button');
let togglePoison = document.getElementById('toggle-poison');
let toggleWounded = document.getElementById('toggle-wounded');
let toggleImmobilized = document.getElementById('toggle-immobilized');
let toggleDisarmed = document.getElementById('toggle-disarmed');
let toggleStunned = document.getElementById('toggle-stunned');
let toggleMuddled = document.getElementById('toggle-muddled');
let toggleInvisible = document.getElementById('toggle-invisible');
let toggleStrengthened = document.getElementById('toggle-strengthened');
let xpUp = document.getElementById('xp-up');
let xpDown = document.getElementById('xp-down');
let healButton = document.getElementById('heal');
let damageButton = document.getElementById('damage');
let levelUp = document.getElementById('level-up');
let levelDown = document.getElementById('level-down');
let confirmLevel = document.getElementById('confirm-level');
//play cards variables

let playCard1 = "";
let playCard2 = "";

//counters
let cardCount = 0;
let discardCount = 0;
let cardCounter = document.getElementById('card-counter');
let cardsInPlayCounter = 0;
let chooseCardsNumber = document.getElementById('choose-cards-number');
let health = 0;
let xpCount = 0;
let maxHealth = 0;
let levelCounter = document.getElementById('level-counter');
let levelCount = 1;

//characters
let brute = document.getElementById('brute');
let cragheart = document.getElementById('cragheart');
let mindthief = document.getElementById('mindthief');
let spellweaver = document.getElementById('spellweaver');
let scoundrel = document.getElementById('scoundrel');
let tinkerer = document.getElementById('tinkerer');

//status effects
let poisoned = false;
let poisonedToken = document.getElementById('poisoned');
let wounded = false;
let woundedToken = document.getElementById('wounded');
let disarmed = false;
let disarmedToken = document.getElementById('disarmed');
let immobilized = false;
let immobilizedToken = document.getElementById('immobilized');
let stunned = false;
let stunnedToken = document.getElementById('stunned');
let muddled = false;
let muddledToken = document.getElementById('muddled');
let strengthened = false;
let strengthenedToken = document.getElementById('strengthened');
let invisible = false;
let invisibleToken = document.getElementById('invisible');

let characterSelected = false;
var characterPortraits = document.querySelectorAll(".character");
for (var i = 0; i<characterPortraits.length; i++){
  (function (){
    var characterPortrait = characterPortraits[i];
    characterPortrait.onclick = () => {
      if (!isSelected(characterPortrait) && !characterSelected){
        characterSelected = true;
        characterPortrait.classList.add("character-selected");
      } else if(!isSelected(characterPortrait) && characterSelected){
        var charactersSelected = document.querySelectorAll(".character-selected");
        var selectedCharacter = charactersSelected[0];
        selectedCharacter.classList.remove("character-selected");
        characterPortrait.classList.add("character-selected");
      } else if(isSelected(characterPortrait) && characterSelected){
        characterSelected = false;
        characterPortrait.classList.remove("character-selected");
      }
    }
  }).call(this,i);
}



confirmCharacterButton.onclick = () => {
  if(characterSelected){
  if(cragheart.classList.contains("character-selected")){
    flippedCard = "./0002.jpg";
    handSize = 11;
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if(!(i === 14)){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './0"+i+".jpg' />";
        } else {
          cardToChooseFrom.innerHTML = "";
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 10;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 2:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 3:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 4:
      maxHealth = 16;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 5:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 6:
      maxHealth = 20;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 7:
      maxHealth = 22;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 8:
      maxHealth = 24;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 9:
      maxHealth = 26;
      health = maxHealth;
      break;
    }
  } else if(brute.classList.contains("character-selected")){
    flippedCard = "./Card Back.png";
    handSize = 10
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<13) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './bt"+i+".png' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 10;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 2:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 3:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 4:
      maxHealth = 16;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 5:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 6:
      maxHealth = 20;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 7:
      maxHealth = 22;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 8:
      maxHealth = 24;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 9:
      maxHealth = 26;
      health = maxHealth;
      break;
    }
  } else if(mindthief.classList.contains("character-selected")){
    flippedCard = "./mtBack.jpg";
    handSize = 10
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<13) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './mt"+i+".jpg' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 6;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 2:
      maxHealth = 7;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 3:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 4:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 5:
      maxHealth = 10;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 6:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 7:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 8:
      maxHealth = 13;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 9:
      maxHealth = 14;
      health = maxHealth;
      break;
    }
  } else if(spellweaver.classList.contains("character-selected")){
    flippedCard = "./swBack.jpg";
    handSize = 8
    cardHand9.classList.add("hiding");
    cardHand10.classList.add("hiding");
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<11) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './sw"+i+".jpg' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 6;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 2:
      maxHealth = 7;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 3:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 4:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 5:
      maxHealth = 10;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 6:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 7:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 8:
      maxHealth = 13;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 9:
      maxHealth = 14;
      health = maxHealth;
      break;
    }
  } else if(scoundrel.classList.contains("character-selected")){
    flippedCard = "./scBack.jpg";
    handSize = 9
    cardHand10.classList.add("hiding");
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<12) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './sc"+i+".jpg' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 2:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 3:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 4:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 5:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 6:
      maxHealth = 15;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 7:
      maxHealth = 17;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 8:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  } else if(tinkerer.classList.contains("character-selected")){
    flippedCard = "./tiBack.jpg";
    handSize = 12
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './ti"+i+".jpg' />";
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 2:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 3:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 4:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 5:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 6:
      maxHealth = 15;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 7:
      maxHealth = 17;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 8:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.innerHTML = "";
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  }
  document.getElementById("select-class-section").classList.add("hiding");
  document.getElementById("level-selection").classList.add("hiding");
  document.getElementById("initial-table").classList.remove("hiding");
  document.getElementById("hand-cards").classList.remove("hiding");
  document.getElementById("confirm-buttons").classList.remove("hiding");
  chooseCardsNumber.innerHTML = "Choose "+ handSize+ " Cards";
  cardCounter.innerHTML = "0/"+handSize;
  healthCounter.innerHTML = health;
  xpCounter.innerHTML = xpCount;
  chosenCard1.src = flippedCard;
  chosenCard2.src = flippedCard;
}
}

//card selecting functions
var cards = document.querySelectorAll(".chooseCardsTable");
for (var i = 0; i < cards.length; i++) {
  (function () {
  var card = cards[i];
    card.onclick = (function () {
      if (!isSelected(card.firstChild) && cardCount<handSize){
        card.firstChild.classList.add("add-border");
        cardCount++;
        cardCounter.innerHTML = cardCount + "/"+ handSize;
        if(cardHand1.classList.contains("flipped")){
            cardHand1.src = card.firstChild.src;
            cardHand1.classList.remove("flipped");
            cardHand1.classList.add(`${this.id}`)
          } else if (cardHand2.classList.contains("flipped")){
            cardHand2.src = card.firstChild.src;
            cardHand2.classList.remove("flipped");
            cardHand2.classList.add(`${this.id}`);
          } else if (cardHand3.classList.contains("flipped")){
            cardHand3.src = card.firstChild.src;
            cardHand3.classList.remove("flipped");
            cardHand3.classList.add(`${this.id}`);
          } else if (cardHand4.classList.contains("flipped")){
            cardHand4.src = card.firstChild.src;
            cardHand4.classList.remove("flipped");
            cardHand4.classList.add(`${this.id}`);
          } else if (cardHand5.classList.contains("flipped")){
            cardHand5.src = card.firstChild.src;
            cardHand5.classList.remove("flipped");
            cardHand5.classList.add(`${this.id}`);
          } else if (cardHand6.classList.contains("flipped")){
            cardHand6.src = card.firstChild.src;
            cardHand6.classList.remove("flipped");
            cardHand6.classList.add(`${this.id}`);
          } else if (cardHand7.classList.contains("flipped")){
            cardHand7.src = card.firstChild.src;
            cardHand7.classList.remove("flipped");
            cardHand7.classList.add(`${this.id}`);
          } else if (cardHand8.classList.contains("flipped")){
            cardHand8.src = card.firstChild.src;
            cardHand8.classList.remove("flipped");
            cardHand8.classList.add(`${this.id}`);
          } else if (cardHand9.classList.contains("flipped")){
            cardHand9.src = card.firstChild.src;
            cardHand9.classList.remove("flipped");
            cardHand9.classList.add(`${this.id}`);
          } else if (cardHand10.classList.contains("flipped")){
            cardHand10.src = card.firstChild.src;
            cardHand10.classList.remove("flipped");
            cardHand10.classList.add(`${this.id}`);
          } else if (cardHand11.classList.contains("flipped")){
            cardHand11.src = card.firstChild.src;
            cardHand11.classList.remove("flipped");
            cardHand11.classList.add(`${this.id}`);
          } else if (cardHand12.classList.contains("flipped")){
            cardHand12.src = card.firstChild.src;
            cardHand12.classList.remove("flipped");
            cardHand12.classList.add(`${this.id}`);
          }
      } else {
        card.firstChild.classList.remove("add-border");
        if(cardHand1.classList.contains(`${this.id}`)){
          flipCard(cardHand1);
          cardHand1.classList.remove("hiding");
        } else if (cardHand2.classList.contains(`${this.id}`)){
          flipCard(cardHand2);
          cardHand2.classList.remove("hiding");
        } else if (cardHand3.classList.contains(`${this.id}`)){
          flipCard(cardHand3);
          cardHand3.classList.remove("hiding");
        } else if (cardHand4.classList.contains(`${this.id}`)){
          flipCard(cardHand4);
          cardHand4.classList.remove("hiding");
        } else if (cardHand5.classList.contains(`${this.id}`)){
          flipCard(cardHand5);
          cardHand5.classList.remove("hiding");
        } else if (cardHand6.classList.contains(`${this.id}`)){
          flipCard(cardHand6);
          cardHand6.classList.remove("hiding");
        } else if (cardHand7.classList.contains(`${this.id}`)){
          flipCard(cardHand7);
          cardHand7.classList.remove("hiding");
        } else if (cardHand8.classList.contains(`${this.id}`)){
          flipCard(cardHand8);
          cardHand8.classList.remove("hiding");
        } else if (cardHand9.classList.contains(`${this.id}`)){
          flipCard(cardHand9);
          cardHand9.classList.remove("hiding");
        } else if (cardHand10.classList.contains(`${this.id}`)){
          flipCard(cardHand10);
          cardHand10.classList.remove("hiding");
        } else if (cardHand11.classList.contains(`${this.id}`)){
          flipCard(cardHand11);
          cardHand11.classList.remove("hiding");
        } else if (cardHand12.classList.contains(`${this.id}`)){
          flipCard(cardHand12);
          cardHand12.classList.remove("hiding");
        }
      }
    });
  }).call(this, i);
};

const isSelected = card => {
  if (card.classList.contains("add-border") || card.classList.contains("discard-selected") || card.classList.contains("lost-selected") || card.classList.contains("active-selected") || card.classList.contains("character-selected")){
    return true;
  } else{
    return false;
  }
};

const isFlipped = card => {
  if (card.classList.contains("flipped")){
    return true;
  } else {
    return false;
  }
};

const flipCard = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("hand");
  card.classList.add("hiding");
  if(!handChosen){
  cardCount--;
  cardCounter.innerHTML = cardCount + "/"+ handSize;
}
};

const getCard1 = (card) => {
  playCard1 = card.src;
  flipCard(card);
};

const getCard2 = (card) => {
  playCard2 = card.src;
  flipCard(card);
};

const flipChosenCard = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("card-in-play");
};

const flipDiscard = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("discarded");
  card.classList.add("hiding");
}

const flipActive = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("active");
  card.classList.add("hiding");
}

const flipLost = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("lost");
  card.classList.add("hiding");
}

//Confirm button variables and function
let confirmHandButton = document.getElementById('confirm-hand');
let initialTable = document.getElementById('initial-table');
let handChosen = false;

confirmHandButton.onclick = () => {
  if(cardCount === handSize){
  initialTable.parentNode.removeChild(initialTable);
  document.getElementById('play-game').className = 'visible';
  document.getElementById('chosen-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
  document.getElementById('active-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
  document.getElementById('discarded-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
  document.getElementById('lost-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
  confirmHandButton.classList.add("hiding");
  playCardsButton.classList.remove("hiding");
  playCardsButton.classList.add("visible");
  cardCount = 0;
  handChosen = true;
  }
}

//function for clicking Hand
var hand = document.querySelectorAll(".hand");
for (var i = 0; i < hand.length; i++) {
  (function () {
  var handCard = hand[i];
    handCard.onclick = (function () {
      if(!isSelected(handCard) && handChosen === true && cardCount<2 && !isFlipped(handCard) && isFlipped(chosenCard1) && isFlipped(chosenCard2) && mustLoseCount<1){
        handCard.classList.add("add-border");
        cardCount++;
      } else if (isSelected(handCard)){
        handCard.classList.remove("add-border");
        cardCount--;
      }
    });
  }).call(this, i);
};

playCardsButton.onclick = () => {
  //document.getElementById("hand-cards").style.backgroundColor = "red";
  if(cardCount === 2 && mustLoseCount<1 && !(shortResting) && !(longResting)){
    if(cardHand1.classList.contains("add-border")){
      getCard1(cardHand1);
    }else if(cardHand2.classList.contains("add-border")){
      getCard1(cardHand2);
    }else if(cardHand3.classList.contains("add-border")){
      getCard1(cardHand3);
    }else if(cardHand4.classList.contains("add-border")){
      getCard1(cardHand4);
    }else if(cardHand5.classList.contains("add-border")){
      getCard1(cardHand5);
    }else if(cardHand6.classList.contains("add-border")){
      getCard1(cardHand6);
    }else if(cardHand7.classList.contains("add-border")){
      getCard1(cardHand7);
    }else if(cardHand8.classList.contains("add-border")){
      getCard1(cardHand8);
    }else if(cardHand9.classList.contains("add-border")){
      getCard1(cardHand9);
    }else if(cardHand10.classList.contains("add-border")){
      getCard1(cardHand10);
    }else if(cardHand11.classList.contains("add-border")){
      getCard1(cardHand11);
    }
    if(cardHand2.classList.contains("add-border")){
      getCard2(cardHand2);
    }else if(cardHand3.classList.contains("add-border")){
      getCard2(cardHand3);
    }else if(cardHand4.classList.contains("add-border")){
      getCard2(cardHand4);
    }else if(cardHand5.classList.contains("add-border")){
      getCard2(cardHand5);
    }else if(cardHand6.classList.contains("add-border")){
      getCard2(cardHand6);
    }else if(cardHand7.classList.contains("add-border")){
      getCard2(cardHand7);
    }else if(cardHand8.classList.contains("add-border")){
      getCard2(cardHand8);
    }else if(cardHand9.classList.contains("add-border")){
      getCard2(cardHand9);
    }else if(cardHand10.classList.contains("add-border")){
      getCard2(cardHand10);
    }else if(cardHand11.classList.contains("add-border")){
      getCard2(cardHand11);
    }else if(cardHand12.classList.contains("add-border")){
      getCard2(cardHand12);
    }
    cardCount = 0;
    chosenCard1.src = playCard1;
    chosenCard1.classList.remove("flipped");
    chosenCard2.src = playCard2;
    chosenCard2.classList.remove("flipped");
    cardsInPlayCounter = 2;
  }
};

let chosenCard1 = document.getElementById('chosen-card-1');
let chosenCard2 = document.getElementById('chosen-card-2');

chosenCard1.onclick = () => {
  if(cardCount < 1 && !isSelected(chosenCard1) && !isFlipped(chosenCard1) && mustLoseCount<1){
    chosenCard1.classList.add("add-border");
    cardCount++;
  } else if (cardCount === 1 && isSelected(chosenCard1)){
    chosenCard1.classList.remove("add-border");
    cardCount--;
  }
};

chosenCard2.onclick = () => {
  if(cardCount < 1 && !isSelected(chosenCard2) && !isFlipped(chosenCard2) && mustLoseCount<1){
    chosenCard2.classList.add("add-border");
    cardCount++;
  } else if (cardCount == 1 && isSelected(chosenCard2)){
    chosenCard2.classList.remove("add-border");
    cardCount--;
  }
};

discardButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1){
    if(discard1.classList.contains("flipped")){
      discard1.src = chosenCard1.src;
      discard1.classList.remove("hiding");
      discard1.classList.remove("flipped")
    } else if(discard2.classList.contains("flipped")){
      discard2.src = chosenCard1.src;
      discard2.classList.remove("hiding");
      discard2.classList.remove("flipped")
    } else if(discard3.classList.contains("flipped")){
      discard3.src = chosenCard1.src;
      discard3.classList.remove("hiding");
      discard3.classList.remove("flipped")
    } else if(discard4.classList.contains("flipped")){
      discard4.src = chosenCard1.src;
      discard4.classList.remove("hiding");
      discard4.classList.remove("flipped")
    } else if(discard5.classList.contains("flipped")){
      discard5.src = chosenCard1.src;
      discard5.classList.remove("hiding");
      discard5.classList.remove("flipped")
    } else if(discard6.classList.contains("flipped")){
      discard6.src = chosenCard1.src;
      discard6.classList.remove("hiding");
      discard6.classList.remove("flipped")
    } else if(discard7.classList.contains("flipped")){
      discard7.src = chosenCard1.src;
      discard7.classList.remove("hiding");
      discard7.classList.remove("flipped")
    } else if(discard8.classList.contains("flipped")){
      discard8.src = chosenCard1.src;
      discard8.classList.remove("hiding");
      discard8.classList.remove("flipped")
    } else if(discard9.classList.contains("flipped")){
      discard9.src = chosenCard1.src;
      discard9.classList.remove("hiding");
      discard9.classList.remove("flipped")
    } else if(discard10.classList.contains("flipped")){
      discard10.src = chosenCard1.src;
      discard10.classList.remove("hiding");
      discard10.classList.remove("flipped")
    }
    flipChosenCard(chosenCard1);
    cardCount--;
    discardCount++;
    cardsInPlayCounter--;
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1){
    if(discard1.classList.contains("flipped")){
      discard1.src = chosenCard2.src;
      discard1.classList.remove("hiding");
      discard1.classList.remove("flipped")
    } else if(discard2.classList.contains("flipped")){
      discard2.src = chosenCard2.src;
      discard2.classList.remove("hiding");
      discard2.classList.remove("flipped")
    } else if(discard3.classList.contains("flipped")){
      discard3.src = chosenCard2.src;
      discard3.classList.remove("hiding");
      discard3.classList.remove("flipped")
    } else if(discard4.classList.contains("flipped")){
      discard4.src = chosenCard2.src;
      discard4.classList.remove("hiding");
      discard4.classList.remove("flipped")
    } else if(discard5.classList.contains("flipped")){
      discard5.src = chosenCard2.src;
      discard5.classList.remove("hiding");
      discard5.classList.remove("flipped")
    } else if(discard6.classList.contains("flipped")){
      discard6.src = chosenCard2.src;
      discard6.classList.remove("hiding");
      discard6.classList.remove("flipped")
    } else if(discard7.classList.contains("flipped")){
      discard7.src = chosenCard2.src;
      discard7.classList.remove("hiding");
      discard7.classList.remove("flipped")
    } else if(discard8.classList.contains("flipped")){
      discard8.src = chosenCard2.src;
      discard8.classList.remove("hiding");
      discard8.classList.remove("flipped")
    } else if(discard9.classList.contains("flipped")){
      discard9.src = chosenCard2.src;
      discard9.classList.remove("hiding");
      discard9.classList.remove("flipped")
    } else if(discard10.classList.contains("flipped")){
      discard10.src = chosenCard2.src;
      discard10.classList.remove("hiding");
      discard10.classList.remove("flipped")
    }
    flipChosenCard(chosenCard2);
    cardCount--;
    discardCount++
    cardsInPlayCounter--;
      }
    };

loseButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1){
    if(lost1.classList.contains("flipped")){
      lost1.src = chosenCard1.src;
      lost1.classList.remove("hiding");
    lost1.classList.remove("flipped")
    } else if(lost2.classList.contains("flipped")){
      lost2.src = chosenCard1.src;
      lost2.classList.remove("hiding");
      lost2.classList.remove("flipped")
    } else if(lost3.classList.contains("flipped")){
      lost3.src = chosenCard1.src;
      lost3.classList.remove("hiding");
      lost3.classList.remove("flipped")
    } else if(lost4.classList.contains("flipped")){
      lost4.src = chosenCard1.src;
      lost4.classList.remove("hiding");
      lost4.classList.remove("flipped")
    } else if(lost5.classList.contains("flipped")){
      lost5.src = chosenCard1.src;
      lost5.classList.remove("hiding");
      lost5.classList.remove("flipped")
    } else if(lost6.classList.contains("flipped")){
      lost6.src = chosenCard1.src;
      lost6.classList.remove("hiding");
      lost6.classList.remove("flipped")
    } else if(lost7.classList.contains("flipped")){
      lost7.src = chosenCard1.src;
      lost7.classList.remove("hiding");
      lost7.classList.remove("flipped")
    } else if(lost8.classList.contains("flipped")){
      lost8.src = chosenCard1.src;
      lost8.classList.remove("hiding");
      lost8.classList.remove("flipped")
    } else if(lost9.classList.contains("flipped")){
      lost9.src = chosenCard1.src;
      lost9.classList.remove("hiding");
      lost9.classList.remove("flipped")
    } else if(lost10.classList.contains("flipped")){
      lost10.src = chosenCard1.src;
      lost10.classList.remove("hiding");
      lost10.classList.remove("flipped")
    }
    flipChosenCard(chosenCard1);
    cardCount--;
    cardsInPlayCounter--;
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1){
    if(lost1.classList.contains("flipped")){
      lost1.src = chosenCard2.src;
      lost1.classList.remove("hiding");
      lost1.classList.remove("flipped")
    } else if(lost2.classList.contains("flipped")){
      lost2.src = chosenCard2.src;
      lost2.classList.remove("hiding");
      lost2.classList.remove("flipped")
    } else if(lost3.classList.contains("flipped")){
      lost3.src = chosenCard2.src;
      lost3.classList.remove("hiding");
      lost3.classList.remove("flipped")
    } else if(lost4.classList.contains("flipped")){
      lost4.src = chosenCard2.src;
      lost4.classList.remove("hiding");
      lost4.classList.remove("flipped")
    } else if(lost5.classList.contains("flipped")){
      lost5.src = chosenCard2.src;
      lost5.classList.remove("hiding");
      lost5.classList.remove("flipped")
    } else if(lost6.classList.contains("flipped")){
      lost6.src = chosenCard2.src;
      lost6.classList.remove("hiding");
      lost6.classList.remove("flipped")
    } else if(lost7.classList.contains("flipped")){
      lost7.src = chosenCard2.src;
      lost7.classList.remove("hiding");
      lost7.classList.remove("flipped")
    } else if(lost8.classList.contains("flipped")){
      lost8.src = chosenCard2.src;
      lost8.classList.remove("hiding");
      lost8.classList.remove("flipped")
    } else if(lost9.classList.contains("flipped")){
      lost9.src = chosenCard2.src;
      lost9.classList.remove("hiding");
      lost9.classList.remove("flipped")
    } else if(lost10.classList.contains("flipped")){
      lost10.src = chosenCard2.src;
      lost10.classList.remove("hiding");
      lost10.classList.remove("flipped")
    }
    flipChosenCard(chosenCard2);
    cardCount--;
    cardsInPlayCounter--;
  }
};

activateButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1){
    if(active1.classList.contains("flipped")){
      active1.src = chosenCard1.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped")
    } else if(active2.classList.contains("flipped")){
      active2.src = chosenCard1.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped")
    } else if(active3.classList.contains("flipped")){
      active3.src = chosenCard1.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped")
    } else if(active4.classList.contains("flipped")){
      active4.src = chosenCard1.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped")
    } else if(active5.classList.contains("flipped")){
      active5.src = chosenCard1.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped")
    } else if(active6.classList.contains("flipped")){
      active6.src = chosenCard1.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped")
    }
    flipChosenCard(chosenCard1);
    cardCount--;
    cardsInPlayCounter--;
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1){
    if(active1.classList.contains("flipped")){
      active1.src = chosenCard2.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped")
    } else if(active2.classList.contains("flipped")){
      active2.src = chosenCard2.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped")
    } else if(active3.classList.contains("flipped")){
      active3.src = chosenCard2.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped")
    } else if(active4.classList.contains("flipped")){
      active4.src = chosenCard2.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped")
    } else if(active5.classList.contains("flipped")){
      active5.src = chosenCard2.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped")
    } else if(active6.classList.contains("flipped")){
      active6.src = chosenCard2.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped")
    }
    flipChosenCard(chosenCard2);
    cardCount--;
    cardsInPlayCounter--;
  }
};

let discardsSelected = 0;
var discards = document.querySelectorAll(".discarded");
for (var i = 0; i < discards.length; i++) {
  (function () {
  var discardedCard = discards[i];
    discardedCard.onclick = (function () {
      if(!isSelected(discardedCard) && mustLoseCount<1 && discardsSelected === 0){
        discardedCard.classList.add("discard-selected");
        discardsSelected++;
      } else if (!isSelected(discardedCard) && discardsSelected === 1){
        var selectedDiscardedCards = document.querySelectorAll(".discard-selected");
        var selectedDiscardedCard = selectedDiscardedCards[0];
        selectedDiscardedCard.classList.remove("discard-selected");
        discardedCard.classList.add("discard-selected");
      } else if (isSelected(discardedCard) && discardsSelected === 1){
        discardedCard.classList.remove("discard-selected");
        discardsSelected--;
      }
    });
  }).call(this, i);
};

let lostSelectedCounter = 0;
var lostCards = document.querySelectorAll(".lost");
for (var i = 0; i < lostCards.length; i++) {
  (function () {
  var lostCard = lostCards[i];
    lostCard.onclick = (function () {
      if(!isSelected(lostCard) && lostSelectedCounter === 0){
        lostCard.classList.add("lost-selected");
        lostSelectedCounter++
      } else if(!isSelected(lostCard) && lostSelectedCounter === 1){
        var selectedLostCards = document.querySelectorAll(".lost-selected");
        var selectedLostCard = selectedLostCards[0];
        selectedLostCard.classList.remove("lost-selected");
        lostCard.classList.add("lost-selected");
      } else {
        lostCard.classList.remove("lost-selected");
        lostSelectedCounter--;
      }
    });
  }).call(this, i);
};


let activesSelected = 0;
var actives = document.querySelectorAll(".active-card");
for (var i = 0; i < actives.length; i++) {
  (function () {
  var activeCard = actives[i];
    activeCard.onclick = (function () {
      if(!isSelected(activeCard) && activesSelected === 0){
        activeCard.classList.add("active-selected");
        activesSelected++;
      } else if(!isSelected(activeCard) && activesSelected ===1){
        var activeCardsSelected = document.querySelectorAll(".active-selected");
        var activeCardSelected = activeCardsSelected[0];
        activeCard.classList.add("active-selected");
        activeCardSelected.classList.remove("active-selected");
      } else {
        activeCard.classList.remove("active-selected");
        activesSelected--;
      }
    });
  }).call(this, i);
};


const shortRestLoop = card => {
    if(!(card.classList.contains("flipped"))){
      card.classList.add("must-lose");
      card.insertAdjacentHTML("afterend", "<br/><p class = 'must-lose'>Must Lose</p>");
      mustLoseCount++
    }
  }

let mustLose = false;
let shortResting = false;
let mustLoseCount = 0;
shortRestButton.onclick = () => {
  if(mustLoseCount === 0 && discardCount>1 && cardsInPlayCounter === 0 && !(longResting) && !(shortResting)){
  mustLose = true;
  shortResting = true;
  var discardedCards = document.querySelectorAll(".discarded");
  for (var i = 0; i<discardedCards.length; i++){
    var discardedCard = discardedCards[i];
    (function (){
      discardedCard.classList.remove("discard-selected");
    }).call(this,i);
  }
  let randomCard = Math.floor(Math.random()*discardCount);
  switch (randomCard) {
    case 0:
      for (var i = 0; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
        }
      break;
    case 1:
      for (var i = 1; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 2:
      for (var i = 2; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 3:
      for (var i = 3; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 4:
      for (var i = 4; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 5:
      for (var i = 5; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 6:
      for (var i = 6; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 7:
      for (var i = 7; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 8:
      for (var i = 8; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
       break;
    case 9:
      for (var i = 9; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
    break;
  }
}
}

loseCardFromRestButton.onclick = () => {
  if(mustLoseCount>0 && mustLose && shortResting){
    mustLose = false;
    shortResting = false;
      var mustLoseCards = document.querySelectorAll(".must-lose");
        var mustLoseCard = mustLoseCards[0];
        (function (){
          for (var i = 0; i<lostCards.length; i++){
            var lostCard1 = lostCards[i];
            if(lostCard1.classList.contains("flipped")){
              lostCard1.classList.remove("flipped");
              lostCard1.classList.remove("hiding");
              lostCard1.src = mustLoseCard.src;
              i = lostCards.length;
            }
          }
        }).call(this, i);
        mustLoseCount = 0;
        discardCount = 0;
        discardsSelected = 0;
        mustLoseCard.nextSibling.remove();
        mustLoseCard.nextSibling.remove();
        flipDiscard(mustLoseCard);
        var discardedCards = document.querySelectorAll(".discarded");
        var cardsInHand = document.querySelectorAll(".hand");
        for (var j = 0; j<discardedCards.length; j++){
          (function (){
            var discardedCard = discardedCards[j];
            if(!(discardedCard.classList.contains("flipped"))){
              for (var k = 0; k<cardsInHand.length; k++){
                (function () {
                  var cardInHand = cardsInHand[k];
                  if(cardInHand.classList.contains("flipped")){
                    cardInHand.src = discardedCard.src;
                    cardInHand.classList.remove("flipped");
                    cardInHand.classList.remove("hiding");
                    flipDiscard(discardedCard);
                    k = cardsInHand.length;
                  }
                }).call(this,k);
            }
          }

        }).call(this,j);
      }
    } else if (longResting &&  discardsSelected === 1){
      longResting = false;
      mustLose = false;
      var selectedDiscards = document.querySelectorAll(".discard-selected");
      var selectedDiscard = selectedDiscards[0];
      selectedDiscard.classList.remove("discard-selected");
      discardsSelected = 0;
      (function (){
        for (var i = 0; i<lostCards.length; i++){
          var lostCard1 = lostCards[i];
          if(lostCard1.classList.contains("flipped")){
            lostCard1.classList.remove("flipped");
            lostCard1.classList.remove("hiding");
            lostCard1.src = selectedDiscard.src;
            i = lostCards.length;
          }
        }
      }).call(this, i);
      discardCount = 0;
      Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
      }
      document.getElementById('choose-to-lose').remove();
      flipDiscard(selectedDiscard);
      var discardedCards = document.querySelectorAll(".discarded");
      var cardsInHand = document.querySelectorAll(".hand");
      for (var j = 0; j<discardedCards.length; j++){
        (function (){
          var discardedCard = discardedCards[j];
          if(!(discardedCard.classList.contains("flipped"))){
            for (var k = 0; k<cardsInHand.length; k++){
              (function () {
                var cardInHand = cardsInHand[k];
                if(cardInHand.classList.contains("flipped")){
                  cardInHand.src = discardedCard.src;
                  cardInHand.classList.remove("flipped");
                  cardInHand.classList.remove("hiding");
                  flipDiscard(discardedCard);
                  k = cardsInHand.length;
                }
              }).call(this,k);
          }
        }

      }).call(this,j);
    }
    if(poisoned){
      poisoned = false;
      poisonedToken.classList.add("hiding");
    } else if (health<maxHealth){
      health = health+2;
      healthCounter.innerHTML = health;
      if(health>maxHealth){
        health = maxHealth;
        healthCounter.innerHTML = health;
      }
    }
  }
}

rerollShortRestButton.onclick = () => {
  if(mustLoseCount === 1){
    var discardedCards = document.querySelectorAll(".discarded");
    for (var i = 0; i<discardedCards.length; i++){
      var discardedCard = discardedCards[i];
      (function (){
        discardedCard.classList.remove("discard-selected");
        if(discardedCard.classList.contains("must-lose")){
          discardedCard.classList.add("unloseable");
          i = discardedCards.length;
          discardedCard.classList.remove("must-lose");
          discardedCard.nextSibling.remove();
          discardedCard.nextSibling.remove();
        }
      }).call(this,i);
    }
      var randomCard2 = Math.floor(Math.random()*discardCount);
      var unloseable = document.querySelectorAll(".unloseable");
      var unloseableCard = unloseable[0];
      unloseableCard.classList.remove("unloseable");
      while (unloseableCard === discardedCards[randomCard2]){
        randomCard2 = Math.floor(Math.random()*discardCount);
      }
    switch (randomCard2) {
      case 0:
        for (var i = 0; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
          }
        break;
      case 1:
        for (var i = 1; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 2:
        for (var i = 2; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 3:
        for (var i = 3; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 4:
        for (var i = 4; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 5:
        for (var i = 5; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 6:
        for (var i = 6; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 7:
        for (var i = 7; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 8:
        for (var i = 8; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
         break;
      case 9:
        for (var i = 9; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
      break;
    }
  }
}


let longResting = false;
longRestButton.onclick = () => {
  if(discardCount>1 && mustLoseCount === 0 && cardsInPlayCounter === 0 && !(shortResting) && !(longResting)){
    document.getElementById('discard-table').insertAdjacentHTML("beforebegin", "<p id = 'choose-to-lose'>Choose One Card to Lose</p><br/>");
    mustLose = true;
    longResting = true;
  }
}

recoverDiscardButton.onclick = () => {
  if(!shortResting && !longResting && !mustLose && discardsSelected>0){
    discardsSelected = 0;
    discardCount--;
    var selectedDiscards = document.querySelectorAll(".discard-selected");
    var selectedDiscard = selectedDiscards[0];
    selectedDiscard.classList.remove("discard-selected");
    var cardsInHand = document.querySelectorAll(".hand");
      for (var i = 0; i<cardsInHand.length; i++){
        (function () {
          var cardInHand = cardsInHand[i];
          if(cardInHand.classList.contains("flipped")){
            cardInHand.src = selectedDiscard.src;
            cardInHand.classList.remove("flipped");
            cardInHand.classList.remove("hiding");
            flipDiscard(selectedDiscard);
            i = cardsInHand.length;
          }
        }).call(this,i);
      }
    }
}

discardActiveCardButton.onclick = () => {
  if(!mustLose && activesSelected === 1){
    var activeCardsSelected = document.querySelectorAll(".active-selected");
    var activeCardSelected = activeCardsSelected[0];
    for (var i = 0; i<discards.length; i++){
      var discardedCard = discards[i];
      if(discardedCard.classList.contains("flipped")){
        discardedCard.src = activeCardSelected.src;
        discardedCard.classList.remove("flipped");
        discardedCard.classList.remove("hiding");
        i = discards.length;
        flipActive(activeCardSelected);
        activesSelected = 0;
      }
    }
  }
}

loseActiveCardButton.onclick = () => {
  if(activesSelected === 1){
    var activeCardsSelected = document.querySelectorAll(".active-selected");
    var activeCardSelected = activeCardsSelected[0];
    for (var i = 0; i<lostCards.length; i++){
      var lostCard = lostCards[i];
      if(lostCard.classList.contains("flipped")){
        lostCard.src = activeCardSelected.src;
        lostCard.classList.remove("flipped");
        lostCard.classList.remove("hiding");
        i = lostCards.length;
        flipActive(activeCardSelected);
        activesSelected = 0;
      }
    }
  }
}

recoverLostCardButton.onclick = () => {
  if(!shortResting && !longResting && !mustLose && lostSelectedCounter>0){
    lostSelectedCounter = 0;
    var selectedLostCards = document.querySelectorAll(".lost-selected");
    var selectedLostCard = selectedLostCards[0];
    selectedLostCard.classList.remove("lost-selected");
    var cardsInHand = document.querySelectorAll(".hand");
      for (var i = 0; i<cardsInHand.length; i++){
        (function () {
          var cardInHand = cardsInHand[i];
          if(cardInHand.classList.contains("flipped")){
            cardInHand.src = selectedLostCard.src;
            cardInHand.classList.remove("flipped");
            cardInHand.classList.remove("hiding");
            flipLost(selectedLostCard);
            i = cardsInHand.length;
          }
        }).call(this,i);
      }
    }
}

togglePoison.onclick = () =>{
  if(!poisoned){
    poisoned = true;
    poisonedToken.classList.remove('hiding');
  }else{
    poisoned = false;
    poisonedToken.classList.add('hiding');
  }
}

toggleWounded.onclick = () =>{
  if(!wounded){
    wounded = true;
    woundedToken.classList.remove('hiding');
  }else{
    wounded = false;
    woundedToken.classList.add('hiding');
  }
}

toggleImmobilized.onclick = () =>{
  if(!immobilized){
    immobilized = true;
    immobilizedToken.classList.remove('hiding');
  }else{
    immobilized = false;
    immobilizedToken.classList.add('hiding');
  }
}

toggleDisarmed.onclick = () =>{
  if(!disarmed){
    disarmed = true;
    disarmedToken.classList.remove('hiding');
  }else{
    disarmed = false;
    disarmedToken.classList.add('hiding');
  }
}
toggleStunned.onclick = () =>{
  if(!stunned){
    stunned = true;
    stunnedToken.classList.remove('hiding');
  }else{
    stunned = false;
    stunnedToken.classList.add('hiding');
  }
}
toggleMuddled.onclick = () =>{
  if(!muddled){
    muddled = true;
    muddledToken.classList.remove('hiding');
  }else{
    muddled = false;
    muddledToken.classList.add('hiding');
  }
}
toggleInvisible.onclick = () =>{
  if(!invisible){
    invisible = true;
    invisibleToken.classList.remove('hiding');
  }else{
    invisible = false;
    invisibleToken.classList.add('hiding');
  }
}
toggleStrengthened.onclick = () =>{
  if(!strengthened){
    strengthened = true;
    strengthenedToken.classList.remove('hiding');
  }else{
    strengthened = false;
    strengthenedToken.classList.add('hiding');
  }
}

let healthCounter = document.getElementById('health-counter');
let xpCounter = document.getElementById('xp-counter');

xpUp.onclick = () => {
  xpCount++;
  xpCounter.innerHTML = xpCount;
}

xpDown.onclick = () => {
  if(xpCount>0){
    xpCount--;
    xpCounter.innerHTML = xpCount;
  }
}

healButton.onclick = () => {
  if(!poisoned && health<maxHealth){
    health++;
    healthCounter.innerHTML = health;
  }
}
damageButton.onclick = () =>{
  if(health>0){
    health--;
    healthCounter.innerHTML = health;
  }
}


levelUp.onclick = () => {
  if(levelCount<9){
    levelCount++
    levelCounter.innerHTML = "Level: "+levelCount;
  }
}

levelDown.onclick = () =>{
  if(levelCount>1){
    levelCount--
    levelCounter.innerHTML = "Level: "+levelCount;
  }
}

confirmLevel.onclick = () =>{


}
