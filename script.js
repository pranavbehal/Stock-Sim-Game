let money = 25000;
let portfolioValue = 25000;

let AIportfolioValue = 25000;

let MAIL = {
  name: "National Mail Delivery",
  symbol: "MAIL",
  price: 100,
  shares: 0,
  type: "Conservative",
};

let BOT = {
  name: "AI Robots",
  symbol: "BOT",
  price: 250,
  shares: 0,
  type: "High-risk High-reward",
};

let LEM = {
  name: "Lemon",
  symbol: "LEM",
  price: 100,
  shares: 0,
  type: "Blue-Chip",
};

let FIN = {
  name: "Next-Gen Money",
  symbol: "FIN",
  price: 100,
  shares: 0,
  type: "High-risk High Reward",
};

let BANK = {
  name: "Trustworthy Bank",
  symbol: "BANK",
  price: 150,
  shares: 0,
  type: "Conservative",
};

let FANS = {
  name: "Fans Inc",
  symbol: "FANS",
  price: 125,
  shares: 0,
  type: "Blue-Chip",
};

window.onload = function () {
  document.getElementById("mail-stock-name").innerHTML = MAIL.name;
  document.getElementById("mail-stock-symbol").innerHTML =
    "Ticker: " + MAIL.symbol;
  document.getElementById("bot-stock-name").innerHTML = BOT.name;
  document.getElementById("bot-stock-symbol").innerHTML =
    "Ticker: " + BOT.symbol;
  document.getElementById("lem-stock-name").innerHTML = LEM.name;
  document.getElementById("lem-stock-symbol").innerHTML =
    "Ticker: " + LEM.symbol;
  document.getElementById("fin-stock-name").innerHTML = FIN.name;
  document.getElementById("fin-stock-symbol").innerHTML =
    "Ticker: " + FIN.symbol;
  document.getElementById("bank-stock-name").innerHTML = BANK.name;
  document.getElementById("bank-stock-symbol").innerHTML =
    "Ticker: " + BANK.symbol;
  document.getElementById("fans-stock-name").innerHTML = FANS.name;
  document.getElementById("fans-stock-symbol").innerHTML =
    "Ticker: " + FANS.symbol;
};

let updatePrices = function () {
  setInterval(function () {
    let oldMailPrice = MAIL.price;
    let oldBankPrice = BANK.price;
    let oldBotPrice = BOT.price;
    let oldFinPrice = FIN.price;
    let oldLemPrice = LEM.price;
    let oldFansPrice = FANS.price;

    MAIL.price = MAIL.price + Math.floor(Math.random() * 60) - 15;
    if (MAIL.price <= 5) {
      MAIL.price = MAIL.price + 45;
    }
    BANK.price = BANK.price + Math.floor(Math.random() * 60) - 15;
    if (BANK.price <= 5) {
      BANK.price = BANK.price + 45;
    }

    BOT.price = BOT.price + Math.floor(Math.random() * 175) - 75;
    if (BOT.price <= 5) {
      BOT.price = BOT.price + 175;
    }
    FIN.price = FIN.price + Math.floor(Math.random() * 175) - 75;
    if (FIN.price <= 5) {
      FIN.price = FIN.price + 175;
    }

    LEM.price = LEM.price + Math.floor(Math.random() * 175) - 60;
    if (LEM.price <= 5) {
      LEM.price = LEM.price + 100;
    }

    FANS.price = FANS.price + Math.floor(Math.random() * 175) - 60;
    if (FANS.price <= 5) {
      FANS.price = FANS.price + 100;
    }

    if (oldMailPrice > MAIL.price) {
      document.getElementById("mail-stock-change").innerHTML =
        `Price Change: - $` + (oldMailPrice - MAIL.price);
      document.getElementById("mail-stock-change").style.color = "red";
    } else {
      document.getElementById("mail-stock-change").innerHTML =
        `Price Change: + $` + (MAIL.price - oldMailPrice);
      document.getElementById("mail-stock-change").style.color = "green";
    }

    if (oldBankPrice > BANK.price) {
      document.getElementById("bank-stock-change").innerHTML =
        `Price Change: - $` + (oldBankPrice - BANK.price);
      document.getElementById("bank-stock-change").style.color = "red";
    } else {
      document.getElementById("bank-stock-change").innerHTML =
        `Price Change: + $` + (BANK.price - oldBankPrice);
      document.getElementById("bank-stock-change").style.color = "green";
    }

    if (oldBotPrice > BOT.price) {
      document.getElementById("bot-stock-change").innerHTML =
        `Price Change: - $` + (oldBotPrice - BOT.price);
      document.getElementById("bot-stock-change").style.color = "red";
    } else {
      document.getElementById("bot-stock-change").innerHTML =
        `Price Change: + $` + (BOT.price - oldBotPrice);
      document.getElementById("bot-stock-change").style.color = "green";
    }

    if (oldFinPrice > FIN.price) {
      document.getElementById("fin-stock-change").innerHTML =
        `Price Change: - $` + (oldFinPrice - FIN.price);
      document.getElementById("fin-stock-change").style.color = "red";
    } else {
      document.getElementById("fin-stock-change").innerHTML =
        `Price Change: + $` + (FIN.price - oldFinPrice);
      document.getElementById("fin-stock-change").style.color = "green";
    }

    if (oldLemPrice > LEM.price) {
      document.getElementById("lem-stock-change").innerHTML =
        `Price Change: - $` + (oldLemPrice - LEM.price);
      document.getElementById("lem-stock-change").style.color = "red";
    } else {
      document.getElementById("lem-stock-change").innerHTML =
        `Price Change: + $` + (LEM.price - oldLemPrice);
      document.getElementById("lem-stock-change").style.color = "green";
    }

    if (oldFansPrice > FANS.price) {
      document.getElementById("fans-stock-change").innerHTML =
        `Price Change: - $` + (oldFansPrice - FANS.price);
      document.getElementById("fans-stock-change").style.color = "red";
    } else {
      document.getElementById("fans-stock-change").innerHTML =
        `Price Change: + $` + (FANS.price - oldFansPrice);
      document.getElementById("fans-stock-change").style.color = "green";
    }

    document.getElementById("mail-stock-price").innerHTML =
      `Price: $` + MAIL.price;
    document.getElementById("bank-stock-price").innerHTML =
      `Price: $` + BANK.price;
    document.getElementById("bot-stock-price").innerHTML =
      `Price: $` + BOT.price;
    document.getElementById("fin-stock-price").innerHTML =
      `Price: $` + FIN.price;
    document.getElementById("lem-stock-price").innerHTML =
      `Price: $` + LEM.price;
    document.getElementById("fans-stock-price").innerHTML =
      `Price: $` + FANS.price;
  }, 5000);
};

let transaction = function (symbol, amount, type, symbol2) {
  if (amount === "MAX" && type === "buy") {
    let amountCanBuy = Math.floor(money / symbol.price);
    money = money - amountCanBuy * symbol.price;
    symbol.shares = symbol.shares + amountCanBuy;
    document.getElementById(
      `${symbol2}-stock-shares`
    ).innerHTML = `Shares: ${symbol.shares}`;
    document.getElementById("money").innerHTML = `Money: $` + money;
  } else if (amount === "MAX" && type === "sell") {
    let amountCanSell = symbol.shares;
    money = money + amountCanSell * symbol.price;
    symbol.shares = symbol.shares - amountCanSell;
    document.getElementById(
      `${symbol2}-stock-shares`
    ).innerHTML = `Shares:          ${symbol.shares}`;
    document.getElementById("money").innerHTML = `Money: $` + money;
  } else if (type === "buy") {
    // First Check if the user has enough money to execute a buy transaction
    if (money >= amount * symbol.price) {
      money = money - amount * symbol.price;
      symbol.shares = symbol.shares + amount;
      document.getElementById(
        `${symbol2}-stock-shares`
      ).innerHTML = `Shares: ${symbol.shares}`;
      document.getElementById("money").innerHTML = `Money: $` + money;
    } else {
      window.alert(`You don't have enough money for this transaction!`);
    }
  } else if (type === "sell") {
    // First check if the user has enough of the stock to sell all of them
    if (symbol.shares >= amount) {
      money = money + amount * symbol.price;
      symbol.shares = symbol.shares - amount;
      document.getElementById(
        `${symbol2}-stock-shares`
      ).innerHTML = `Shares:          ${symbol.shares}`;
      document.getElementById("money").innerHTML = `Money: $` + money;
    } else {
      window.alert(`You can't sell shares you don't own!`);
    }
  }
};

let portfolioValueUpdate = function () {
  setInterval(function () {
    portfolioValue =
      money +
      MAIL.price * MAIL.shares +
      BANK.price * BANK.shares +
      BOT.price * BOT.shares +
      FIN.price * FIN.shares +
      LEM.price * LEM.shares +
      FANS.price * FANS.shares;
    document.getElementById("net-worth").innerHTML =
      `Net Worth: $` + portfolioValue;
  }, 5000);
};

// AI Portfolio
let AIValueUpdate = function () {
  setInterval(function () {
    AIportfolioValue =
      AIportfolioValue + Math.floor(Math.random() * 8000) - 150;
    if (AIportfolioValue <= 5000) {
      AIportfolioValue = AIportfolioValue + 5500;
    }
    document.getElementById("ai-net-worth").innerHTML =
      `Net Worth: $` + AIportfolioValue;
  }, 5000);
};

let tempNum = 1;

let checkWinner = function () {
  setInterval(function () {
    if (portfolioValue > 250000 && portfolioValue > AIportfolioValue) {
      document.getElementById("sidenav").style.display = "none";
      document.getElementById("stocks").style.display = "none";
      document.getElementById("you-win").style.display = "block";
    } else if (AIportfolioValue > 250000 && AIportfolioValue > portfolioValue) {
      document.getElementById("sidenav").style.display = "none";
      document.getElementById("stocks").style.display = "none";
      document.getElementById("you-lose").style.display = "block";
    } else if (portfolioValue < 250000 && AIportfolioValue < 250000) {
      tempNum++;
    }
    console.log(portfolioValue, AIportfolioValue);
  }, 5000);
};

updatePrices();
portfolioValueUpdate();
AIValueUpdate();
checkWinner();

let mailModal = document.getElementById("mail-modal");
let mailBtn = document.getElementById("mail-question");
let span = document.getElementsByClassName("close")[0];

mailBtn.onclick = function () {
  mailModal.style.display = "block";
};

span.onclick = function () {
  mailModal.style.display = "none";
};

let botModal = document.getElementById("bot-modal");
let botBtn = document.getElementById("bot-question");
let span1 = document.getElementsByClassName("close")[1];

botBtn.onclick = function () {
  botModal.style.display = "block";
};

span1.onclick = function () {
  botModal.style.display = "none";
};

let lemModal = document.getElementById("lem-modal");
let lemBtn = document.getElementById("lem-question");
let span2 = document.getElementsByClassName("close")[2];

lemBtn.onclick = function () {
  lemModal.style.display = "block";
};

span2.onclick = function () {
  lemModal.style.display = "none";
};

let finModal = document.getElementById("fin-modal");
let finBtn = document.getElementById("fin-question");
let span3 = document.getElementsByClassName("close")[3];

finBtn.onclick = function () {
  finModal.style.display = "block";
};

span3.onclick = function () {
  finModal.style.display = "none";
};

let bankModal = document.getElementById("bank-modal");
let bankBtn = document.getElementById("bank-question");
let span4 = document.getElementsByClassName("close")[4];

bankBtn.onclick = function () {
  bankModal.style.display = "block";
};

span4.onclick = function () {
  bankModal.style.display = "none";
};

let fansModal = document.getElementById("fans-modal");
let fansBtn = document.getElementById("fans-question");
let span5 = document.getElementsByClassName("close")[5];

fansBtn.onclick = function () {
  fansModal.style.display = "block";
};

span5.onclick = function () {
  fansModal.style.display = "none";
};
