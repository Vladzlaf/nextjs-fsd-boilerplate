import { cn } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'
import { Input } from '../../input'
import { Button } from '../../button'

interface CounterInputProps {
  value: number | null
  onChange: (value: number | null) => void
  min?: number
  max?: number
  step?: number
  className?: string
  disabled?: boolean
}

export const CounterInput = ({
  value,
  onChange,
  min = 1,
  max,
  step = 1,
  className,
  disabled = false,
}: CounterInputProps) => {
  const handleIncrement = () => {
    if (disabled) {
      return
    }
    const newValue =
      value === null ? min : Math.min(max || Infinity, value + step)
    onChange(newValue)
  }

  const handleDecrement = () => {
    if (disabled) {
      return
    }
    if (value === null || value <= min) {
      return
    }
    const newValue = Math.max(min, value - step)
    onChange(newValue === min ? min : newValue)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return
    }
    const inputValue = e.target.value
    if (inputValue === '') {
      onChange(min)
      return
    }

    const numValue = Number(inputValue)
    if (!isNaN(numValue)) {
      const clampedValue = max
        ? Math.min(max, Math.max(min, numValue))
        : Math.max(min, numValue)
      onChange(clampedValue)
    }
  }

  const displayValue = value === null ? min : value

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleDecrement}
        disabled={disabled || value === null || value <= min}
        className="h-8 w-8 rounded-full bg-accent-opacity"
      >
        <Minus className="h-4 w-4 text-text-accent" />
      </Button>

      <Input
        value={displayValue}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-12 text-center bg-[#F6F2EE]"
        disabled={disabled}
      />

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleIncrement}
        disabled={
          disabled || (max !== undefined && value !== null && value >= max)
        }
        className="h-8 w-8 rounded-full bg-accent-opacity"
      >
        <Plus className="h-4 w-4 text-text-accent" />
      </Button>
    </div>
  )
}
