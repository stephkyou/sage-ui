import Table from "@/app/ui/summary/table";
import Pagination from "@/app/ui/pagination";
import { getSummaryData } from "@/app/lib/data";

export default async function Page() {
  const totalPages = 1;
  const summaries = await getSummaryData();

  return (
    <>
      <div className="text-4xl">your spending, by month</div>
      <Table summaries={summaries}/>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}