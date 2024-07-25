import Button from "./ui/Button";

export default function Navbar() {
  return (
    <div className="h-1/8 absolute top-0 flex w-screen flex-row items-center gap-4 bg-stone-800 px-4 py-2 font-bold text-stone-200">
      <h1 className="mr-auto text-3xl">SpeedType</h1>
      <Button></Button>
      <Button></Button>
    </div>
  );
}
