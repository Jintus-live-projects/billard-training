import { ComponentMeta, ComponentStory } from '@storybook/react'

import Topbar from './Topbar'

const Template: ComponentStory<typeof Topbar> = () => {
  return <Topbar />
}

export const Primary = Template.bind({})

export default {
  title: 'Components/Topbar',
  component: Topbar,
} as ComponentMeta<typeof Topbar>
