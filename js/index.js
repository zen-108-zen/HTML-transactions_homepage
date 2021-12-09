const api_url =
  "https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2";

async function getapi(url) {
  const response = await fetch(url);
  let data = await response.json();
  //console.log(data);
  show(data);
}
getapi(api_url);

function on()
{
  document.querySelector('.infoPopup').style.display = 'flex';
};

function off()
{
  document.querySelector('.infoPopup').style.display = 'none';
}

function show(data) {
  console.log(data);
  let tab = "";
  var array = [],
    obj = data;
  for (r in data) {
    array.push([r, obj[r]]);
  }
  array.sort(function (a, b) {
    return a[1] - b[1];
  });



  
  for (let r of data.transactions) {
    var up = r.startDate
    var startDateDate = up.split('T')[0];
    var startDateTime = up.split('T')[1];

    var down = r.endDate
    var endDateDate = down.split('T')[0];
    var endDateTime = down.split('T')[1];

    r.startDate = startDateDate+','+startDateTime
    r.endDate = endDateDate+','+endDateTime

    if (r.direction == 1 && r.type == 1) {
      tab += `
<div class="dashedDate">
        <span>${startDateDate}</span>
    </div>
<span class="right">
    <div class="blockPaid">
        <div class="transactionDetails">
            <span class="amountPaid">₹${r.amount}</span>
            <span class="amountStatus"><img src="https://www.abacuspg.co.uk/wp-content/uploads/2016/05/Green-Tick-PNG-Pic.png" alt="Done">You Paid</span>
        </div>
        <div class="lowerDetails">
            <span class="TransactionID">Transaction ID <br> ${r.id}</span>
            <span class="arrow" id="one" onclick="on()"><img src="https://cdn.onlinewebfonts.com/svg/img_308016.png" alt="MORE"></span>
        </div>
        <span class="lowerDate">${r.startDate}</span>
    </div>
    </span>
    
    <div class="infoPopup">
    <div class="infoPopupContent">
    <img class="closeButton" onclick="off()" src="https://www.shareicon.net/data/512x512/2015/10/22/659917_close_512x512.png" alt="Back">
      <div class="allInfo">
        <div class="customerInfo">
            <div class="profilePicture">
                <div class="nameInitial">J</div>
            </div>
          <p><h3>Customer Information: -</h3></p>
          <span class="vPay">vPay: ${r.customer.vPay}<br>vPay ID: ${r.customer.vPayId}</span>
        </div>
        <br>
        <div class="partnerInfo">
          <p><h3>Partner Information: -</h3></p>
          <span class="vPay">vPay: ${r.partner.vPay}<br>vPay ID: ${r.partner.vPayId}</span>
        </div>
        <br>
        <div class="amountInfo">
          <p><h3>Payment Information: -</h3></p>
          <span class="paymentId">ID: ${r.id}<br></span>
          <span class="amount">Amount: ${r.amount}<br></span>
          <span class="amountDescription">Description: ${r.description}<br></span>
          <span class="date">Initiated: ${r.startDate} <br>Ending: ${r.endDate}<br></span>
        </div>
      </div>
    </div>
  </div>`;
    }


    else if (r.direction == 2 && r.type == 1) {
      tab += `
<div class="dashedDate">
        <span>${startDateDate}</span>
    </div>
<span class="left">
    <div class="blockRequestedMe">
        <div class="transactionDetails">
            <span class="amountPaid">₹ ${r.amount}</span>
            <span class="amountStatus"><img src="https://www.freeiconspng.com/uploads/legal-information-8.png" alt="Done"> Request Received</span>
        </div>
        <div class="lowerDetails">
            <button class="payButton" type="button">Pay</button>
            <span class="declineButtonContainer"> <button class="declineButton" type="button">Decline</button></span>
            <span class="arrow" id="one" onclick="on()"><img src="https://cdn.onlinewebfonts.com/svg/img_308016.png" alt="MORE"></span>
        </div>
        <span class="lowerDate">${r.startDate}</span>
    </div>
    </span>
    
    <div class="infoPopup">
    <div class="infoPopupContent">
    <img class="closeButton" onclick="off()" src="https://www.shareicon.net/data/512x512/2015/10/22/659917_close_512x512.png" alt="Back">
      <div class="allInfo">
        <div class="customerInfo">
            <div class="profilePicture">
                <div class="nameInitial">J</div>
            </div>
          <p><h3>Customer Information: -</h3></p>
          <span class="vPay">vPay: ${r.customer.vPay}<br>vPay ID: ${r.customer.vPayId}</span>
        </div>
        <br>
        <div class="partnerInfo">
          <p><h3>Partner Information: -</h3></p>
          <span class="vPay">vPay: ${r.partner.vPay}<br>vPay ID: ${r.partner.vPayId}</span>
        </div>
        <br>
        <div class="amountInfo">
          <p><h3>Payment Information: -</h3></p>
          <span class="paymentId">ID: ${r.id}<br></span>
          <span class="amount">Amount: ${r.amount}<br></span>
          <span class="amountDescription">Description: ${r.description}<br></span>
          <span class="date">Initiated: ${r.startDate} <br>Ending: ${r.endDate}<br></span>
        </div>
      </div>
    </div>
  </div>`;
    }


    else if (r.direction == 1 && r.type == 2) {
      tab += `
<div class="dashedDate">
        <span>${startDateDate}</span>
    </div>
<span class="right">
    <div class="blockRequested">
        <div class="transactionDetails">
            <span class="amountPaid">₹${r.amount}</span>
            <span class="amountStatus"><img src="https://www.freeiconspng.com/uploads/legal-information-8.png" alt="Done"> You Requested</span>
        </div>
        <div class="lowerDetails">
            <button class="cancelButton" type="button">Cancel</button>
            <span class="arrow" id="one" onclick="on()"><img src="https://cdn.onlinewebfonts.com/svg/img_308016.png" alt="MORE"></span>
        </div>
        <span class="lowerDate">${r.startDate}</span>
    </div>
        </span>
    
    <div class="infoPopup">
    <div class="infoPopupContent">
    <img class="closeButton" onclick="off()" src="https://www.shareicon.net/data/512x512/2015/10/22/659917_close_512x512.png" alt="Back">
      <div class="allInfo">
        <div class="customerInfo">
            <div class="profilePicture">
                <div class="nameInitial">J</div>
            </div>
          <p><h3>Customer Information: -</h3></p>
          <span class="vPay">vPay: ${r.customer.vPay}<br>vPay ID: ${r.customer.vPayId}</span>
        </div>
        <br>
        <div class="partnerInfo">
          <p><h3>Partner Information: -</h3></p>
          <span class="vPay">vPay: ${r.partner.vPay}<br>vPay ID: ${r.partner.vPayId}</span>
        </div>
        <br>
        <div class="amountInfo">
          <p><h3>Payment Information: -</h3></p>
          <span class="paymentId">ID: ${r.id}<br></span>
          <span class="amount">Amount: ${r.amount}<br></span>
          <span class="amountDescription">Description: ${r.description}<br></span>
          <span class="date">Initiated: ${r.startDate} <br>Ending: ${r.endDate}<br></span>
        </div>
      </div>
    </div>
  </div>`;
    }


    else if (r.direction == 2 && r.type == 2) {
      tab += `
<div class="dashedDate">
        <span>${startDateDate}</span>
    </div>
<span class="left">
    <div class="blockReceived">
        <div class="transactionDetails">
            <span class="amountPaid">₹ ${r.amount}</span>
            <span class="amountStatus"><img src="https://www.abacuspg.co.uk/wp-content/uploads/2016/05/Green-Tick-PNG-Pic.png" alt="Done">You Received</span>
        </div>
        <div class="lowerDetails">
            <span class="TransactionID">Transaction ID <br> ${r.id}</span>
            <span class="arrow" id="one" onclick="on()"><img src="https://cdn.onlinewebfonts.com/svg/img_308016.png" alt="MORE"></span>
        </div>
        <span class="lowerDate">${r.startDate}</span>
    </div>
    </span>
    
    <div class="infoPopup">
    <div class="infoPopupContent">
    <img class="closeButton" onclick="off()" src="https://www.shareicon.net/data/512x512/2015/10/22/659917_close_512x512.png" alt="Back">
      <div class="allInfo">
        <div class="customerInfo">
            <div class="profilePicture">
                <div class="nameInitial">J</div>
            </div>
          <p><h3>Customer Information: -</h3></p>
          <span class="vPay">vPay: ${r.customer.vPay}<br>vPay ID: ${r.customer.vPayId}</span>
        </div>
        <br>
        <div class="partnerInfo">
          <p><h3>Partner Information: -</h3></p>
          <span class="vPay">vPay: ${r.partner.vPay}<br>vPay ID: ${r.partner.vPayId}</span>
        </div>
        <br>
        <div class="amountInfo">
          <p><h3>Payment Information: -</h3></p>
          <span class="paymentId">ID: ${r.id}<br></span>
          <span class="amount">Amount: ${r.amount}<br></span>
          <span class="amountDescription">Description: ${r.description}<br></span>
          <span class="date">Initiated: ${r.startDate} <br>Ending: ${r.endDate}<br></span>
        </div>
      </div>
    </div>
  </div>`;
    }
  }
  

  document.getElementById("start").innerHTML = tab;
}
