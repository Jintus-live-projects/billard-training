import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Loader from './Loader'

const Template: ComponentStory<typeof Loader> = (args) => {
  return <Loader {...args} />
}

export const Rectangular = Template.bind({})

Rectangular.args = {
  className: 'h-10 rounded',
}

export const Circle = Template.bind({})

Circle.args = {
  className: 'h-20 w-20 rounded-full',
}

export default {
  title: 'Components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>
