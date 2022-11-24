import type { ComponentMeta } from '@storybook/react'

import Billard from './Billard'

export const generated = () => {
  return <Billard></Billard>
}

export default {
  title: 'Components/Billard',
  component: Billard,
} as ComponentMeta<typeof Billard>
