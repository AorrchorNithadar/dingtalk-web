import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="/images/dt-logo.png"
              alt="DingTalk Logo"
              width={120}
              height={60}
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-500 font-medium">
              หน้าแรก
            </Link>
            <Link href="/articles" className="text-gray-600 hover:text-blue-500 font-medium">
              บทความ
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-blue-500 font-medium">
              ข่าวสาร
            </Link>
            <Link href="/videos" className="text-gray-600 hover:text-blue-500 font-medium">
              วิดีโอ
            </Link>
          </nav>
          
          <div>
            <button className="bg-backgroundPrimary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              ติดต่อเรา
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};