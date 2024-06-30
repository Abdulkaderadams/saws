$(function () {
  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
});

let products = {
  data: [
    {
      productName: "Salmon Sushi",
      description: `Rice, Carrot, Rocca, Crab, Salmon, Mango, Avocado, Edamame. <br> - sauce :Sweet & Chilli`,
      sauce: "sauce : sweet&chilli",
      nutri: ["39", "932"],
      category: "seafood",
      price: "9.5",
      image: "./images/JPEG-Salad/Salmon-sushi.jpg",
    },
    {
      productName: "Salmon Bowl",
      description:
        "Iceberg, Rocca, Carrot, Crab, Salmon, Mango, Avocado, Edamame. <br> - sauce : Sweet & Chilli",
      sauce: "sauce : sweet&chilli",
      nutri: ["37", "752"],
      category: "seafood",
      price: "9.00",
      image: "./images/JPEG-Salad/Salmon-bowl.jpg",
    },
    {
      productName: "Crispy Shrimp",
      description:
        "Rice, Rocca, Crab, Fried-SHrimps, Mango, Coriander. <br> - sauce : Sweet & Chilli",
      sauce: "sauce : sweet&chilli",
      nutri: ["32", "550"],
      category: "seafood",
      price: "8.5",
      image: "./images/JPEG-Salad/shrimp.jpg",
    },

    {
      productName: "Slay's Prawn",
      description:
        "Rocca, Cherry-Tomato, Avocado, Fetta Cheese, Shrimps. <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["23", "370"],
      category: "seafood",
      price: "8.00",
      image: "./images/JPEG-Salad/Slay.jpg",
    },

    {
      productName: "Octo Bowl",
      description:
        "Iceberg, Rocca, Pomegranate, Quinoa, Octopus. <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["26", "365"],
      category: "seafood",
      price: "8.00",
      image: "./images/JPEG-Salad/Octopus.jpg",
    },
    {
      productName: "Crab Sushi",
      description:
        "Rice, Carrot, Rocca, Crab, Mango, Avocado. <br> - sauce : Sweet & Chilli",
      sauce: "sauce : sweet&chilli",
      nutri: ["28", "705"],
      category: "seafood",
      price: "6.00",
      image: "./images/JPEG-Salad/Crab-sushi.jpg",
    },
    {
      productName: "Oh Crab!",
      description:
        "Iceberg, Carrot, Cucumber, Crab, Avocado, Orange. <br> - sauce : Mayo-mustard",
      sauce: "sauce : Mayo-mustard",
      nutri: ["20", "425"],
      category: "seafood",
      price: "5.00",
      image: "./images/JPEG-Salad/Oh-crab.jpg",
    },
    {
      productName: "Freak bowl!!!",
      description:
        "Rocca, Freekeh, pomegranate, Green-Onion, Chiken, Coriander, Walnut. <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["30", "490"],
      category: "chicken",
      price: "7.5",
      image: "./images/JPEG-Salad/freak.jpg",
    },

    {
      productName: "C'zar",
      description:
        "Iceberg, Cherry-Tomato, Grilled-Chicken, Cruton, Parmesan-Cheese. <br> - sauce : Garlic-mayo",
      sauce: "sauce : Garlic-mayo",
      nutri: ["47", "555"],
      category: "chicken",
      price: "5.5",
      image: "./images/JPEG-Salad/Czar.jpg",
    },
    {
      productName: "Goal Salad",
      description:
        "Iceberg, Rocca, Cherry-Tomato, Quinoa, Corn, Chicken, Pumpkin-Seeds.  <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["36", "583"],
      category: "chicken",
      price: "7.5",
      image: "./images/JPEG-Salad/Goal-Salad.jpg",
    },
    {
      productName: "Buffy-Chicken",
      description:
        "Iceberg, Rocca, Corn, Cherry-Tomato, Dynamite-Chicken, Chips, Avocado.  <br> - sauce : Sweet & Chilli",
      sauce: "sauce : sweet&chilli",
      nutri: ["37", "685"],
      category: "chicken",
      price: "6.5",
      image: "./images/JPEG-Salad/Buffy-chick.jpg",
    },
    {
      productName: "Pop-Chicken",
      description:
        "Iceberg, Rocca, Corn, Cherry-Tomato, Fried-Pop-Chicken.  <br> - sauce : BBQ",
      sauce: "sauce : BBQ",
      nutri: ["22", "550"],
      category: "chicken",
      price: "5.5",
      image: "./images/JPEG-Salad/Popchicken.jpg",
    },
    {
      productName: "Beef It Up!",
      description:
        "Iceberg, Rocca, Corn, Cherry-Tomato, Pomegranate, Red-Onion, Grilled-Beef.  <br> - sauce : Herbs",
      sauce: "sauce : Herbs",
      nutri: ["40", "622"],
      category: "meat",
      price: "7.5",
      image: "./images/JPEG-Salad/beefitup.jpg",
    },
    {
      productName: "Berry Me <3",
      description:
        "Lolo rosso, Goat-Cheese, Cherries, Berries, Pecans.  <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["8", "200"],
      category: "cheese",
      price: "8.00",
      image: "./images/JPEG-Salad/berry-me.jpg",
    },

    {
      productName: "Say cheese :)",
      description:
        "Rocca, Bulgarian-Cheese, Strawberry, Green-Apple, Avocado, Roasted-Almond.  <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["15", "365"],
      category: "cheese",
      price: "5.5",
      image: "./images/JPEG-Salad/saycheese.jpg",
    },
    {
      productName: "Rocka N Roll",
      description:
        "Rocca, Cherry-Tomato, Pomegranate, Raisins, Grilled-Halloumi, Walnuts.  <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["8", "445"],
      category: "cheese",
      price: "5.00",
      image: "./images/JPEG-Salad/Rocknroll.jpg",
    },
    {
      productName: "Greek salad",
      description:
        "Iceberg, Rocca, Cherry-Tomato, Cucumber, Black-Olive, Pepper, Corn, Fetta-Cheese.  <br> - sauce : Lemon oil",
      sauce: "sauce : Lemon oil",
      nutri: ["26", "537"],
      category: "cheese",
      price: "4.5",
      image: "./images/JPEG-Salad/Greek-Salad.jpg",
    },

    {
      productName: "Lentil Salad",
      description:
        "Iceberg, Rocca, Lentil, Cherry-Tomato, Broccoli, Beetroots, Coriander.  <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["13", "213"],
      category: "grain",
      price: "5.5",
      image: "./images/JPEG-Salad/Lentil.jpg",
    },
    {
      productName: "Queen waa",
      description:
        "Rocca, Cherry-Tomato, Quinoa, Pomegranate, Red-Kidney, Walnuts.  <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["10", "375"],
      category: "grain",
      price: "4.5",
      image: "./images/JPEG-Salad/queenwaa.jpg",
    },
    {
      productName: "ChickPeas",
      description:
        "Iceberg, Rocca, Cherry-Tomato, Pomegranate, Red-Onion, Fetta-Cheese, Chickpeas, Roasted-Almond.  <br> - sauce : Balsamic",
      sauce: "sauce : Balsamic",
      nutri: ["27", "580"],
      category: "grain",
      price: "5.00",
      image: "./images/JPEG-Salad/Chickpeas.jpg",
    },
    {
      productName: "Joy Salad",
      description:
        "Fava-Beans, Red-Kidney, Cherry-Tomato, Coriander, Cucumber, Green-Onion, Avocado.  <br> - sauce : Lemon honey",
      sauce: "sauce : Lemon Honey",
      nutri: ["57", "640"],
      category: "grain",
      price: "4.5",
      image: "./images/JPEG-Salad/JoySalad.jpg",
    },
    {
      productName: "Let's Falafel",
      description:
        "Iceberg, Rocca, Cherry-Tomato, Pickles, Mint, Radish, Fried-Falafel.  <br> - sauce : Tahini",
      sauce: "sauce : Tahini",
      nutri: ["21", "380"],
      category: "grain",
      price: "5.00",
      image: "./images/JPEG-Salad/Falafel.jpg",
    },

    // sandwichessssss
    {
      productName: "Turkey & Cheese",
      description:
        "Kashkaval, Smoked-Turkey, Mayo-Mustard, Iceberg, Tomato, Cornichone.",
      sauce: "",
      nutri: ["27", "420"],
      category: "sandwiches",
      price: "4.5",
      image: "./images/JPEG-Subs/Turkeyncheese.jpg",
    },
    {
      productName: "Pesto Halloumi",
      description: "Pesto spread, Grilled-Halloumi, Grilled-Tomato, Rocca.",
      sauce: "",
      nutri: ["15", "425"],
      category: "sandwiches",
      price: "4.00",
      image: "./images/JPEG-Subs/Pesto.jpg",
    },
    {
      productName: "Scrambled Eggs",
      description: "Fetta cheese, Scrambled Eggs, Avocado, Rocca.",
      sauce: "",
      nutri: ["20", "475"],

      category: "sandwiches",
      price: "5.00",
      image: "./images/JPEG-Subs/Eggs.jpg",
    },
    {
      productName: "Fetta Fiesta",
      sauce: "",
      nutri: ["8", "315"],

      description: "Fetta-Cheese, Cucumber, Cherry-Tomato, Corn, Iceberg.",
      category: "sandwiches",
      price: "3.00",
      image: "./images/JPEG-Subs/Feta.jpg",
    },
    {
      productName: "Veggie Labneh",

      description: "Labneh, Cucumber, Cherry-Tomato, Olives, Rocca.",
      sauce: "",
      nutri: ["10", "275"],
      category: "sandwiches",
      price: "2.5",
      image: "./images/JPEG-Subs/Labneh.jpg",
    },
    {
      productName: "Tuna Tuengo",
      description: "Tuna, Mayo-Mustard sauce, Cornichone, Corn, Iceberg.",
      sauce: "",
      nutri: ["18", "375"],
      category: "sandwiches",
      price: "5.00",
      image: "./images/JPEG-Subs/Tuna.jpg",
    },
    // pastaaaaaaaaaaaaaaaaaassssss
    {
      productName: "Pesto Pasta",
      description:
        "Fusili-Pasta, Carrots, Brocoli, Mushrooms, Green-Pepper, Corn, Onion, Parmesan-Cheese.",
      sauce: "sauce : Pesto",
      nutri: ["23", "796"],
      category: "pastas",
      price: "8.00",
      image: "./images/JPEG-Pasta/Pesto.jpg",
    },
    {
      productName: "Chicken Pasta",
      description:
        "Fusili-Pasta, Chicken, Yellow-Pepper, Coriander, Corn, Avocado, Cherry-Tomato.  <br> - sauce : Lemon oil",
      sauce: "sauce : Lemon oil",
      nutri: ["42", "753"],
      category: "pastas",
      price: "7.5",
      image: "./images/JPEG-Pasta/Chicken.jpg",
    },
    {
      productName: "Tuna Pasta",
      description:
        "Fusili-Pasta, Tuna, Carrots, Black-Olives, Corn, Cornichone, Iceberg.  <br> - sauce : Mayo-mustard",
      sauce: "sauce : Mayo-mustard",
      nutri: ["29", "652"],
      category: "pastas",
      price: "7.00",
      image: "./images/JPEG-Pasta/Tuna.jpg",
    },
    {
      productName: "Veggie Pasta",
      description:
        "Fusili-Pasta, Cherry-Tomato, Brocoli, Cucumber, Green-Pepper, Mushroom, Fetta-Cheese.  <br> - sauce : Lemon oil",
      sauce: "sauce : Lemon oil",
      nutri: ["33", "693"],
      category: "pastas",
      price: "6.00",
      image: "./images/JPEG-Pasta/Veggie.jpg",
    },

    // Burgeeeerrrsssss

    {
      productName: "Beef Burger",
      description:
        "Grilled-Beef, Cheddar-Cheese, Rocca, Tartar-sauce, Grilled (Onion,Tomatoe,Mushroom).",
      sauce: "",
      nutri: ["28", "415"],
      category: "burgers",
      price: "5.00",
      image: "./images/JPEG-Subs/BeefBurger.jpg",
    },
    {
      productName: "Chicken Burger",
      description:
        "Grilled-Chicken, Avocado Cheddar-Cheese, Rocca, Iceberg, BBQ-sauce, Fries-Stix.",
      sauce: "",
      nutri: ["30", "530"],
      category: "burgers",
      price: "4.00",
      image: "./images/JPEG-Subs/ChickenBurger.jpg",
    },

    // Juiiiiiiiiiiiiiiiicessss

    {
      productName: "Green Boost",
      description:
        "Ginger, Lemon, Orange, Cucumber, Green-Apple, Basil, Honey.",
      sauce: "",
      nutri: ["2.5", "185"],
      category: "juices",
      price: "4.5",
      image: "./images/JPEG-Juice/Green.jpg",
    },
    {
      productName: "Lemon Ginger",
      description: "Ginger, Lemon, Orange, Honey.",
      sauce: "",
      nutri: ["2", "159"],
      category: "juices",
      price: "3.5",
      image: "./images/JPEG-Juice/Lemon.jpg",
    },
    {
      productName: "Orange",
      description: "Fresh Orange.",
      sauce: "",
      nutri: ["2", "115"],
      category: "juices",
      price: "3.00",
      image: "./images/JPEG-Juice/Orange.jpg",
    },
    {
      productName: "Carrot",
      description: "Fresh Carrots.",
      sauce: "",
      nutri: ["2.2", "94"],
      category: "juices",
      price: "3.00",
      image: "./images/JPEG-Juice/Carrot.jpg",
    },
  ],
};
// Function to set equal heights and font size for card bodies
function setEqualHeightAndFontSize(cards) {
  let maxHeight = 0;
  let maxWords = 0;

  // Calculate the maximum height and maximum words in card bodies
  cards.forEach((card) => {
    const cardBody = card.querySelector(".card-body");
    if (cardBody) {
      const words = cardBody.innerText.trim().split(/\s+/).length; // Count words
      if (cardBody.offsetHeight > maxHeight) {
        maxHeight = cardBody.offsetHeight;
      }
      if (words > maxWords) {
        maxWords = words;
      }
    }
  });

  // Set all card bodies to the maximum height and set font size based on maximum words
  cards.forEach((card) => {
    const cardBody = card.querySelector(".card-body");
    if (cardBody) {
      cardBody.style.height = `${maxHeight}px`; // Set height
      const words = cardBody.innerText.trim().split(/\s+/).length;
      const fontSize = words === maxWords ? "16px" : "14px"; // Font size based on max words
      cardBody.style.fontSize = fontSize;
      cardBody.style.lineHeight = "1.5"; // Set line height for readability
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Your existing code to create cards
  for (let i of products.data) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "border-0", "h-100");

    // Image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.classList.add("card-img-top");
    card.appendChild(image);

    // Container
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Product name
    let name = document.createElement("h5");
    name.classList.add("card-title", "text-left");
    name.innerText = i.productName.toUpperCase();
    cardBody.appendChild(name);

    // Product text
    let text = document.createElement("p");
    // let text2 = document.createElement("strong");
    let divSpan = document.createElement("div");
    let nutriFactProtein = document.createElement("span");
    let nutriFactKcal = document.createElement("span");

    // Add classes and content
    divSpan.classList.add("text-left", "mt-auto"); // Use "mt-auto" to push divSpan to the bottom
    nutriFactProtein.classList.add("badge", "badge-success", ".nutri");
    nutriFactKcal.classList.add("badge", "badge-success", ".nutri");
    text.classList.add("card-text", "text-left");
    // text2.classList.add("card-text", "text-left");

    nutriFactProtein.innerText = i.nutri[0] + "g" + "\n protein";
    nutriFactKcal.innerText = i.nutri[1] + "\n Kcal";
    // "P : " + i.nutri[0] + "g" + " " + "/" + " " + i.nutri[1] + "kcal";
    text.innerHTML = `- Ingredients: ${i.description}`;
    // text2.innerText = i.sauce; // Assuming there's a description property

    // Append elements
    cardBody.appendChild(text);
    // cardBody.appendChild(text2);
    divSpan.appendChild(nutriFactProtein);
    divSpan.appendChild(nutriFactKcal);
    cardBody.appendChild(divSpan);
    card.appendChild(cardBody);

    // Price
    let price = document.createElement("div");
    price.classList.add("card-footer", "text-right", "bg-light");
    let priceTxt = document.createElement("small");
    priceTxt.classList.add("text-muted");
    priceTxt.innerText = "$" + i.price;
    price.appendChild(priceTxt);
    card.appendChild(price);

    // Append the card to the appropriate section based on category
    let productsContainer;
    if (i.category === "sandwiches") {
      productsContainer = document.getElementById("sandwiches");
    } else if (i.category === "pastas") {
      productsContainer = document.getElementById("pastas");
    } else if (i.category === "burgers") {
      productsContainer = document.getElementById("burgers");
    } else if (i.category === "juices") {
      productsContainer = document.getElementById("juices");
    } else {
      productsContainer = document.getElementById("products");
    }

    if (productsContainer) {
      productsContainer.appendChild(card);
    } else {
      console.error("Element with id 'products' or 'sandwiches' not found.");
    }
  }

  // Ensure the DOM is fully loaded before adjusting heights and font sizes
  window.addEventListener("load", () => {
    const productCards = Array.from(
      document.querySelectorAll("#products .card")
    );
    setEqualHeightAndFontSize(productCards);

    const sandwichCards = Array.from(
      document.querySelectorAll("#sandwiches .card")
    );
    setEqualHeightAndFontSize(sandwichCards);
    const pastaCards = Array.from(document.querySelectorAll("#pastas .card"));
    setEqualHeightAndFontSize(pastaCards);
  });

  // Function to filter products based on category (unchanged)
  function filterProducts(category) {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Add event listeners to category buttons (unchanged)
  document.getElementById("seafoodBtn").addEventListener("click", function () {
    filterProducts("seafood");
  });

  document.getElementById("chickenBtn").addEventListener("click", function () {
    filterProducts("chicken");
  });

  document.getElementById("meatBtn").addEventListener("click", function () {
    filterProducts("meat");
  });

  document.getElementById("cheeseBtn").addEventListener("click", function () {
    filterProducts("cheese");
  });

  document.getElementById("grainBtn").addEventListener("click", function () {
    filterProducts("grain");
  });

  document.getElementById("allBtn").addEventListener("click", function () {
    filterProducts("all");
  });
});

let adds_1 = [1, 2, 3, 4, 5, 6];
let adds_2 = [7, 8, 9, 10, 11, 12];
