import Image from 'next/image';

export default function Partners() {

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl text-gray-500 font-bold mb-4">ใครใช้ DINGTALK บ้าง</h2>
        <h1 className="text-3xl font-bold mb-12">แอปพลิเคชันนี้ถูกใช้งานหลากหลายอุตสาหกรรมทั้งในไทยและต่างประเทศ</h1>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          <div className='w-1/5'>
            <Image 
              src="/images/partners/codediva.jpg" 
              alt="Codediva" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/alibaba-cloud.png" 
              alt="Alibaba Cloud" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/alibaba-com.png" 
              alt="Alibaba.com" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/tocharge.png" 
              alt="Tocharge" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/palettebkk-logo.png" 
              alt="Art Space" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/modern-universal.png" 
              alt="Modern Universal Co., Ltd." 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/datacruise-logo.png" 
              alt="Datacruise" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/Insurefriend-logo.png" 
              alt="Insurefriend" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/EKAR-logo.png" 
              alt="EKAR" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/RMUTP-logo.png" 
              alt="Faculty of Liberal Arts" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
          <div className='w-1/5'>
            <Image 
              src="/images/partners/jimei-logo.png" 
              alt="Thai Alumni Association of Jimei School" 
              width={200} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* ปุ่มกลับขึ้นบน */}
        <button className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </section>
  );
}