import React from 'react';
import { Search } from 'lucide-react'; // Importa o ícone de pesquisa da biblioteca lucide-react
import { Input } from "@/components/ui/input";
import { Mail } from 'lucide-react';

const SearchInputWithIcon = ({children}: {children: React.ReactNode}, text: string, className?: string) => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {children}
      </span>
      <Input
        type="search"
        className={className} 
        placeholder={text}
      />
    </div>
  );
};

export default SearchInputWithIcon;
