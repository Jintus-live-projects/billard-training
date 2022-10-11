import { ComponentMeta, ComponentStory } from '@storybook/react'

import SidebarListItem from './SidebarListItem'

const Template: ComponentStory<typeof SidebarListItem> = (args) => {
  return <SidebarListItem {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  value: 'Sidebar item',
}

export default {
  title: 'Components/SidebarListItem',
  component: SidebarListItem,
} as ComponentMeta<typeof SidebarListItem>
