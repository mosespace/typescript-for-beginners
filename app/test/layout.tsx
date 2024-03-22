import Link from "next/link";
import Announcement from "../../components/announcement";
import Nav from "@/components/nav";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function TestLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <Announcement />
      <Nav />
      <main className=''>{children}</main>
    </div>
  );
}
