import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

const orderStatusMap: Record<OrderStatus, { label: string; color: string }> = {
  pending: { label: 'Pendente', color: 'bg-yellow-400' },
  canceled: { label: 'Cancelado', color: 'bg-rose-500' },
  delivered: { label: 'Entregue', color: 'bg-emerald-500' },
  delivering: { label: 'Em entrega', color: 'bg-amber-500' },
  processing: { label: 'Em preparo', color: 'bg-amber-500' },
}

describe('Order Status', () => {
  const orderStatusArray = Object.entries(orderStatusMap)

  orderStatusArray.map(([status, { label, color }]) =>
    it(`should display the right text based when order status is ${status}`, () => {
      const { getByText, getByTestId } = render(
        <OrderStatus status={status as OrderStatus} />,
      )

      getByText(label)
      expect(getByTestId('badge')).toHaveClass(color)
    }),
  )
})
