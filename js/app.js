'use strict';
let total = 0;
let mainContaier = [];
let Sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let Sum = 0;
function City(name, maxCustomer, miniCustomer, avgCustomer) {
    this.name = name;
    this.workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    this.maxCustomerPHR = maxCustomer;
    this.miniCustomerPHR = miniCustomer;
    this.avgCustomerPHR = avgCustomer;
    this.total = 0;
    this.randomCustomerPHR = [];
    this.salesPH = [];
    this.totalCookiePerDay = 0;
    mainContaier.push(this);
}
// ........................................................Random Customer per hour
City.prototype.randomCustPhr = function () {
    for (let i = 0; i < this.workHours.length; i++) {
        let max = Math.ceil(this.maxCustomerPHR);
        let min = Math.floor(this.miniCustomerPHR);
        this.randomCustomerPHR.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    console.log(this.randomCustomerPHR);
}
// .....................................................Calculating Cookies per hour
City.prototype.salesCookies = function () {
    for (let w = 0; w < this.workHours.length; w++) {
        this.salesPH.push(Math.ceil(this.randomCustomerPHR[w] * this.avgCustomerPHR));
        this.total += this.salesPH[w];
    }
    console.log(this.salesPH);
}
let tableDiv = document.getElementById('salesSection');
let tableEl = document.createElement('table');
tableDiv.appendChild(tableEl);
// ......................................................Creating Table Header
City.prototype.rendertableElHeader = function () {
    let tr1 = document.createElement('tr');
    tableEl.appendChild(tr1);
    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = 'Working Hours';
    for (let i = 0; i < this.workHours.length; i++) {
        let th1 = document.createElement('th');
        tr1.appendChild(th1);
        th1.textContent = this.workHours[i];
    }
    let thTotal = document.createElement('th');
    tr1.appendChild(thTotal);
    thTotal.textContent = 'Total';
}
// ......................................................Render 
City.prototype.render = function () {
    let tr2 = document.createElement('tr');
    tableEl.appendChild(tr2);
    let td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.textContent = this.name;
    for (let i = 0; i < this.salesPH.length; i++) {
        let td2 = document.createElement('td');
        tr2.appendChild(td2);
        td2.textContent = this.salesPH[i];
        Sales[i] += this.salesPH[i];
        this.totalCookiePerDay += this.salesPH[i];
    }
    let thTotal = document.createElement('th');
    tr2.appendChild(thTotal);
    thTotal.textContent = this.totalCookiePerDay;
}
function rendertableElTotal() {
    let tr1 = document.createElement('tr');
    tableEl.appendChild(tr1);
    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = ' Total  ';
    for (let i = 0; i < Sales.length; i++) {
        let tdTotalPh = document.createElement('th');
        tr1.appendChild(tdTotalPh);
        tdTotalPh.textContent = Sales[i];
    }
    let SumofTotal = document.createElement('th');
    for (let c = 0; c < Sales.length; c++) {
        Sum += Sales[c];
    }
    tr1.appendChild(SumofTotal);
    SumofTotal.textContent = total;
}
let Seattle = new City('Seattle', 65, 23, 6.3);
let Tokyo = new City('Tokyo', 24, 3, 1.2);
let Dubai = new City('Dubai', 38, 11, 3.7);
let Paris = new City('Paris', 38, 20, 2.3);
let Lima = new City('Lima', 16, 2, 4.6);



Seattle.rendertableElHeader();
Seattle.randomCustPhr();
Seattle.salesCookies();
Seattle.render();
Tokyo.randomCustPhr();
Tokyo.salesCookies();
Tokyo.render();
Dubai.randomCustPhr();
Dubai.salesCookies();
Dubai.render();
Paris.randomCustPhr();
Paris.salesCookies();
Paris.render();
Lima.randomCustPhr();
Lima.salesCookies();
Lima.render();
rendertableElTotal();