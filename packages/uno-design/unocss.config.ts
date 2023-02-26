import { defineConfig, presetIcons, presetUno } from 'unocss'
import { presetUnoDesign } from '@uno-design/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
    presetUnoDesign(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
  ],
})
