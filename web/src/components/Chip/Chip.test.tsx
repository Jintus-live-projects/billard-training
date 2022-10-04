import { render } from '@redwoodjs/testing/web'

import Chip from './Chip'

describe('Chip', () => {
  let container: HTMLElement

  describe('content', () => {
    beforeEach(() => {
      container = render(<Chip value="value" />).container
    })

    it('should have content text', () => {
      expect(container.querySelector('span')).toHaveTextContent('value')
    })
  })

  describe('prefix', () => {
    beforeEach(() => {
      container = render(<Chip value="value">{{ prefix: '#' }}</Chip>).container
    })

    it('should have prefix before content', () => {
      expect(container.querySelector('span')).toHaveTextContent('#value')
    })
  })

  describe('active classes', () => {
    describe('active component', () => {
      beforeEach(() => {
        container = render(<Chip isActive value="value" />).container
      })

      it('should have active classes', () => {
        expect(container.querySelector('span')).toHaveClass('bg-accent')
        expect(container.querySelector('span')).toHaveClass('text-accent-light')
      })

      it('should not have inactive classes', () => {
        expect(container.querySelector('span')).not.toHaveClass(
          'bg-accent-light'
        )
        expect(container.querySelector('span')).not.toHaveClass('text-accent')
      })
    })

    describe('inactive component', () => {
      beforeEach(() => {
        container = render(<Chip value="value" />).container
      })

      it('should have inactive classes', () => {
        expect(container.querySelector('span')).toHaveClass('bg-accent-light')
        expect(container.querySelector('span')).toHaveClass('text-accent')
      })

      it('should not have active classes', () => {
        expect(container.querySelector('span')).not.toHaveClass('bg-accent')
        expect(container.querySelector('span')).not.toHaveClass(
          'text-accent-light'
        )
      })
    })
  })
})
