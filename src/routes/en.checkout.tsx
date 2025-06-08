import BasketListItem from '@/components/BasketListItem/BasketListItem';
import type { BasketItem } from '@/types';
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel, Transition, TransitionChild } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime';

export const Route = createFileRoute('/en/checkout')({
  component: RouteComponent,
})

function RouteComponent() {
const basket = {
    items: [],
  };

  const handleChangeQuantity = (productId: number, quantity: number) => {};

  const handleRemoveProductFromBasket = (productId: number) => {};

  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div
        className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>
        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
        >
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order Summary
            </h2>
            <ul
              role="list"
              className="divide-y divide-gray-200 text-sm font-medium text-gray-900"
            >
              {basket.items.map((item: BasketItem) => (
                <BasketListItem
                  key={item.product.id}
                  basketItem={item}
                  onChangeQuantity={handleChangeQuantity}
                  onRemoveProductFromBasket={handleRemoveProductFromBasket}
                />
              ))}
            </ul>
            <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Amount</dt>
                <dd>EUR 100</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Shipping</dt>
                <dd>EUR 25</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Taxes</dt>
                <dd>EUR 25</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Sub total</dt>
                <dd className="text-base">EUR 100</dd>
              </div>
            </dl>

            <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
              <div className="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                <div className="mx-auto max-w-lg">
                  <PopoverButton className="flex w-full items-center py-6 font-medium">
                    <span className="mr-auto text-base">Total</span>
                    <span className="mr-2 text-base">EUR 100</span>
                    <ChevronUpIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </PopoverButton>
                </div>
              </div>

              <Transition as={Fragment}>
                <div>
                  <TransitionChild
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <PopoverBackdrop className="fixed inset-0 bg-black bg-opacity-25" />
                  </TransitionChild>
                  <TransitionChild
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-full"
                  >
                    <PopoverPanel className="relative bg-white px-4 py-6 sm:px-6">
                      <dl className="mx-auto max-w-lg space-y-6">
                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Summa</dt>
                          <dd>EUR 100</dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Frakt</dt>
                          <dd>EUR 100</dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Moms</dt>
                          <dd>EUR 25</dd>
                        </div>
                      </dl>
                    </PopoverPanel>
                  </TransitionChild>
                </div>
              </Transition>
            </Popover>
          </div>
        </section>
        <form className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2
                id="contact-info-heading"
                className="text-lg font-medium text-gray-900"
              >
                Contact information
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-mail address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2
                id="shipping-heading"
                className="text-lg font-medium text-gray-900"
              >
                Delivery Address
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zipcode
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>
            <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
              >
                Continue
              </button>
              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                You will not be charged until next step.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
