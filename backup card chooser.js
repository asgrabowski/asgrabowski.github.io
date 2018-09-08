chooseCard1.onclick = () => {
  if (!isSelected(chooseCard1) && cardCount<10){
    chooseCard1.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard1.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("BM")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard1.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("BM");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard1.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("BM");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard1.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("BM");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard1.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("BM");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard1.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("BM");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard1.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("BM");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard1.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("BM");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard1.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("BM");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard1.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("BM");
      }
  } else {
    chooseCard1.classList.remove("add-border");
    if(cardHand1.classList.contains("BM")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("BM")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("BM")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("BM")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("BM")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("BM")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("BM")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("BM")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("BM")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("BM")){
      flipCard(cardHand10);
    }
  }
};

chooseCard2.onclick = () => {
  if (!isSelected(chooseCard2) && cardCount<10){
    chooseCard2.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard2.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("EfaE")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard2.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("EfaE");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard2.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("EfaE");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard2.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("EfaE");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard2.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("EfaE");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard2.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("EfaE");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard2.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("EfaE");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard2.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("EfaE");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard2.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("EfaE");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard2.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("EfaE");
      }
  } else {
    chooseCard2.classList.remove("add-border");
    if(cardHand1.classList.contains("EfaE")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("EfaE")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("EfaE")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("EfaE")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("EfaE")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("EfaE")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("EfaE")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("EfaE")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("EfaE")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("EfaE")){
      flipCard(cardHand10);
    }
  }
};

chooseCard3.onclick = () => {
  if (!isSelected(chooseCard3) && cardCount<10){
    chooseCard3.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard3.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("GaG")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard3.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("GaG");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard3.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("GaG");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard3.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("GaG");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard3.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("GaG");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard3.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("GaG");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard3.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("GaG");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard3.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("GaG");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard3.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("GaG");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard3.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("GaG");
      }
  } else {
    chooseCard3.classList.remove("add-border");
    if(cardHand1.classList.contains("GaG")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("GaG")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("GaG")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("GaG")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("GaG")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("GaG")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("GaG")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("GaG")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("GaG")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("GaG")){
      flipCard(cardHand10);
    }
  }
};

chooseCard4.onclick = () => {
  if (!isSelected(chooseCard4) && cardCount<10){
    chooseCard4.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard4.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("LC")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard4.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("LC");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard4.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("LC");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard4.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("LC");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard4.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("LC");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard4.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("LC");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard4.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("LC");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard4.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("LC");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard4.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("LC");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard4.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("LC");
      }
  } else {
    chooseCard4.classList.remove("add-border");
    if(cardHand1.classList.contains("LC")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("LC")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("LC")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("LC")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("LC")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("LC")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("LC")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("LC")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("LC")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("LC")){
      flipCard(cardHand10);
    }
  }
};

chooseCard5.onclick = () => {
  if (!isSelected(chooseCard5) && cardCount<10){
    chooseCard5.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard5.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("OA")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard5.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("OA");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard5.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("OA");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard5.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("OA");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard5.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("OA");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard5.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("OA");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard5.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("OA");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard5.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("OA");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard5.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("OA");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard5.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("OA");
      }
  } else {
    chooseCard5.classList.remove("add-border");
    if(cardHand1.classList.contains("OA")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("OA")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("OA")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("OA")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("OA")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("OA")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("OA")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("OA")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("OA")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("OA")){
      flipCard(cardHand10);
    }
  }
};

chooseCard6.onclick = () => {
  if (!isSelected(chooseCard6) && cardCount<10){
    chooseCard6.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard6.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("PR")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard6.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("PR");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard6.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("PR");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard6.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("PR");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard6.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("PR");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard6.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("PR");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard6.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("PR");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard6.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("PR");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard6.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("PR");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard6.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("PR");
      }
  } else {
    chooseCard6.classList.remove("add-border");
    if(cardHand1.classList.contains("PR")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("PR")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("PR")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("PR")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("PR")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("PR")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("PR")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("PR")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("PR")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("PR")){
      flipCard(cardHand10);
    }
  }
};

chooseCard7.onclick = () => {
  if (!isSelected(chooseCard7) && cardCount<10){
    chooseCard7.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard7.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("SBash")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard7.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("SBash");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard7.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("SBash");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard7.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("SBash");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard7.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("SBash");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard7.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("SBash");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard7.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("SBash");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard7.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("SBash");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard7.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("SBash");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard7.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("SBash");
      }
  } else {
    chooseCard7.classList.remove("add-border");
    if(cardHand1.classList.contains("SBash")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("SBash")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("SBash")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("SBash")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("SBash")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("SBash")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("SBash")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("SBash")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("SBash")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("SBash")){
      flipCard(cardHand10);
    }
  }
};

chooseCard8.onclick = () => {
  if (!isSelected(chooseCard8) && cardCount<10){
    chooseCard8.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard8.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("Skewer")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard8.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("Skewer");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard8.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("Skewer");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard8.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("Skewer");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard8.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("Skewer");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard8.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("Skewer");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard8.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("Skewer");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard8.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("Skewer");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard8.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("Skewer");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard8.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("Skewer");
      }
  } else {
    chooseCard8.classList.remove("add-border");
    if(cardHand1.classList.contains("Skewer")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("Skewer")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("Skewer")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("Skewer")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("Skewer")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("Skewer")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("Skewer")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("Skewer")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("Skewer")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("Skewer")){
      flipCard(cardHand10);
    }
  }
};

chooseCard9.onclick = () => {
  if (!isSelected(chooseCard9) && cardCount<10){
    chooseCard9.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard9.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("SD")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard9.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("SD");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard9.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("SD");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard9.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("SD");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard9.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("SD");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard9.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("SD");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard9.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("SD");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard9.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("SD");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard9.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("SD");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard9.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("SD");
      }
  } else {
    chooseCard9.classList.remove("add-border");
    if(cardHand1.classList.contains("SD")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("SD")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("SD")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("SD")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("SD")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("SD")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("SD")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("SD")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("SD")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("SD")){
      flipCard(cardHand10);
    }
  }
};

chooseCard10.onclick = () => {
  if (!isSelected(chooseCard10) && cardCount<10){
    chooseCard10.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard10.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("SBlow")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard10.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("SBlow");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard10.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("SBlow");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard10.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("SBlow");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard10.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("SBlow");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard10.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("SBlow");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard10.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("SBlow");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard10.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("SBlow");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard10.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("SBlow");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard10.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("SBlow");
      }
  } else {
    chooseCard10.classList.remove("add-border");
    if(cardHand1.classList.contains("SBlow")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("SBlow")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("SBlow")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("SBlow")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("SBlow")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("SBlow")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("SBlow")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("SBlow")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("SBlow")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("SBlow")){
      flipCard(cardHand10);
    }
  }
};

chooseCard11.onclick = () => {
  if (!isSelected(chooseCard11) && cardCount<10){
    chooseCard11.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard11.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("Trample")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard11.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("Trample");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard11.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("Trample");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard11.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("Trample");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard11.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("Trample");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard11.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("Trample");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard11.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("Trample");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard11.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("Trample");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard11.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("Trample");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard11.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("Trample");
      }
  } else {
    chooseCard11.classList.remove("add-border");
    if(cardHand1.classList.contains("Trample")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("Trample")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("Trample")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("Trample")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("Trample")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("Trample")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("Trample")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("Trample")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("Trample")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("Trample")){
      flipCard(cardHand10);
    }
  }
};

chooseCard12.onclick = () => {
  if (!isSelected(chooseCard12) && cardCount<10){
    chooseCard12.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard12.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("WoD")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard12.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("WoD");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard12.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("WoD");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard12.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("WoD");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard12.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("WoD");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard12.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("WoD");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard12.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("WoD");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard12.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("WoD");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard12.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("WoD");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard12.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("WoD");
      }
  } else {
    chooseCard12.classList.remove("add-border");
    if(cardHand1.classList.contains("WoD")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("WoD")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("WoD")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("WoD")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("WoD")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("WoD")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("WoD")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("WoD")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("WoD")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("WoD")){
      flipCard(cardHand10);
    }
  }
};

chooseCard13.onclick = () => {
  if (!isSelected(chooseCard13) && cardCount<10){
    chooseCard13.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard13.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("WS")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard13.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("WS");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard13.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("WS");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard13.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("WS");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard13.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("WS");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard13.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("WS");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard13.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("WS");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard13.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("WS");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard13.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("WS");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard13.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("WS");
      }
  } else {
    chooseCard13.classList.remove("add-border");
    if(cardHand1.classList.contains("WS")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("WS")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("WS")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("WS")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("WS")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("WS")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("WS")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("WS")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("WS")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("WS")){
      flipCard(cardHand10);
    }
  }
};

chooseCard14.onclick = () => {
  if (!isSelected(chooseCard14) && cardCount<10){
    chooseCard14.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard14.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("FA")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard14.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("FA");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard14.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("FA");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard14.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("FA");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard14.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("FA");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard14.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("FA");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard14.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("FA");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard14.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("FA");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard14.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("FA");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard14.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("FA");
      }
  } else {
    chooseCard14.classList.remove("add-border");
    if(cardHand1.classList.contains("FA")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("FA")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("FA")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("FA")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("FA")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("FA")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("FA")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("FA")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("FA")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("FA")){
      flipCard(cardHand10);
    }
  }
};

chooseCard15.onclick = () => {
  if (!isSelected(chooseCard15) && cardCount<10){
    chooseCard15.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard15.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("Juggernaut")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard15.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("Juggernaut");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard15.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("Juggernaut");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard15.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("Juggernaut");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard15.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("Juggernaut");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard15.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("Juggernaut");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard15.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("Juggernaut");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard15.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("Juggernaut");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard15.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("Juggernaut");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard15.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("Juggernaut");
      }
  } else {
    chooseCard15.classList.remove("add-border");
    if(cardHand1.classList.contains("Juggernaut")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("Juggernaut")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("Juggernaut")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("Juggernaut")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("Juggernaut")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("Juggernaut")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("Juggernaut")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("Juggernaut")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("Juggernaut")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("Juggernaut")){
      flipCard(cardHand10);
    }
  }
};

chooseCard16.onclick = () => {
  if (!isSelected(chooseCard16) && cardCount<10){
    chooseCard16.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard16.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("BF")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard16.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("BF");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard16.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("BF");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard16.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("BF");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard16.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("BF");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard16.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("BF");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard16.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("BF");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard16.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("BF");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard16.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("BF");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard16.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("BF");
      }
  } else {
    chooseCard16.classList.remove("add-border");
    if(cardHand1.classList.contains("BF")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("BF")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("BF")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("BF")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("BF")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("BF")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("BF")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("BF")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("BF")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("BF")){
      flipCard(cardHand10);
    }
  }
};

chooseCard17.onclick = () => {
  if (!isSelected(chooseCard17) && cardCount<10){
    chooseCard17.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard17.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("HaC")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard17.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("HaC");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard17.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("HaC");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard17.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("HaC");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard17.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("HaC");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard17.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("HaC");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard17.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("HaC");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard17.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("HaC");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard17.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("HaC");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard17.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("HaC");
      }
  } else {
    chooseCard17.classList.remove("add-border");
    if(cardHand1.classList.contains("HaC")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("HaC")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("HaC")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("HaC")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("HaC")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("HaC")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("HaC")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("HaC")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("HaC")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("HaC")){
      flipCard(cardHand10);
    }
  }
};

chooseCard18.onclick = () => {
  if (!isSelected(chooseCard18) && cardCount<10){
    chooseCard18.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard18.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("DH")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard18.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("DH");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard18.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("DH");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard18.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("DH");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard18.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("DH");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard18.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("DH");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard18.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("DH");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard18.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("DH");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard18.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("DH");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard18.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("DH");
      }
  } else {
    chooseCard18.classList.remove("add-border");
    if(cardHand1.classList.contains("DH")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("DH")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("DH")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("DH")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("DH")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("DH")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("DH")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("DH")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("DH")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("DH")){
      flipCard(cardHand10);
    }
  }
};

chooseCard19.onclick = () => {
  if (!isSelected(chooseCard19) && cardCount<10){
    chooseCard19.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard19.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("UC")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard19.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("UC");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard19.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("UC");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard19.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("UC");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard19.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("UC");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard19.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("UC");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard19.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("UC");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard19.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("UC");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard19.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("UC");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard19.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("UC");
      }
  } else {
    chooseCard19.classList.remove("add-border");
    if(cardHand1.classList.contains("UC")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("UC")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("UC")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("UC")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("UC")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("UC")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("UC")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("UC")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("UC")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("UC")){
      flipCard(cardHand10);
    }
  }
};

chooseCard20.onclick = () => {
  if (!isSelected(chooseCard20) && cardCount<10){
    chooseCard20.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard20.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("SM")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard20.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("SM");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard20.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("SM");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard20.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("SM");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard20.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("SM");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard20.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("SM");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard20.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("SM");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard20.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("SM");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard20.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("SM");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard20.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("SM");
      }
  } else {
    chooseCard20.classList.remove("add-border");
    if(cardHand1.classList.contains("SM")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("SM")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("SM")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("SM")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("SM")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("SM")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("SM")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("SM")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("SM")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("SM")){
      flipCard(cardHand10);
    }
  }
};

chooseCard21.onclick = () => {
  if (!isSelected(chooseCard21) && cardCount<10){
    chooseCard21.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard21.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("Whirlwind")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard21.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("Whirlwind");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard21.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("Whirlwind");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard21.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("Whirlwind");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard21.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("Whirlwind");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard21.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("Whirlwind");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard21.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("Whirlwind");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard21.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("Whirlwind");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard21.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("Whirlwind");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard21.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("Whirlwind");
      }
  } else {
    chooseCard21.classList.remove("add-border");
    if(cardHand1.classList.contains("Whirlwind")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("Whirlwind")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("Whirlwind")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("Whirlwind")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("Whirlwind")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("Whirlwind")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("Whirlwind")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("Whirlwind")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("Whirlwind")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("Whirlwind")){
      flipCard(cardHand10);
    }
  }
};

chooseCard22.onclick = () => {
  if (!isSelected(chooseCard22) && cardCount<10){
    chooseCard22.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard22.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("IP")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard22.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("IP");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard22.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("IP");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard22.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("IP");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard22.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("IP");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard22.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("IP");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard22.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("IP");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard22.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("IP");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard22.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("IP");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard22.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("IP");
      }
  } else {
    chooseCard22.classList.remove("add-border");
    if(cardHand1.classList.contains("IP")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("IP")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("IP")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("IP")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("IP")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("IP")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("IP")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("IP")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("IP")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("IP")){
      flipCard(cardHand10);
    }
  }
};

chooseCard23.onclick = () => {
  if (!isSelected(chooseCard23) && cardCount<10){
    chooseCard23.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard23.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("Quietus")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard23.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("Quietus");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard23.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("Quietus");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard23.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("Quietus");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard23.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("Quietus");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard23.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("Quietus");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard23.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("Quietus");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard23.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("Quietus");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard23.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("Quietus");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard23.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("Quietus");
      }
  } else {
    chooseCard23.classList.remove("add-border");
    if(cardHand1.classList.contains("Quietus")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("Quietus")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("Quietus")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("Quietus")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("Quietus")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("Quietus")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("Quietus")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("Quietus")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("Quietus")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("Quietus")){
      flipCard(cardHand10);
    }
  }
};

chooseCard24.onclick = () => {
  if (!isSelected(chooseCard24) && cardCount<10){
    chooseCard24.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard24.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("CO")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard24.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("CO");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard24.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("CO");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard24.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("CO");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard24.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("CO");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard24.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("CO");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard24.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("CO");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard24.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("CO");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard24.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("CO");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard24.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("CO");
      }
  } else {
    chooseCard24.classList.remove("add-border");
    if(cardHand1.classList.contains("CO")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("CO")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("CO")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("CO")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("CO")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("CO")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("CO")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("CO")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("CO")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("CO")){
      flipCard(cardHand10);
    }
  }
};

chooseCard25.onclick = () => {
  if (!isSelected(chooseCard25) && cardCount<10){
    chooseCard25.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard25.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("DT")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard25.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("DT");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard25.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("DT");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard25.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("DT");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard25.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("DT");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard25.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("DT");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard25.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("DT");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard25.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("DT");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard25.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("DT");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard25.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("DT");
      }
  } else {
    chooseCard25.classList.remove("add-border");
    if(cardHand1.classList.contains("DT")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("DT")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("DT")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("DT")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("DT")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("DT")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("DT")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("DT")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("DT")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("DT")){
      flipCard(cardHand10);
    }
  }
};

chooseCard26.onclick = () => {
  if (!isSelected(chooseCard26) && cardCount<10){
    chooseCard26.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard26.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("FO")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard26.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("FO");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard26.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("FO");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard26.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("FO");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard26.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("FO");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard26.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("FO");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard26.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("FO");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard26.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("FO");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard26.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("FO");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard26.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("FO");
      }
  } else {
    chooseCard26.classList.remove("add-border");
    if(cardHand1.classList.contains("FO")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("FO")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("FO")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("FO")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("FO")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("FO")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("FO")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("FO")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("FO")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("FO")){
      flipCard(cardHand10);
    }
  }
};

chooseCard27.onclick = () => {
  if (!isSelected(chooseCard27) && cardCount<10){
    chooseCard27.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard27.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("SR")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard27.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("SR");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard27.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("SR");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard27.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("SR");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard27.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("SR");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard27.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("SR");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard27.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("SR");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard27.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("SR");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard27.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("SR");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard27.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("SR");
      }
  } else {
    chooseCard27.classList.remove("add-border");
    if(cardHand1.classList.contains("SR")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("SR")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("SR")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("SR")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("SR")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("SR")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("SR")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("SR")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("SR")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("SR")){
      flipCard(cardHand10);
    }
  }
};

chooseCard28.onclick = () => {
  if (!isSelected(chooseCard28) && cardCount<10){
    chooseCard28.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard28.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("FYE")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard28.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("FYE");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard28.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("FYE");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard28.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("FYE");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard28.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("FYE");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard28.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("FYE");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard28.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("FYE");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard28.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("FYE");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard28.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("FYE");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard28.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("FYE");
      }
  } else {
    chooseCard28.classList.remove("add-border");
    if(cardHand1.classList.contains("FYE")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("FYE")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("FYE")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("FYE")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("FYE")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("FYE")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("FYE")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("FYE")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("FYE")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("FYE")){
      flipCard(cardHand10);
    }
  }
};

chooseCard29.onclick = () => {
  if (!isSelected(chooseCard29) && cardCount<10){
    chooseCard29.classList.add("add-border");
    cardCount++;
    cardCounter.innerHTML = cardCount + "/10";
    if(cardHand1.classList.contains("flipped")){
        cardHand1.src = chooseCard29.src;
        cardHand1.classList.remove("flipped");
        cardHand1.classList.add("KotH")
      } else if (cardHand2.classList.contains("flipped")){
        cardHand2.src = chooseCard29.src;
        cardHand2.classList.remove("flipped");
        cardHand2.classList.add("KotH");
      } else if (cardHand3.classList.contains("flipped")){
        cardHand3.src = chooseCard29.src;
        cardHand3.classList.remove("flipped");
        cardHand3.classList.add("KotH");
      } else if (cardHand4.classList.contains("flipped")){
        cardHand4.src = chooseCard29.src;
        cardHand4.classList.remove("flipped");
        cardHand4.classList.add("KotH");
      } else if (cardHand5.classList.contains("flipped")){
        cardHand5.src = chooseCard29.src;
        cardHand5.classList.remove("flipped");
        cardHand5.classList.add("KotH");
      } else if (cardHand6.classList.contains("flipped")){
        cardHand6.src = chooseCard29.src;
        cardHand6.classList.remove("flipped");
        cardHand6.classList.add("KotH");
      } else if (cardHand7.classList.contains("flipped")){
        cardHand7.src = chooseCard29.src;
        cardHand7.classList.remove("flipped");
        cardHand7.classList.add("KotH");
      } else if (cardHand8.classList.contains("flipped")){
        cardHand8.src = chooseCard29.src;
        cardHand8.classList.remove("flipped");
        cardHand8.classList.add("KotH");
      } else if (cardHand9.classList.contains("flipped")){
        cardHand9.src = chooseCard29.src;
        cardHand9.classList.remove("flipped");
        cardHand9.classList.add("KotH");
      } else if (cardHand10.classList.contains("flipped")){
        cardHand10.src = chooseCard29.src;
        cardHand10.classList.remove("flipped");
        cardHand10.classList.add("KotH");
      }
  } else {
    chooseCard29.classList.remove("add-border");
    if(cardHand1.classList.contains("KotH")){
      flipCard(cardHand1);
    } else if (cardHand2.classList.contains("KotH")){
      flipCard(cardHand2);
    } else if (cardHand3.classList.contains("KotH")){
      flipCard(cardHand3);
    } else if (cardHand4.classList.contains("KotH")){
      flipCard(cardHand4);
    } else if (cardHand5.classList.contains("KotH")){
      flipCard(cardHand5);
    } else if (cardHand6.classList.contains("KotH")){
      flipCard(cardHand6);
    } else if (cardHand7.classList.contains("KotH")){
      flipCard(cardHand7);
    } else if (cardHand8.classList.contains("KotH")){
      flipCard(cardHand8);
    } else if (cardHand9.classList.contains("KotH")){
      flipCard(cardHand9);
    } else if (cardHand10.classList.contains("KotH")){
      flipCard(cardHand10);
    }
  }
};


cardHand1.onclick = () => {
  if(!isSelected(cardHand1) && handChosen === true && cardCount<2 && !isFlipped(cardHand1) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand1.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand1)){
    cardHand1.classList.remove("add-border");
    cardCount--;
  }
  };

cardHand2.onclick = () => {
  if(!isSelected(cardHand2) && handChosen === true && cardCount<2 && !isFlipped(cardHand2) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand2.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand2)){
    cardHand2.classList.remove("add-border");
    cardCount--;
  }
};

cardHand3.onclick = () => {
  if(!isSelected(cardHand3) && handChosen === true && cardCount<2 && !isFlipped(cardHand3) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand3.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand3)){
    cardHand3.classList.remove("add-border");
    cardCount--;
  }
};

cardHand4.onclick = () => {
  if(!isSelected(cardHand4) && handChosen === true && cardCount<2 && !isFlipped(cardHand4) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand4.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand4)){
    cardHand4.classList.remove("add-border");
    cardCount--;
  }
};

cardHand5.onclick = () => {
  if(!isSelected(cardHand5) && handChosen === true && cardCount<2 && !isFlipped(cardHand5) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand5.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand5)){
    cardHand5.classList.remove("add-border");
    cardCount--;
  }
};

cardHand6.onclick = () => {
  if(!isSelected(cardHand6) && handChosen === true && cardCount<2 && !isFlipped(cardHand6) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand6.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand6)){
    cardHand6.classList.remove("add-border");
    cardCount--;
  }
  };

cardHand7.onclick = () => {
  if(!isSelected(cardHand7) && handChosen === true && cardCount<2 && !isFlipped(cardHand7) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand7.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand7)){
    cardHand7.classList.remove("add-border");
    cardCount--;
  }
};

cardHand8.onclick = () => {
  if(!isSelected(cardHand8) && handChosen === true && cardCount<2 && !isFlipped(cardHand8) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand8.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand8)){
    cardHand8.classList.remove("add-border");
    cardCount--;
  }
};

cardHand9.onclick = () => {
  if(!isSelected(cardHand9) && handChosen === true && cardCount<2 && !isFlipped(cardHand9) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand9.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand9)){
    cardHand9.classList.remove("add-border");
    cardCount--;
  }
};

cardHand10.onclick = () => {
  if(!isSelected(cardHand10) && handChosen === true && cardCount<2 && !isFlipped(cardHand10) && isFlipped(chosenCard1) && isFlipped(chosenCard2)){
    cardHand10.classList.add("add-border");
    cardCount++;
  } else if (isSelected(cardHand10)){
    cardHand10.classList.remove("add-border");
    cardCount--;
  }
};

discard1.onclick = () => {
  if(!isSelected(discard1)){
    discard1.classList.add("discard-selected");
  } else {
    discard1.classList.remove("discard-selected");
  }
};

discard2.onclick = () => {
  if(!isSelected(discard2)){
    discard2.classList.add("discard-selected");
  } else {
    discard2.classList.remove("discard-selected");
  }
};

discard3.onclick = () => {
  if(!isSelected(discard3)){
    discard3.classList.add("discard-selected");
  } else {
    discard3.classList.remove("discard-selected");
  }
};

discard4.onclick = () => {
  if(!isSelected(discard4)){
    discard4.classList.add("discard-selected");
  } else {
    discard4.classList.remove("discard-selected");
  }
};

discard5.onclick = () => {
  if(!isSelected(discard5)){
    discard5.classList.add("discard-selected");
  } else {
    discard5.classList.remove("discard-selected");
  }
};

discard6.onclick = () => {
  if(!isSelected(discard6)){
    discard6.classList.add("discard-selected");
  } else {
    discard6.classList.remove("discard-selected");
  }
};

discard7.onclick = () => {
  if(!isSelected(discard7)){
    discard7.classList.add("discard-selected");
  } else {
    discard7.classList.remove("discard-selected");
  }
};

discard8.onclick = () => {
  if(!isSelected(discard8)){
    discard8.classList.add("discard-selected");
  } else {
    discard8.classList.remove("discard-selected");
  }
};

discard9.onclick = () => {
  if(!isSelected(discard9)){
    discard9.classList.add("discard-selected");
  } else {
    discard9.classList.remove("discard-selected");
  }
};

discard10.onclick = () => {
  if(!isSelected(discard10)){
    discard10.classList.add("discard-selected");
  } else {
    discard10.classList.remove("discard-selected");
  }
};


active1.onclick = () => {
  if(!isSelected(active1)){
    active1.classList.add("active-selected");
  } else {
    active1.classList.remove("active-selected");
  }
};

active2.onclick = () => {
  if(!isSelected(active2)){
    active2.classList.add("active-selected");
  } else {
    active2.classList.remove("active-selected");
  }
};

active3.onclick = () => {
  if(!isSelected(active3)){
    active3.classList.add("active-selected");
  } else {
    active3.classList.remove("active-selected");
  }
};

active4.onclick = () => {
  if(!isSelected(active4)){
    active4.classList.add("active-selected");
  } else {
    active4.classList.remove("active-selected");
  }
};

active5.onclick = () => {
  if(!isSelected(active5)){
    active5.classList.add("active-selected");
  } else {
    active5.classList.remove("active-selected");
  }
};

active6.onclick = () => {
  if(!isSelected(active6)){
    active6.classList.add("active-selected");
  } else {
    active6.classList.remove("active-selected");
  }
};

lost1.onclick = () => {
  if(!isSelected(lost1)){
    lost1.classList.add("lost-selected");
  } else {
    lost1.classList.remove("lost-selected");
  }
};

lost2.onclick = () => {
  if(!isSelected(lost2)){
    lost2.classList.add("lost-selected");
  } else {
    lost2.classList.remove("lost-selected");
  }
};

lost3.onclick = () => {
  if(!isSelected(lost3)){
    lost3.classList.add("lost-selected");
  } else {
    lost3.classList.remove("lost-selected");
  }
};

lost4.onclick = () => {
  if(!isSelected(lost4)){
    lost4.classList.add("lost-selected");
  } else {
    lost4.classList.remove("lost-selected");
  }
};

lost5.onclick = () => {
  if(!isSelected(lost5)){
    lost5.classList.add("lost-selected");
  } else {
    lost5.classList.remove("lost-selected");
  }
};

lost6.onclick = () => {
  if(!isSelected(lost6)){
    lost6.classList.add("lost-selected");
  } else {
    lost6.classList.remove("lost-selected");
  }
};

lost7.onclick = () => {
  if(!isSelected(lost7)){
    lost7.classList.add("lost-selected");
  } else {
    lost7.classList.remove("lost-selected");
  }
};

lost8.onclick = () => {
  if(!isSelected(lost8)){
    lost8.classList.add("lost-selected");
  } else {
    lost8.classList.remove("lost-selected");
  }
};

lost9.onclick = () => {
  if(!isSelected(lost9)){
    lost9.classList.add("lost-selected");
  } else {
    lost9.classList.remove("lost-selected");
  }
};

lost10.onclick = () => {
  if(!isSelected(lost10)){
    lost10.classList.add("lost-selected");
  } else {
    lost10.classList.remove("lost-selected");
  }
};
