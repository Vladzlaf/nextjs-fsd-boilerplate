/* eslint-disable @typescript-eslint/no-explicit-any */
export const buildQueryParams = (
  params: Record<string, any>,
): URLSearchParams => {
  const searchParams = new URLSearchParams()

  const processNestedObject = (prefix: string, obj: any) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return
      }

      const fullKey = prefix ? `${prefix}[${key}]` : key

      if (
        typeof value === 'object' &&
        !Array.isArray(value) &&
        !(value instanceof Date)
      ) {
        processNestedObject(fullKey, value)
      } else if (Array.isArray(value)) {
        value.forEach((item) => {
          searchParams.append(`${fullKey}[]`, item.toString())
        })
      } else if (value instanceof Date) {
        searchParams.append(fullKey, value.toISOString())
      } else {
        searchParams.append(fullKey, value.toString())
      }
    })
  }

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return
    }

    if (
      typeof value === 'object' &&
      !Array.isArray(value) &&
      !(value instanceof Date)
    ) {
      processNestedObject(key, value)
    } else if (Array.isArray(value)) {
      value.forEach((item) => {
        searchParams.append(`${key}[]`, item.toString())
      })
    } else if (value instanceof Date) {
      searchParams.append(key, value.toISOString())
    } else {
      searchParams.append(key, value.toString())
    }
  })

  return searchParams
}
