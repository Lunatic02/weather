import Forms from "./Forms";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900">
      <div className="container mx-auto flex justify-around items-center p-3">
        <h1 className="text-2xl font-extrabold text-white">PreviClima</h1>
        <Forms />
      </div>
    </nav>
  )
}
