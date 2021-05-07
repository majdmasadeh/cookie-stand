'use strict';
let seattle ={
  name:'SEATTLE',
  maxCustomerPHR : 65,
  miniCustomerPHR : 23,
  avgCustomerPHR : 6.3,
  workHours:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomCustomerPHR: [],
  salesPH : [],
  total:0,

  randomCustPhr: function(){
    for (let workHours =0 ; workHours < this.workHours.length ; workHours++){
    this.randomCustomerPHR.push(Math.floor(Math.random() * (this.maxCustomerPHR- this.miniCustomerPHR + 1) + this.miniCustomerPHR));
  }
},


  salesCookies : function(){
    
        for (let w=0;w<this.workHours.length;w++)
        {
            this.salesPH.push(Math.ceil(this.randomCustomerPHR[w] * this.avgCustomerPHR));
            this.total+=this.salesPH[w];
        }
  },

  render: function(){
    let container = document.getElementById('Sales');
    let h2El = document.createElement('h2');
    
    container.appendChild(h2El);
    h2El.textContent = this.name;

    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);


    for (let workHours = 0; workHours < this.workHours.length; workHours++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.workHours[workHours]} : ${this.salesPH[workHours]} cookies`;
     }  

     const listItem = document.createElement('li');
     ulEl.appendChild(listItem);
     listItem.textContent = `Total: ${this.total} cookies`;
   }


}
seattle.randomCustPhr();
seattle.salesCookies();
seattle.render ();






let tokyo ={
  name:'Tokyo',
  maxCustomerPHR :24,
  miniCustomerPHR : 3,
  avgCustomerPHR : 1.2,
  workHours:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomCustomerPHR: [],
  salesPH : [],
  total:0,

  randomCustPhr: function(){
    for (let workHours =0 ; workHours < this.workHours.length ; workHours++){
    this.randomCustomerPHR.push(Math.floor(Math.random() * (this.maxCustomerPHR- this.miniCustomerPHR + 1) + this.miniCustomerPHR));
  }
},


  salesCookies : function(){
    
        for (let w=0;w<this.workHours.length;w++)
        {
            this.salesPH.push(Math.ceil(this.randomCustomerPHR[w] * this.avgCustomerPHR));
            this.total+=this.salesPH[w];
        }
  },

  render: function(){
    let container = document.getElementById('Sales');
    let h2El = document.createElement('h2');
    
    container.appendChild(h2El);
    h2El.textContent = this.name;

    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);


    for (let workHours = 0; workHours < this.workHours.length; workHours++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.workHours[workHours]} : ${this.salesPH[workHours]} cookies`;
     }  

     const listItem = document.createElement('li');
     ulEl.appendChild(listItem);
     listItem.textContent = `Total: ${this.total} cookies`;
   }


}
tokyo.randomCustPhr();
tokyo.salesCookies();
tokyo.render ();









let dubai ={
  name:'dubai',
  maxCustomerPHR :38,
  miniCustomerPHR : 11,
  avgCustomerPHR : 	3.7,
  workHours:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomCustomerPHR: [],
  salesPH : [],
  total:0,

  randomCustPhr: function(){
    for (let workHours =0 ; workHours < this.workHours.length ; workHours++){
    this.randomCustomerPHR.push(Math.floor(Math.random() * (this.maxCustomerPHR- this.miniCustomerPHR + 1) + this.miniCustomerPHR));
  }
},


  salesCookies : function(){
    
        for (let w=0;w<this.workHours.length;w++)
        {
            this.salesPH.push(Math.ceil(this.randomCustomerPHR[w] * this.avgCustomerPHR));
            this.total+=this.salesPH[w];
        }
  },

  render: function(){
    let container = document.getElementById('Sales');
    let h2El = document.createElement('h2');
    
    container.appendChild(h2El);
    h2El.textContent = this.name;

    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);


    for (let workHours = 0; workHours < this.workHours.length; workHours++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.workHours[workHours]} : ${this.salesPH[workHours]} cookies`;
     }  

     const listItem = document.createElement('li');
     ulEl.appendChild(listItem);
     listItem.textContent = `Total: ${this.total} cookies`;
   }


}
dubai.randomCustPhr();
dubai.salesCookies();
dubai.render ();





let paris ={
  name:'paris',
  maxCustomerPHR :38,
  miniCustomerPHR : 20,
  avgCustomerPHR : 	2.3,
  workHours:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomCustomerPHR: [],
  salesPH : [],
  total:0,

  randomCustPhr: function(){
    for (let workHours =0 ; workHours < this.workHours.length ; workHours++){
    this.randomCustomerPHR.push(Math.floor(Math.random() * (this.maxCustomerPHR- this.miniCustomerPHR + 1) + this.miniCustomerPHR));
  }
},


  salesCookies : function(){
    
        for (let w=0;w<this.workHours.length;w++)
        {
            this.salesPH.push(Math.ceil(this.randomCustomerPHR[w] * this.avgCustomerPHR));
            this.total+=this.salesPH[w];
        }
  },

  render: function(){
    let container = document.getElementById('Sales');
    let h2El = document.createElement('h2');
    
    container.appendChild(h2El);
    h2El.textContent = this.name;

    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);


    for (let workHours = 0; workHours < this.workHours.length; workHours++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.workHours[workHours]} : ${this.salesPH[workHours]} cookies`;
     }  

     const listItem = document.createElement('li');
     ulEl.appendChild(listItem);
     listItem.textContent = `Total: ${this.total} cookies`;
   }


}
paris.randomCustPhr();
paris.salesCookies();
paris.render ();




let lima ={
  name:'lima',
  maxCustomerPHR :16,
  miniCustomerPHR : 2,
  avgCustomerPHR : 	4.6,
  workHours:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomCustomerPHR: [],
  salesPH : [],
  total:0,

  randomCustPhr: function(){
    for (let workHours =0 ; workHours < this.workHours.length ; workHours++){
    this.randomCustomerPHR.push(Math.floor(Math.random() * (this.maxCustomerPHR- this.miniCustomerPHR + 1) + this.miniCustomerPHR));
  }
},


  salesCookies : function(){
    
        for (let w=0;w<this.workHours.length;w++)
        {
            this.salesPH.push(Math.ceil(this.randomCustomerPHR[w] * this.avgCustomerPHR));
            this.total+=this.salesPH[w];
        }
  },

  render: function(){
    let container = document.getElementById('Sales');
    let h2El = document.createElement('h2');
    
    container.appendChild(h2El);
    h2El.textContent = this.name;

    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);


    for (let workHours = 0; workHours < this.workHours.length; workHours++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.workHours[workHours]} : ${this.salesPH[workHours]} cookies`;
     }  

     const listItem = document.createElement('li');
     ulEl.appendChild(listItem);
     listItem.textContent = `Total: ${this.total} cookies`;
   }


}
lima.randomCustPhr();
lima.salesCookies();
lima.render ();


