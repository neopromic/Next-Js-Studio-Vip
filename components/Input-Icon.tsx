import React from 'react';
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';

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
