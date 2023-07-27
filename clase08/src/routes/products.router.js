import { Router } from 'express'

const router = Router()

const products = []

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Products', products })
})

router.post('/', (req, res) => {
  const id = products.length ? products[products.length - 1].id + 1 : 1
  const product = { ...req.body, id }
  products.push(product)
  res.status(200).json({ message: 'New product', product })
})

export default router
