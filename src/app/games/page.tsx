import Link from "next/link";
export default function Games() {
  const gameId = 10
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Games List</h1>
      <h2><Link href="/games/1">Game 1</Link></h2>
      <h2><Link href="/games/2">Game 2</Link></h2>
      <h2><Link href="/games/3">Game 3</Link></h2>
      <h2><Link href="/games/4" replace>Game 4</Link></h2>
      <h2><Link href={`/games/${gameId}`}>Game {gameId}</Link></h2>
    </>
  );
}
