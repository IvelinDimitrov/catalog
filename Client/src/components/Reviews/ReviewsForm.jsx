import { useEffect, useState } from "react";
import reviewsApi from "../../api/reviews-api";
export default function ReviewsForm(itemId) {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");
  const id = Object.values(itemId);

  const reviewHandler = async (e) => {
    e.preventDefault();
    await reviewsApi.create(id[0], username, review);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg max-w-xl ">
      <h2 className="text-lg font-medium mb-2">Review</h2>
      <form onSubmit={reviewHandler}>
        <div className="mb-4">
          <label className="block font-medium mb-2">Name</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-500 bg-[#a5e6bf] bg-opacity-45"
            name="username"
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Review</label>
          <textarea
            rows={4}
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-500 bg-[#a5e6bf] bg-opacity-45"
            name="review"
            placeholder="Enter your comment"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="border border-transparent hover:bg-transparent hover:bg-green-tx text-green-tx hover:text-navi font-semibold py-2 px-4 rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 mg"
            type="submit"
          >
            Post review
          </button>
        </div>
      </form>
    </div>
  );
}
// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"
