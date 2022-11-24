import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LocationProvider } from '@redwoodjs/router'

import TopbarLink, { TopbarLinkProps } from './TopbarLink'

const Template: ComponentStory<typeof TopbarLink> = (
  args: TopbarLinkProps & { text: string }
) => {
  return (
    <LocationProvider location={{ pathname: 'path/' }}>
      <TopbarLink {...args}>{args.text}</TopbarLink>
    </LocationProvider>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  to: 'path/',
  text: 'Text',
}

export default {
  title: 'Components/TopbarLink',
  component: TopbarLink,
} as ComponentMeta<typeof TopbarLink>
