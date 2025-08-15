// app/components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-600 text-xl font-bold mb-4">เข้าร่วมชุมชนของเรา</h3>
            <p className="text-gray-400">มาร่วมสร้างสิ่งที่ยอดเยี่ยมไปด้วยกัน เราคือผู้ให้บริการที่ได้รับความไว้วางใจจากผู้ใช้มากกว่า 200 ล้านรายทั่วโลก ร่วมเป็นหนึ่งในนั้นด้วยการใช้บริการของเรา และพัฒนาธุรกิจของคุณให้เติบโต</p>
            <div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              ใช้งานฟรี
            </button>
          </div>
          </div>
          
          <div className=''>
            <h4 className="text-gray-600 font-bold mb-4">ต้องการความช่วยเหลือไหม?</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-blue-500">เริ่มต้นใช้งาน</Link></li>
              <li><Link href="/articles" className="text-gray-400 hover:text-blue-500">เงื่อนไขการใช้งาน</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-blue-500">นโยบายความเป็นส่วนตัว</Link></li>
              
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-600 font-bold mb-4">เริ่มต้นเรียนรู้</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500">ราคา</Link>
            </div>
          </div>
          <div>
            <h4 className="text-gray-600 font-bold mb-4">ติดต่อเรา</h4>
            <p className="text-gray-400">253 อาคาร 253 อโศก คลองเตยเหนือ วัฒนา กรุงเทพ ประเทศไทย</p>
            <ul className="space-y-2 text-gray-400">
              <li>contact@dingtalkthailand.com</li>
              <li>(+66) 86 673 2111</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-left text-gray-400">
          <p>© 2025 DingTalk Thailand Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};