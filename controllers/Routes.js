const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  res.send("working fine");
});


router.get('/check',(req,res) => {



    res.send("workig fine on this route also")
})

router.post("/test", async (req, res) => {
  res.status(200).send(req.body);
});

module.exports = router;
