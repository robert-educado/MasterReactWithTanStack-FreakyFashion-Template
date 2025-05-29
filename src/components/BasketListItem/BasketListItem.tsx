import type { BasketItem } from "../../types";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Props {
  basketItem: BasketItem;
  onChangeQuantity: (productId: number, quantity: number) => void;
  onRemoveProductFromBasket: (productId: number) => void;
}

const BasketListItem = ({
  basketItem,
  onChangeQuantity,
  onRemoveProductFromBasket,
}: Props) => (
  <li key={basketItem.product.id} className="flex items-start space-x-4 py-6">
    <a href={basketItem.product.url}>
      <img
        src={basketItem.product.image}
        className="h-20 w-20 flex-none rounded-md object-cover object-center"
      />
    </a>
    <div className="flex-auto space-y-1">
      <h3>{basketItem.product.name}</h3>
      <select
        className="w-10 h-8 border border-gray-300 outline-0 rounded text-sm/[1] cursor-pointer"
        defaultValue={basketItem.quantity}
        onChange={(event) =>
          onChangeQuantity(basketItem.product.id, parseInt(event.target.value))
        }
      >
        {Array.from({ length: 9 }, (_, i) => i + 1).map((quantity) => (
          <option key={quantity} value={quantity}>
            {quantity}
          </option>
        ))}
      </select>
    </div>
    <div className="flex flex-col items-end justify-between text-sm">
      <p className="flex-none text-base font-medium">EUR 100</p>
      <div className="flex">
        <button
          data-product-id={basketItem.product.id}
          type="button"
          className="text-gray-400 hover:text-gray-600 mt-6"
          onClick={() => onRemoveProductFromBasket(basketItem.product.id)}
        >
          <TrashIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  </li>
);

export default BasketListItem;
