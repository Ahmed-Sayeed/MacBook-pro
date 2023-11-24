// this function is for measuring featured cost
function featureCost(feature, cost){
    const featureCost = document.getElementById(feature + '-cost');
    featureCost.innerText = cost;
    TotalCost();    
}
// this function is for geting the feature prices
function costName(Name){
    const featureName = document.getElementById(Name + '-cost');
    const featurePrice =  parseInt(featureName.innerText);
    return featurePrice;
}
// this function is for calculate Total cost
function TotalCost() {
    // find out all the feature cost
  const memoryCost = costName('memory');
  const storageCost = costName('storage');
  const deliveryCost = costName('delivery');
  const totalPrice = document.getElementById('total-price');
  const totalCost = document.getElementById('total-cost');
  
  // calculation for total Price  and total cost
  totalPrice.innerText = 1299 + memoryCost + storageCost + deliveryCost;
  totalCost.innerText = totalPrice.innerText;  
}

// this click event is for 8-GB memory
document.getElementById('memory').addEventListener('click', function(){
    featureCost('memory', 0)
});
// this click event is for 16-GB memory
document.getElementById('advance-memory').addEventListener('click', function(){
    featureCost('memory', 180);
});
// this click event is for 256-GB storage
document.getElementById('storage').addEventListener('click', function(){
    featureCost('storage', 0);
});
// this click event is for 512-GB storage
document.getElementById('advance-storage').addEventListener('click', function(){
    featureCost('storage', 100);
});
// this click event is for 1-TB storage
document.getElementById('super-advance-storage').addEventListener('click', function(){
    featureCost('storage', 180);
});
// this click event is for Normal Delivery Cost
document.getElementById('normal-delivery').addEventListener('click', function(){
    featureCost('delivery', 0);
});
// this click event is for Argent Delivery Cost
document.getElementById('argent-delivery').addEventListener('click', function(){
    featureCost('delivery', 20);
});

// this click event is for PromoCode to get 20% Descount
document.getElementById('apply-promo').addEventListener('click', function() {
    const totalCost = document.getElementById('total-cost');
    const promoInput = document.getElementById('promo-input');
    const buyBtn = document.getElementById('apply-promo');

    console.log(buyBtn.value)
    if(buyBtn.value == "Buy Naw"){
        alert("Thanks for buying from us. Reload the page to start from begning");        
        
    }
    else if(promoInput.value == 'stevekaku'){
        totalCost.innerText =  parseFloat(totalCost.innerText) - (parseFloat(totalCost.innerText) * 0.2);
        promoInput.value = '';
        promoInput.style.display = 'none';
        const alert = document.getElementById('message');
        alert.innerText = "promo Code Used Successfully...";        
        buyBtn.value = "Buy Naw";
    }
    else{
        alert('Promo Code was Wrong!!! Type "stevekaku" to get discount');
        promoInput.value = '';
    }
});