import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SparkleIcon, Sparkles, StarsIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SearchInputWithIcon from "@/components/Input-Icon";
import { Mail } from "lucide-react";
import Link from "next/link";
export default function PaginaDeProdutos() {
    return (
        <>
          <section>

        <h1 className="flex justify-center font-bold text-5xl mt-5">
            STUDIO POR PERTO
        </h1>

            <section className="flex justify-center gap-10">
            <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/tatto.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="flex space-y-4">
                        <div>
                          <h1 className="font-bold">Dhan - tatto</h1>
                          <h1>Jardim Belval - Barueri</h1>
                          <Button className="mt-5">Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/tatto2.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="flex space-y-4">
                        <div>
                          <h1 className="font-bold">Alex - Cabeleleiro</h1>
                          <h1>LeoPoldina - Osasco</h1>
                          <Button className="mt-5">Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/spa210.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="flex space-y-4">
                        <div>
                          <h1 className="font-bold ">Helena - Spa</h1>
                          <h1>Jandira</h1>
                          <Button className="mt-5">Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>
            </section>

            <section className="flex justify-center gap-10">

            <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/tatto.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="flex space-y-4">
                        <div>
                          <h1 className="font-bold">Dhan - tatto</h1>
                          <h1>Jardim Belval - Barueri</h1>
                          <Button className="mt-5">Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/tatto.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="flex space-y-4">
                        <div>
                          <h1 className="font-bold">Dhan - tatto</h1>
                          <h1>Jardim Belval - Barueri</h1>
                          <Button className="mt-5">Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/tatto.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="flex space-y-4">
                        <div>
                          <h1 className="font-bold">Dhan - tatto</h1>
                          <h1>Jardim Belval - Barueri</h1>
                          <Button className="mt-5">Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>

            </section>

          </section>


        </>
    )
}