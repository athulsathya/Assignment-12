const foods = [
  {
    id: 1,
    name: "Biriyani",
    quantity: 2,
    price: 180,
  },
  {
    id: 2,
    name: "Chicken Curry",
    quantity: 1,
    price: 220,
  },
  {
    id: 3,
    name: "Juice",
    quantity: 3,
    price: 60,
  },
];

// items will display here [Get]
exports.getAllFoods = (req, res) => {
  res.status(200).json(foods);
};

// search food items by ID [Get]
exports.getFoodsById = (req, res) => {
  const { id } = req.params;
  const food = foods.find((item) => {
    return item.id === parseInt(id);
  });
  if (!food) {
    return res.status(404).send("Item not found");
  }
  res.json(food);
};

// Posting new food items
exports.createNewFoods = (req, res) => {
  const { name, quantity, price } = req.body;
  const newList = { id: foods.length + 1, name, quantity, price };
  foods.push(newList);
  return res.status(201).json(newList);
};

// Updating food items [Put]
exports.updatingFoods = (req, res) => {
  const { id } = req.params;
  const food = foods.find((f) => f.id === parseInt(id));
  if (!food) return res.status(404).send("Item not found");

  const { name, quantity, price } = req.body;
  if (name !== undefined) {
    food.name = name;
  }

  if (quantity !== undefined) {
    food.quantity = quantity;
  }

  if (price !== undefined) {
    food.price = price;
  }
  res.json(food);
};

// using patch patch working food items
exports.updatepartial = (req, res) => {
  const { id } = req.params;
  const food = foods.find((f) => f.id === parseInt(id));
  if (!food) return res.status(404).send("Item not found");

  const { name, quantity, price } = req.body;
  if (name !== undefined) {
    food.name = name;
  }
  if (quantity !== undefined) {
    food.quantity = quantity;
  }
  if (price !== undefined) {
    food.price = price;
  }

  res.json(food);
};

// Deleting food items
exports.deleteFood = (req, res) => {
  const id = parseInt(req.params.id);

  // 1. find index
  const index = foods.findIndex((f) => f.id === id);

  // 2. check not found
  if (index === -1) {
    return res.status(404).json({
      message: "Item not found",
    });
  }

  // 3. remove item
  const deletedItem = foods.splice(index, 1);

  // 4. send response
  res.json({
    message: "Item deleted successfully",
    data: deletedItem[0],
  });
};
