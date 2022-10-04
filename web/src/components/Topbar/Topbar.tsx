import { routes } from '@redwoodjs/router'

import TopbarLink from 'src/components/TopbarLink/TopbarLink'

const Topbar = () => {
  return (
    <header className="flex justify-between bg-white drop-shadow">
      <div className="flex">
        <div className="grid w-80 place-content-center text-xl font-bold">
          Billard training
        </div>
        <TopbarLink to={routes.trainingDetail()}>Entraînement</TopbarLink>
      </div>
    </header>
  )
}

export default Topbar
