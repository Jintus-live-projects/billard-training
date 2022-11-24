import { ComponentMeta, ComponentStory } from '@storybook/react'

import Chip from './Chip'

const Template: ComponentStory<typeof Chip> = (args) => {
  return <Chip {...args}>{args.children}</Chip>
}
export const Default = Template.bind({})
Default.storyName = 'Default'
Default.args = {
  children: <data>value</data>,
}

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>
