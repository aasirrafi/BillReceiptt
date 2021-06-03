window.onload = function () {
  document.getElementById("download").addEventListener("click", () => {
    const invoice = this.document.getElementById("invoice");
    let element = document.getElementById("element-to-print");
    let opt = {
      margin: 0,
      filename: "Reciept.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "in",
        format: "letter",
        orientation: "portrait",
        quality: 1,
      },
    };

    html2pdf().from(invoice).set(opt).save();
  });
};

//array

const itemsArr = [
  {
    id: 0,
    items: "lays",
    quantity: 2,
    cost: 2,
    amount: 0,
  },
];
let num = 1;

let number = 1;

const list = document.querySelector(".cart");
const listTotal = document.querySelector(".price-total");
const formSubmitItems = document.querySelector(".form-submit");

formSubmitItems.addEventListener("submit", (e) => {
  e.preventDefault();

  let item = e.target.item.value;
  let qty = e.target.quantity.value;
  let cost = e.target.cost.value;
  let amount = qty * cost;

  const formValues = {
    id: num++,
    items: e.target.item.value,
    quantity: e.target.quantity.value,
    cost: e.target.cost.value,
    amount: amount,
  };

  itemsArr.push(formValues);

  let html = `<div class="d-flex row list-item">
        <li class="p-1 col-lg-1 col-md-1 col-sm-1 col-1 wrap">${formValues.id}</li>
        <li class="col-lg-5 col-md-5 col-sm-5 col-5 p-1"><span class="mr-auto">${formValues.items}</span></li>
        <li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2 wrap">${formValues.quantity}</li>
        <li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2 wrap">${formValues.cost}</li>
        <li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2 wrap">${formValues.amount}</li>
    </div>`;

  let header = `<header class="header my-5">
<div class="headings">
    <h1 class="pt-3 Company-name">CompanyName</h1>
    <h3>RECIEPT</h3>
    <div class="d-flex justify-content-between details">
        <div>
            <h6 class="Phone">Phone Number:</h6>
            <h6 class="email">Email:</h6>
            <h6 class="buyer-name">Bill To:</h6>
        </div>
        <div>
            <h6>Payment Date: <span>19/05/2021</span></h6>
            <h6>Reciept Number: <span>7869</span></h6>
        </div>
    </div>
</div>
<div class="bg row"></div>
</header>

<div class="d-flex row font-weight-bold table-head text-light ">
<li class="p-1 col-lg-1 col-md-1 col-sm-1 col-1">ID</li>
<li class="col-lg-5 col-md-5 col-sm-5 col-5 p-1"><span class="mr-auto">Item</span></li>
<li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2">Quantity</li>
<li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2">Cost</li>
<li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2 amount">Amount</li>
</div>

<div class="d-flex row font-weight-bold ">
<li class="p-1 col-lg-1 col-md-1 col-sm-1 col-1">-</li>
<li class="col-lg-5 col-md-5 col-sm-5 col-5 p-1"><span class="mr-auto">-</span></li>
<li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2">-</li>
<li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2">-</li>
<li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2">-</li>
</div>`;

  number++;
  // if(list.offsetHeight===730 || list.offsetHeight===(730*2)  ||list.offsetHeight===(730*3) ){
  //       list.innerHTML+= header;
  //       num-=1;
  // }

  if (number === 27 || number === 52 || number === 77 || number === 102) {
    list.innerHTML += header;
    num -= 1;
  } else {
    list.innerHTML += html;
  }

  console.log(formValues);
  let val = itemsArr.reduce(function (previousValue, currentValue) {
    return {
      amount: previousValue.amount + currentValue.amount,
    };
  });

  let list2 = `<div class="d-flex row flex-row-reverse align-content-center price-list">
    <li class="p-1 col-lg-2 col-md-2 col-sm-4 col-2 text-right right"> ${val.amount}</li>
    <li class="p-1 col-lg-2 col-md-2 col-sm-2 col-2 wrap left">Price:</li>

      </div>
`;

  listTotal.innerHTML = list2;
});

const companyDetails = document.querySelector(".headings");

let form2 = document.getElementById("form-1-inputs");

let companyName = document.querySelector(".Company-name");
let phone = document.querySelector(".Phone");
let email = document.querySelector(".email");
let buyer = document.querySelector(".buyer-name");
let details = document.querySelector(".details-required");

details.addEventListener("submit", (e) => {
  e.preventDefault();

  companyName = e.target.companyname.value;
  phone = e.target.phone.value;
  email = e.target.email.value;
  buyer = e.target.billto.value;
  const date = new Date();

  let allDetails = `<h1 class="pt-3 Company-name">${companyName}</h1>
      <h3>RECIEPT</h3>
      <div class="d-flex justify-content-between details">
          <div>
              <h6 class="Phone">Phone Number: <span>${phone}</span></h6>
              <h6 class="email">Email:  <span>${email}</span></h6>
              <h6 class="buyer-name">Bill To: <span>${buyer}</span></h6>
          </div>
          <div>
              <h6>Payment Date: <span>${date.getDate()}</span></h6>
              <h6>Reciept Number: <span>7869</span></h6>
          </div>
      </div>`;

  companyDetails.innerHTML = allDetails;

  form2.classList.toggle("hide");
});

let execute = document.querySelector(".execute");

function myFunction() {
  let element = document.getElementById("hidden");
  form2.classList.add("hide");
  element.classList.toggle("hide");
}

let newBill = document.querySelector(".generate-new-bill");
let hideBtn = document.querySelector(".hide-btn");

hideBtn.onclick = () => {
  myFunction();
};

newBill.onclick = () => {
  window.location.reload();
};

