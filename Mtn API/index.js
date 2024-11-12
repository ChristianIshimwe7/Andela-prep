const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithMtn, false);
function payWithMtn(e) {
  e.preventDefault();

  let handler = MtnPop.setup({
    key: '199d0f910961471fa18cb710bd69be91', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    currency: 'RWF',
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}