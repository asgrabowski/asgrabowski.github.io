//Section for enabling use of cookies

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var characterSelection = getCookie("character");
    var currentLevel = getCookie("level");
    var perk1 = getCookie("perk1");
    var perk2 = getCookie("perk2");
    var perk3 = getCookie("perk3");
    var perk4 = getCookie("perk4");
    var perk5 = getCookie("perk5");
    var perk6 = getCookie("perk6");
    var perk7 = getCookie("perk7");
    var perk8 = getCookie("perk8");
    var perk9 = getCookie("perk9");
    var perk10 = getCookie("perk10");
    var perk11 = getCookie("perk11");
    var perk12 = getCookie("perk12");
    var perk13 = getCookie("perk13");
    var perk14 = getCookie("perk14");
    var perk15 = getCookie("perk15");
    switch (currentLevel){
      case "1":
        levelCount = 1;
        break;
      case "2":
        levelCount = 2;
        levelCounter.innerHTML = "Level: "+levelCount;
        levelDown.classList.remove("at-min");
        break;
      case "3":
        levelCount = 3;
        levelCounter.innerHTML = "Level: "+levelCount;
        levelDown.classList.remove("at-min");
        break;
      case "4":
        levelCount = 4;
        levelCounter.innerHTML = "Level: "+levelCount;
        levelDown.classList.remove("at-min");
        break;
      case "5":
        levelCount = 5;
        levelCounter.innerHTML = "Level: "+levelCount;
        levelDown.classList.remove("at-min");
        break;
      case "6":
        levelCount = 6;
        levelCounter.innerHTML = "Level: "+levelCount;
        levelDown.classList.remove("at-min");
        break;
      case "7":
        levelCount = 7;
        levelCounter.innerHTML = "Level: "+levelCount;
        levelDown.classList.remove("at-min");
        break;
      case "8":
        levelCount = 8;
        levelCounter.innerHTML = "Level: "+levelCount;
        levelDown.classList.remove("at-min");
        break;
      case "9":
        levelCount = 9;
        levelCounter.innerHTML = "Level: "+levelCount;
        levelDown.classList.remove("at-min");
        levelUp.classList.add("at-max;")
        break;
      default:
        levelCount = 1;
        break;
    }
    switch (characterSelection){
      case "cragheart":
        cragheart.classList.add("character-selected");
        characterSelected = true;
        confirmCharacterButton.classList.remove("not-without-more-selected");
        if (perk1 === "chchosen"){
          chPerk1.classList.add("checked");
        }
        if (perk2 === "chchosen"){
          chPerk2.classList.add("checked");
        }
        if (perk3 === "chchosen"){
          chPerk3.classList.add("checked");
        }
        if (perk4 === "chchosen"){
          chPerk4.classList.add("checked");
        }
        if (perk5 === "chchosen"){
          chPerk5.classList.add("checked");
        }
        if (perk6 === "chchosen"){
          chPerk6.classList.add("checked");
        }
        if (perk7 === "chchosen"){
          chPerk7.classList.add("checked");
        }
        if (perk8 === "chchosen"){
          chPerk8.classList.add("checked");
        }
        if (perk9 === "chchosen"){
          chPerk9.classList.add("checked");
        }
        if (perk10 === "chchosen"){
          chPerk10.classList.add("checked");
        }
        if (perk11 === "chchosen"){
          chPerk11.classList.add("checked");
        }
        if (perk12 === "chchosen"){
          chPerk12.classList.add("checked");
        }
        if (perk13 === "chchosen"){
          chPerk13.classList.add("checked");
        }
        if (perk14 === "chchosen"){
          chPerk14.classList.add("checked");
        }
        if (perk15 === "chchosen"){
          chPerk15.classList.add("checked");
        }
        break;
      case "brute":
        brute.classList.add("character-selected");
        characterSelected = true;
        confirmCharacterButton.classList.remove("not-without-more-selected");
        if (perk1 === "brchosen"){
          brPerk1.classList.add("checked");
        }
        if (perk2 === "brchosen"){
          brPerk2.classList.add("checked");
        }
        if (perk3 === "brchosen"){
          brPerk3.classList.add("checked");
        }
        if (perk4 === "brchosen"){
          brPerk4.classList.add("checked");
        }
        if (perk5 === "brchosen"){
          brPerk5.classList.add("checked");
        }
        if (perk6 === "brchosen"){
          brPerk6.classList.add("checked");
        }
        if (perk7 === "brchosen"){
          brPerk7.classList.add("checked");
        }
        if (perk8 === "brchosen"){
          brPerk8.classList.add("checked");
        }
        if (perk9 === "brchosen"){
          brPerk9.classList.add("checked");
        }
        if (perk10 === "brchosen"){
          brPerk10.classList.add("checked");
        }
        if (perk11 === "brchosen"){
          brPerk11.classList.add("checked");
        }
        if (perk12 === "brchosen"){
          brPerk12.classList.add("checked");
        }
        if (perk13 === "brchosen"){
          brPerk13.classList.add("checked");
        }
        if (perk14 === "brchosen"){
          brPerk14.classList.add("checked");
        }
        if (perk15 === "brchosen"){
          brPerk15.classList.add("checked");
        }
        break;
      case "mindthief":
        mindthief.classList.add("character-selected");
        characterSelected = true;
        confirmCharacterButton.classList.remove("not-without-more-selected");
        if (perk1 === "mtchosen"){
          mtPerk1.classList.add("checked");
        }
        if (perk2 === "mtchosen"){
          mtPerk2.classList.add("checked");
        }
        if (perk3 === "mtchosen"){
          mtPerk3.classList.add("checked");
        }
        if (perk4 === "mtchosen"){
          mtPerk4.classList.add("checked");
        }
        if (perk5 === "mtchosen"){
          mtPerk5.classList.add("checked");
        }
        if (perk6 === "mtchosen"){
          mtPerk6.classList.add("checked");
        }
        if (perk7 === "mtchosen"){
          mtPerk7.classList.add("checked");
        }
        if (perk8 === "mtchosen"){
          mtPerk8.classList.add("checked");
        }
        if (perk9 === "mtchosen"){
          mtPerk9.classList.add("checked");
        }
        if (perk10 === "mtchosen"){
          mtPerk10.classList.add("checked");
        }
        if (perk11 === "mtchosen"){
          mtPerk11.classList.add("checked");
        }
        if (perk12 === "mtchosen"){
          mtPerk12.classList.add("checked");
        }
        if (perk13 === "mtchosen"){
          mtPerk13.classList.add("checked");
        }
        if (perk14 === "mtchosen"){
          mtPerk14.classList.add("checked");
        }
        if (perk15 === "mtchosen"){
          mtPerk15.classList.add("checked");
        }
        break;
      case "scoundrel":
        scoundrel.classList.add("character-selected");
        characterSelected = true;
        confirmCharacterButton.classList.remove("not-without-more-selected");
        if (perk1 === "scchosen"){
          scPerk1.classList.add("checked");
        }
        if (perk2 === "scchosen"){
          scPerk2.classList.add("checked");
        }
        if (perk3 === "scchosen"){
          scPerk3.classList.add("checked");
        }
        if (perk4 === "scchosen"){
          scPerk4.classList.add("checked");
        }
        if (perk5 === "scchosen"){
          scPerk5.classList.add("checked");
        }
        if (perk6 === "scchosen"){
          scPerk6.classList.add("checked");
        }
        if (perk7 === "scchosen"){
          scPerk7.classList.add("checked");
        }
        if (perk8 === "scchosen"){
          scPerk8.classList.add("checked");
        }
        if (perk9 === "scchosen"){
          scPerk9.classList.add("checked");
        }
        if (perk10 === "scchosen"){
          scPerk10.classList.add("checked");
        }
        if (perk11 === "scchosen"){
          scPerk11.classList.add("checked");
        }
        if (perk12 === "scchosen"){
          scPerk12.classList.add("checked");
        }
        if (perk13 === "scchosen"){
          scPerk13.classList.add("checked");
        }
        if (perk14 === "scchosen"){
          scPerk14.classList.add("checked");
        }
        if (perk15 === "scchosen"){
          scPerk15.classList.add("checked");
        }
        break;
      case "spellweaver":
        spellweaver.classList.add("character-selected");
        characterSelected = true;
        confirmCharacterButton.classList.remove("not-without-more-selected");
        if (perk1 === "swchosen"){
          swPerk1.classList.add("checked");
        }
        if (perk2 === "swchosen"){
          swPerk2.classList.add("checked");
        }
        if (perk3 === "swchosen"){
          swPerk3.classList.add("checked");
        }
        if (perk4 === "swchosen"){
          swPerk4.classList.add("checked");
        }
        if (perk5 === "swchosen"){
          swPerk5.classList.add("checked");
        }
        if (perk6 === "swchosen"){
          swPerk6.classList.add("checked");
        }
        if (perk7 === "swchosen"){
          swPerk7.classList.add("checked");
        }
        if (perk8 === "swchosen"){
          swPerk8.classList.add("checked");
        }
        if (perk9 === "swchosen"){
          swPerk9.classList.add("checked");
        }
        if (perk10 === "swchosen"){
          swPerk10.classList.add("checked");
        }
        if (perk11 === "swchosen"){
          swPerk11.classList.add("checked");
        }
        if (perk12 === "swchosen"){
          swPerk12.classList.add("checked");
        }
        if (perk13 === "swchosen"){
          swPerk13.classList.add("checked");
        }
        if (perk14 === "swchosen"){
          swPerk14.classList.add("checked");
        }
        if (perk15 === "swchosen"){
          swPerk15.classList.add("checked");
        }
        break;
      case "tinkerer":
        tinkerer.classList.add("character-selected");
        characterSelected = true;
        confirmCharacterButton.classList.remove("not-without-more-selected");
        if (perk1 === "tichosen"){
          tiPerk1.classList.add("checked");
        }
        if (perk2 === "tichosen"){
          tiPerk2.classList.add("checked");
        }
        if (perk3 === "tichosen"){
          tiPerk3.classList.add("checked");
        }
        if (perk4 === "tichosen"){
          tiPerk4.classList.add("checked");
        }
        if (perk5 === "tichosen"){
          tiPerk5.classList.add("checked");
        }
        if (perk6 === "tichosen"){
          tiPerk6.classList.add("checked");
        }
        if (perk7 === "tichosen"){
          tiPerk7.classList.add("checked");
        }
        if (perk8 === "tichosen"){
          tiPerk8.classList.add("checked");
        }
        if (perk9 === "tichosen"){
          tiPerk9.classList.add("checked");
        }
        if (perk10 === "tichosen"){
          tiPerk10.classList.add("checked");
        }
        if (perk11 === "tichosen"){
          tiPerk11.classList.add("checked");
        }
        if (perk12 === "tichosen"){
          tiPerk12.classList.add("checked");
        }
        if (perk13 === "tichosen"){
          tiPerk13.classList.add("checked");
        }
        if (perk14 === "tichosen"){
          tiPerk14.classList.add("checked");
        }
        if (perk15 === "tichosen"){
          tiPerk15.classList.add("checked");
        }
        break;
      case "beasttyrant":
        beastTyrant.classList.add("character-selected");
        characterSelected = true;
        confirmCharacterButton.classList.remove("not-without-more-selected");
        if (perk1 === "btchosen"){
          btPerk1.classList.add("checked");
        }
        if (perk2 === "btchosen"){
          btPerk2.classList.add("checked");
        }
        if (perk3 === "btchosen"){
          btPerk3.classList.add("checked");
        }
        if (perk4 === "btchosen"){
          btPerk4.classList.add("checked");
        }
        if (perk5 === "btchosen"){
          btPerk5.classList.add("checked");
        }
        if (perk6 === "btchosen"){
          btPerk6.classList.add("checked");
        }
        if (perk7 === "btchosen"){
          btPerk7.classList.add("checked");
        }
        if (perk8 === "btchosen"){
          btPerk8.classList.add("checked");
        }
        if (perk9 === "btchosen"){
          btPerk9.classList.add("checked");
        }
        if (perk10 === "btchosen"){
          btPerk10.classList.add("checked");
        }
        if (perk11 === "btchosen"){
          btPerk11.classList.add("checked");
        }
        if (perk12 === "btchosen"){
          btPerk12.classList.add("checked");
        }
        if (perk13 === "btchosen"){
          btPerk13.classList.add("checked");
        }
        if (perk14 === "btchosen"){
          btPerk14.classList.add("checked");
        }
        if (perk15 === "btchosen"){
          btPerk15.classList.add("checked");
        }
        break;
      case "doomstalker":
        doomStalker.classList.add("character-selected");
        characterSelected = true;
        confirmCharacterButton.classList.remove("not-without-more-selected");
        if (perk1 === "dschosen"){
          dsPerk1.classList.add("checked");
        }
        if (perk2 === "dschosen"){
          dsPerk2.classList.add("checked");
        }
        if (perk3 === "dschosen"){
          dsPerk3.classList.add("checked");
        }
        if (perk4 === "dschosen"){
          dsPerk4.classList.add("checked");
        }
        if (perk5 === "dschosen"){
          dsPerk5.classList.add("checked");
        }
        if (perk6 === "dschosen"){
          dsPerk6.classList.add("checked");
        }
        if (perk7 === "dschosen"){
          dsPerk7.classList.add("checked");
        }
        if (perk8 === "dschosen"){
          dsPerk8.classList.add("checked");
        }
        if (perk9 === "dschosen"){
          dsPerk9.classList.add("checked");
        }
        if (perk10 === "dschosen"){
          dsPerk10.classList.add("checked");
        }
        if (perk11 === "dschosen"){
          dsPerk11.classList.add("checked");
        }
        if (perk12 === "dschosen"){
          dsPerk12.classList.add("checked");
        }
        if (perk13 === "dschosen"){
          dsPerk13.classList.add("checked");
        }
        if (perk14 === "dschosen"){
          dsPerk14.classList.add("checked");
        }
        if (perk15 === "dschosen"){
          dsPerk15.classList.add("checked");
        }
        break;
      case "nightshroud":
        nightshroud.classList.add("character-selected");
        characterSelected = true;
        confirmCharacterButton.classList.remove("not-without-more-selected");
        if (perk1 === "nschosen"){
          nsPerk1.classList.add("checked");
        }
        if (perk2 === "nschosen"){
          nsPerk2.classList.add("checked");
        }
        if (perk3 === "nschosen"){
          nsPerk3.classList.add("checked");
        }
        if (perk4 === "nschosen"){
          nsPerk4.classList.add("checked");
        }
        if (perk5 === "nschosen"){
          nsPerk5.classList.add("checked");
        }
        if (perk6 === "nschosen"){
          nsPerk6.classList.add("checked");
        }
        if (perk7 === "nschosen"){
          nsPerk7.classList.add("checked");
        }
        if (perk8 === "nschosen"){
          nsPerk8.classList.add("checked");
        }
        if (perk9 === "nschosen"){
          nsPerk9.classList.add("checked");
        }
        if (perk10 === "nschosen"){
          nsPerk10.classList.add("checked");
        }
        if (perk11 === "nschosen"){
          nsPerk11.classList.add("checked");
        }
        if (perk12 === "nschosen"){
          nsPerk12.classList.add("checked");
        }
        if (perk13 === "nschosen"){
          nsPerk13.classList.add("checked");
        }
        if (perk14 === "nschosen"){
          nsPerk14.classList.add("checked");
        }
        if (perk15 === "nschosen"){
          nsPerk15.classList.add("checked");
        }
        break;
      default:
        characterSelected = false;
        break;
    }

}

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
let discard11 = document.getElementById('discard11');
let discard12 = document.getElementById('discard12');
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
let lost11 = document.getElementById('lost11');
let lost12 = document.getElementById('lost12');
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
let toggleBearPoison = document.getElementById('toggle-bear-poison');
let toggleBearWounded = document.getElementById('toggle-bear-wounded');
let toggleBearImmobilized = document.getElementById('toggle-bear-immobilized');
let toggleBearDisarmed = document.getElementById('toggle-bear-disarmed');
let toggleBearStunned = document.getElementById('toggle-bear-stunned');
let toggleBearMuddled = document.getElementById('toggle-bear-muddled');
let toggleBearInvisible = document.getElementById('toggle-bear-invisible');
let toggleBearStrengthened = document.getElementById('toggle-bear-strengthened');
let xpUp = document.getElementById('xp-up');
let xpDown = document.getElementById('xp-down');
let healButton = document.getElementById('heal');
let damageButton = document.getElementById('damage');
let lootUp = document.getElementById('loot-up');
let lootDown = document.getElementById('loot-down');
let levelUp = document.getElementById('level-up');
let levelDown = document.getElementById('level-down');
let confirmLevel = document.getElementById('confirm-level');
let goBack = document.getElementById('go-back1');
let goBack2 = document.getElementById('go-back2');
let loseHandCard = document.getElementById('lose-hand-card');
let loseDiscardButton = document.getElementById('lose-discard-button2');
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
let trackerSize = 1;
let trackerSizeCounter = document.getElementById('tracker-size');
let card1TrackerCounter = 0;
let card2TrackerCounter = 0;
let card3TrackerCounter = 0;
let card4TrackerCounter = 0;
let card5TrackerCounter = 0;
let card6TrackerCounter = 0;
let numberOfActiveCards = 0;
let bearHealth = 0;
let bearMaxHealth = 0;
let lootCount = 0;

//characters
let brute = document.getElementById('brute');
let cragheart = document.getElementById('cragheart');
let mindthief = document.getElementById('mindthief');
let spellweaver = document.getElementById('spellweaver');
let scoundrel = document.getElementById('scoundrel');
let tinkerer = document.getElementById('tinkerer');
let beastTyrant = document.getElementById('beastTyrant');
let doomStalker = document.getElementById('doomStalker');
let nightshroud = document.getElementById("nightshroud");

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
let bearPoisoned = false;
let bearPoisonedToken = document.getElementById('bear-poisoned');
let bearWounded = false;
let bearWoundedToken = document.getElementById('bear-wounded');
let bearDisarmed = false;
let bearDisarmedToken = document.getElementById('bear-disarmed');
let bearImmobilized = false;
let bearImmobilizedToken = document.getElementById('bear-immobilized');
let bearStunned = false;
let bearStunnedToken = document.getElementById('bear-stunned');
let bearMuddled = false;
let bearMuddledToken = document.getElementById('bear-muddled');
let bearStrengthened = false;
let bearStrengthenedToken = document.getElementById('bear-strengthened');
let bearInvisible = false;
let bearInvisibleToken = document.getElementById('bear-invisible');

let characterSelected = false;
var characterPortraits = document.querySelectorAll(".character");
for (var i = 0; i<characterPortraits.length; i++){
  (function (){
    var characterPortrait = characterPortraits[i];
    characterPortrait.onclick = () => {
      if (!isSelected(characterPortrait) && !characterSelected){
        characterSelected = true;
        characterPortrait.classList.add("character-selected");
        confirmCharacterButton.classList.remove("not-without-more-selected");
      } else if(!isSelected(characterPortrait) && characterSelected){
        var charactersSelected = document.querySelectorAll(".character-selected");
        var selectedCharacter = charactersSelected[0];
        selectedCharacter.classList.remove("character-selected");
        characterPortrait.classList.add("character-selected");
      } else if(isSelected(characterPortrait) && characterSelected){
        characterSelected = false;
        characterPortrait.classList.remove("character-selected");
        confirmCharacterButton.classList.add("not-without-more-selected");
      }
    }
  }).call(this,i);
}


function confirmCharacter(){
  if(characterSelected){
  if(cragheart.classList.contains("character-selected")){
    let characterChoice = "Cragheart";
    setCookie("character", "cragheart", 365);
    document.getElementById("cragheart-perks").classList.remove("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 26;
      health = maxHealth;
      break;
    }
  } else if(brute.classList.contains("character-selected")){
    let characterChoice = "Brute";
    setCookie("character", "brute", 365);
    document.getElementById("brute-perks").classList.remove("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 26;
      health = maxHealth;
      break;
    }
  } else if(mindthief.classList.contains("character-selected")){
    let characterChoice = "Mindthief";
    setCookie("character", "mindthief", 365);
    document.getElementById("mindthief-perks").classList.remove("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 14;
      health = maxHealth;
      break;
    }
  } else if(spellweaver.classList.contains("character-selected")){
    let characterChoice = "Spellweaver";
    setCookie("character", "spellweaver", 365);
    document.getElementById("spellweaver-perks").classList.remove("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 14;
      health = maxHealth;
      break;
    }
  } else if(scoundrel.classList.contains("character-selected")){
    let characterChoice = "Scoundrel";
    setCookie("character", "scoundrel", 365);
    document.getElementById("scoundrel-perks").classList.remove("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  } else if(tinkerer.classList.contains("character-selected")){
    let characterChoice = "Tinkerer";
    setCookie("character", "tinkerer", 365);
    document.getElementById("tinkerer-perks").classList.remove("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  } else if(doomStalker.classList.contains("character-selected")){
    let characterChoice = "Doomstalker";
    setCookie("character", "doomstalker", 365);
    document.getElementById("doomstalker-perks").classList.remove("hiding");
    flippedCard = "./dsBack.jpg";
    handSize = 12
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './ds"+i+".jpg' />";
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  } else if(beastTyrant.classList.contains("character-selected")){
    let characterChoice = "Beast Tyrant";
    setCookie("character", "beasttyrant", 365);
    document.getElementById("beast-tyrant-perks").classList.remove("hiding");
    flippedCard = "./bmBack.jpg";
    handSize = 10
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    document.getElementById("bear-health").classList.remove("hiding");
    document.getElementById("bear-health-counter").classList.remove("hiding");
    document.getElementById("damage-bear").classList.remove("hiding");
    document.getElementById("heal-bear").classList.remove("hiding");
    document.getElementById("bear-status-effects").classList.remove("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<13) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './bm"+i+".jpg' />";
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
      bearMaxHealth = 10;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 7;
      health = maxHealth;
      bearMaxHealth = 12;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 8;
      health = maxHealth;
      bearMaxHealth = 14;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 9;
      health = maxHealth;
      bearMaxHealth = 16;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 10;
      health = maxHealth;
      bearMaxHealth = 18;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 11;
      health = maxHealth;
      bearMaxHealth = 20;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 12;
      health = maxHealth;
      bearMaxHealth = 22;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 13;
      health = maxHealth;
      bearMaxHealth = 24;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 14;
      health = maxHealth;
      bearMaxHealth = 26;
      bearHealth = bearMaxHealth;
      break;
    }
  } else if(nightshroud.classList.contains("character-selected")){
    let characterChoice = "nightshroud";
    setCookie("character", "nightshroud", 365);
    document.getElementById("nightshroud-perks").classList.remove("hiding");
    flippedCard = "./NS/nsBack.png";
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
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './NS/ns"+i+".png' />";
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
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
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  }
  goBack.classList.remove("hiding");
  document.getElementById("select-class-section").classList.add("hiding");
  document.getElementById("level-selection").classList.add("hiding");
  document.getElementById("perk-section").classList.remove("hiding");
  setCookie("level", `${levelCount}`, 365);
}
}


confirmCharacterButton.onclick = () => {
  confirmCharacter();
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
        if(cardCount === handSize){
          confirmHandButton.classList.remove("not-without-more-selected")
        }
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
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand2.classList.contains(`${this.id}`)){
          flipCard(cardHand2);
          cardHand2.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand3.classList.contains(`${this.id}`)){
          flipCard(cardHand3);
          cardHand3.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand4.classList.contains(`${this.id}`)){
          flipCard(cardHand4);
          cardHand4.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand5.classList.contains(`${this.id}`)){
          flipCard(cardHand5);
          cardHand5.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand6.classList.contains(`${this.id}`)){
          flipCard(cardHand6);
          cardHand6.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand7.classList.contains(`${this.id}`)){
          flipCard(cardHand7);
          cardHand7.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand8.classList.contains(`${this.id}`)){
          flipCard(cardHand8);
          cardHand8.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand9.classList.contains(`${this.id}`)){
          flipCard(cardHand9);
          cardHand9.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand10.classList.contains(`${this.id}`)){
          flipCard(cardHand10);
          cardHand10.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand11.classList.contains(`${this.id}`)){
          flipCard(cardHand11);
          cardHand11.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand12.classList.contains(`${this.id}`)){
          flipCard(cardHand12);
          cardHand12.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
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
  card.classList.add("active-card");
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
  goBack.classList.add("hiding");
  goBack2.classList.add("hiding");
  playCardsButton.classList.remove("hiding");
  playCardsButton.classList.add("visible");
  cardCount = 0;
  handChosen = true;
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  longRestButton.classList.add("not-without-more-cards");
  shortRestButton.classList.add("not-without-more-cards");
  discardButton.classList.add("not-without-more-selected");
  loseButton.classList.add("not-without-more-selected");
  activateButton.classList.add("not-without-more-selected");
  loseCardFromRestButton.classList.add("not-unless-resting");
  rerollShortRestButton.classList.add("not-unless-resting");
  recoverDiscardButton.classList.add("not-without-more-selected");
  recoverLostCardButton.classList.add("not-without-more-selected");
  playCardsButton.classList.add("not-without-more-cards");
  discardActiveCardButton.classList.add("not-without-more-selected");
  loseActiveCardButton.classList.add("not-without-more-selected");
  createActiveTracker.classList.add("not-without-more-selected");
  healButton.classList.add("at-max");
  xpDown.classList.add("at-min");
  decreaseTrackerSize.classList.add("at-min");
  loseHandCard.classList.remove("hiding");
  }
}

//function for clicking Hand
var hand = document.querySelectorAll(".hand");
for (var i = 0; i < hand.length; i++) {
  (function () {
  var handCard = hand[i];
    handCard.onclick = (function () {
      if (isFlipped(chosenCard1) && isFlipped(chosenCard2) && mustLoseCount<1){
      if(!isSelected(handCard) && handChosen === true && cardCount<2 && !isFlipped(handCard)){
        handCard.classList.add("add-border");
        cardCount++;
        if(cardCount === 2){
          playCardsButton.classList.remove("not-without-more-cards");
          loseHandCard.classList.add("not-without-more-selected");
        } else if(cardCount === 1){
          loseHandCard.classList.remove("not-without-more-selected");
        }
      } else if (isSelected(handCard)){
        handCard.classList.remove("add-border");
        cardCount--;
        playCardsButton.classList.add("not-without-more-cards");
        if (cardCount === 1){
          loseHandCard.classList.remove("not-without-more-selected");
        } else if(cardCount === 0){
          loseHandCard.classList.add("not-without-more-selected");
        }
      }
    } else {
      if(!isSelected(handCard) && handChosen === true && cardCount<1 && !isFlipped(handCard)){
        handCard.classList.add("add-border");
        cardCount++;
        loseHandCard.classList.remove("not-without-more-selected");
      } else if(!isSelected(handCard) && handChosen === true && cardCount === 1){
        for (var j = 0; j<hand.length; j++){
          if (hand[j].classList.contains("add-border")){
            hand[j].classList.remove("add-border");
            j = hand.length;
          }
        } handCard.classList.add("add-border");
      }else if (isSelected(handCard)){
        handCard.classList.remove("add-border");
        cardCount--;
        loseHandCard.classList.add("not-without-more-selected");
      }
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
    shortRestButton.classList.add("not-while-in-play");
    longRestButton.classList.add("not-while-in-play");
    loseCardFromRestButton.classList.add("not-while-in-play");
    rerollShortRestButton.classList.add("not-while-in-play");
    playCardsButton.classList.add("not-without-more-cards");
  }
};

let chosenCard1 = document.getElementById('chosen-card-1');
let chosenCard2 = document.getElementById('chosen-card-2');
let chosenCounter = 0;
chosenCard1.onclick = () => {
  if(chosenCounter < 1 && !isSelected(chosenCard1) && !isFlipped(chosenCard1) && mustLoseCount<1){
    chosenCard1.classList.add("add-border");
    chosenCounter++;
    discardButton.classList.remove("not-without-more-selected");
    loseButton.classList.remove("not-without-more-selected");
    activateButton.classList.remove("not-without-more-selected");
  } else if (chosenCounter === 1 && isSelected(chosenCard1)){
    chosenCard1.classList.remove("add-border");
    chosenCounter--;
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  } else if (chosenCounter == 1 && !isSelected(chosenCard1)){
    chosenCard2.classList.remove("add-border");
    chosenCard1.classList.add("add-border");
  }
};

chosenCard2.onclick = () => {
  if(chosenCounter < 1 && !isSelected(chosenCard2) && !isFlipped(chosenCard2) && mustLoseCount<1){
    chosenCard2.classList.add("add-border");
    chosenCounter++;
    discardButton.classList.remove("not-without-more-selected");
    loseButton.classList.remove("not-without-more-selected");
    activateButton.classList.remove("not-without-more-selected");
  } else if (chosenCounter == 1 && isSelected(chosenCard2)){
    chosenCard2.classList.remove("add-border");
    chosenCounter--;
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  } else if (chosenCounter == 1 && !isSelected(chosenCard2)){
    chosenCard1.classList.remove("add-border");
    chosenCard2.classList.add("add-border");
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
    } else if(discard11.classList.contains("flipped")){
      discard11.src = chosenCard1.src;
      discard11.classList.remove("hiding");
      discard11.classList.remove("flipped")
    } else if(discard12.classList.contains("flipped")){
      discard12.src = chosenCard1.src;
      discard12.classList.remove("hiding");
      discard12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    discardCount++;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
    if(discardCount>1){
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
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
      discard11.src = chosenCard1.src;
      discard11.classList.remove("hiding");
      discard11.classList.remove("flipped")
    } else if(discard10.classList.contains("flipped")){
      discard12.src = chosenCard1.src;
      discard12.classList.remove("hiding");
      discard12.classList.remove("flipped")
    }
    else if(discard11.classList.contains("flipped")){
      discard11.src = chosenCard1.src;
      discard11.classList.remove("hiding");
      discard11.classList.remove("flipped")
    } else if(discard12.classList.contains("flipped")){
      discard12.src = chosenCard1.src;
      discard12.classList.remove("hiding");
      discard12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    discardCount++
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");

    }
    if(discardCount>1){
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
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
    } else if(lost11.classList.contains("flipped")){
      lost11.src = chosenCard1.src;
      lost11.classList.remove("hiding");
      lost11.classList.remove("flipped")
    } else if(lost12.classList.contains("flipped")){
      lost12.src = chosenCard1.src;
      lost12.classList.remove("hiding");
      lost12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
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
    } else if(lost11.classList.contains("flipped")){
      lost11.src = chosenCard1.src;
      lost11.classList.remove("hiding");
      lost11.classList.remove("flipped")
    } else if(lost12.classList.contains("flipped")){
      lost12.src = chosenCard1.src;
      lost12.classList.remove("hiding");
      lost12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
};

activateButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1 && numberOfActiveCards<6){
    if(active1.classList.contains("flipped")){
      active1.src = chosenCard1.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active2.classList.contains("flipped")){
      active2.src = chosenCard1.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active3.classList.contains("flipped")){
      active3.src = chosenCard1.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active4.classList.contains("flipped")){
      active4.src = chosenCard1.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active5.classList.contains("flipped")){
      active5.src = chosenCard1.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active6.classList.contains("flipped")){
      active6.src = chosenCard1.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped");
      numberOfActiveCards++;
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1 && numberOfActiveCards<6){
    if(active1.classList.contains("flipped")){
      active1.src = chosenCard2.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active2.classList.contains("flipped")){
      active2.src = chosenCard2.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active3.classList.contains("flipped")){
      active3.src = chosenCard2.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active4.classList.contains("flipped")){
      active4.src = chosenCard2.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active5.classList.contains("flipped")){
      active5.src = chosenCard2.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active6.classList.contains("flipped")){
      active6.src = chosenCard2.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped");
      numberOfActiveCards++;
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
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
        loseDiscardButton.classList.remove("not-without-more-selected");
        if(longResting){
          loseCardFromRestButton.classList.remove("not-unless-resting");
        } else {
          recoverDiscardButton.classList.remove("not-without-more-selected");
        }
      } else if (!isSelected(discardedCard) && discardsSelected === 1){
        var selectedDiscardedCards = document.querySelectorAll(".discard-selected");
        var selectedDiscardedCard = selectedDiscardedCards[0];
        selectedDiscardedCard.classList.remove("discard-selected");
        discardedCard.classList.add("discard-selected");
      } else if (isSelected(discardedCard) && discardsSelected === 1){
        discardedCard.classList.remove("discard-selected");
        discardsSelected--;
        loseDiscardButton.classList.add("not-without-more-selected");
        if(longResting){
          loseCardFromRestButton.classList.add("not-unless-resting");
        } else {
          recoverDiscardButton.classList.add("not-without-more-selected");
        }
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
        recoverLostCardButton.classList.remove("not-without-more-selected");
      } else if(!isSelected(lostCard) && lostSelectedCounter === 1){
        var selectedLostCards = document.querySelectorAll(".lost-selected");
        var selectedLostCard = selectedLostCards[0];
        selectedLostCard.classList.remove("lost-selected");
        lostCard.classList.add("lost-selected");
      } else {
        lostCard.classList.remove("lost-selected");
        lostSelectedCounter--;
        recoverLostCardButton.classList.add("not-without-more-selected");
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
        discardActiveCardButton.className = "button";
        loseActiveCardButton.className = "button";
        createActiveTracker.className = "button";
        if(activeCard.classList.contains("has-tracker")){
          createActiveTracker.classList.add("not-without-more-selected");
        }
      } else if(!isSelected(activeCard) && activesSelected ===1){
        var activeCardsSelected = document.querySelectorAll(".active-selected");
        var activeCardSelected = activeCardsSelected[0];
        activeCard.classList.add("active-selected");
        activeCardSelected.classList.remove("active-selected");
        discardActiveCardButton.classList.remove("not-without-more-selected");
        loseActiveCardButton.classList.remove("not-without-more-selected");
        createActiveTracker.classList.remove("not-without-more-selected");
        if(activeCard.classList.contains("has-tracker")){
          createActiveTracker.classList.add("not-without-more-selected");
        }
      } else {
        activeCard.classList.remove("active-selected");
        activesSelected--;
        discardActiveCardButton.classList.add("not-without-more-selected");
        loseActiveCardButton.classList.add("not-without-more-selected");
        createActiveTracker.classList.add("not-without-more-selected");
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
  playCardsButton.classList.add("not-while-resting");
  shortRestButton.classList.add("not-while-resting");
  longRestButton.classList.add("not-while-resting");
  loseCardFromRestButton.classList.remove("not-unless-resting");
  rerollShortRestButton.classList.remove("not-unless-resting");
  recoverDiscardButton.classList.add("not-without-more-selected");
  loseDiscardButton.classList.add("not-without-more-selected");
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
    playCardsButton.classList.remove("not-while-resting");
    shortRestButton.classList.remove("not-while-resting");
    longRestButton.classList.remove("not-while-resting");
    loseCardFromRestButton.classList.add("not-unless-resting");
    rerollShortRestButton.classList.remove("can-only-do-once");
    shortRestButton.classList.add("not-without-more-cards");
    longRestButton.classList.add("not-without-more-cards");
    rerollShortRestButton.classList.add("not-unless-resting");
    loseDiscardButton.classList.add("not-without-more-selected");
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
      playCardsButton.classList.remove("not-while-resting");
      shortRestButton.classList.remove("not-while-resting");
      longRestButton.classList.remove("not-while-resting");
      loseCardFromRestButton.classList.add("not-unless-resting");
      shortRestButton.classList.add("not-without-more-cards");
      longRestButton.classList.add("not-without-more-cards");
      loseDiscardButton.classList.add("not-without-more-selected");
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
      healButton.classList.remove("poisoned");
      wounded = false;
      woundedToken.classList.add('hiding');
    } else if (health<maxHealth){
      health = health+2;
      healthCounter.innerHTML = health + "/" + maxHealth;
      wounded = false;
      woundedToken.classList.add('hiding');
      if(health>maxHealth){
        health = maxHealth;
        healthCounter.innerHTML = health + "/" + maxHealth;
      }
    }
  }
}

rerollShortRestButton.onclick = () => {
  if(mustLoseCount === 1){
    rerollShortRestButton.classList.add("can-only-do-once");
    health--;
    healButton.classList.remove("at-max");
    healthCounter.innerHTML =  health + "/" + maxHealth;
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
    playCardsButton.classList.add("not-while-resting");
    shortRestButton.classList.add("not-while-resting");
    longRestButton.classList.add("not-while-resting");
    recoverDiscardButton.classList.add("not-without-more-selected");
    mustLose = true;
    longResting = true;
    if (discardsSelected === 1){
      loseCardFromRestButton.classList.remove("not-unless-resting");
    }
  }
}

recoverDiscardButton.onclick = () => {
  if(!shortResting && !longResting && !mustLose && discardsSelected>0){
    discardsSelected = 0;
    discardCount--;
    recoverDiscardButton.classList.add("not-without-more-selected");
    loseDiscardButton.classList.add("not-without-more-selected");
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
      if(discardCount<2){
        shortRestButton.classList.add("not-without-more-cards");
        longRestButton.classList.add("not-without-more-cards");
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
        numberOfActiveCards--;
        discardCount++;
      }
    }
    if(discardCount>1){
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
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
        numberOfActiveCards--;
      }
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
  }
}

recoverLostCardButton.onclick = () => {
  if(!shortResting && !longResting && !mustLose && lostSelectedCounter>0){
    lostSelectedCounter = 0;
    var selectedLostCards = document.querySelectorAll(".lost-selected");
    var selectedLostCard = selectedLostCards[0];
    recoverLostCardButton.classList.add("not-without-more-selected");
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
    healButton.classList.add("poisoned");
  }else{
    poisoned = false;
    poisonedToken.classList.add('hiding');
    healButton.classList.remove("poisoned");
  }
}

toggleBearPoison.onclick = () =>{
  if(!bearPoisoned){
    bearPoisoned = true;
    bearPoisonedToken.classList.remove('hiding');
    healBearButton.classList.add("poisoned");
  }else{
    bearPoisoned = false;
    bearPoisonedToken.classList.add('hiding');
    healBearButton.classList.remove("poisoned");
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

toggleBearWounded.onclick = () =>{
  if(!bearWounded){
    bearWounded = true;
    bearWoundedToken.classList.remove('hiding');
  }else{
    bearWounded = false;
    bearWoundedToken.classList.add('hiding');
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

toggleBearImmobilized.onclick = () =>{
  if(!bearImmobilized){
    bearImmobilized = true;
    bearImmobilizedToken.classList.remove('hiding');
  }else{
    bearImmobilized = false;
    bearImmobilizedToken.classList.add('hiding');
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

toggleBearDisarmed.onclick = () =>{
  if(!bearDisarmed){
    bearDisarmed = true;
    bearDisarmedToken.classList.remove('hiding');
  }else{
    bearDisarmed = false;
    bearDisarmedToken.classList.add('hiding');
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

toggleBearStunned.onclick = () =>{
  if(!bearStunned){
    bearStunned = true;
    bearStunnedToken.classList.remove('hiding');
  }else{
    bearStunned = false;
    bearStunnedToken.classList.add('hiding');
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

toggleBearMuddled.onclick = () =>{
  if(!bearMuddled){
    bearMuddled = true;
    bearMuddledToken.classList.remove('hiding');
  }else{
    bearMuddled = false;
    bearMuddledToken.classList.add('hiding');
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

toggleBearInvisible.onclick = () =>{
  if(!bearInvisible){
    bearInvisible = true;
    bearInvisibleToken.classList.remove('hiding');
  }else{
    bearInvisible = false;
    bearInvisibleToken.classList.add('hiding');
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

toggleBearStrengthened.onclick = () =>{
  if(!bearStrengthened){
    bearStrengthened = true;
    bearStrengthenedToken.classList.remove('hiding');
  }else{
    bearStrengthened = false;
    bearStrengthenedToken.classList.add('hiding');
  }
}

let healthCounter = document.getElementById('health-counter');
let xpCounter = document.getElementById('xp-counter');
let bearHealthCounter = document.getElementById('bear-health-counter');
let lootCounter = document.getElementById('loot-counter');


xpUp.onclick = () => {
  xpCount++;
  xpCounter.innerHTML = xpCount;
  xpDown.classList.remove("at-min");
}

xpDown.onclick = () => {
  if(xpCount>0){
    xpCount--;
    xpCounter.innerHTML = xpCount;
    if(xpCount === 0){
      xpDown.classList.add("at-min");
    }
  }
}

lootUp.onclick = () => {
  lootCount++;
  lootCounter.innerHTML = lootCount;
  lootDown.classList.remove("at-min");
}

lootDown.onclick = () => {
  if(lootCount>0){
    lootCount--;
    lootCounter.innerHTML = lootCount;
    if(lootCount === 0){
      lootDown.classList.add("at-min");
    }
  }
}

healButton.onclick = () => {
  if(!poisoned && health<maxHealth){
    health++;
    healthCounter.innerHTML =  health + "/" + maxHealth;
    damageButton.classList.remove("at-min");
    wounded = false;
    woundedToken.classList.add('hiding');
    if(health === maxHealth){
      healButton.classList.add("at-max");
    }
  }
}
damageButton.onclick = () =>{
  if(health>0){
    health--;
    healthCounter.innerHTML =  health + "/" + maxHealth;
    healButton.classList.remove("at-max");
    if(health === 0){
      damageButton.classList.add("at-min");
    }
  }
}

let healBearButton = document.getElementById("heal-bear");
let damageBearButton = document.getElementById("damage-bear");

healBearButton.onclick = () => {
  if(!poisoned && bearHealth<bearMaxHealth){
    bearHealth++;
    bearHealthCounter.innerHTML =  "Bear Health<br/>"+bearHealth + "/" + bearMaxHealth;
    damageBearButton.classList.remove("at-min");
    bearWounded = false;
    bearWoundedToken.classList.add('hiding');
    if(bearHealth === bearMaxHealth){
      healBearButton.classList.add("at-max");
    }
  }
}
damageBearButton.onclick = () =>{
  if(bearHealth>0){
    bearHealth--;
    bearHealthCounter.innerHTML =  "Bear Health<br/>"+bearHealth + "/" + bearMaxHealth;
    healBearButton.classList.remove("at-max");
    if(bearHealth === 0){
      damageBearButton.classList.add("at-min");
    }
  }
}


levelUp.onclick = () => {
  if(levelCount<9){
    levelCount++
    levelCounter.innerHTML = "Level: "+levelCount;
    levelDown.classList.remove("at-min");
    if(levelCount === 9){
      levelUp.classList.add("at-max");
    }
  }
}

levelDown.onclick = () =>{
  if(levelCount>1){
    levelCount--
    levelCounter.innerHTML = "Level: "+levelCount;
    levelUp.classList.remove("at-max");
    if(levelCount === 1){
      levelDown.classList.add("at-min");
    }
  }
}


let createActiveTracker = document.getElementById('create-active-tracker');
let increaseTrackerSize = document.getElementById('increase-tracker-size');
let decreaseTrackerSize = document.getElementById('decrease-tracker-size');
let tracker11 = document.getElementById('tracker1-1');
let tracker12 = document.getElementById('tracker1-2');
let tracker13 = document.getElementById('tracker1-3');
let tracker14 = document.getElementById('tracker1-4');
let tracker15 = document.getElementById('tracker1-5');
let tracker16 = document.getElementById('tracker1-6');
let tracker21 = document.getElementById('tracker2-1');
let tracker22 = document.getElementById('tracker2-2');
let tracker23 = document.getElementById('tracker2-3');
let tracker24 = document.getElementById('tracker2-4');
let tracker25 = document.getElementById('tracker2-5');
let tracker26 = document.getElementById('tracker2-6');
let tracker31 = document.getElementById('tracker3-1');
let tracker32 = document.getElementById('tracker3-2');
let tracker33 = document.getElementById('tracker3-3');
let tracker34 = document.getElementById('tracker3-4');
let tracker35 = document.getElementById('tracker3-5');
let tracker36 = document.getElementById('tracker3-6');
let tracker41 = document.getElementById('tracker4-1');
let tracker42 = document.getElementById('tracker4-2');
let tracker43 = document.getElementById('tracker4-3');
let tracker44 = document.getElementById('tracker4-4');
let tracker45 = document.getElementById('tracker4-5');
let tracker46 = document.getElementById('tracker4-6');
let tracker51 = document.getElementById('tracker5-1');
let tracker52 = document.getElementById('tracker5-2');
let tracker53 = document.getElementById('tracker5-3');
let tracker54 = document.getElementById('tracker5-4');
let tracker55 = document.getElementById('tracker5-5');
let tracker56 = document.getElementById('tracker5-6');
let tracker61 = document.getElementById('tracker6-1');
let tracker62 = document.getElementById('tracker6-2');
let tracker63 = document.getElementById('tracker6-3');
let tracker64 = document.getElementById('tracker6-4');
let tracker65 = document.getElementById('tracker6-5');
let tracker66 = document.getElementById('tracker6-6');

increaseTrackerSize.onclick = () => {
  if(trackerSize<6){
    trackerSize++;
    trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
    decreaseTrackerSize.classList.remove("at-min");
    if(trackerSize === 6){
      increaseTrackerSize.classList.add("at-max");
    }
  }
}

decreaseTrackerSize.onclick = () => {
  if(trackerSize>1){
    trackerSize--;
    trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
    increaseTrackerSize.classList.remove("at-max");
    if(trackerSize === 1){
      decreaseTrackerSize.classList.add("at-min");
    }
  }
}

createActiveTracker.onclick = () => {
  var activeCardsWithBorder = document.querySelectorAll(".active-selected");
  activeCardWithBorder = activeCardsWithBorder[0];
  if(!(activeCardWithBorder.classList.contains("has-tracker"))){
  switch(trackerSize){
    case 1:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
           activeCard.classList.remove("active-selected");
           activeCard.classList.add("has-tracker");
           switch (i){
            case 0:
              var card1Trackers = document.querySelectorAll(".tracker-button1");
              var card1Tracker1 = card1Trackers[0];
              card1Tracker1.classList.remove("invisible");
              card1TrackerCounter = 1;
              break;
            case 1:
              var card2Trackers = document.querySelectorAll(".tracker-button2");
              var card2Tracker1 = card2Trackers[0];
              card2Tracker1.classList.remove("invisible");
              card2TrackerCounter = 1;
              break;
            case 2:
              var card3Trackers = document.querySelectorAll(".tracker-button3");
              var card3Tracker1 = card3Trackers[0];
              card3Tracker1.classList.remove("invisible");
              card3TrackerCounter = 1;
              break;
            case 3:
              var card4Trackers = document.querySelectorAll(".tracker-button4");
              var card4Tracker1 = card4Trackers[0];
              card4Tracker1.classList.remove("invisible");
              card4TrackerCounter = 1;
              break;
            case 4:
              var card5Trackers = document.querySelectorAll(".tracker-button5");
              var card5Tracker1 = card5Trackers[0];
              card5Tracker1.classList.remove("invisible");
              card5TrackerCounter = 1;
              break;
            case 5:
              var card6Trackers = document.querySelectorAll(".tracker-button6");
              var card6Tracker1 = card6Trackers[0];
              card6Tracker1.classList.remove("invisible");
              card6TrackerCounter = 1;
              break;
           }
          }
        }).call(this,i);
      }
      break;
    case 2:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<2){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 2;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<2){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<2){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<2){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<2){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<2){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    case 3:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<3){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 3;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<3){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<3){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<3){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<3){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<3){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    case 4:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
          activeCard.classList.remove("active-selected");
          activeCard.classList.add("has-tracker");
          switch (i){
           case 0:
             var card1Trackers = document.querySelectorAll(".tracker-button1");
             for(var j = 0; j<card1Trackers.length; j++){
               (function () {
                 var card1Tracker = card1Trackers[j];
                 if(j<4){
                   card1Tracker.classList.remove("invisible");
                   card1TrackerCounter = 4;
                 }
               }).call(this, j);
             }
             break;
           case 1:
           var card2Trackers = document.querySelectorAll(".tracker-button2");
           for(var j = 0; j<card2Trackers.length; j++){
             (function () {
               var card2Tracker = card2Trackers[j];
               if(j<4){
                 card2Tracker.classList.remove("invisible");
                 card2TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 2:
           var card3Trackers = document.querySelectorAll(".tracker-button3");
           for(var j = 0; j<card3Trackers.length; j++){
             (function () {
               var card3Tracker = card3Trackers[j];
               if(j<4){
                 card3Tracker.classList.remove("invisible");
                 card3TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 3:
           var card4Trackers = document.querySelectorAll(".tracker-button4");
           for(var j = 0; j<card4Trackers.length; j++){
             (function () {
               var card4Tracker = card4Trackers[j];
               if(j<4){
                 card4Tracker.classList.remove("invisible");
                 card4TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 4:
           var card5Trackers = document.querySelectorAll(".tracker-button5");
           for(var j = 0; j<card5Trackers.length; j++){
             (function () {
               var card5Tracker = card5Trackers[j];
               if(j<4){
                 card5Tracker.classList.remove("invisible");
                 card5TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 5:
           var card6Trackers = document.querySelectorAll(".tracker-button6");
           for(var j = 0; j<card6Trackers.length; j++){
             (function () {
               var card6Tracker = card6Trackers[j];
               if(j<4){
                 card6Tracker.classList.remove("invisible");
                 card6TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
          }
          }
        }).call(this,i);
      }
      break;
    case 5:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<5){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 5;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<5){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<5){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<5){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<5){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<5){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    case 6:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<6){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 6;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<6){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<6){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<6){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<6){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<6){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
    activesSelected = 0;
}
}

var trackerUseButtons1 = document.querySelectorAll(".tracker-button1");
for (var i = 0; i<trackerUseButtons1.length; i++){
  (function (){
    var trackerUseButton1 = trackerUseButtons1[i];
    trackerUseButton1.onclick = () => {
      if (trackerUseButton1 === trackerUseButtons1[0]){
        trackerUseButton1.classList.add("invisible");
      }else if (trackerUseButton1.previousSibling.classList.contains("invisible")){
        trackerUseButton1.classList.add("invisible");
      } if(card1TrackerCounter === 1 && trackerUseButton1 === trackerUseButtons1[0]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 2 && trackerUseButton1 === trackerUseButtons1[1]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card1TrackerCounter === 3 && trackerUseButton1 === trackerUseButtons1[2]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 4 && trackerUseButton1 === trackerUseButtons1[3]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 5 && trackerUseButton1 === trackerUseButtons1[4]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 6 && trackerUseButton1 === trackerUseButtons1[5]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons2 = document.querySelectorAll(".tracker-button2");
for (var i = 0; i<trackerUseButtons2.length; i++){
  (function (){
    var trackerUseButton2 = trackerUseButtons2[i];
    trackerUseButton2.onclick = () => {
      if (trackerUseButton2 === trackerUseButtons2[0]){
        trackerUseButton2.classList.add("invisible");
      }else if (trackerUseButton2.previousSibling.classList.contains("invisible")){
        trackerUseButton2.classList.add("invisible");
      } if(card2TrackerCounter === 1 && trackerUseButton2 === trackerUseButtons2[0]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 2 && trackerUseButton2 === trackerUseButtons2[1]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card2TrackerCounter === 3 && trackerUseButton2 === trackerUseButtons2[2]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 4 && trackerUseButton2 === trackerUseButtons2[3]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 5 && trackerUseButton2 === trackerUseButtons2[4]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 6 && trackerUseButton2 === trackerUseButtons2[5]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons3 = document.querySelectorAll(".tracker-button3");
for (var i = 0; i<trackerUseButtons3.length; i++){
  (function (){
    var trackerUseButton3 = trackerUseButtons3[i];
    trackerUseButton3.onclick = () => {
      if (trackerUseButton3 === trackerUseButtons3[0]){
        trackerUseButton3.classList.add("invisible");
      }else if (trackerUseButton3.previousSibling.classList.contains("invisible")){
        trackerUseButton3.classList.add("invisible");
      } if(card3TrackerCounter === 1 && trackerUseButton3 === trackerUseButtons3[0]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 2 && trackerUseButton3 === trackerUseButtons3[1]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card3TrackerCounter === 3 && trackerUseButton3 === trackerUseButtons3[2]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 4 && trackerUseButton3 === trackerUseButtons3[3]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 5 && trackerUseButton3 === trackerUseButtons3[4]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 6 && trackerUseButton3 === trackerUseButtons3[5]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons4 = document.querySelectorAll(".tracker-button4");
for (var i = 0; i<trackerUseButtons4.length; i++){
  (function (){
    var trackerUseButton4 = trackerUseButtons4[i];
    trackerUseButton4.onclick = () => {
      if (trackerUseButton4 === trackerUseButtons4[0]){
        trackerUseButton4.classList.add("invisible");
      }else if (trackerUseButton4.previousSibling.classList.contains("invisible")){
        trackerUseButton4.classList.add("invisible");
      } if(card4TrackerCounter === 1 && trackerUseButton4 === trackerUseButtons4[0]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 2 && trackerUseButton4 === trackerUseButtons4[1]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card4TrackerCounter === 3 && trackerUseButton4 === trackerUseButtons4[2]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 4 && trackerUseButton4 === trackerUseButtons4[3]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 5 && trackerUseButton4 === trackerUseButtons4[4]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 6 && trackerUseButton4 === trackerUseButtons4[5]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons5 = document.querySelectorAll(".tracker-button5");
for (var i = 0; i<trackerUseButtons5.length; i++){
  (function (){
    var trackerUseButton5 = trackerUseButtons5[i];
    trackerUseButton5.onclick = () => {
      if (trackerUseButton5 === trackerUseButtons5[0]){
        trackerUseButton5.classList.add("invisible");
      }else if (trackerUseButton5.previousSibling.classList.contains("invisible")){
        trackerUseButton5.classList.add("invisible");
      } if(card5TrackerCounter === 1 && trackerUseButton5 === trackerUseButtons5[0]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 2 && trackerUseButton5 === trackerUseButtons5[1]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card5TrackerCounter === 3 && trackerUseButton5 === trackerUseButtons5[2]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 4 && trackerUseButton5 === trackerUseButtons5[3]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 5 && trackerUseButton5 === trackerUseButtons5[4]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 6 && trackerUseButton5 === trackerUseButtons5[5]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons6 = document.querySelectorAll(".tracker-button6");
for (var i = 0; i<trackerUseButtons6.length; i++){
  (function (){
    var trackerUseButton6 = trackerUseButtons6[i];
    trackerUseButton6.onclick = () => {
      if (trackerUseButton6 === trackerUseButtons6[0]){
        trackerUseButton6.classList.add("invisible");
      }else if (trackerUseButton6.previousSibling.classList.contains("invisible")){
        trackerUseButton6.classList.add("invisible");
      } if(card6TrackerCounter === 1 && trackerUseButton6 === trackerUseButtons6[0]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 2 && trackerUseButton6 === trackerUseButtons6[1]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card6TrackerCounter === 3 && trackerUseButton6 === trackerUseButtons6[2]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 4 && trackerUseButton6 === trackerUseButtons6[3]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 5 && trackerUseButton6 === trackerUseButtons6[4]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 6 && trackerUseButton6 === trackerUseButtons6[5]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

goBack.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
  var handCards = document.querySelectorAll(".hand");
  document.getElementById("select-class-section").classList.remove("hiding");
  document.getElementById("level-selection").classList.remove("hiding");
  confirmHandButton.classList.add("not-without-more-selected");
  modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
  var perkLists = document.querySelectorAll(".perks");
  for (var j = 0; j<perkLists.length; j++){
    var perkList = perkLists[j];
    perkList.classList.add("hiding");
  }
  goBack.classList.add("hiding");
  goBack2.classList.add("hiding");
  document.getElementById("perk-section").classList.add("hiding");
  document.getElementById("bear-health").classList.add("hiding");
  document.getElementById("bear-health-counter").classList.add("hiding");
  document.getElementById("damage-bear").classList.add("hiding");
  document.getElementById("heal-bear").classList.add("hiding");
  document.getElementById("bear-status-effects").classList.add("hiding");
  flipCard(cardHand1);
  flipCard(cardHand2);
  flipCard(cardHand3);
  flipCard(cardHand4);
  flipCard(cardHand5);
  flipCard(cardHand6);
  flipCard(cardHand7);
  flipCard(cardHand8);
  flipCard(cardHand9);
  flipCard(cardHand10);
  flipCard(cardHand11);
  flipCard(cardHand12);
  cardHand1.classList.remove("hiding");
  cardHand2.classList.remove("hiding");
  cardHand3.classList.remove("hiding");
  cardHand4.classList.remove("hiding");
  cardHand5.classList.remove("hiding");
  cardHand6.classList.remove("hiding");
  cardHand7.classList.remove("hiding");
  cardHand8.classList.remove("hiding");
  cardHand9.classList.remove("hiding");
  cardHand10.classList.remove("hiding");
  cardHand11.classList.remove("hiding");
  cardHand12.classList.remove("hiding");
  cardCount = 0;
  cardCounter.innerHTML = cardCount + "/"+ handSize;
  var levelTitles = document.querySelectorAll(".level");
  for(var k = 3; k<levelTitles.length; k++){
    var levelTitle = levelTitles[k];
    levelTitle.classList.remove("hiding");
  }
  for (var i = 0; i<cardsToChooseFrom.length; i++){
    (function (){
      var card = cardsToChooseFrom[i];
      card.firstChild.classList.remove("add-border");
    }).call(this,i);
  }
}

goBack2.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
  var handCards = document.querySelectorAll(".hand");
  document.getElementById("initial-table").classList.add("hiding");
  document.getElementById("hand-cards").classList.add("hiding");
  document.getElementById("confirm-buttons").classList.add("hiding");
  confirmHandButton.classList.add("not-without-more-selected");
  modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
  goBack.classList.remove("hiding");
  goBack2.classList.add("hiding");
  document.getElementById("perk-section").classList.remove("hiding");
  flipCard(cardHand1);
  flipCard(cardHand2);
  flipCard(cardHand3);
  flipCard(cardHand4);
  flipCard(cardHand5);
  flipCard(cardHand6);
  flipCard(cardHand7);
  flipCard(cardHand8);
  flipCard(cardHand9);
  flipCard(cardHand10);
  flipCard(cardHand11);
  flipCard(cardHand12);
  for (var j = 0; j<12; j++){
    var eachCardInHand = handCards[j];
    eachCardInHand.classList.add("hiding");
  }
  cardCount = 0;
  cardCounter.innerHTML = cardCount + "/"+ handSize;
  var levelTitles = document.querySelectorAll(".level");
  for(var k = levelCount+3; k<levelTitles.length; k++){
    var levelTitle = levelTitles[k];
    levelTitle.classList.add("hiding");
  }
  for (var i = 0; i<cardsToChooseFrom.length; i++){
    (function (){
      var card = cardsToChooseFrom[i];
      card.firstChild.classList.remove("add-border");
    }).call(this,i);
  }
}



loseDiscardButton.onclick = () => {
  var selectedDiscards = document.querySelectorAll(".discard-selected");
  if(discardsSelected === 1){
  for (var i = 0; i<lostCards.length; i++){
    var lostCard = lostCards[i];
    if(lostCard.classList.contains("flipped")){
      lostCard.src = selectedDiscards[0].src;
      lostCard.classList.remove("flipped");
      lostCard.classList.remove("hiding");
      i = lostCards.length;
      flipDiscard(selectedDiscards[0]);
      discardsSelected--;
      discardCount--;
      recoverDiscardButton.classList.add("not-without-more-selected");
      loseDiscardButton.classList.add("not-without-more-selected");
      loseCardFromRestButton.classList.add("not-unless-resting");
    }
  }
}
  if(discardCount === 0 && longResting){
    longResting = false;
    mustLose = false;
    playCardsButton.classList.remove("not-while-resting");
    shortRestButton.classList.remove("not-while-resting");
    longRestButton.classList.remove("not-while-resting");
    loseCardFromRestButton.classList.add("not-unless-resting");
    shortRestButton.classList.add("not-without-more-cards");
    longRestButton.classList.add("not-without-more-cards");
    loseDiscardButton.classList.add("not-without-more-selected");
    Element.prototype.remove = function() {
      this.parentElement.removeChild(this);
    }
    document.getElementById('choose-to-lose').remove();
  }
}


loseHandCard.onclick = () => {
  if(cardCount === 1){
    var cardsInHand = document.querySelectorAll(".hand");
    for (var j = 0; j<cardsInHand.length; j++){
      var cardInHand = cardsInHand[j];
      if (cardInHand.classList.contains("add-border")){
        for (var i = 0; i<lostCards.length; i++){
          var lostCard = lostCards[i];
          if(lostCard.classList.contains("flipped")){
            lostCard.src = cardInHand.src;
            lostCard.classList.remove("flipped");
            lostCard.classList.remove("hiding");
            i = lostCards.length;
            flipCard(cardInHand);
            cardCount--;
            loseHandCard.classList.add('not-without-more-selected');
          }
        }
      }
    }
  }
}

//attack modifiers
let modifierDeck = document.getElementById('amDeck');
let playedModifiers = document.getElementById('playedModifiers');
let mod1 = "./plus0.png";
let mod2 = "./plus0.png";
let mod3 = "./plus0.png";
let mod4 = "./plus0.png";
let mod5 = "./plus0.png";
let mod6 = "./plus0.png";
let mod7 = "./plus1.png";
let mod8 = "./plus1.png";
let mod9 = "./plus1.png";
let mod10 = "./plus1.png";
let mod11 = "./plus1.png";
let mod12 = "./minus1.png";
let mod13 = "./minus1.png";
let mod14 = "./minus1.png";
let mod15 = "./minus1.png";
let mod16 = "./minus1.png";
let mod17 = "./minus2.png";
let mod18 = "./plus2.png";
let mod19 = "./curseShuffle.png";
let mod20 = "./blessShuffle.png";
let blessCard = "./bless.png";
let curseCard = "./curse.png";
let minus1 = "./newMinus1.png";
let modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
let defaultDeckArray = [];
let playedModifierArray = [];
let mustShuffle = document.getElementById("mustShuffle");
let blessButton = document.getElementById('bless');
let curseButton = document.getElementById('curse');
let shuffleModsButton = document.getElementById('shuffleMods');
let numOfCurses = 0;
let numOfBlesses = 0;
let addMinusOne = document.getElementById('add-minus-1');
let cardsInDeckText = document.getElementById("cardsInDeck");
let resetDeckButton = document.getElementById("reset-deck");

modifierDeck.onclick = () => {
  if(modDeckArray.length>0){
    let randomModifierIndex = Math.floor(Math.random()*modDeckArray.length);
    playedModifierArray.push(modDeckArray[randomModifierIndex]);
    playedModifiers.classList.remove('hiding');
    playedModifiers.src = playedModifierArray[playedModifierArray.length - 1];
    playedModifiers.classList.add(`${modDeckArray[randomModifierIndex]}`);
    modDeckArray.splice(randomModifierIndex, 1);
    if (modDeckArray.length === 0){
      modifierDeck.classList.add("hiding");
    }
    if (playedModifiers.classList.contains("./curseShuffle.png") || playedModifiers.classList.contains("./blessShuffle.png")){
      mustShuffle.classList.remove("invisible");
    }
    if (playedModifiers.classList.contains("./curse.png")){
      numOfCurses--;
    }
    if (playedModifiers.classList.contains("./bless.png")){
      numOfBlesses--;
    }
    if (playedModifiers.classList.contains("./bless.png") || playedModifiers.classList.contains("./curse.png")){
      playedModifierArray.splice((playedModifierArray.length-1), 1);
      playedModifiers.classList.remove("./bless.png");
      playedModifiers.classList.remove("./curse.png");
    }
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  }
}

function shuffleModifierDeck (){
  while (playedModifierArray.length > 0){
    modDeckArray.push(playedModifierArray[playedModifierArray.length - 1]);
    playedModifierArray.pop();
    playedModifiers.src = '';
    modifierDeck.src = "./amBack.png"
    mustShuffle.classList.add('invisible');
    playedModifiers.className = "attack-modifier";
    playedModifiers.classList.add('hiding');
    modifierDeck.classList.remove("hiding");
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  }
}

shuffleModsButton.onclick = () => {
  shuffleModifierDeck();
}

function blessDeck (){
  if(numOfBlesses<10){
    modDeckArray.push(blessCard);
    modifierDeck.classList.remove("hiding");
    numOfBlesses++
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    shuffleModifierDeck();
  }
}

blessButton.onclick = () => {
  blessDeck();
}

function curseDeck (){
  if (numOfCurses<10){
    modDeckArray.push(curseCard);
    modifierDeck.classList.remove("hiding");
    numOfCurses++
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    shuffleModifierDeck();
  }
}

curseButton.onclick = () => {
  curseDeck();
}

function addMinus1 (){
  modDeckArray.push(minus1);
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
}

addMinusOne.onclick = () => {
  addMinus1();
}

function resetDeck () {
  shuffleModifierDeck();
  modDeckArray = defaultDeckArray.slice();
  numOfCurses = 0;
  numOfBlesses = 0;
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
}

resetDeckButton.onclick = () => {
  resetDeck();
}

var checkboxes = document.querySelectorAll(".checkbox");
for (var i = 0; i<checkboxes.length; i++){
  (function(){
    var checkbox = checkboxes[i];
    checkbox.onclick = () =>{
      if(!checkbox.classList.contains("checked")){
        checkbox.classList.add("checked");
      } else {
        checkbox.classList.remove("checked");
      }

    }
  }).call(this,i);
}
//Doomstalker Perks
  let dsConfirmPerksButton = document.getElementById("dsConfirmPerksButton");
  let dsPerk1 = document.getElementById("dsRemove2minus1-1");
  let dsPerk2 = document.getElementById("dsRemove2minus1-2");
  let dsPerk3 = document.getElementById("dsReplacePlus0withPlus1-1");
  let dsPerk4 = document.getElementById("dsReplacePlus0withPlus1-2");
  let dsPerk5 = document.getElementById("dsReplacePlus0withPlus1-3");
  let dsPerk6 = document.getElementById("dsAddRollingPlus1-1");
  let dsPerk7 = document.getElementById("dsAddRollingPlus1-2");
  let dsPerk8 = document.getElementById("dsAddPlus2Muddle");
  let dsPerk9 = document.getElementById("dsAddPlus1Poison");
  let dsPerk10 = document.getElementById("dsAddPlus1Wound");
  let dsPerk11 = document.getElementById("dsAddPlus1Immobilize");
  let dsPerk12 = document.getElementById("dsAddPlus0Stun");
  let dsPerk13 = document.getElementById("dsAddRollingAddTarget-1");
  let dsPerk14 = document.getElementById("dsAddRollingAddTarget-2");
  let dsPerk15 = document.getElementById("dsIgnoreNegEffects");
dsConfirmPerksButton.onclick = () =>{
  if(dsPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "dschosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(dsPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "dschosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (dsPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 2);
        let newCard = "./dsPerks/dsPlus1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "dschosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (dsPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod3){
        modDeckArray.splice(i, 2);
        let newCard = "./dsPerks/dsPlus1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "dschosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (dsPerk5.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod5){
        modDeckArray.splice(i, 2);
        let newCard = "./dsPerks/dsPlus1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk5", "dschosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (dsPerk6.classList.contains('checked')){
    let newCard = "./dsPerks/dsRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk6", "dschosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (dsPerk7.classList.contains('checked')){
    let newCard = "./dsPerks/dsRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk7", "dschosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (dsPerk8.classList.contains('checked')){
    let newCard = "./dsPerks/dsPlus2Muddle.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "dschosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (dsPerk9.classList.contains('checked')){
    let newCard = "./dsPerks/dsPlus1Poison.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "dschosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (dsPerk10.classList.contains('checked')){
    let newCard = "./dsPerks/dsPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "dschosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (dsPerk11.classList.contains('checked')){
    let newCard = "./dsPerks/dsPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk11", "dschosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (dsPerk12.classList.contains('checked')){
    let newCard = "./dsPerks/dsPlus0Stun.png";
    modDeckArray.push(newCard);
    setCookie("perk12", "dschosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (dsPerk13.classList.contains('checked')){
    let newCard = "./dsPerks/dsRollingAddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "dschosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (dsPerk14.classList.contains('checked')){
    let newCard = "./dsPerks/dsRollingAddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk14", "dschosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (dsPerk15.classList.contains('checked')){
    setCookie("perk15", "dschosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}
//Mindthief perks

  let mtConfirmPerksButton = document.getElementById("mtConfirmPerksButton");
  let mtPerk1 = document.getElementById("mtRemove2minus1-1");
  let mtPerk2 = document.getElementById("mtRemove2minus1-2");
  let mtPerk3 = document.getElementById("mtRemove4Plus0");
  let mtPerk4 = document.getElementById("mtReplaceTwoPlus1WithTwoPlus2");
  let mtPerk5 = document.getElementById("mtReplaceMinus2WithPlus0");
  let mtPerk6 = document.getElementById("mtPlus2Frost1");
  let mtPerk7 = document.getElementById("mtPlus2Frost2");
  let mtPerk8 = document.getElementById("mtAddTwoRollingPlus11");
  let mtPerk9 = document.getElementById("mtAddTwoRollingPlus12");
  let mtPerk10 = document.getElementById("mtAddRollingPull1");
  let mtPerk11 = document.getElementById("mtAddRollingMuddle");
  let mtPerk12 = document.getElementById("mtAddRollingImmobilize");
  let mtPerk13 = document.getElementById("mtAddRollingStun");
  let mtPerk14 = document.getElementById("mtAddRollingDisarmAndMuddle");
  let mtPerk15 = document.getElementById("mtIgnoreNegEffects");
mtConfirmPerksButton.onclick = () => {

  if(mtPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "mtchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(mtPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "mtchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
 if (mtPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 4);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "mtchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (mtPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod7){
        modDeckArray.splice(i, 2);
        let newCard = "./mtPerks/mtPlus2.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "mtchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (mtPerk5.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod17){
        modDeckArray.splice(i, 1);
        let newCard = "./mtPerks/mtPlus0.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk5", "mtchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (mtPerk6.classList.contains('checked')){
    let newCard = "./mtPerks/mtFrostPlus2.png";
    modDeckArray.push(newCard);
    setCookie("perk6", "mtchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (mtPerk7.classList.contains('checked')){
    let newCard = "./mtPerks/mtFrostPlus2.png";
    modDeckArray.push(newCard);
    setCookie("perk7", "mtchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (mtPerk8.classList.contains('checked')){
    let newCard = "./mtPerks/mtRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk8", "mtchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (mtPerk9.classList.contains('checked')){
    let newCard = "./mtPerks/mtRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk9", "mtchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (mtPerk10.classList.contains('checked')){
    let newCard = "./mtPerks/mtRollingPull1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk10", "mtchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (mtPerk11.classList.contains('checked')){
    let newCard = "./mtPerks/mtRollingMuddle.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk11", "mtchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (mtPerk12.classList.contains('checked')){
    let newCard = "./mtPerks/mtRollingImmobilize.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk12", "mtchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (mtPerk13.classList.contains('checked')){
    let newCard = "./mtPerks/mtRollingStun.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "mtchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (mtPerk14.classList.contains('checked')){
    let newCard1 = "./mtPerks/mtRollingDisarm.png";
    let newCard2 = "./mtPerks/mtRollingMuddle.png";
    modDeckArray.push(newCard1);
    modDeckArray.push(newCard2);
    setCookie("perk14", "mtchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (mtPerk15.classList.contains('checked')){
    setCookie("perk15", "mtchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

function confirmPerks(){
  document.getElementById("initial-table").classList.remove("hiding");
  document.getElementById('hand-cards').classList.remove("hiding");
  let revealedCards = document.querySelectorAll(".hand");
  for (let i = 0; i<handSize; i++){
    let revealedCard = revealedCards[i];
    revealedCard.classList.remove("hiding");
  };
  document.getElementById("confirm-buttons").classList.remove("hiding");
  chooseCardsNumber.innerHTML = "Choose "+ handSize+ " Cards";
  cardCounter.innerHTML = "0/"+handSize;
  healthCounter.innerHTML = health + "/" + maxHealth;
  bearHealthCounter.innerHTML = "Bear Health<br/>"+ bearHealth + "/" + bearMaxHealth;
  xpCounter.innerHTML = xpCount;
  chosenCard1.src = flippedCard;
  chosenCard2.src = flippedCard;
  trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
  document.getElementById("perk-section").classList.add("hiding");
  goBack2.classList.remove("hiding");
}

let brConfirmPerksButton = document.getElementById('brConfirmPerksButton');
let btConfirmPerksButton = document.getElementById('btConfirmPerksButton');
let chConfirmPerksButton = document.getElementById('chConfirmPerksButton');
let swConfirmPerksButton = document.getElementById('swConfirmPerksButton');
let scConfirmPerksButton = document.getElementById('scConfirmPerksButton');
let tiConfirmPerksButton = document.getElementById('tiConfirmPerksButton');
let nsConfirmPerksButton = document.getElementById('nsConfirmPerksButton');


//Cragheart

let chPerk1 = document.getElementById("chPerk1");
let chPerk2 = document.getElementById("chPerk2-1");
let chPerk3 = document.getElementById("chPerk2-2");
let chPerk4 = document.getElementById("chPerk2-3");
let chPerk5 = document.getElementById("chPerk3");
let chPerk6 = document.getElementById("chPerk4-1");
let chPerk7 = document.getElementById("chPerk4-2");
let chPerk8 = document.getElementById("chPerk5-1");
let chPerk9 = document.getElementById("chPerk5-2");
let chPerk10 = document.getElementById("chPerk6");
let chPerk11 = document.getElementById("chPerk7-1");
let chPerk12 = document.getElementById("chPerk7-2");
let chPerk13 = document.getElementById("chPerk8");
let chPerk14 = document.getElementById("chPerk9");
let chPerk15 = document.getElementById("chPerk10");
chConfirmPerksButton.onclick = () => {
  if(chPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 4);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "chchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(chPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 1);
        let newCard = "./chPerks/chPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "chchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(chPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod13){
        modDeckArray.splice(i, 1);
        let newCard = "./chPerks/chPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "chchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(chPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 1);
        let newCard = "./chPerks/chPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "chchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (chPerk5.classList.contains('checked')){
      let newCard1 = "./chPerks/chMinus2.png";
      let newCard2 = "./chPerks/chPlus2.png";
      modDeckArray.push(newCard1);
      modDeckArray.push(newCard2);
      modDeckArray.push(newCard2);
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      setCookie("perk5", "chchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (chPerk6.classList.contains('checked')){
    let newCard = "./chPerks/chPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk6", "chchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (chPerk7.classList.contains('checked')){
    let newCard = "./chPerks/chPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk7", "chchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (chPerk8.classList.contains('checked')){
    let newCard = "./chPerks/chPlus2Muddle.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "chchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (chPerk9.classList.contains('checked')){
    let newCard = "./chPerks/chPlus2Muddle.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "chchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (chPerk10.classList.contains('checked')){
    let newCard = "./chPerks/chRollingPush2.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk10", "chchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (chPerk11.classList.contains('checked')){
    let newCard = "./chPerks/chRollingEarth.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk11", "chchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (chPerk12.classList.contains('checked')){
    let newCard = "./chPerks/chRollingEarth.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk12", "chchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (chPerk13.classList.contains('checked')){
    let newCard = "./chPerks/chRollingWind.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk13", "chchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (chPerk14.classList.contains('checked')){
    setCookie("perk14", "chchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (chPerk15.classList.contains('checked')){
    setCookie("perk15", "chchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Brute
let brPerk1 = document.getElementById("brPerk1");
let brPerk2 = document.getElementById("brPerk2");
let brPerk3 = document.getElementById("brPerk3-1");
let brPerk4 = document.getElementById("brPerk3-2");
let brPerk5 = document.getElementById("brPerk4");
let brPerk6 = document.getElementById("brPerk5-1");
let brPerk7 = document.getElementById("brPerk5-2");
let brPerk8 = document.getElementById("brPerk6");
let brPerk9 = document.getElementById("brPerk7-1");
let brPerk10 = document.getElementById("brPerk7-2");
let brPerk11 = document.getElementById("brPerk8");
let brPerk12 = document.getElementById("brPerk9-1");
let brPerk13 = document.getElementById("brPerk9-2");
let brPerk14 = document.getElementById("brPerk10");
let brPerk15 = document.getElementById("brPerk11");

brConfirmPerksButton.onclick = () => {
  if(brPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "brchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(brPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 1);
        let newCard = "./brPerks/brPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "brchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(brPerk3.classList.contains('checked')){
    let newCard = "./brPerks/brPlus1.png"
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk3", "brchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(brPerk4.classList.contains('checked')){
    let newCard = "./brPerks/brPlus1.png"
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk4", "brchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (brPerk5.classList.contains('checked')){
      let newCard = "./brPerks/brPlus3.png";
      modDeckArray.push(newCard);
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      setCookie("perk5", "brchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (brPerk6.classList.contains('checked')){
    let newCard = "./brPerks/brRollingPush1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk6", "brchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (brPerk7.classList.contains('checked')){
    let newCard = "./brPerks/brRollingPush1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk7", "brchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (brPerk8.classList.contains('checked')){
    let newCard = "./brPerks/brRollingPierce3.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk8", "brchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (brPerk9.classList.contains('checked')){
    let newCard = "./brPerks/brRollingStun.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "brchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (brPerk10.classList.contains('checked')){
    let newCard = "./brPerks/brRollingStun.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "brchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (brPerk11.classList.contains('checked')){
    let newCard1 = "./brPerks/brRollingDisarm.png";
    let newCard2 = "./brPerks/brRollingMuddle.png";
    modDeckArray.push(newCard1);
    modDeckArray.push(newCard2);
    setCookie("perk11", "brchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (brPerk12.classList.contains('checked')){
    let newCard = "./brPerks/brRollingAddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk12", "brchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (brPerk13.classList.contains('checked')){
    let newCard = "./brPerks/brRollingAddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "brchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (brPerk14.classList.contains('checked')){
    let newCard = "./brPerks/brPlus1Shield.png";
    modDeckArray.push(newCard);
    setCookie("perk14", "brchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (brPerk15.classList.contains('checked')){
    let newCard = "./brPerks/brPlus1.png";
    modDeckArray.push(newCard);
    setCookie("perk15", "brchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

//spellweaver

let swPerk1 = document.getElementById("swPerk1");
let swPerk2 = document.getElementById("swPerk2-1");
let swPerk3 = document.getElementById("swPerk2-2");
let swPerk4 = document.getElementById("swPerk3-1");
let swPerk5 = document.getElementById("swPerk3-2");
let swPerk6 = document.getElementById("swPerk4");
let swPerk7 = document.getElementById("swPerk5");
let swPerk8 = document.getElementById("swPerk6");
let swPerk9 = document.getElementById("swPerk7");
let swPerk10 = document.getElementById("swPerk8-1");
let swPerk11 = document.getElementById("swPerk8-2");
let swPerk12 = document.getElementById("swPerk9-1");
let swPerk13 = document.getElementById("swPerk9-2");
let swPerk14 = document.getElementById("swPerk10");
let swPerk15 = document.getElementById("swPerk11");

swConfirmPerksButton.onclick = () => {
  if(swPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 4);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "swchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(swPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 1);
        let newCard = "./swPerks/swPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "swchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(swPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod13){
        modDeckArray.splice(i, 1);
        let newCard = "./swPerks/swPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "swchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(swPerk4.classList.contains('checked')){
    let newCard = "./swPerks/swPlus1.png"
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk4", "swchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (swPerk5.classList.contains('checked')){
    let newCard = "./swPerks/swPlus1.png"
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk5", "swchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (swPerk6.classList.contains('checked')){
    let newCard = "./swPerks/swPlus0Stun.png";
    modDeckArray.push(newCard);
    setCookie("perk6", "swchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (swPerk7.classList.contains('checked')){
    let newCard = "./swPerks/swPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk7", "swchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (swPerk8.classList.contains('checked')){
    let newCard = "./swPerks/swPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "swchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (swPerk9.classList.contains('checked')){
    let newCard = "./swPerks/swPlus1Curse.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "swchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (swPerk10.classList.contains('checked')){
    let newCard = "./swPerks/swPlus2Fire.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "swchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (swPerk11.classList.contains('checked')){
    let newCard = "./swPerks/swPlus2Fire.png";
    modDeckArray.push(newCard);
    setCookie("perk11", "swchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (swPerk12.classList.contains('checked')){
    let newCard = "./swPerks/swPlus2Frost.png";
    modDeckArray.push(newCard);
    setCookie("perk12", "swchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (swPerk13.classList.contains('checked')){
    let newCard = "./swPerks/swPlus2Frost.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "swchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (swPerk14.classList.contains('checked')){
    let newCard1 = "./swPerks/swRollingEarth.png";
    let newCard2 = "./swPerks/swRollingWind.png"
    modDeckArray.push(newCard1);
    modDeckArray.push(newCard2);
    setCookie("perk14", "swchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (swPerk15.classList.contains('checked')){
    let newCard1 = "./swPerks/swRollingLight.png";
    let newCard2 = "./swPerks/swRollingDark.png"
    modDeckArray.push(newCard1);
    modDeckArray.push(newCard2);
    setCookie("perk15", "swchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

//Scoundrel

let scPerk1 = document.getElementById("scPerk1-1");
let scPerk2 = document.getElementById("scPerk1-2");
let scPerk3 = document.getElementById("scPerk2");
let scPerk4 = document.getElementById("scPerk3");
let scPerk5 = document.getElementById("scPerk4");
let scPerk6 = document.getElementById("scPerk5-1");
let scPerk7 = document.getElementById("scPerk5-2");
let scPerk8 = document.getElementById("scPerk6-1");
let scPerk9 = document.getElementById("scPerk6-2");
let scPerk10 = document.getElementById("scPerk7");
let scPerk11 = document.getElementById("scPerk8-1");
let scPerk12 = document.getElementById("scPerk8-2");
let scPerk13 = document.getElementById("scPerk9");
let scPerk14 = document.getElementById("scPerk10");
let scPerk15 = document.getElementById("scPerk11");

scConfirmPerksButton.onclick = () => {
  if(scPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "scchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(scPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "scchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(scPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 4);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "scchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(scPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod17){
        modDeckArray.splice(i, 1);
        let newCard = "./scPerks/scPlus0.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "scchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (scPerk5.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod16){
        modDeckArray.splice(i, 1);
        let newCard = "./scPerks/scPlus1.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk5", "scchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (scPerk6.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod5){
        modDeckArray.splice(i, 1);
        let newCard = "./scPerks/scPlus2.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk6", "scchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (scPerk7.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod6){
        modDeckArray.splice(i, 1);
        let newCard = "./scPerks/scPlus2.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk7", "scchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (scPerk8.classList.contains('checked')){
    let newCard = "./scPerks/scRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk8", "scchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (scPerk9.classList.contains('checked')){
    let newCard = "./scPerks/scRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk9", "scchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (scPerk10.classList.contains('checked')){
    let newCard = "./scPerks/scRollingPierce3.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk10", "scchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (scPerk11.classList.contains('checked')){
    let newCard = "./scPerks/scRollingPoison.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk11", "scchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (scPerk12.classList.contains('checked')){
    let newCard = "./scPerks/scRollingPoison.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk12", "scchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (scPerk13.classList.contains('checked')){
    let newCard = "./scPerks/scRollingMuddle.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk13", "scchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (scPerk14.classList.contains('checked')){
    let newCard = "./scPerks/scRollingInvisible.png";
    modDeckArray.push(newCard);
    setCookie("perk14", "scchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (scPerk15.classList.contains('checked')){
    setCookie("perk15", "scchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

//Tinkerer
let tiPerk1 = document.getElementById("tiPerk1-1");
let tiPerk2 = document.getElementById("tiPerk1-2");
let tiPerk3 = document.getElementById("tiPerk2");
let tiPerk4 = document.getElementById("tiPerk3");
let tiPerk5 = document.getElementById("tiPerk4");
let tiPerk6 = document.getElementById("tiPerk5");
let tiPerk7 = document.getElementById("tiPerk6");
let tiPerk8 = document.getElementById("tiPerk7-1");
let tiPerk9 = document.getElementById("tiPerk7-2");
let tiPerk10 = document.getElementById("tiPerk8-1");
let tiPerk11 = document.getElementById("tiPerk8-2");
let tiPerk12 = document.getElementById("tiPerk9-1");
let tiPerk13 = document.getElementById("tiPerk9-2");
let tiPerk14 = document.getElementById("tiPerk10");
let tiPerk15 = document.getElementById("tiPerk11");

tiConfirmPerksButton.onclick = () => {
  if(tiPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "tichosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(tiPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "tichosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(tiPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod17){
        modDeckArray.splice(i, 1);
        let newCard = "./tiPerks/tiPlus0.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "tichosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(tiPerk4.classList.contains('checked')){
    let newCard = "./tiPerks/tiPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk4", "tichosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (tiPerk5.classList.contains('checked')){
    let newCard = "./tiPerks/tiPlus3.png";
    modDeckArray.push(newCard);
    setCookie("perk5", "tichosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (tiPerk6.classList.contains('checked')){
    let newCard = "./tiPerks/tiRollingFire.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk6", "tichosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (tiPerk7.classList.contains('checked')){
    let newCard = "./tiPerks/tiRollingMuddle.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk7", "tichosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (tiPerk8.classList.contains('checked')){
    let newCard = "./tiPerks/tiPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "tichosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (tiPerk9.classList.contains('checked')){
    let newCard = "./tiPerks/tiPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "tichosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (tiPerk10.classList.contains('checked')){
    let newCard = "./tiPerks/tiPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "tichosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (tiPerk11.classList.contains('checked')){
    let newCard = "./tiPerks/tiPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk11", "tichosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (tiPerk12.classList.contains('checked')){
    let newCard = "./tiPerks/tiPlus1Heal2.png";
    modDeckArray.push(newCard);
    setCookie("perk12", "tichosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (tiPerk13.classList.contains('checked')){
    let newCard = "./tiPerks/tiPlus1Heal2.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "tichosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (tiPerk14.classList.contains('checked')){
    let newCard = "./tiPerks/tiPlus0AddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk14", "tichosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (tiPerk15.classList.contains('checked')){
    setCookie("perk15", "tichosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

//Beast tyrant
let btPerk1 = document.getElementById("btPerk1");
let btPerk2 = document.getElementById("btPerk2-1");
let btPerk3 = document.getElementById("btPerk2-2");
let btPerk4 = document.getElementById("btPerk2-3");
let btPerk5 = document.getElementById("btPerk3-1");
let btPerk6 = document.getElementById("btPerk3-2");
let btPerk7 = document.getElementById("btPerk4-1");
let btPerk8 = document.getElementById("btPerk4-2");
let btPerk9 = document.getElementById("btPerk5-1");
let btPerk10 = document.getElementById("btPerk5-2");
let btPerk11 = document.getElementById("btPerk6-1");
let btPerk12 = document.getElementById("btPerk6-2");
let btPerk13 = document.getElementById("btPerk6-3");
let btPerk14 = document.getElementById("btPerk7");
let btPerk15 = document.getElementById("btPerk8");

btConfirmPerksButton.onclick = () => {
  if(btPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "btchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(btPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 1);
        let newCard = "./btPerks/btPlus1.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "btchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(btPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod15){
        modDeckArray.splice(i, 1);
        let newCard = "./btPerks/btPlus1.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "btchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(btPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod16){
        modDeckArray.splice(i, 1);
        let newCard = "./btPerks/btPlus1.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "btchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (btPerk5.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 1);
        let newCard = "./btPerks/btPlus2.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk5", "btchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (btPerk6.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod2){
        modDeckArray.splice(i, 1);
        let newCard = "./btPerks/btPlus2.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk6", "btchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (btPerk7.classList.contains('checked')){
    let newCard = "./btPerks/btPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk7", "btchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (btPerk8.classList.contains('checked')){
    let newCard = "./btPerks/btPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "btchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (btPerk9.classList.contains('checked')){
    let newCard = "./btPerks/btPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "btchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (btPerk10.classList.contains('checked')){
    let newCard = "./btPerks/btPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "btchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (btPerk11.classList.contains('checked')){
    let newCard = "./btPerks/btRollingHeal1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk11", "btchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (btPerk12.classList.contains('checked')){
    let newCard = "./btPerks/btRollingHeal1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk12", "btchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (btPerk13.classList.contains('checked')){
    let newCard = "./btPerks/btRollingHeal1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk13", "btchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (btPerk14.classList.contains('checked')){
    let newCard = "./btPerks/btRollingEarth.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk14", "btchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (btPerk15.classList.contains('checked')){
    setCookie("perk15", "btchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

  //nightshroud

  let nsPerk1 = document.getElementById("nsPerk1-1");
  let nsPerk2 = document.getElementById("nsPerk1-2");
  let nsPerk3 = document.getElementById("nsPerk2");
  let nsPerk4 = document.getElementById("nsPerk3-1");
  let nsPerk5 = document.getElementById("nsPerk3-2");
  let nsPerk6 = document.getElementById("nsPerk4-1");
  let nsPerk7 = document.getElementById("nsPerk4-2");
  let nsPerk8 = document.getElementById("nsPerk5-1");
  let nsPerk9 = document.getElementById("nsPerk5-2");
  let nsPerk10 = document.getElementById("nsPerk6-1");
  let nsPerk11 = document.getElementById("nsPerk6-2");
  let nsPerk12 = document.getElementById("nsPerk7");
  let nsPerk13 = document.getElementById("nsPerk8");
  let nsPerk14 = document.getElementById("nsPerk9");
  let nsPerk15 = document.getElementById("nsPerk10");
  let hasMinus1 = 0;

nsConfirmPerksButton.onclick = () => {
if(nsPerk1.classList.contains('checked')){
  for (var i = 0; i<modDeckArray.length; i++){
    if(modDeckArray[i] === mod12){
      modDeckArray.splice(i, 2);
      i = modDeckArray.length;
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    }
  }
  setCookie("perk1", "nschosen", 365);
} else {
  setCookie("perk1", "notChosen", 365);
}
if(nsPerk2.classList.contains('checked')){
  for (var i = 0; i<modDeckArray.length; i++){
    if(modDeckArray[i] === mod14){
      modDeckArray.splice(i, 2);
      i = modDeckArray.length;
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    }
  }
  setCookie("perk2", "nschosen", 365);
} else {
  setCookie("perk2", "notChosen", 365);
}
if(nsPerk3.classList.contains('checked')){
  for (var i = 0; i<modDeckArray.length; i++){
    if(modDeckArray[i] === mod1){
      modDeckArray.splice(i, 4);
      i = modDeckArray.length;
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    }
  }
  setCookie("perk3", "nschosen", 365);
} else {
  setCookie("perk3", "notChosen", 365);
}
if(nsPerk4.classList.contains('checked')){
  let newCard = "./nsPerks/nsMinus1Dark.png";
  modDeckArray.push(newCard);
  hasMinus1++;
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  setCookie("perk4", "nschosen", 365);
} else {
  setCookie("perk4", "notChosen", 365);
}
if (nsPerk5.classList.contains('checked')){
  let newCard = "./nsPerks/nsMinus1Dark.png";
  modDeckArray.push(newCard);
  hasMinus1++;
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  setCookie("perk5", "nschosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
if (nsPerk6.classList.contains('checked') && (hasMinus1> 0)){
      hasMinus1--;
      modDeckArray.pop();
      let newCard = "./nsPerks/nsPlus1Dark.png";
      modDeckArray.unshift(newCard);
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      setCookie("perk6", "nschosen", 365);
    } else {
      setCookie("perk6", "notChosen", 365);
    }
if (nsPerk7.classList.contains('checked') && (hasMinus1> 0)){
    hasMinus1--;
    modDeckArray.pop();
    let newCard = "./nsPerks/nsPlus1Dark.png";
    modDeckArray.unshift(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk7", "nschosen", 365);
} else {
  setCookie("perk7", "notChosen", 365);
}
if (nsPerk8.classList.contains('checked')){
  let newCard = "./nsPerks/nsPlus1Invisible.png";
  modDeckArray.push(newCard);
  setCookie("perk8", "nschosen", 365);
} else {
  setCookie("perk8", "notChosen", 365);
}
if (nsPerk9.classList.contains('checked')){
  let newCard = "./nsPerks/nsPlus1Invisible.png";
  modDeckArray.push(newCard);
  setCookie("perk9", "nschosen", 365);
} else {
  setCookie("perk9", "notChosen", 365);
}
if (nsPerk10.classList.contains('checked')){
  let newCard = "./nsPerks/nsRollingMuddle.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk10", "nschosen", 365);
} else {
  setCookie("perk10", "notChosen", 365);
}
if (nsPerk11.classList.contains('checked')){
  let newCard = "./nsPerks/nsRollingMuddle.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk11", "nschosen", 365);
} else {
  setCookie("perk11", "notChosen", 365);
}
if (nsPerk12.classList.contains('checked')){
  let newCard = "./nsPerks/nsRollingHeal1.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk12", "nschosen", 365);
} else {
  setCookie("perk12", "notChosen", 365);
}
if (nsPerk13.classList.contains('checked')){
  let newCard = "./nsPerks/nsRollingCurse.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk13", "nschosen", 365);
} else {
  setCookie("perk13", "notChosen", 365);
}
if (nsPerk14.classList.contains('checked')){
  let newCard = "./nsPerks/nsRollingAddTarget.png";
  modDeckArray.push(newCard);
  setCookie("perk14", "nschosen", 365);
} else {
  setCookie("perk14", "notChosen", 365);
}
if (nsPerk15.classList.contains('checked')){
  let newCard = "./nsPerks/nsPlus1.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk15", "nschosen", 365);
} else {
  setCookie("perk15", "notChosen", 365);
}
defaultDeckArray = modDeckArray.slice();
confirmPerks();
}
