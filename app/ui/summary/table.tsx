import { Money } from "@/app/lib/data";
import { formatCurrency, formatMonthDate } from "@/app/lib/utils";
import { getSummaryData } from "@/app/lib/data";

type Summary = {
    month: string;
    total: Money;
};

type SummaryResult = {
    result: Summary[];
};

export default async function SummaryTable() {
    const summaries: SummaryResult = await getSummaryData();

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-xl font-normal">
                            <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                month
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                total
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {summaries.result?.map((summary) => (
                            <tr
                                key={summary.month}
                                className="w-full border-b py-3 text-l last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-gray-50 transition-colors duration-200 ease-in-out"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">
                                    <p>{formatMonthDate(summary.month)}</p>
                                </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                {formatCurrency(summary.total.amount)}
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
