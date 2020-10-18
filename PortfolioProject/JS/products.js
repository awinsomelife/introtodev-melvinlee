let xhttp = new XMLHttpRequest();
let txt = "";
let price = [];
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //Convert JSON data to an object
        let products = JSON.parse(this.responseText);

         // Loop through the JSON array length and Print item information
         for (let i = 0; i < products.products.length; i++) {
            txt += "<div class='col-3' id='" + products.products[i].productCategory + "'>" + "Item: " + products.products[i].productName;
            txt += "<p class='currencytext'>" + "Price: ($)" + "</p>";
            txt += "<p class='price'>" + products.products[i].productPrice + "</p>";
            txt += "Category: " + products.products[i].productCategory + "</div>";
            // push product price to an array for use in currency coversion.
            price.push(products.products[i].productPrice);
        }
    
        document.getElementById("productName").innerHTML = txt;
    } else {
        return this.status == 500;
    }
};
xhttp.open("GET", "http://127.0.0.1:5500/Advanced%20JS%20Assignment/JSON/productCatalog.json", true);
xhttp.send();