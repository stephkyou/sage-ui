import { TrashIcon } from "@heroicons/react/24/outline";
import { Money } from "@/app/lib/data";

type Transaction = {
    id: number
    date: string
    location: string
    description: string
    amount: Money
}

type LogResult = {
    show_id: boolean
    result: Transaction[]
}

export default async function TransactionsTable({ log }: { log: LogResult }) {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-xl font-normal">
                            <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                date
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                where
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                what
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                amount
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {log.result?.map((transaction) => (
                            <tr
                                key={transaction.id}
                                className="w-full border-b py-3 text-l last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-gray-50 transition-colors duration-200 ease-in-out"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">
                                    <p>{transaction.date}</p>
                                </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                {transaction.location}
                                </td>
                                <td className="whitespace-wrap px-3 py-3">
                                {transaction.description}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                ${transaction.amount.amount/100}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">
                                    <button className="text-blue-500 hover:bg-gray-200 p-1 rounded-md">
                                        <TrashIcon className="w-5 text-red-500"/>
                                    </button>
                                </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
