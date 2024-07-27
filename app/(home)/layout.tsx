
import { Metadata } from 'next';
import { NavBar } from '../ui/nav-bar';
 
export const metadata: Metadata = {
  title: 'sage',
};
 
export default function Layout({ children }: { children: React.ReactNode }) { // children props here are the nested routes
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavBar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> 
    </div>
  );
}