var userCash = 100;

var fruitBasket;
var applesBought = [];
var totalApples = 0;
var orangesBought = [];
var totalOranges = 0;
var bananasBought = [];
var totalBananas = 0;
var pearsBought = [];
var totalPears = 0;
var apple = {name:"Apples", price:randomNumber(0.5, 9.5)};
var orange = {name:"Oranges", price:randomNumber(0.5, 9.5)};
var banana = {name:"Bananas", price:randomNumber(0.5, 9.5)};
// var grape = {name:"Grapes", price:randomNumber(0.5, 9.5)};
var pear = {name:"Pears", price:randomNumber(0.5, 9.5)};
var market =[apple, orange, banana, pear];
var averageApplePrice = 0;
var averageBananaPrice = 0;
var averageOrangePrice = 0;
var averagePearPrice = 0;
var killBananaExchange = setInterval(function(){minneapolisBananaExchange()}, 15000);
var counter = 1;

function appleBuy(apple){
	var currentApplePrice = parseInt(apple.price);
	applesBought.push(currentApplePrice);
	if(currentApplePrice>userCash){
		alert("You are pathetic.  You can't even afford an apple!");
	}
	else{
		userCash-= (apple.price);
		totalApples++;
	}
}

function orangeBuy(orange){
	var currentOrangePrice = parseInt(orange.price);
	orangesBought.push(currentOrangePrice);
	if(currentOrangePrice>userCash){
		alert("You are pathetic.  You can't even afford an orange!");
	}
	else{
		userCash-= (orange.price);
		totalOranges++;
	}
}

function bananaBuy(banana){
	var currentBananaPrice = parseInt(banana.price);
	bananasBought.push(currentBananaPrice);
	if(currentBananaPrice>userCash){
		alert("You are pathetic.  You can't even afford a nanner!");
	}
	else{
		userCash-= (banana.price);
		totalBananas++;
	}
}

function pearBuy(pear){
	var currentPearPrice = parseInt(pear.price);
	pearsBought.push(currentPearPrice);
	if(currentPearPrice>userCash){
		alert("You are pathetic.  You can't even afford a pear!");
	}
	else{
		userCash-= (pear.price);
		totalPears++;
	}
}

function variatePrice (fruitTray) {
	var upDown = randomNumber(1, 2);
	for (var i = 0; i < fruitTray.length; i++) {
		if (fruitTray[i].price >= 9.5) {
			fruitTray[i].price -= 0.5;
			upDown = randomNumber(1, 2);
		} else if (fruitTray[i].price <= 0.5) {
			fruitTray[i].price += 0.5;
			upDown = randomNumber(1, 2);
		} else if (upDown === 2) {
			fruitTray[i].price -= 0.5;
			upDown = randomNumber(1, 2);
		} else {
			fruitTray[i].price += 0.5;
		}
	}
}//function that controls the price variation

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}//generic random math function

function youBoughtFruit (event) {
	$(".moniesAndFruit").children().remove();
	$(".moniesAndFruit").append("<p>Available Cash: $"+userCash+"</p>");
	$(".moniesAndFruit").append("<p>Apples: "+ totalApples+"</p>");
	$(".moniesAndFruit").append("<p>ApplesAverage: $"+ averageApplePrice + "</p>");
	$(".moniesAndFruit").append("<p>Oranges: "+totalOranges+"</p>");
	$(".moniesAndFruit").append("<p>OrangesAverage: $"+ averageOrangePrice + "</p>");
	$(".moniesAndFruit").append("<p>Bananas: "+totalBananas+"</p>");
	$(".moniesAndFruit").append("<p>BananasAverage: $" + averageBananaPrice + "</p>");
	$(".moniesAndFruit").append("<p>Pears: "+totalPears+"</p>");
	$(".moniesAndFruit").append("<p>PearsAverage: $"+averagePearPrice+"</p>");
}//appends cash/fruit totals after each fruit purchase

function averageFruitPrice (fruitArray) {
	var fruitAverageFixed = 0;
	var fruitAverage = 0;
	var fruitSum = 0;
	for (var i = 0; i < fruitArray.length; i++) {
		fruitSum += fruitArray[i];
	}
	fruitAverage = fruitSum/(fruitArray.length);
	fruitAverageFixed = fruitAverage.toFixed(2);
	return fruitAverageFixed;
}//average fruit price

function minneapolisBananaExchange () {
	var fruitbasket;
	variatePrice(market);
	appendPrice();
	if(counter == 20) {//counter should be 20 (15 secs x 20 = 5 minutes)
    	clearInterval(killBananaExchange);
    	alert("FRUITSPLOSION!!!1!!O!NE!");
    	fruitsplosion();
  	} else {
    	counter++;
    	console.log(counter);
	}
}

function fruitsplosion () {
	userCash = userCash + (totalApples * apple.price) + (totalOranges * orange.price) + (totalBananas * banana.price) + (totalPears * pear.price);
	console.log(userCash);
	totalApples = 0;
	totalOranges = 0;
	totalBananas = 0;
	totalPears = 0;
	appendPrice();
	youBoughtFruit();
}

function appendPrice (event) {
	
	$(".appleDiv").children().remove();
	$(".appleDiv").append("<p>"+apple.name+": $"+apple.price+"</p>");
	$(".appleDiv").append("<button class=buyApple>Buy One Apple</button>");
	$(".appleDiv").append("<button class=sellApple>Sell One Apple</button>");
	$(".orangeDiv").children().remove();
	$(".orangeDiv").append("<p>"+orange.name+": $"+orange.price+"</p>");
	$(".orangeDiv").append("<button class=buyOrange>Buy One Orange</button>");
	$(".orangeDiv").append("<button class=sellOrange>Sell One Orange</button>");
	$(".bananaDiv").children().remove();
	$(".bananaDiv").append("<p>"+banana.name+": $"+banana.price+"</p>");
	$(".bananaDiv").append("<button class=buyBanana>Buy One Banana</button>");
	$(".bananaDiv").append("<button class=sellBanana>Sell One Banana</button>");
	// $(".fruitBasket").append("<p>"+grape.name+": $"+grape.price+"</p>");
	$(".pearDiv").children().remove();
	$(".pearDiv").append("<p>"+pear.name+": $"+pear.price+"</p>");
	$(".pearDiv").append("<button class=buyPear>Buy One Pear</button>");
	$(".pearDiv").append("<button class=sellPear>Sell One Pear</button>");

}//function appends Cash/

$(document).ready(function(){
	minneapolisBananaExchange();
	appendPrice();
	youBoughtFruit();	
	
$("body").on('click', '.buyApple', function(){
	youBoughtFruit();
	appleBuy(apple);
	averageApplePrice = averageFruitPrice(applesBought);
	console.log("you bought an apple!");	
});//end buy apple

$("body").on('click', '.sellApple', function(){
	if (totalApples <= 0) {
		alert("You has none!")
	} else {
		totalApples--;
		userCash += apple.price;
	}
	youBoughtFruit();
	console.log("you sold an apple!");	
});//end sell apple

$("body").on('click', '.buyOrange', function(){
	youBoughtFruit();
	orangeBuy(orange);
	averageOrangePrice = averageFruitPrice(orangesBought);
	console.log("you bought an orange!");	
});//end buy orange

$("body").on('click', '.sellOrange', function(){
	if (totalOranges <= 0) {
		alert("You has none!")
	} else {
		totalOranges--;
		userCash += orange.price;
	}
	youBoughtFruit();
	console.log("you sold an Orange!");	
});//end sell orange

$("body").on('click', '.buyBanana', function(){
	youBoughtFruit();
	bananaBuy(banana);
	averageBananaPrice = averageFruitPrice(bananasBought);
	console.log("you bought a banana!");	
});//end buy banana

$("body").on('click', '.sellBanana', function(){
	if (totalBananas <= 0) {
		alert("You has none!")
	} else {
		totalBananas--;
		userCash += banana.price;
	}
	youBoughtFruit();
	console.log("you're Bananas!");	
});//end sell banana

$("body").on('click', '.buyPear', function(){
	youBoughtFruit();
	pearBuy(pear);
	averagePearPrice = averageFruitPrice(pearsBought);
	console.log("you bought a pear!");	
});//end buy pear

$("body").on('click', '.sellPear', function(){
	if (totalPears <= 0) {
		alert("You has none!")
	} else {
		totalPears--;
		userCash += pear.price;
	}
	youBoughtFruit();
	console.log("you sold a Pear!");	
});//end sell pear
		
});//end document ready