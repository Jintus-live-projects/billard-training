import { Redirect, routes } from '@redwoodjs/router'

const NotFoundPage = () => <Redirect to={routes.trainingDetail()} />

export default NotFoundPage
