function currencyConverter() {
    // Set dropdown selector value as a variable
    let selector = document.getElementById("currency-converter").value;
    // searches the DOM with all the class with same name
    let list = document.getElementsByClassName("price");
    let currencytext = document.getElementsByClassName("currencytext");


    if (selector == "SGD") {
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price in $(SGD):";
            // Default Price in SGD
            let sgd = price[i];
            list[i].innerHTML = sgd;
        }
    }
    if (selector == "USD") {
        let usd;
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price in $(USD):";
            // Calculates Price in USD
            let usd = price[i] * 0.74;
            list[i].innerHTML = usd;
        }
    }
    if (selector == "GBP") {
        let gbp;
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price in $(GBP):";
            // Calculates Price in GBP
            let gbp = price[i] * 0.57;
            list[i].innerHTML = "£ " + gbp;
        }
    }

}