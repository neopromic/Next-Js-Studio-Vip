
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { Input } from "./ui/input";
import { Search } from 'lucide-react';
import SearchInputWithIcon from '@/components/Input-Icon'
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b px-4 py-2 gap-2 bg-background/80 backdrop-blur flex items-center sticky top-0 inset-0">
      <Link className="flex-1" href="/">
        <h1 className="text-lg font-bold flex-1 select-none cursor-pointer">
          StudioVip
        </h1>
      </Link>
      <nav className="flex gap-5">
        <div>
          <SearchInputWithIcon>
            <Search/>
          </SearchInputWithIcon>
        </div>
          <div className="flex imt gap-5">
          <ModeToggle />
          <Button variant={"outline"}>Login</Button>
          </div>
      </nav>
    </header>
  );
}
