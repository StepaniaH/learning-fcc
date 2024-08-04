let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDueElement = document.getElementById("change-due");

const currencyUnit = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

purchaseBtn.addEventListener("click", () => {
  const cashValue = parseFloat(cashInput.value);

  if (cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cashValue === price) {
    changeDueElement.textContent =
      "No change due - customer paid with exact cash";
  } else {
    let change = Math.round((cashValue - price) * 100);
    let totalCid = Math.round(
      cid.reduce((acc, curr) => acc + curr[1], 0) * 100
    );

    if (totalCid < change) {
      changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
    } else {
      let changeArray = [];
      for (let i = currencyUnit.length - 1; i >= 0; i--) {
        let coinName = currencyUnit[i][0];
        let coinValue = Math.round(currencyUnit[i][1] * 100);
        let coinAmount = Math.round(cid[i][1] * 100);
        let coinReturn = 0;

        while (change >= coinValue && coinAmount >= coinValue) {
          change -= coinValue;
          coinAmount -= coinValue;
          coinReturn += coinValue;
        }

        if (coinReturn > 0) {
          changeArray.push([coinName, coinReturn / 100]);
        }
      }

      if (change > 0) {
        changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
      } else {
        let isClosed = totalCid === Math.round((cashValue - price) * 100);
        let changeText = changeArray
          .map((item) => `${item[0]}: $${item[1].toFixed(2)}`)
          .join(" ");
        changeDueElement.textContent = isClosed
          ? `Status: CLOSED ${changeText}`
          : `Status: OPEN ${changeText}`;
      }
    }
  }
});

function testCase(newPrice, newCash, newCid, expectedText) {
  price = newPrice;
  cid = newCid;
  cashInput.value = newCash;
  purchaseBtn.click();
  console.assert(
    changeDueElement.textContent === expectedText,
    `Expected: ${expectedText}, but got: ${changeDueElement.textContent}`
  );
}

testCase(
  19.5,
  20,
  [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ],
  "Status: CLOSED PENNY: $0.50"
);

testCase(
  19.5,
  20,
  [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ],
  "Status: CLOSED PENNY: $0.50"
);

testCase(
  3.26,
  100,
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ],
  "Status: OPEN TWENTY: $60.00 TEN: $20.00 FIVE: $15.00 ONE: $1.00 QUARTER: $0.50 DIME: $0.20 PENNY: $0.04"
);

testCase(
  19.5,
  20,
  [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ],
  "Status: INSUFFICIENT_FUNDS"
);

testCase(
  19.5,
  20,
  [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ],
  "Status: INSUFFICIENT_FUNDS"
);

testCase(
  19.5,
  20,
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ],
  "Status: OPEN QUARTER: $0.50"
);

testCase(
  1.87,
  1.87,
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ],
  "No change due - customer paid with exact cash"
);

testCase(
  1.87,
  1.0,
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ],
  "Customer does not have enough money to purchase the item"
);
