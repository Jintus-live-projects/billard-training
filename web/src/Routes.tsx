import { Route, Router, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/trainings" page={TrainingDetailPage} name="trainingDetail" />
      </Set>
      <Route notfound page={NotFoundPage} />
      <Route path="/" page={NotFoundPage} name="home" />
    </Router>
  )
}

export default Routes
