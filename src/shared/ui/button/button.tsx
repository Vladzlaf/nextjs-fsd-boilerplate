import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 ',
  {
    variants: {
      variant: {
        default:
          'bg-button-accent text-white font-light text-[14px] rounded-[12px] hover:bg-button-accent/90 ',
        secondary:
          'bg-accent-opacity text-text-accent font-light   text-[14px] rounded-[12px] ',
        outline:
          'border bg-transparent text-muted-foreground text-[14px] font-light  rounded-[12px] hover:bg-accent-opacity hover:text-text-accent ',
        outlineRed:
          'border bg-transparent hover:bg-red-system-opacity text-red-system  border-text-red-system text-[14px] font-light rounded-full',

        secondaryGray:
          'bg-text-secondary text-secondary-black font-light text-[14px] rounded-[12px]',
        secondaryGrayActive: 'bg-tetriary rounded-3xl ',
        ghost: ' bg-transparent text-text-white  text-base rounded-full ',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'bg-transparent',
        ghostRed: 'bg-transparent text-red-dark-mode text-base rounded-full ',
        multipleSelect: 'relative data-[state=open]:z-[999] rounded-md',
        pagintation:
          'bg-transparent text-white  text-sm rounded-full hover:text-button-accent',
        pagintationActive: 'bg-button-accent text-white  text-sm rounded-full',
      },
      size: {
        default: 'h-10 p-3 w-fit',
        sm: 'h-8 rounded-md gap-1.5 px-3',
        smPagintation: 'h-8 w-8 gap-1.5 px-3',
        lg: 'h-[40px] rounded-md px-6 w-full',
        icon: 'h-fit w-fit p-2 hover:bg-white-secondary',
        multipleSelectTrigger: ' px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
