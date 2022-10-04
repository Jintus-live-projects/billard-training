import { ComponentMeta, ComponentStory } from '@storybook/react'

import Chip from './Chip'

const Template: ComponentStory<typeof Chip> = (args) => {
  return <Chip {...args} />
}
export const Default = Template.bind({})
Default.storyName = 'Default'
Default.args = {
  value: 'value',
}

export const Prefix = Template.bind({})
Prefix.storyName = 'With prefix'
Prefix.args = {
  value: 'value',
  children: {
    prefix: '#',
  },
}
// Workaround to pass children as object to component args in storybook but disabled "show code" feature for the story
Prefix.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
}

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>
