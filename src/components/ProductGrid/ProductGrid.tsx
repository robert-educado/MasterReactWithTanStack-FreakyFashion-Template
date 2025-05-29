import { Link } from "@tanstack/react-router";
import type { Product } from "../../types";

const ProductGrid = ({ products }: { products: Product[] }) => (
  <div className="bg-white">
    <div className="mx-auto max-w-screen-lg px-4 py-2 sm:px-6 sm:py-2 lg:px-8 2xl:max-w-screen-xl">
      <div className="mx-auto max-w-2xl py-8 sm:py-10 lg:max-w-full">
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group text-sm">
              <div className="aspect-h-6 aspect-w-4 relative overflow-hidden bg-gray-100 ">
                <Link to={product.url}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">
                      New
                    </span>
                  </div>
                </Link>
                <div>
                  <div className="absolute bottom-1 right-1">
                    {/* Heart icon */}
                    <button className="like-button liked  w-10 h-10">
                      <span className="likes-counter bottom-1 flex justify-center items-center rounded-md border-4 bg-opacity-60 border-opacity-10 border-stone-100 bg-stone-100 m-1 hover:opacity-70 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="heart-icon bi bi-suit-heart fill-red-700"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
                            strokeWidth="15"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Link to={product.url}>
                  <h3 className="mt-4 text-medium font-medium text-gray-900">
                    {product.name}
                  </h3>
                </Link>
                <span className="mt-4 font-bold text-gray-900">
                  EUR {product.price}
                </span>
              </div>
              <span className="italic text-gray-500 text-xs">
                {product.brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProductGrid;
