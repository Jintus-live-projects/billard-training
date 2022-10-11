import { ComponentMeta, ComponentStory } from '@storybook/react'

import { standard } from 'src/components/Trainings/Sidebar/TrainingTagFiltersCell/TrainingTagFiltersCell.mock'

import { Loading, Success } from './TrainingTagFiltersCell'

import TrainingTagFiltersCell from '.'

const TemplateLoading: ComponentStory<typeof Loading> = () => {
  return <Loading />
}

const TemplateSuccess: ComponentStory<typeof Success> = (args) => {
  return <Success {...args} />
}

export const loading = TemplateLoading.bind({})

export const success = TemplateSuccess.bind({})

success.args = {
  ...standard(),
  selectedFilters: [standard().trainingTags[1]],
}

export default {
  title: 'Cells/TrainingTagFiltersCell',
  subcomponents: {
    loading: Loading,
    success: Success,
  },
  argTypes: { onFilterClicked: { action: 'filterClicked' } },
} as ComponentMeta<typeof TrainingTagFiltersCell>
