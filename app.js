let currectIndex = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;

function showSlider(index) {
    if (index >= totalSlides) {
        currectIndex = 0
    } else if (index < 0) {
        currectIndex = totalSlides - 1
    } else {
        currectIndex = index
    }
    document.querySelector('.slider').style.transform = `translateX(-` + (currectIndex * 100) + `%)`
}

function nextSlider() {
    console.log('click on next slider....')
    showSlider(currectIndex + 1)
}

function prevSlider() {
    console.log('click on previous slider...')
    showSlider(currectIndex - 1)
}

//* productlist*//
let products = [
    {
        name: "Vincent Chase",
        price: 1500,
        color: "Silver Full Rim Round",
        size: "Medium",
        imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/purple-silver-purple-transparent-full-rim-round-vincent-chase-sleek-steel-vc-e13784-m-c1-eyeglasses_gm_3016.jpg"
    },
    {
        name: "Vincent Chase",
        price: 2000,
        color: "Gray Transparent Full Rim Round",
        size: "Medium",
        imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13033-m-c2-c2-eyeglasses_g_3463.jpg"
    },
    {
        name: "Lenskart Air",
        price: 1500,
        color: "Green Transparent Full Rim Round",
        size: "Medium",
        imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/green-transparent-grey-green-full-rim-round-lenskart-air-signia-la-e14963-c3-eyeglasses_g_3200_06_oct22.jpg"
    },
    {
        name: "Vincent Chase",
        price: 1500,
        color: "Mid Gunmetal Full Rim Round",
        size: "Narrow",
        imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vce000400-c-1-eyeglasses_dsc8444_14_01_2025.jpg"
    },
    {
        name: "Vincent Chase Polarized",
        price: 1500,
        color: "Dark Gunmetal Full Rim Clubmaster",
        size: "Medium",
        imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-black-brown-gradient-full-rim-clubmaster-vincent-chase-polorized-readers-club-vc-s15751-c1-sunglasses_g_7354_09_08_2023.jpg"
    },
    {
        name: "Vincent Chase Polarized",
        price: 1500,
        color: "Silver Full Rim Clubmaster",
        size: "Medium",
        imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-grey-full-rim-clubmaster-vincent-chase-polorized-readers-club-vc-s15753-c2-sunglasses_g_7238_09_08_2023.jpg"
    },
    {
        name: "Vincent Chase",
        price: 2000,
        color: "Purple Full Rim Cat Eye",
        size: "Medium",
        imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11803-c10-eyeglasses_csvfile-1706605013953-img_4449_30_01_2024.jpg"
    },
    {
        name: "Lenskart Air",
        price: 1500,
        color: "Green Transparent Full Rim Round",
        size: "Medium",
        imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/green-transparent-full-rim-round-lenskart-air-classic-la-e14532-c3-eyeglasses_g_9426.jpg"
    },
    {
        name: "Vincent Chase Polarized",
        price: 1500,
        color: "Brown Transparent Full Rim Clubmaster",
        size: "Wide",
        imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/Brown-Green-Full-Rim-Clubmaster--Vincent-Chase-Polarized-MIRAGE-VC-S10681/P-C5-Sunglasses_vincent-chase-vc-s10681-c5-sunglasses_sunglasses_sunglasses_m_7956_3_1_1_1_1_118_02_2022.jpg"
    },

];

products.forEach(function (item) {
    console.log(item.imageUrl);

    document.querySelector(".product-list").innerHTML += `
          <div class="product">
              <img  src="${item.imageUrl}"/>
              <div class="name-product">${item.name}</div>
              <div class="color"> ${item.color}</div>
              <div class="size">Size : ${item.size}</div>

              <div class="price">Rs. ${item.price}</div>
              <button>Buy Now</button>
          </div>
      `;
});