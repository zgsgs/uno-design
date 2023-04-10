import type { ButtonHTMLAttributes } from 'vue'
export type { ButtonPropsType } from './props'

export enum EButtonType {
  primary = 'u-primary',
  success = 'u-success',
  warning = 'u-warning',
  danger = 'u-danger',
  info = 'u-info',
}

export type ButtonType = keyof typeof EButtonType

export enum EButtonSize {
  'small' = 'u-sm',
  'medium' = 'u-base',
  'large' = 'u-xl',
}

export type ButtonSize = keyof typeof EButtonSize

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>
