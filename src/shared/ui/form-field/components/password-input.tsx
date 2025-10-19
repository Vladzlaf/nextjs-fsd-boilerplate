import { Eye, EyeOff } from 'lucide-react'

interface PasswordToggleProps {
  isVisible: boolean
  onToggle: () => void
  disabled?: boolean
}

export const PasswordToggle = ({
  isVisible,
  onToggle,
  disabled,
}: PasswordToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className="absolute right-4 cursor-pointer top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
    </button>
  )
}
