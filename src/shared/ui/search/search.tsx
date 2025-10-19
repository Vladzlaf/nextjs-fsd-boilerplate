import { debounce } from '@/shared/utils/debounce'
import { Search as SearchIcon, X } from 'lucide-react'
import { useState, useCallback, useEffect } from 'react'
import { Input } from '../input'

interface SearchProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  debounceDelay?: number
  className?: string
}

export const Search = ({
  placeholder = 'Search...',
  value,
  onChange,
  debounceDelay = 500,
  className = '',
}: SearchProps) => {
  const [localValue, setLocalValue] = useState(value)

  const debouncedOnChange = useCallback(
    debounce((value: string) => {
      onChange(value)
    }, debounceDelay),
    [onChange, debounceDelay],
  )

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleChange = (newValue: string) => {
    setLocalValue(newValue)
    debouncedOnChange(newValue)
  }

  const handleClear = () => {
    setLocalValue('')
    onChange('')
  }

  return (
    <div className={`relative flex-1 max-w-md ${className}`}>
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tetriary w-4 h-4" />
      <Input
        placeholder={placeholder}
        value={localValue}
        onChange={(e) => handleChange(e.target.value)}
        className="pl-10 pr-10 h-9 rounded-xl border-0 bg-bg-primary"
      />
      {localValue && (
        <X
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-tetriary w-4 h-4 cursor-pointer"
          onClick={handleClear}
        />
      )}
    </div>
  )
}
