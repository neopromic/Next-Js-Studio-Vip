import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex w-full h-screen overflow-y-hidden">
      <div className="flex flex-col gap-5 container p-16 justify-center">
        <h1 className="font-bold flex justify-center text-5xl tracking-tighter leading-none">
          Cadastre-se!
        </h1>
        <p className="text-muted-foreground leading-relaxed text-center">
          Comece a utilizar nossa plataforma com total liberdade apos realizar o
          cadastro em nossos serviços.
        </p>

        <Input placeholder="Email" />
        <Input placeholder="Telefone" type="text" />
        <Input placeholder="Senha" />
        <div className="flex flex-col gap-2 justify-center">
          <Button className="gap-2">
            <Sparkles size={16} />
            Criar minha conta!
          </Button>
          <Link href={"/login"} className="flex">
            <Button variant={"link"} className="flex justify-center w-full">
              Ou entre em uma conta existente!!
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-zinc-900 hidden justify-center items-center flex-col font-bold md:flex md:h-screen ">
        <h1 className="text-5xl text-white text-center">
          Prepare-se
          <span className="text-violet-300"> pra uma nova jornada</span>
        </h1>

        <Image
          className="h-80 w-80"
          width={0}
          height={0}
          alt="Login "
          src={"/undraw_logic_re_nyb4.svg"}
        />
      </div>
    </main>
  );
}
