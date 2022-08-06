let money = 50000;
let portfolioValue = 50000;

let AImoney = 50000;
let AIportfolioValue = 50000;

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
      console.log(`You don't have enough money for this transaction!`);
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
      console.log(`You can't sell shares you don't own!`);
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
    AIportfolioValue = AImoney + Math.floor(Math.random() * 2000) - 200;
    if (AIportfolioValue <= 5000) {
      AIportfolioValue = AIportfolioValue + 5500;
    }
    document.getElementById("ai-net-worth").innerHTML =
      `Net Worth: $` + AIportfolioValue;
  }, 5000);
};

let timer = document.getElementById("timer");
let timerMinute = 3;
let timerSecond = 00;
let timerChange = function () {
  setInterval(function () {
    timer.innerHTML = "3:00";
    console.log(test);

    if (timerSecond <= 0) {
      timerMinute--;
      timerSecond = 59;
    } else timerSecond--;
  }, 1000);
};

updatePrices();
portfolioValueUpdate();
AIValueUpdate();
timerChange();
