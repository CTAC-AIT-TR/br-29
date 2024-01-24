import Link from "next/link";
export default function Games() {
  const gameId = 10
  return (
    <>
    <div className="text-3xl font-bold text-white">
      <Link href="/" className="hover:text-primary">Home</Link>
      <h1>Games List</h1>
      <h2><Link href="/games/1" className="hover:text-primary">Game 1</Link></h2>
      <h2><Link href="/games/2" className="hover:text-primary">Game 2</Link></h2>
      <h2><Link href="/games/3" className="hover:text-primary">Game 3</Link></h2>
      <h2><Link href="/games/4" className="hover:text-primary" replace>Game 4</Link></h2>
      <h2><Link href={`/games/${gameId}`}>Game {gameId}</Link></h2>
      </div>
    </>
  );
}
