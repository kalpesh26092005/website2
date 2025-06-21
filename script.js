const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// redirect to another page and dynamically change img
  function viewProduct(prodId, imgSrc) {
    localStorage.setItem("prodId", prodId);
    localStorage.setItem("prodImg", imgSrc);
    window.location.href = "sproduct.html";
    const product = products[prodId];
    if (product) {
      localStorage.setItem("prodData", JSON.stringify(product));
      window.location.href = "sproduct.html";
    }
  }

  window.onload = function () {
    const imgSrc = localStorage.getItem("prodImg");
    if (imgSrc) {
      document.getElementById("MainImg").src = imgSrc;
      const data = localStorage.getItem("prodData");
    if (data) {
      const product = JSON.parse(data);
      document.getElementById("prodTitle").textContent = product.title;
      document.getElementById("prodDesc").textContent = product.description;
      document.getElementById("prodPrice").textContent = product.price;
    } else {
      // fallback
      document.getElementById("prodTitle").textContent = "Product not found";
    }}
  }

   

    // change product title, description and rate dynamically according to prodId
    const products = {
    shirt1: {
      title: "Leriya Fashion",
      description: "Mens Rayon Man Casual Shirt Regular Fit Western",
      price: "₹499",
    },
    shirt2: {
      title: "Amazon Brand - Symbol",
      description: "Men's Cotton Shirt | Casual | Plain | Full Sleeve | Summer - Regular Fit (Available in Plus Size and Combo Packs) Top Reviewed for Fabric comfort",
      price: "₹799",
    },
    shirt3: {
      title: "RAPL",
      description: "Bharat Men's Regular Fit Casual Digital Printed Pure Microfilament Shirt with Collared Neck and Half Sleeve| Perfect Summer Outfit Multicolor (Size - S to 3XL)",
      price: "₹449",
    },
    shirt4: {
      title: "GRECIILOOKS",
      description: "Men's Regular Fit Casual Shirt | Shirt | Shirt for Men | Old Money Shirt for Men",
      price: "₹489",
    },
    women1: {
      title: "GRECIILOOKS",
      description: "Women's Short Sleeve Button-Down Shirt | Printed Casual Crop Top | Stylish Collared Shirt for Women | Oversized Shirt for Woman",
      price: "₹799",
    },
    women2: {
      title: "Leriya Fashion<",
      description: "Shirt for Women | Printed Casual Crop Top | Long Sleeve",
      price: "₹769",
    },
    women3: {
      title: "GRECIILOOKS",
      description: "Travel Co Ord Set for Women | Full Sleeve Women Co-ord set",
      price: "₹759",
    },
    women4: {
      title: "MANTICORE",
      description: "Women Casual Formal officewear Oversized Denim",
      price: "₹629",
    },
    shirtn1: {
      title: "DEELMO",
      description: "Men's Cotton Blend Mandarin Collar Self One Design Full",
      price: "₹649",
    },
    shirtn2: {
      title: "LookMark",
      description: "Men's Cotton Blend Printed Stitched Half Sleeve Regular",
      price: "₹549",
    },
    shirtn3: {
      title: "BULLMER",
      description: "Trendy Regular Fit Printed Causal Shirt for Men - Pack of 1",
      price: "₹649",
    },
    shirtn4: {
      title: "BULLMER",
      description: "Beige Front and Back Printed/Colourblock",
      price: "₹655",
    },
    shirtn5: {
      title: "CB-COLEBROOK",
      description: "Men's Casual Button Down Shirts Long Sleeve Linen Shirt",
      price: "₹579",
    },
    shirtn6: {
      title: "DEELMO",
      description: "Men's Stylish Solid Satin Casual Shirt for Men Full Sleeves| Poly",
      price: "₹669",
    },
    shirtn7: {
      title: "DEELMO",
      description: "Men's Casual Button Down Shirts Long Sleeve Linen Shirt",
      price: "₹749",
    },
    shirtn8: {
      title: "Pinkmint",
      description: "Shirt for Men Cotton Spraed Collar Long Sleeve Casual Shirt",
      price: "₹489",
    },
  }




var MainImg=document.getElementById('MainImg');
var smallimg=document.getElementsByClassName('small-img');

smallimg[0].onclick=function(){
  MainImg.src=smallimg[0].src
}
smallimg[1].onclick=function(){
  MainImg.src=smallimg[1].src
}
smallimg[2].onclick=function(){
  MainImg.src=smallimg[2].src
}
smallimg[3].onclick=function(){
  MainImg.src=smallimg[3].src
}







