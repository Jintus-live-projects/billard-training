import {
  trainingTags,
  trainingTag,
  createTrainingTag,
  updateTrainingTag,
  deleteTrainingTag,
} from './trainingTags'
import type { StandardScenario } from './trainingTags.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('trainingTags', () => {
  scenario('returns all trainingTags', async (scenario: StandardScenario) => {
    const result = await trainingTags()

    expect(result.length).toEqual(Object.keys(scenario.trainingTag).length)
  })

  scenario(
    'returns a single trainingTag',
    async (scenario: StandardScenario) => {
      const result = await trainingTag({ id: scenario.trainingTag.one.id })

      expect(result).toEqual(scenario.trainingTag.one)
    }
  )

  scenario('creates a trainingTag', async () => {
    const result = await createTrainingTag({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a trainingTag', async (scenario: StandardScenario) => {
    const original = await trainingTag({ id: scenario.trainingTag.one.id })
    const result = await updateTrainingTag({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a trainingTag', async (scenario: StandardScenario) => {
    const original = await deleteTrainingTag({
      id: scenario.trainingTag.one.id,
    })
    const result = await trainingTag({ id: original.id })

    expect(result).toEqual(null)
  })
})
