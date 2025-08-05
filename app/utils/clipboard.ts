export function copyToClipboard(
  toCopy: string,
  message: string = 'Copied to clipboard'
) {
  const toast = useToast()
  let text = toCopy
  try {
    const url = new URL(toCopy)
    if (url.protocol === 'mailto:') {
      text = url.pathname
    }
  } catch {
    // 不是有效 URL，保持原样
  }
  navigator.clipboard.writeText(text).then(() => {
    toast.add({
      title: message,
      color: 'success',
      icon: 'i-lucide-check-circle'
    })
  })
}
