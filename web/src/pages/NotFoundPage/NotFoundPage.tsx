import { Redirect, routes } from '@redwoodjs/router'

const NotFoundPage = () => <Redirect to={routes.home()} />

export default NotFoundPage
