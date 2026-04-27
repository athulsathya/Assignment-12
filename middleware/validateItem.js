const validateItem = (req, res, next) => {
  const { name, quantity, price } = req.body;
  if (!name || !quantity || !price) {
    return res.status(400).send("name, quantity and price are required");
  }
  next();
};

module.exports = { validateItem };
