import Table from '../../ui/log/table';
import Pagination from '../../ui/log/pagination';

export default function Page() {
    const totalPages = 1;
    
    return (
      <div>
        <div>
          <div className="text-4xl">transactions</div>
          <Table />
        </div>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    );
}