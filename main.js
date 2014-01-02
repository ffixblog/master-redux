/**
 * Created by caseyrock on 12/13/13.
 */
//
//  main.js
//  Master Redux
//
//  Created by Casey Rock on 11/13/13.
//  Copyright (c) 2013 Casey Rock. All rights reserved.

//=============================================================================
// Card Object
//=============================================================================

//-----------------------------------------------------------------------------
// Card constructor
//-----------------------------------------------------------------------------

function Card(ID) {

    this.ID = ID;
    this.dead = false;
    this.empty = false;

    switch(ID){
        case "00":
            this.name = "Goblin";
            this.atk = 0;
            this.atkType = 'p';
            this.pDef = 0;
            this.mDef = 0;
            break;
        case "55":
            this.name = "FatBird";
            this.atk = 5;
            this.atkType = 'X';
            this.pDef = 5;
            this.mDef = 5;
            break;
        case "99":
            this.name = "DragonKing";
            this.atk = 9;
            this.atkType = 'A';
            this.pDef = 9;
            this.mDef = 9;
            break;

    }

    this.toString   = cardToString;
    this.createNode = cardCreateNode;
}

//-----------------------------------------------------------------------------
// cardToString(): Returns the name of a card as a text string.
//-----------------------------------------------------------------------------

function cardToString() {

    var ID, name, atk, atkType, pDef, mDef;

    switch (this.ID) {
        case "00" :
            name = "Goblin";
            atk = "0";
            atkType = "p";
            pDef = "0";
            mDef = "0";
            break;
        case "55" :
            name = "FatBird";
            atk = "5";
            atkType = "X";
            pDef = "5";
            mDef = "5";
            break;
        case "99" :
            name = "DragonKing";
            atk = "9";
            atkType = "A";
            pDef = "9";
            mDef = "9";
            break;
        default :
            ID = null;
            break;
    }

    if (ID === null)
        return "";

    return "ID: " + ID + "\n" + "Name: " + name + "\n" + "Attack Power: " + atk + "\n" + "Attack Type: " + atkType + "\n" + "Physical Defense: " + pDef + "\n" + "Magical Defense: " + mDef;
}

//-----------------------------------------------------------------------------
// cardCreateNode(): Returns a DIV node which can be used to display the card
// on a page.
//-----------------------------------------------------------------------------

var cardBack = new Image(); cardBack.src= "images/cardback.png";
var goblinImg = new Image(); goblinImg.src= "images/goblin.gif";
var fatBirdImg = new Image(); fatBirdImg.src= "images/zemzelett.gif";
var dragonKingImg = new Image(); dragonKingImg.src= "images/dragonking.gif";

function cardCreateNode() {

    var cardNode, frontNode, indexNode, spotNode, tempNode, textNode;
    var atk, atkType, pDef, mDef, arrowChar;

    // This is the main node, a DIV tag.

    cardNode = document.createElement("DIV");
    cardNode.className = "card";

    // Build the front of card.

    frontNode = document.createElement("DIV");
    frontNode.className = "front";


    // Create and add the Attack Power, Attack Type, Physical Defense, and Magical Defense of the card.

    indexAtk = this.atk;
    indexAtkType = this.atkType;
    indexPDef = this.pDef;
    indexMDef = this.mDef;
    if (this.toString() == "")
        indexAtk = "\u00a0";
    spotNode = document.createElement("DIV");
    spotNode.className = "index";
    textNode = document.createTextNode(indexAtk+indexAtkType+indexPDef+indexMDef);
    spotNode.appendChild(textNode);
    spotNode.appendChild(document.createElement("BR"));
    textNode = document.createTextNode(arrowChar);
    spotNode.appendChild(textNode);
    frontNode.appendChild(spotNode);

    //Create and add the proper image.

    tempNode = document.createElement("IMG");
    tempNode.className = "face";
    if (this.ID == 00)
        tempNode.src = "images/goblin.gif";
    if (this.ID == 55)
        tempNode.src = "images/zemzelett.gif";
    if (this.ID == 99)
        tempNode.src = "images/dragonking.gif";

    frontNode.appendChild(tempNode);

    // Add front node to the card node.

    cardNode.appendChild(frontNode);

    // Return the card node.

    return cardNode;
}


// Create and add arrows randomly to the card.
/*
 spotNode = document.createElement("DIV");
 textNode = document.createTextNode(arrowChar);
 spotNode.appendChild(textNode);
 if (this.rank == "A") {
 spotNode.className = "ace";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }
 if (this.rank == "3" || this.rank == "5" || this.rank == "9") {
 spotNode.className = "spotB3";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }
 if (this.rank == "2" || this.rank == "3") {
 spotNode.className = "spotB1";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }
 if (this.rank == "2" || this.rank == "3") {
 spotNode.className = "spotB5";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }
 if (this.rank == "4" || this.rank == "5" || this.rank == "6" ||
 this.rank == "7" || this.rank == "8" || this.rank == "9" ||
 this.rank == "10") {
 spotNode.className = "spotA1";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 spotNode.className = "spotA5";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 spotNode.className = "spotC1";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 spotNode.className = "spotC5";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }
 if (this.rank == "6" || this.rank == "7" || this.rank == "8") {
 spotNode.className = "spotA3";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 spotNode.className = "spotC3";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }
 if (this.rank == "7" || this.rank == "8" || this.rank == "10") {
 spotNode.className = "spotB2";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }
 if (this.rank == "8" || this.rank == "10") {
 spotNode.className = "spotB4";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }
 if (this.rank == "9" || this.rank == "10") {
 spotNode.className = "spotA2";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 spotNode.className = "spotA4";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 spotNode.className = "spotC2";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 spotNode.className = "spotC4";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }



 // For face cards, add suit characters to the upper-left and lower-right
 // corners.

 if (this.rank == "J" || this.rank == "Q" || this.rank == "K") {
 frontNode.appendChild(tempNode);
 spotNode.className = "spotA1";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 spotNode.className = "spotC5";
 tempNode = spotNode.cloneNode(true);
 frontNode.appendChild(tempNode);
 }


 }

 //=============================================================================
 // Stack Object
 //=============================================================================

 //-----------------------------------------------------------------------------
 // Stack constructor function.
 //-----------------------------------------------------------------------------

 function Stack() {

 // Create an empty array of cards.

 this.cards = new Array();

 this.makeDeck  = stackMakeDeck;
 this.shuffle   = stackShuffle;
 this.deal      = stackDeal;
 this.draw      = stackDraw;
 this.addCard   = stackAddCard;
 this.combine   = stackCombine;
 this.cardCount = stackCardCount;
 }

 //-----------------------------------------------------------------------------
 // stackMakeDeck(n): Initializes a stack using 'n' packs of cards.
 //-----------------------------------------------------------------------------

 function stackMakeDeck(n) {

 var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
 var suits = new Array("C", "D", "H", "S");
 var i, j, k;
 var m;

 m = ranks.length * suits.length;

 // Set array of cards.

 this.cards = new Array(n * m);

 // Fill the array with 'n' packs of cards.

 for (i = 0; i < n; i++)
 for (j = 0; j < suits.length; j++)
 for (k = 0; k < ranks.length; k++)
 this.cards[i * m + j * ranks.length + k] = new Card(ranks[k], suits[j]);
 }

 //-----------------------------------------------------------------------------
 // stackShuffle(n): Shuffles a stack of cards 'n' times.
 //-----------------------------------------------------------------------------

 function stackShuffle(n) {

 var i, j, k;
 var temp;

 // Shuffle the stack 'n' times.

 for (i = 0; i < n; i++)
 for (j = 0; j < this.cards.length; j++) {
 k = Math.floor(Math.random() * this.cards.length);
 temp = this.cards[j];
 this.cards[j] = this.cards[k];
 this.cards[k] = temp;
 }
 }

 //-----------------------------------------------------------------------------
 // stackDeal(): Removes the first card in the stack and returns it.
 //-----------------------------------------------------------------------------

 function stackDeal() {

 if (this.cards.length > 0)
 return this.cards.shift();
 else
 return null;
 }

 //-----------------------------------------------------------------------------
 // stackDraw(n): Removes the indicated card from the stack and returns it.
 //-----------------------------------------------------------------------------

 function stackDraw(n) {

 var card;

 if (n >= 0 && n < this.cards.length) {
 card = this.cards[n];
 this.cards.splice(n, 1);
 }
 else
 card = null;

 return card;
 }

 //-----------------------------------------------------------------------------
 // stackAdd(card): Adds the given card to the stack.
 //-----------------------------------------------------------------------------

 function stackAddCard(card) {

 this.cards.push(card);
 }

 //-----------------------------------------------------------------------------
 // stackCombine(stack): Adds the cards in the given stack to the current one.
 // The given stack is emptied.
 //-----------------------------------------------------------------------------

 function stackCombine(stack) {

 this.cards = this.cards.concat(stack.cards);
 stack.cards = new Array();
 }

 //-----------------------------------------------------------------------------
 // stackCardCount(): Returns the number of cards currently in the stack.
 //-----------------------------------------------------------------------------

 function stackCardCount() {

 return this.cards.length;
 }
 */