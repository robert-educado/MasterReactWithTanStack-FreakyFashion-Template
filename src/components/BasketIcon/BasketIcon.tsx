import type { Basket } from "../../types";

interface Props {
  basket: Basket
}

const BasketIcon = ({ basket }: Props) => {

  const itemCount = basket.items.reduce((currentCount, basketItem) => (
      currentCount + basketItem.quantity
  ), 0);

  return (
    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
      {itemCount}
    </span>
  )
}

export default BasketIcon;