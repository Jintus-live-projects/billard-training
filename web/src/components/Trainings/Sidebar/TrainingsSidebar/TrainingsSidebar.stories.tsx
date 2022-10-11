import { ComponentMeta, ComponentStory } from '@storybook/react'

import TrainingsSidebar from './TrainingsSidebar'

const Template: ComponentStory<typeof TrainingsSidebar> = () => {
  return <TrainingsSidebar />
}

export const Primary = Template.bind({})

export default {
  title: 'Components/TrainingsSidebar',
  component: TrainingsSidebar,
} as ComponentMeta<typeof TrainingsSidebar>
