// import Image from "next/image";
import Form from "./ui/create-form";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col mt-24 justify-center items-center">
        <div className="text-6xl">welcome! ✨</div>
        <div className="text-2xl pt-10">add an expense:</div>
        <Form />
      </div>
      
    </main>
  );
}
