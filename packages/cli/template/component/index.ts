import { install } from '../_utils'
import <%= displayName %> from './src/<%= name %>.vue'

export const <%= upperPrefix %><%= displayName %> = install(<%= displayName %>)

export type <%= displayName %>Instance = InstanceType<typeof <%= displayName %>>

export * from './src/type'

export default <%= displayName %>
