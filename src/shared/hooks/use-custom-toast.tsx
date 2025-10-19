import { toast, ToastOptions, ToastContentProps } from 'react-toastify'
import { CustomToast } from '../ui/custom-toast'

type ToastType = 'success' | 'error' | 'warning' | 'info'

const showToast = (
  message: string,
  type: ToastType = 'success',
  options: ToastOptions = {},
) => {
  return toast(
    (props: ToastContentProps) => (
      <CustomToast {...props} data={{ message, type }} />
    ),
    {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      closeButton: false,
      style: {
        width: '100%',
        maxWidth: '699px',
        minHeight: '60px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
        padding: '0',
      },
      ...options,
    },
  )
}

export const customToast = {
  success: (message: string, options?: ToastOptions) =>
    showToast(message, 'success', options),
  error: (message: string, options?: ToastOptions) =>
    showToast(message, 'error', options),
  warning: (message: string, options?: ToastOptions) =>
    showToast(message, 'warning', options),
  info: (message: string, options?: ToastOptions) =>
    showToast(message, 'info', options),
  show: showToast,
}
