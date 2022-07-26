// https://calculator.swiftutors.com/net-sales-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const netSalesRadio = document.getElementById('netSalesRadio');
const totalSalesRadio = document.getElementById('totalSalesRadio');
const totalDeductionsRadio = document.getElementById('totalDeductionsRadio');

let netSales;
let totalSales = v1;
let totalDeductions = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

netSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Sales';
  variable2.textContent = 'Total Deductions';
  totalSales = v1;
  totalDeductions = v2;
});

totalSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Sales';
  variable2.textContent = 'Total Deductions';
  netSales = v1;
  totalDeductions = v2;
});

totalDeductionsRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Sales';
  variable2.textContent = 'Total Sales';
  netSales = v1;
  totalSales = v2;
});

btn.addEventListener('click', function() {
  
  if(netSalesRadio.checked)
    result.textContent = `Net Sales = ${computeNetSales().toFixed(2)}`;

  else if(totalSalesRadio.checked)
    result.textContent = `Total Sales = ${computeTotalSales().toFixed(2)}`;

  else if(totalDeductionsRadio.checked)
    result.textContent = `Total Deductions = ${computeTotalDeductions().toFixed(2)}`;
})

// calculation

function computeNetSales() {
  return Number(totalSales.value) - Number(totalDeductions.value);
}

function computeTotalSales() {
  return Number(netSales.value) + Number(totalDeductions.value);
}

function computeTotalDeductions() {
  return Number(totalSales.value) - Number(netSales.value);
}