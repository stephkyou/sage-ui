import { TrashIcon } from "@heroicons/react/24/outline";

export default async function TransactionsTable() {
    const transactions = [
        {id: 1, date: 'April 17, 2024', where: 'Madewell', what: 'jeans', amount: '$59.99'},
        {id: 2, date: 'May 23, 2024', where: 'Amazon', what: 'toothbrush, swiffer', amount: '$22.34'},
        {id: 3, date: 'June 1, 2024', where: 'McDonald\'s', what: 'happy meal', amount: '$11.99'},
        {id: 4, date: 'June 2, 2024', where: 'Elliot Bay Books', what: 'The Unmaking of June Farrow by Adrienne Young, The Very Secret Society of Irregular Witches by Sangu Mandanna', amount: '$54.26'},
        {id: 5, date: 'June 3, 2024', where: 'Starbucks', what: 'latte', amount: '$4.99'},
    ]

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
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
                            {transactions?.map((transaction) => (
                            <tr
                                key={transaction.id}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-gray-50 transition-colors duration-200 ease-in-out"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">
                                    <p>{transaction.date}</p>
                                </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                {transaction.where}
                                </td>
                                <td className="whitespace-wrap px-3 py-3">
                                {transaction.what}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                {transaction.amount}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">
                                    <button className="text-blue-500 hover:bg-gray-200 p-1 rounded-md">
                                        <TrashIcon className="w-4 text-red-500"/>
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
