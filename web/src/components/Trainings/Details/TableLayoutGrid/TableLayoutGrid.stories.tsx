import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TableLayoutGrid from './TableLayoutGrid'

const Template: ComponentStory<typeof TableLayoutGrid> = (args) => {
  return (
    <div className="aspect-2/1">
      <TableLayoutGrid {...args} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = { columnLevel: 1, rowLevel: 1 }

export default {
  title: 'Components/TableLayoutGrid',
  component: TableLayoutGrid,
} as ComponentMeta<typeof TableLayoutGrid>
