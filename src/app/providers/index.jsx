import compose from 'compose-function'
import { withRouter } from './with-router'
import { withTheme } from './with-theme'
import { withQuery } from './with-query'

export const withProviders = compose(withQuery, withTheme, withRouter)
