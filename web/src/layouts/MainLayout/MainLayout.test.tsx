import { render } from '@redwoodjs/testing/web'

import Topbar from 'src/components/TopBar/Topbar/Topbar'

import MainLayout from './MainLayout'

jest.mock('src/components/TopBar/Topbar/Topbar')

describe('MainLayout', () => {
  it('should render a Topbar', () => {
    render(<MainLayout />)
    expect(Topbar).toBeCalled()
  })

  it('should render children', () => {
    const { getByText } = render(<MainLayout>mock</MainLayout>)
    expect(getByText('mock')).toBeInTheDocument()
  })
})
