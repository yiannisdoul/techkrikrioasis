import { ref, reactive } from 'vue'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface ToastNotification {
  id: string
  message: string
  type: ToastType
  timeout?: number
  autoClose: boolean
}

// Create a reactive store for notifications
const notifications = reactive<Map<string, ToastNotification>>(new Map())

// Generate a unique ID for each toast
const generateId = (): string => {
  return `toast-${Date.now()}-${Math.floor(Math.random() * 1000)}`
}

export const useToast = () => {
  const defaultTimeout = 5000 // 5 seconds

  const add = (message: string, type: ToastType = 'info', timeout?: number, autoClose = true): string => {
    const id = generateId()
    const notification: ToastNotification = {
      id,
      message,
      type,
      timeout: timeout || defaultTimeout,
      autoClose
    }
    
    notifications.set(id, notification)
    
    if (autoClose && timeout !== 0) {
      setTimeout(() => {
        remove(id)
      }, notification.timeout)
    }
    
    return id
  }

  const remove = (id: string) => {
    notifications.delete(id)
  }

  const removeAll = () => {
    notifications.clear()
  }

  const success = (message: string, timeout?: number) => add(message, 'success', timeout)
  const error = (message: string, timeout?: number) => add(message, 'error', timeout)
  const info = (message: string, timeout?: number) => add(message, 'info', timeout)
  const warning = (message: string, timeout?: number) => add(message, 'warning', timeout)

  return {
    notifications,
    add,
    remove,
    removeAll,
    success,
    error,
    info,
    warning
  }
}