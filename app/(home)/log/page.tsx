import Table from '@/app/ui/log/table';
import Pagination from '@/app/ui/pagination';
import { getExpenseCount, Count } from '@/app/lib/data';
import Search from '@/app/ui/log/search';
import { Metadata } from 'next';

export const metadata : Metadata = { 
  title: 'sage | log',
};
export const MAX_ITEMS_PER_PAGE = 10;

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const totalExpenses : Count = await getExpenseCount();
  const totalPages = Math.ceil(totalExpenses.count/MAX_ITEMS_PER_PAGE);
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
    
    return (
      <>
        <div className="text-4xl">transactions</div>
        <Search placeholder="search transactions..." />
        <Table currentPage={currentPage} query={query}/>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </>
    );
}