import { balls, ball, createBall, updateBall, deleteBall } from './balls'
import type { StandardScenario } from './balls.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('balls', () => {
  scenario('returns all balls', async (scenario: StandardScenario) => {
    const result = await balls()

    expect(result.length).toEqual(Object.keys(scenario.ball).length)
  })

  scenario('returns a single ball', async (scenario: StandardScenario) => {
    const result = await ball({ id: scenario.ball.one.id })

    expect(result).toEqual(scenario.ball.one)
  })

  scenario('creates a ball', async () => {
    const result = await createBall({
      input: { type: 'CUE_BALL' },
    })

    expect(result.type).toEqual('CUE_BALL')
  })

  scenario('updates a ball', async (scenario: StandardScenario) => {
    const original = await ball({ id: scenario.ball.one.id })
    const result = await updateBall({
      id: original.id,
      input: { type: 'NUMBERED_BALL' },
    })

    expect(result.type).toEqual('NUMBERED_BALL')
  })

  scenario('deletes a ball', async (scenario: StandardScenario) => {
    const original = await deleteBall({ id: scenario.ball.one.id })
    const result = await ball({ id: original.id })

    expect(result).toEqual(null)
  })
})
