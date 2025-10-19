import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

function Switch({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer data-[state=checked]:bg-button-accent data-[state=unchecked]:bg-tetriary focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-tetriary inline-flex h-6 w-12 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(e)
      }}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pl-[2px] bg-white dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(145%-4px)] data-[state=unchecked]:translate-x-[1px]',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
