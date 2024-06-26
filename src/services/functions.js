import { isreviewexist } from "../models/static/get.js";
import { addreview } from "../models/static/set.js";
import Review from "../schema/static/review.js";

export async function addstaticreview() {
  const isExist = await isreviewexist();

  if (!isExist) {
    const schema = new Review({ underReview: false }).create();
    await addreview(schema);
  }

  return true;
}
