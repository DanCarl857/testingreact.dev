import { Product } from '../types/Product'
import { build, fake } from '@jackfranklin/test-data-bot'

export const productBuilder = build<Partial<Product>>('Product', {
  fields: {
    id: fake((f) => f.random.number()),
    image: fake((f) => f.image.imageUrl()),
    name: fake((f) => f.lorem.words()),
    price: fake((f) => `from $${f.random.number(100)}`),
  },
})
