import express from "express";
import routerAccess from "./access.route.js";
import routerCategory from "./category.route.js";
import routerProduct from "./product.route.js";
import routerOrder from "./order.route.js";
import routerMail from "./mail.route.js";
import routerCart from "./cart.route.js";
import routerReview from "./review.route.js";
import routerShop from "./shop.route.js";

const router = express.Router();

// check apiKey

// check permission

router.get("/", (req, res) => {
  res.send("API is running!");
});

router.use("/access", routerAccess);
router.use("/category", routerCategory);
router.use("/product", routerProduct);
router.use("/order", routerOrder);
router.use("/mail", routerMail);
router.use("/cart", routerCart);
router.use("/review", routerReview);
router.use("/shop", routerShop);

export default router;
