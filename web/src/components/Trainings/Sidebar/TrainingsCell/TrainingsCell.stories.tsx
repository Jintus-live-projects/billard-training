import { Empty, Loading, Success } from './TrainingsCell'
import { standard } from './TrainingsCell.mock'

export const loading = (args) => {
  return Loading ? <Loading {...args} /> : null
}

export const empty = (args) => {
  return Empty ? <Empty {...args} /> : null
}

export const success = (args) => {
  return Success ? <Success {...standard()} {...args} /> : null
}

export default { title: 'Cells/TrainingsCell' }
