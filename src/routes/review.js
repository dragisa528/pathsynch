import express from "express";
import getreview from "../controllers/static/review/reviewGet.js";

const review = express.Router();

review.get("/review", getreview);
/* get review status */

export default review;
