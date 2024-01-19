import { notFound } from "next/navigation";
export default function ReviewDetail({
  params,
}: {
  params: {
    gameId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 10) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for game {params.gameId}
    </h1>
  );
}

