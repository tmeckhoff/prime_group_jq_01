var userCash = 100;

var applesBought = [];
var totalApples = applesBought.length;
var orangesBought = [];
var totalOranges = orangesBought.length;
var bananasBought = [];
var totalBananas = bananasBought.length;
var pearsBought = [];
var totalPears = pearsBought.length;
var apple = {name:"Apples", price:randomNumber(0.5, 9.5)};
var orange = {name:"Oranges", price:randomNumber(0.5, 9.5)};
var banana = {name:"Bananas", price:randomNumber(0.5, 9.5)};
// var grape = {name:"Grapes", price:randomNumber(0.5, 9.5)};
var pear = {name:"Pears", price:randomNumber(0.5, 9.5)};
var market =[apple, orange, banana, pear];

function appleClick(apple){
	var currentApplePrice = parseInt(apple.price);
	//applesBought.push(apple.price);
	if(currentApplePrice>userCash){
		alert("You are pathetic.  You can't even afford an apple!");
	}
	else{
		userCash-= (apple.price);
		applesBought++;
	}
	
	console.log("user cash"+userCash);
	console.log("apples bought" +applesBought);
	console.log("currentApplePrice"+currentApplePrice);
	//applesBought.push(currentApplePrice);
}

function orangeClick(orange){
	var currentOrangePrice = parseInt(orange.price);
	//applesBought.push(apple.price);
	if(currentOrangePrice>userCash){
		alert("You are pathetic.  You can't even afford an orange!");
	}
	else{
		userCash-= (orange.price);
		orangesBought++;
	}
	console.log("user cash"+userCash);
	console.log("oranges bought" +orangesBought);
	console.log("currentorangePrice"+currentOrangePrice);
	//applesBought.push(currentApplePrice);
}

function bananaClick(banana){
	var currentBananaPrice = parseInt(banana.price);
	//applesBought.push(apple.price);
	if(currentBananaPrice>userCash){
		alert("You are pathetic.  You can't even afford a banana!");
	}
	else{
		userCash-= (banana.price);
		bananasBought++;
	}
	console.log("user cash"+userCash);
	console.log("bananas bought" +bananasBought);
	console.log("currentBananaPrice"+currentBananaPrice);
	//applesBought.push(currentApplePrice);
}

function pearClick(pear){
	var currentPearPrice = parseInt(pear.price);
	//applesBought.push(apple.price);
	if(currentPearPrice>userCash){
		alert("You are pathetic.  You can't even afford a pear!");
	}
	else{
		userCash-= (pear.price);
		pearsBought++;
	}
	console.log("user cash"+userCash);
	console.log("pears bought" +pearsBought);
	console.log("currentpearPrice"+currentPearPrice);
	//applesBought.push(currentApplePrice);
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
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


$(document).ready(function(){
	setInterval(function(){
		variatePrice(market);
		console.log("apple" +apple.price);
		console.log("orange" +orange.price);

	//$("div").remove(".fruitClass");

	//$("body").append("<div></div>");
	// var fruitBasket = ("<div/>", {
	// 	class: "fruitClass"
	// });
	var fruitBasket;

	// var $el = $("body").children().last();
	$(".fruitBasket").children().remove();
	$(".fruitBasket").append("<p>"+apple.name+": $"+apple.price+"</p>");
	$(".fruitBasket").append("<button class=buyApple>Buy One Apple</button>");
	$(".fruitBasket").append("<p>"+orange.name+": $"+orange.price+"</p>");
	$(".fruitBasket").append("<button class=buyOrange>Buy One Orange</button>");
	$(".fruitBasket").append("<p>"+banana.name+": $"+banana.price+"</p>");
	$(".fruitBasket").append("<button class=buyBanana>Buy One Banana</button>");
	// $(".fruitBasket").append("<p>"+grape.name+": $"+grape.price+"</p>");
	$(".fruitBasket").append("<p>"+pear.name+": $"+pear.price+"</p>");
	$(".fruitBasket").append("<button class=buyPear>Buy One Pear</button>");
	
	$(".fruitBasket").append("<p>Available Cash: $"+userCash+"</p>");

	$("fruitDiv").append(fruitBasket);

	
	}, 2000);

	
$("body").on('click', '.buyApple', function(){
	console.log("click worked");
	appleClick(apple);
	console.log("you bought an apple!");	
});

$("body").on('click', '.buyOrange', function(){
	console.log("click worked");
	orangeClick(orange);
	console.log("you bought an orange!");	
});

$("body").on('click', '.buyBanana', function(){
	console.log("click worked");
	bananaClick(banana);
	console.log("you bought a banana!");	
});

$("body").on('click', '.buyPear', function(){
	console.log("click worked");
	pearClick(pear);
	console.log("you bought a pear!");	
});
	
	
});//end document ready




// function randomNumber(min, max) {
// 	var priceNow = (Math.floor((Math.random() * (1 + max - min) + min)*100))/100;
// 	return priceNow;
// }

	//var fruit = {"Apples", "Oranges", "Bananas", "Grapes", "Pears"};
	// var userCash = 100;

	// function fruitCreator (fruit){
	// 	fruit.type = type;
	// 	fruit.initialPrice = priceGenerator();
	// 	fruit.currentPrice = variatePrice(fruit.currentPrice);
	// 	fruit.quantity = quantity;
	// }

	// var apple = new fruitCreator("Apples");
	// var orange = new fruitCreator("Oranges");
	// var banana = new fruitCreator("Bananas");
	// var grape = new fruitCreator("Grapes");
	// var pear = new fruitCreator("Pears");
	// var quantity;

	// function priceGenerator(){
	// 	var initialPrice = randomNumber(1, 9.99);
	// 	return initialPrice;
	// }

	// setInterval(function(fruit){
	// 	var n = randomNumber(0,1);
	// 	if(n==0){
	// 		fruit.currentPrice+=0.5;
	// 	}
	// 	else{
	// 		fruit.currentPrice-=0.5;
	// 	}
	// 	return fruit.currentPrice;
	// }, 15000);

	// function maxMin (){
	// 	if(fruit.currentPrice >= 10){
	// 		fruit.currentPrice=9.99;
	// 	}
	// 	else if(fruit.currentPrice<0.5){
	// 		fruit.currentPrice=0.5
	// 	}

	// }

	

