import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <main className="grid grid-cols-2 h-screen overflow-y-hidden">
      <div className="flex flex-col gap-5 container p-16 justify-center">
        <h1 className="font-bold flex justify-center text-5xl">Conecte-Se</h1>
        <Input placeholder="Email" />
        <Input placeholder="Telefone" type="text" />
        <Input placeholder="Senha" />
        <div className="flex flex-col gap-2 justify-center">
          <Button>Login</Button>
          <Button variant={"link"}>Ou crie uma conta nova!</Button>
        </div>
      </div>
      <div className="bg-zinc-900 h-full hidden justify-center items-center flex-col font-bold md:flex lg:flex ">
        <h1 className="text-5xl text-white">
          Bem-vindo
          <span className="text-violet-300"> de volta</span>
        </h1>
        <Image
          className="h-80 w-80"
          width={0}
          height={0}
          alt="Login "
          src={"/LG.svg"}
        />
      </div>
    </main>
  );
}
