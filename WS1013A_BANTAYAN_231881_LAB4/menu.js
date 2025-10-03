let menuItems = [
  { name: "Adobo Rice Bowl", category: "Main", price: 150, prepTime: 15 },
  { name: "Lumpiang Shanghai", category: "Appetizer", price: 90, prepTime: 10 },
  { name: "Halo-Halo", category: "Dessert", price: 120, prepTime: 8 },
  { name: "Iced Tea", category: "Drink", price: 50, prepTime: 2 }
];

function renderMenu(items = menuItems) {
  const tbody = document.querySelector("#menuTable tbody");
  tbody.innerHTML = "";
  items.forEach(item => {
    let row = `<tr>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>₱${item.price}</td>
      <td>${item.prepTime} min</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function showAveragePrice() {
  let total = menuItems.reduce((sum, item) => sum + item.price, 0);
  let avg = (total / menuItems.length).toFixed(2);
  document.getElementById("output").innerText = "Average Price: ₱" + avg;
}

function showCategory(category) {
  let filtered = menuItems.filter(item => item.category === category);
  renderMenu(filtered);
  document.getElementById("output").innerText = "Filtered by: " + category;
}

function showMostExpensive() {
  let expensive = menuItems.reduce((max, item) => item.price > max.price ? item : max, menuItems[0]);
  document.getElementById("output").innerText =
    "Most Expensive: " + expensive.name + " (₱" + expensive.price + ")";
}

function showGroups() {
  let groups = { "0-10 min": [], "11-20 min": [], "21+ min": [] };
  menuItems.forEach(item => {
    if (item.prepTime <= 10) groups["0-10 min"].push(item.name);
    else if (item.prepTime <= 20) groups["11-20 min"].push(item.name);
    else groups["21+ min"].push(item.name);
  });

  document.getElementById("output").innerText =
    "Groups:\n0-10 min: " + groups["0-10 min"].join(", ") +
    "\n11-20 min: " + groups["11-20 min"].join(", ") +
    "\n21+ min: " + groups["21+ min"].join(", ");
}

function fetchItems() {
  document.getElementById("output").innerText = "Fetching new items...";
  setTimeout(() => {
    let newItems = [
      { name: "Sinigang na Baboy", category: "Main", price: 220, prepTime: 25 },
      { name: "Cheesecake Slice", category: "Dessert", price: 180, prepTime: 12 }
    ];
    menuItems = menuItems.concat(newItems);
    renderMenu();
    document.getElementById("output").innerText = "New items added!";
  }, 1500);
}

renderMenu();