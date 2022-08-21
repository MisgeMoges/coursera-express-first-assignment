const express = require("express");
const app = express();
//dish router module imported here
let dishRouter = require("./dish-routes/dishesRouter");

//promotions router module imported here
let promoRouter = require("./promo-routes/promoRouter");

//leaders router module imported here
let leaderRouter = require("./leader-routes/leaderRouter");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);


app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
