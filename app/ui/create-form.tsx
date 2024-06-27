'use client';

import { Datepicker } from "flowbite-react";
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { addExpense } from "@/app/lib/actions";
import { useRef } from "react";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form 
      ref={ref} 
      action={async (formData) => {
        await addExpense(formData);
        ref.current?.reset();
    }}>
      <div className="grid grid-cols-5 gap-4 mt-4 max-w-full mx-auto">
        <div className="mb-5">
          <label htmlFor="date" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
              date
          </label>
          <Datepicker weekStart={1} name="date"/>
        </div>

        <div className="mb-5">
          <label htmlFor="location" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
            where
          </label>
          <input 
            type="text" 
            id="location" 
            name="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="e.g. madewell" 
          />
        </div>

        <div className="mb-5">
          <label htmlFor="description" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
            what
          </label>
          <input 
            type="text" 
            id="description" 
            name="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="e.g. jeans" 
          />
        </div>

        <div className="mb-5">
          <label htmlFor="amount" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
            amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input 
                type="number" 
                step="0.01" 
                id="amount" 
                name="amount"
                className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 peer block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 no-spinner" 
                placeholder="enter USD amount" 
                required 
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-5 mt-2 flex block justify-center items-center h-full p-2.5">
          <button 
            type="submit" 
            className="text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm sm:w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            add!
          </button>
        </div>
      </div>
    </form>
  )
}