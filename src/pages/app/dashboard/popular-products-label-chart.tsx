type PopularProductsLabelChartProps = {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  value: number
  index: number
  data: { product: string }[]
}

const MIN_PRODUCT_NAME_LENGTH = 12
export const PopularProductsLabelChart = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
  data,
}: PopularProductsLabelChartProps) => {
  const RADIAN = Math.PI / 180
  const radius = 12 + innerRadius + (outerRadius - innerRadius)
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  const productNameLength = data[index].product.length > MIN_PRODUCT_NAME_LENGTH
  const concatProductName = data[index].product.substring(0, 12).concat('...')
  const fullProductName = data[index].product

  return (
    <text
      x={x}
      y={y}
      className="fill-muted-foreground text-xs"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {productNameLength ? <>{concatProductName}</> : <>{fullProductName}</>}(
      {value})
    </text>
  )
}
