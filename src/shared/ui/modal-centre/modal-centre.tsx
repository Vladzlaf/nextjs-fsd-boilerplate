import { X } from 'lucide-react'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../dialog-centre'

interface ModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: ReactNode
  closeButtonClassName?: string
  maxWidthClassName?: string
}

export const ModalCentre = ({
  isOpen,
  onOpenChange,
  title,
  children,
  closeButtonClassName,
  maxWidthClassName,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(maxWidthClassName ?? 'sm:max-w-[425px]')}
        showCloseButton={false}
      >
        <DialogHeader className="flex flex-row items-center justify-between w-full mb-2">
          <DialogTitle>{title}</DialogTitle>
          <DialogClose asChild>
            <button
              className={cn(
                'rounded-full p-1.5 hover:bg-gray-100 transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                closeButtonClassName,
              )}
              aria-label="Close"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </DialogClose>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
