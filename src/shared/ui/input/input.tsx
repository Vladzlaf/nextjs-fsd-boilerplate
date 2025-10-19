import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        ' selection-primary autofill-transparent placeholder:text-tetriary placeholder:text-[12px] placeholder:font-normal selection:bg-primary  flex h-9 w-full min-w-0 rounded-[12px]  bg-transparent px-3 py-1 text-base value:text-white text-tetriary shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm  disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
