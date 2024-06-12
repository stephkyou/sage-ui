import Table from "@/app/ui/summary/table";
import Pagination from "@/app/ui/pagination";

export default function Page() {
    const totalPages = 1;
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