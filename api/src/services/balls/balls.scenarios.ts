import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BallCreateArgs>({
  ball: {
    one: { data: { type: 'CUE_BALL' } },
    two: { data: { type: 'CUE_BALL' } },
  },
})

export type StandardScenario = typeof standard
