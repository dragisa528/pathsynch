import Response from "../../../utils/response.js";
import { fetchreview } from "../../../models/static/get.js";

export default async function getreview(rq, rs, pass) {
  const response = (message) => new Response(message);

  try {
    const review = await fetchreview();
    rs.status(200).json(response("Ok").success(review));
  } catch (err) {
    pass(err);
  }
}
