export default function GameDetails({
  params,
}: {
  params: { gameId: string };
}) {
  return <h1>Details about game {params.gameId}</h1>;
}
