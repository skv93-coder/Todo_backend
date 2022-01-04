var express = require("express");
var router = express.Router();

const Todo = require("../modal/todo");

/* GET home page. */
router.get("/", async function (req, res) {
  const { query } = req;
  console.log(`query`, query);
  const list = await Todo.find({})
    .skip(Number(query.skip || 0))
    .limit(query.limit || 10);
  const count = await Todo.countDocuments();
  console.log(`list`, list);
  return res.send({ count, list });
});
router.put("/:id", async function (req, res) {
  const { id } = req.params;
  await Todo.updateOne({ _id: id }, req.body);
  return res.send({ message: "success" });
});
router.post("/", async (req, res) => {
  const todo = await Todo.create(req.body);
  console.log(`todo`, todo, req.body);
  return res.send({ message: "success" });
});

module.exports = router;
