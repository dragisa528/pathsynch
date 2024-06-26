class Review {
  constructor(body) {
    this.body = body;
  }

  create() {
    const obj = {
      underReview: this.body.underReview,
    };
    return obj;
  }
}

export default Review;
