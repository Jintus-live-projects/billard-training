import { Route, Router, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'
import TrainingsLayout from 'src/layouts/TrainingsLayout/TrainingsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Set wrap={TrainingsLayout}>
          <Route path="/trainings" page={TrainingDetailPage} name="trainingDetail" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
      <Route path="/" page={NotFoundPage} name="home" />
    </Router>
  )
}

export default Routes
