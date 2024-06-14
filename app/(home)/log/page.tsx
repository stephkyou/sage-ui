//import { getServerSideProps } from '@/app/lib/data';
import Table from '@/app/ui/log/table';
import Pagination from '@/app/ui/pagination';
import { getLogData } from '@/app/lib/data';

export default async function Page() {
    const totalPages = 1;
    const log = await getLogData();
    
    return (
      <>
        <div className="text-4xl">transactions</div>
        <Table log={log} />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </>
    );
}