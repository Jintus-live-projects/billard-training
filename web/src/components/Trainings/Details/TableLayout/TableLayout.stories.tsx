import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TableLayout from './TableLayout'

const Template: ComponentStory<typeof TableLayout> = (args) => {
  return <TableLayout {...args} />
}

export const Default = Template.bind({})

Default.args = { layout: { gridColumnLevel: 1, gridRowLevel: 1 } }

export default {
  title: 'Components/TableLayout',
  component: TableLayout,
} as ComponentMeta<typeof TableLayout>
