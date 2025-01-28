import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import {category} from './category'
import { order } from './order'
import { customer } from './customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category, order, customer],
}
