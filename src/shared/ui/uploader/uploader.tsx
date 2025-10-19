import { useCallback, useState, forwardRef, useImperativeHandle } from 'react'
import { useDropzone } from 'react-dropzone'
import { CrossUploadIcon } from '@/shared/assets/icons'
import { FileWithPreview } from './interfaces/file-preview.interface'
import { cn } from '@/lib/utils'

export interface UploaderRef {
  triggerUpload: () => void
  removeFile: () => void
}

export interface UploaderProps {
  onFileChange: (file: File | null) => void
  accept?: {
    [key: string]: string[]
  }
  maxFiles?: number
  maxSize?: number // in bytes
  className?: string
  dropzoneClassName?: string
  previewClassName?: string
  hoverPreviewClassName?: string
  errorClassName?: string
  icon?: React.ReactNode
  initialPreview?: string | null
  onRemove?: () => void
}

export const Uploader = forwardRef<UploaderRef, UploaderProps>(
  (
    {
      onFileChange,
      accept = {
        'image/*': ['.jpeg', '.jpg', '.png'],
      },
      maxFiles = 1,
      maxSize = 5 * 1024 * 1024,
      className = '',
      dropzoneClassName = '',
      previewClassName = '',
      hoverPreviewClassName = '',
      errorClassName = '',
      icon = <CrossUploadIcon className="w-[50px] h-[50px]" />,
      initialPreview = null,
      onRemove,
    },
    ref,
  ) => {
    const [file, setFile] = useState<FileWithPreview | null>(
      initialPreview
        ? {
            file: new File([], 'preview'),
            preview: initialPreview,
          }
        : null,
    )
    const [error, setError] = useState('')

    const onDrop = useCallback(
      (acceptedFiles: File[]) => {
        setError('')
        if (acceptedFiles.length > 0) {
          const selectedFile = acceptedFiles[0]

          if (
            accept &&
            !Object.keys(accept).some((type) => {
              if (type === 'image/*') {
                return selectedFile.type.startsWith('image/')
              }
              return selectedFile.type.startsWith(type)
            })
          ) {
            setError('Please upload a supported file type')
            return
          }

          if (selectedFile.size > maxSize) {
            setError(`File size should be less than ${maxSize / 1024 / 1024}MB`)
            return
          }

          const newFile = {
            file: selectedFile,
            preview: URL.createObjectURL(selectedFile),
          }
          setFile(newFile)
          onFileChange(selectedFile)
        }
      },
      [accept, maxSize, onFileChange],
    )

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
      onDrop,
      accept,
      maxFiles,
    })

    const removeFile = (e?: React.MouseEvent) => {
      if (e) {
        e.stopPropagation()
      }
      if (file?.preview) {
        URL.revokeObjectURL(file.preview)
      }
      setFile(null)
      onFileChange(null)
      setError('')
      onRemove?.()
    }

    useImperativeHandle(ref, () => ({
      triggerUpload: () => {
        open()
      },
      removeFile: () => {
        removeFile()
      },
    }))

    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div
          {...getRootProps()}
          className={`
             bg-[#F2F2F7] flex items-center justify-center cursor-pointer
            border-2 border-dashed ${error ? 'border-error' : 'border-transparent'}
            hover:border-gray-300 transition-all relative
            ${isDragActive ? '!border-primary bg-primary/10' : ''}
            ${dropzoneClassName}
          `}
        >
          <input {...getInputProps()} />

          {file ? (
            <>
              <img
                src={file.preview}
                alt="Preview"
                className={`w-full h-full object-cover ${previewClassName}`}
              />
              <div
                className={cn(
                  'absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center',
                  hoverPreviewClassName,
                )}
              >
                <button
                  type="button"
                  onClick={removeFile}
                  className="text-white bg-transparent rounded-full p-1 hover:text-red-system cursor-pointer transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="text-[#8E8E93]">{icon}</div>
            </div>
          )}
        </div>

        {error && (
          <p className={`text-sm text-error ${errorClassName}`}>{error}</p>
        )}
      </div>
    )
  },
)

Uploader.displayName = 'Uploader'
