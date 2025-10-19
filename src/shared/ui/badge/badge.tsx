import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-xs font-medium',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-accent-opacity text-text-accent [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90',
        outline:
          'border-border bg-transparent text-foreground [a&]:hover:bg-accent',
        success:
          'border-transparent bg-green-100 text-green-800 [a&]:hover:bg-green-200',
        warning:
          'border-transparent bg-yellow-100 text-yellow-800 [a&]:hover:bg-yellow-200',
        info: 'border-transparent bg-blue-100 text-blue-800 [a&]:hover:bg-blue-200',
      },
      size: {
        default: 'px-2 py-1',
        sm: 'px-1.5 py-0.5',
        lg: 'px-3 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
