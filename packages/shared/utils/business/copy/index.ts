// import { FMessage } from '../../../../web-vue'

export const onCopy = (target: string): void => {
  const copyInput: HTMLInputElement = document.createElement('input')
  copyInput.value = target
  document.body.appendChild(copyInput)
  copyInput.select()
  document.execCommand('Copy')
  document.body.removeChild(copyInput)

  // FMessage({
  alert({
    message: 'ε€εΆζε',
    type: 'primary',
  })
}
