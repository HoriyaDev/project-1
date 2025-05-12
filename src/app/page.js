import Image from "next/image";
import WalkAround from "../components/walk-around/WalkAround";

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center items-center">
     <WalkAround />
    </div>
  );
}
