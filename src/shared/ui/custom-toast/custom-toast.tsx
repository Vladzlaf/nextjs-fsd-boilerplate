import { ToastContentProps } from 'react-toastify'
import { XCircle, AlertCircle, Info } from 'lucide-react'
import { CheckIcon, CrossIcon } from '@/shared/assets/icons'

interface CustomToastProps {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
}

export const CustomToast = ({
  closeToast,
  data,
}: ToastContentProps<CustomToastProps>) => {
  const { message, type = 'success' } = data || {}

  const getIconConfig = () => {
    const config = {
      success: {
        icon: CheckIcon,
        bgColor: 'bg-[#007C7C1A]',
        iconColor: 'text-[#007C7C]',
      },
      error: {
        icon: XCircle,
        bgColor: 'bg-[#DC26261A]',
        iconColor: 'text-[#DC2626]',
      },
      warning: {
        icon: AlertCircle,
        bgColor: 'bg-[#D977061A]',
        iconColor: 'text-[#D97706]',
      },
      info: {
        icon: Info,
        bgColor: 'bg-[#2563EB1A]',
        iconColor: 'text-[#2563EB]',
      },
    }
    return config[type]
  }

  const { icon: IconComponent, bgColor, iconColor } = getIconConfig()

  return (
    <div className="flex items-center justify-between w-full gap-4 p-2 pr-4 min-h-[60px]">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div
          className={`flex-shrink-0 w-11 h-11 rounded-full ${bgColor} flex items-center justify-center`}
        >
          <IconComponent className={`w-4 h-4 ${iconColor}`} />
        </div>

        <div className="flex-1 min-w-0">
          <span className="text-sm text-text-primary truncate">{message}</span>
        </div>
      </div>

      <button
        onClick={closeToast}
        className="cursor-pointer flex-shrink-0 w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center text-lg font-light"
      >
        <CrossIcon />
      </button>
    </div>
  )
}
