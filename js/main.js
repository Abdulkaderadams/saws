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
      description:
        "Rice, Carrot, Rocca, Crab, Salmon, Mango, Avocado, Edamame.",

      nutri: ["39", "932"],
      category: "seafood",
      price: "9.5",
      image: "./images/JPEG-Salad/Salmon-sushi.jpg",
    },
    {
      productName: "Salmon Bowl",
      description:
        "Iceberg, Rocca, Carrot, Crab, Salmon, Mango, Avocado, Edamame.",
      nutri: ["37", "752"],
      category: "seafood",
      price: "9.00",

      image: "./images/JPEG-Salad/Salmon-bowl.jpg",
    },
    {
      productName: "Crispy Shrimp",
      description: "Rice, Rocca, Crab, Fried-SHrimps, Mango, Coriander.",
      nutri: ["32", "550"],
      category: "seafood",
      price: "8.5",
      image: "./images/JPEG-Salad/shrimp.jpg",
    },

    {
      productName: "Slay's Prawn",
      description: "Rocca, Cherry-Tomato, Avocado, Fetta Cheese, Shrimps.",
      nutri: ["23", "370"],
      category: "seafood",
      price: "8.00",
      image: "./images/JPEG-Salad/Slay.jpg",
    },

    {
      productName: "Octo Bowl",
      description: "Iceberg, Rocca, Pomegranate, Quinoa, Octopus.",
      nutri: ["26", "365"],
      category: "seafood",
      price: "8.00",
      image: "./images/JPEG-Salad/Octopus.jpg",
    },
    {
      productName: "Crab Sushi",
      description: "Rice, Carrot, Rocca, Crab, Mango, Avocado.",
      nutri: ["28", "705"],
      category: "seafood",
      price: "6.00",
      image: "./images/JPEG-Salad/Crab-sushi.jpg",
    },
    {
      productName: "Oh Crab!",
      description: "Iceberg, Carrot, Cucumber, Crab, Avocado, Orange.",
      nutri: ["20", "425"],
      category: "seafood",
      price: "5.00",
      image: "./images/JPEG-Salad/Oh-crab.jpg",
    },

    {
      productName: "C'zar",
      description:
        "Iceberg, Cherry-Tomato, Grilled-Chicken, Cruton, Parmesan-Cheese.",
      nutri: ["47", "555"],
      category: "chicken",
      price: "5.5",
      image: "./images/JPEG-Salad/Czar.jpg",
    },
    {
      productName: "Goal Salad",
      description:
        "Iceberg, Rocca, Cherry-Tomato, Quinoa, Corn, Chicken, Pumpkin-Seeds.",
      nutri: ["36", "583"],
      category: "chicken",
      price: "7.5",
      image: "./images/JPEG-Salad/Goal-Salad.jpg",
    },
    {
      productName: "Buffy-Chicken",
      description:
        "Iceberg, Rocca, Corn, Cherry-Tomato, Dynamite-Chicken, Chips, Avocado.",
      nutri: ["37", "685"],
      category: "chicken",
      price: "6.5",
      image: "./images/JPEG-Salad/Buffy-chick.jpg",
    },
    {
      productName: "Pop-Chicken",
      description: "Iceberg, Rocca, Corn, Cherry-Tomato, Fried-Pop-Chicken.",
      nutri: ["22", "550"],
      category: "chicken",
      price: "5.5",
      image: "./images/JPEG-Salad/Popchicken.jpg",
    },
    {
      productName: "Beef It Up!",
      description:
        "Iceberg, Rocca, Corn, Cherry-Tomato, Pomegranate, Red-Onion, Grilled-Beef.",
      nutri: ["40", "622"],
      category: "meat",
      price: "7.5",
      image: "./images/JPEG-Salad/beefitup.jpg",
    },

    {
      productName: "Say cheese :)",
      description:
        "Rocca, Bulgarian-Cheese, Strawberry, Green-Apple, Avocado, Roasted-Almond.",
      nutri: ["15", "365"],
      category: "cheese",
      price: "5.5",
      image: "./images/JPEG-Salad/saycheese.jpg",
    },
    {
      productName: "Rocka N Roll",
      description:
        "Rocca, Cherry-Tomato, Pomegranate, Raisins, Grilled-Halloumi, Walnuts.",
      nutri: ["8", "445"],
      category: "cheese",
      price: "5.00",
      image: "./images/JPEG-Salad/Rocknroll.jpg",
    },
    {
      productName: "Greek salad",
      description:
        "Iceberg, Rocca, Cherry-Tomato, Cucumber, Black-Olive, Pepper, Corn, Fetta-Cheese.",
      nutri: ["26", "537"],
      category: "cheese",
      price: "4.5",
      image: "./images/JPEG-Salad/Greek-Salad.jpg",
    },

    {
      productName: "Lentil Salad",
      description:
        "Iceberg, Rocca, Lentil, Cherry-Tomato, Broccoli, Beetroots, Coriander.",
      nutri: ["13", "213"],
      category: "grain",
      price: "5.5",
      image: "./images/JPEG-Salad/Lentil.jpg",
    },
    {
      productName: "Queen waa",
      description:
        "Rocca, Cherry-Tomato, Quinoa, Pomegranate, Red-Kidney, Walnuts.",
      nutri: ["10", "375"],
      category: "grain",
      price: "4.5",
      image: "./images/JPEG-Salad/queenwaa.jpg",
    },
    {
      productName: "ChickPeas",
      description:
        "Iceberg, Rocca, Cherry-Tomato, Pomegranate, Red-Onion, Fetta-Cheese, Chickpeas, Roasted-Almond.",
      nutri: ["27", "580"],
      category: "grain",
      price: "5.00",
      image: "./images/JPEG-Salad/Chickpeas.jpg",
    },
    {
      productName: "Joy Salad",
      description:
        "Fava-Beans, Red-Kidney, Cherry-Tomato, Coriander, Cucumber, Green-Onion, Avocado.",
      nutri: ["57", "640"],
      category: "grain",
      price: "4.5",
      image: "./images/JPEG-Salad/JoySalad.jpg",
    },
    {
      productName: "Let's Falafel",
      description:
        "Iceberg, Rocca, Cherry-Tomato, Pickles, Mint, Radish, Fried-Falafel.",
      nutri: ["21", "380"],
      category: "grain",
      price: "5.00",
      image: "./images/JPEG-Salad/Falafel.jpg",
    },

    // sandwichessssss
    {
      productName: "Turkey & Cheese",
      description:
        "Kashkaval, Smoked-Turkey, Mayo-Mustard, Iceberg, Cherry-Tomato, Cornichone.",
      nutri: ["27", "420"],
      category: "sandwiches",
      price: "4.5",
      image: "./images/JPEG-Subs/Turkeyncheese.jpg",
    },
    {
      productName: "Pesto Halloumi",
      description: "Pesto spread, Grilled-Halloumi, Grilled-Tomato, Rocca.",
      nutri: ["15", "425"],
      category: "sandwiches",
      price: "4.00",
      image: "./images/JPEG-Subs/Pesto.jpg",
    },
    {
      productName: "Scrambled Eggs",
      description: "Fetta cheese, Scrambled Eggs, Avocado, Rocca.",
      nutri: ["20", "475"],
      category: "sandwiches",
      price: "5.00",
      image: "./images/JPEG-Subs/Eggs.jpg",
    },
    {
      productName: "Fetta Fiesta",
      nutri: ["8", "315"],
      description: "Fetta-Cheese, Cucumber, Cherry-Tomato, Corn, Iceberg.",
      category: "sandwiches",
      price: "3.00",
      image: "./images/JPEG-Subs/Feta.jpg",
    },
    {
      productName: "Veggie Labneh",
      nutri: ["10", "275"],
      description: "Labneh, Cucumber, Cherry-Tomato, Olives, Rocca.",
      category: "sandwiches",
      price: "2.5",
      image: "./images/JPEG-Subs/Labneh.jpg",
    },
    {
      productName: "Tuna Tuengo",
      description: "Tuna, Mayo-Mustard sauce, Cornichone, Corn, Iceberg.",
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
      nutri: ["23", "796"],
      category: "pastas",
      price: "8.00",
      image: "./images/JPEG-Pasta/Pesto.jpg",
    },
    {
      productName: "Chicken Pasta",
      description:
        "Fusili-Pasta, Chicken, Yellow-Pepper, Coriander, Corn, Avocado, Cherry-Tomato.",
      nutri: ["42", "753"],
      category: "pastas",
      price: "7.5",
      image: "./images/JPEG-Pasta/Chicken.jpg",
    },
    {
      productName: "Tuna Pasta",
      description:
        "Fusili-Pasta, Tuna, Carrots, Black-Olives, Corn, Cornichone, Iceberg.",
      nutri: ["29", "652"],
      category: "pastas",
      price: "7.00",
      image: "./images/JPEG-Pasta/Tuna.jpg",
    },
    {
      productName: "Veggie Pasta",
      description:
        "Fusili-Pasta, Cherry-Tomato, Brocoli, Cucumber, Green-Pepper, Mushroom, Fetta-Cheese.",
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
      nutri: ["28", "415"],
      category: "burgers",
      price: "5.00",
      image: "./images/JPEG-Subs/BeefBurger.jpg",
    },
    {
      productName: "Chicken Burger",
      description:
        "Grilled-Chicken, Avocado Cheddar-Cheese, Rocca, Iceberg, BBQ-sauce, Fries-Stix.",
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
      nutri: ["2.5", "185"],
      category: "juices",
      price: "4.5",
      image: "./images/JPEG-Juice/Green.jpg",
    },
    {
      productName: "Lemon Ginger",
      description: "Ginger, Lemon, Orange, Honey.",
      nutri: ["2", "159"],
      category: "juices",
      price: "3.5",
      image: "./images/JPEG-Juice/Lemon.jpg",
    },
    {
      productName: "Orange",
      description: "Fresh Orange.",
      nutri: ["2", "115"],
      category: "juices",
      price: "3.00",
      image: "./images/JPEG-Juice/Orange.jpg",
    },
    {
      productName: "Carrot",
      description: "Fresh Carrots.",
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
    let divSpan = document.createElement("div");
    let nutriFact = document.createElement("span");

    // Add classes and content
    divSpan.classList.add("text-left", "mt-auto"); // Use "mt-auto" to push divSpan to the bottom
    nutriFact.classList.add("badge", "badge-success");
    text.classList.add("card-text", "text-left");

    nutriFact.innerText =
      "P : " + i.nutri[0] + "g" + " " + "/" + " " + i.nutri[1] + "kcal";
    text.innerText = i.description; // Assuming there's a description property

    // Append elements
    cardBody.appendChild(text);
    divSpan.appendChild(nutriFact);
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
