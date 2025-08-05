export const copyOnlyIcons = ['i-simple-icons-gmail', 'i-simple-icons-wechat']

export const handleLinkClick = (link: any) => {
  // 对于WeChat和Email，只复制
  if (copyOnlyIcons.includes(link.icon)) {
    copyToClipboard(link?.account ?? link.to, link['aria-label'] + ' copied!')
  } else {
    // 对于LinkedIn和GitHub，复制+打开网页
    copyToClipboard(link?.account ?? link.to, link['aria-label'] + ' copied!')
    if (link.to) {
      window.open(link.to, link.target || '_blank')
    }
  }
}

export const getTooltipText = (link: any) => {
  const copyText = link?.account ?? link.to
  return copyOnlyIcons.includes(link.icon)
    ? `Click to copy: ${copyText}`
    : `Click to copy & open: ${copyText}`
}
