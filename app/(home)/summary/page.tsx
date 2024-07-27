import Table from "@/app/ui/summary/table";
import Pagination from "@/app/ui/pagination";
import { getSummaryCount } from "@/app/lib/data";
import { Count } from "@/app/lib/data";

const MAX_SUMMARIES_PER_PAGE = 12;

export default async function Page() {
  const totalSummaries : Count = await getSummaryCount();
  const totalPages = Math.ceil(totalSummaries.count/MAX_SUMMARIES_PER_PAGE);

  return (
    <>
      <div className="text-4xl">your spending, by month</div>
      <Table />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}