// app/page.tsx
import HeroSection from '@/app/components/HeroSection';
import Features from '@/app/components/Features';
import Pricing from '@/app/components/Pricing';
import JoinCommunity from './components/JoinCommunity';
import Partners from './components/Partners';
import WhatIsItFor from './components/WhatIsItFor';
import WhatIsVideo from './components/WhatIsVideo';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIsVideo />
      <WhatIsItFor />
      <Features />
      <Pricing />
      <Partners />
      <JoinCommunity />
    </>
  );
}

// import Image from "next/image";
// import Head from 'next/head';


// export default function Home() {
//   return (
//     <>
//      <Head>
//         <title>DingTalk - ทำงานง่ายขึ้นด้วย AI</title>
//         <meta name="description" content="DingTalk ช่วยให้การทำงานง่ายขึ้นด้วย AI และฟีเจอร์ที่หลากหลาย" />
//       </Head>

//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <Image src="/images/dt-logo.png" alt="DingTalk Logo" width={120} height={50} />
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
//             <a href="#" className="text-gray-600 hover:text-blue-500">บทความ</a>
//             <a href="#" className="text-gray-600 hover:text-blue-500">Video Tutorial</a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <button className="text-gray-600 hover:text-blue-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md">ติดต่อเรา</button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-cover bg-center h-screen flex items-center justify-center bg-[url('/images/hero-bg.jpg')]">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold text-white mb-4">
//             ทำงานง่ายขึ้นด้วย AI ที่เข้าใจทีมคุณ
//           </h1>
//           <p className="text-3xl font-bold text-blue-300 mb-8">
//             secure payments
//           </p>
//           <p className="text-xl text-white mb-8">
//             ยกระดับประสิทธิภาพการทำงานด้วยฟีเจอร์ AI จาก DingTalk และเชื่อมต่ออัจฉริยะที่ช่วยให้งานดำเนินไปโดยอัตโนมัติ
//           </p>
//           <div className="flex justify-center space-x-4">
//             <button className="bg-blue-500 text-white px-8 py-3 rounded-md">เริ่มใช้งาน</button>
//             <button className="bg-green-500 text-white px-8 py-3 rounded-md">คู่มือการใช้งาน</button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="bg-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="w-full md:w-1/2 mb-8 md:mb-0">
//               <img src="/images/secure-payments.png" alt="Secure Payments" className="w-full" />
//             </div>
//             <div className="w-full md:w-1/2">
//               <h2 className="text-3xl font-bold mb-4">ฟีเจอร์ที่น่าสนใจ</h2>
//               <div className="grid grid-cols-3 gap-4">
//                 {/* Add icons and labels for each feature */}
//                 <div className="bg-white p-4 rounded shadow">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8v8a1 1 0 01-1.447.894L15 16m0 0l-5.516 2.758A1 1 0 018 20V8a1 1 0 011.447-.894L15 10z" />
//                   </svg>
//                   <p className="text-gray-600 mt-2">Video Conference</p>
//                 </div>
//                 <div className="bg-white p-4 rounded shadow">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                   </svg>
//                   <p className="text-gray-600 mt-2">Calendar</p>
//                 </div>
//                 <div className="bg-white p-4 rounded shadow">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m3 4H3m2 6H3m18-6v-.003c0-.263-.113-.513-.303-.691l-6.211-5.225a1.25 1.25 0 00-.946-.303H5.027a1.2 1.2 0 00-1.195 1.09l-4.543 3.905a1.25 1.25 0 00-.293 1.302V19a2 2 0 002 2h10a2 2 0 002-2v-3.003zm9.303-9.691l6.211-5.225a1.25 1.25 0 01.946-.303h8.052a1.2 1.2 0 011.195 1.09l4.543 3.905a1.25 1.25 0 01.293 1.302V15a2 2 0 01-2 2h-3.08t-.785-1.37l-4.543-3.905a1.25 1.25 0 01-.293-1.302V9.691z" />
//                   </svg>
//                   <p className="text-gray-600 mt-2">Projects</p>
//                 </div>
//                 {/* Add more features as needed */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sidebar Section */}
//       <aside className="bg-white shadow-lg p-4 sticky top-0">
//         <div className="mb-4">
//           <h3 className="text-lg font-bold">CODEDIA</h3>
//           <img src="/images/user-manual.png" alt="User Manual" className="w-full mt-2" />
//         </div>
//         <div>
//           <h3 className="text-lg font-bold mb-2">Frequently Used Apps</h3>
//           <div className="grid grid-cols-4 gap-4">
//             {/* Add icons and labels for each app */}
//             <div className="bg-white p-4 rounded shadow">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2m0 0l2-2m-2 2v2" />
//               </svg>
//               <p className="text-gray-600 mt-2">Announcement</p>
//             </div>
//             <div className="bg-white p-4 rounded shadow">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2m0 0l2-2m-2 2v2" />
//               </svg>
//               <p className="text-gray-600 mt-2">Check-in</p>
//             </div>
//             {/* Add more apps as needed */}
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };


