import { useEffect, useState } from "react";
import reviewApi from "../api/reviews-api";
export default function useCreateComment() {
  const createHandler = async (gameId, review) =>
    reviewApi.create(gameId, review);

  return createHandler;
}
export function useGetAllComments(gameId) {
  const [review, setReview] = useState([]);
  useEffect(() => {
    (async () => {
      const resutlt = await reviewApi.getAll(gameId);

      setReview(resutlt);
    })();
  }, [gameId]);

  return [review, setReview];
}
