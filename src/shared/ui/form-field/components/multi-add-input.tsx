import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Input } from '../../input'
import { Button } from '../../button'
import { cn } from '@/lib/utils'

interface MultiAddInputProps {
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  name?: string
  hasError?: boolean
  suggestions?: string[]
  suggestionsLabel?: string
}

export const MultiAddInput = ({
  value,
  onChange,
  placeholder,
  className,
  disabled,
  name,
  hasError,
  suggestions = [],
  suggestionsLabel = 'Common skills in your occupation',
}: MultiAddInputProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    if (inputValue.trim() && !value.includes(inputValue.trim())) {
      onChange([...value, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleRemove = (item: string) => {
    onChange(value.filter((i) => i !== item))
  }

  const handleSuggestionClick = (suggestion: string) => {
    if (!value.includes(suggestion)) {
      onChange([...value, suggestion])
    }
  }

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''

  const availableSuggestions = suggestions.filter((s) => !value.includes(s))

  const visibleSuggestions = availableSuggestions.slice(0, 5)

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="relative">
        <Input
          type="text"
          name={name}
          value={inputValue}
          onChange={(e) => !disabled && setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !disabled && handleAdd()}
          placeholder={placeholder}
          className={cn(
            'h-[50px] w-full rounded-[12px] border-0 bg-[#F6F2EE] text-[12px] pr-20 text-text-primary',
            hasError && 'border border-red-500',
            disabledClass,
          )}
          disabled={disabled}
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleAdd}
          disabled={disabled}
          className={cn(
            'absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-accent-opacity text-text-primary',
            disabled && 'opacity-50 cursor-not-allowed',
          )}
        >
          <Plus className="h-4 w-4 text-text-accent" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {value.map((item) => (
          <div
            key={item}
            className="flex items-center gap-1 rounded-full bg-[#007C7C33] px-3 py-1"
          >
            <span className="text-sm text-text-primary">{item}</span>
            <button
              type="button"
              onClick={() => !disabled && handleRemove(item)}
              className="text-text-primary hover:text-gray-700 cursor-pointer"
              disabled={disabled}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {visibleSuggestions.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            {suggestionsLabel}
          </p>
          <div className="flex flex-wrap gap-2 mb-1">
            {visibleSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => !disabled && handleSuggestionClick(suggestion)}
                disabled={disabled}
                className={cn(
                  'rounded-full px-3 py-1 text-sm border border-[#007C7C]',
                  'bg-transparent text-[#007C7C] hover:bg-[#007C7C33]',
                  disabled && 'opacity-50 cursor-not-allowed',
                )}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
