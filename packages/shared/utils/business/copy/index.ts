import { UMessage } from '@uno-design/web-vue'

export const onCopy = (target: string): void => {
  const copyInput: HTMLInputElement = document.createElement('input')
  copyInput.value = target
  document.body.appendChild(copyInput)
  copyInput.select()
  document.execCommand('Copy')
  document.body.removeChild(copyInput)

  UMessage({
    message: '复制成功',
    type: 'primary',
  })
}
