import Image from 'next/image';

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl text-gray-400 font-bold mb-4 text-center">DingTalk เครื่องมือที่ทุกคนเข้าถึงได้</h2>
        <p className="text-3xl font-bold text-center mb-12">ไม่ว่าคุณจะเป็นธุรกิจขนาดเล็กหรือองค์กรใหญ่ DingTalk คือคำตอบสำหรับการทำงานร่วมกันอย่างมีประสิทธิภาพในยุคดิจิทัล</p>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-8">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-500"></div>
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">รายเดือน</span>
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">รายปี</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* สตาร์ทอัพ */}
          <div className="border rounded-lg p-6 shadow-md bg-white">
            <Image
              src="https://placehold.co/60x60/3b82f6/ffffff?text=🏠" 
              alt="Home Icon" 
              width={60}
              height={60}
              className="w-16 h-16 mb-4 mx-auto" 
            />
            <h3 className="text-xl font-bold mb-4 text-center">สำหรับสตาร์ทอัพ</h3>
            <p className="text-gray-600 mb-4 text-center">ขนาดทีม 1-20 คน</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>แชทข้อความ</strong> สนุกกับการส่งข้อความแบบไม่จำกัดภายในทีมหรือกลุ่มของคุณ</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>การประชุมทางวิดีโอ</strong> เข้าถึงการโทรทางวิดีโอคุณภาพสูงที่รองรับผู้เข้าร่วมสูงสุด 300 คน 
                  เหมาะสำหรับการประชุมเสมือนจริง การบรรยายออนไลน์ และการฝึกอบรม</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>การแบ่งปันและเก็บไฟล์</strong> ใช้พื้นที่เก็บข้อมูลร่วมกันเพื่อเก็บและแบ่งปันเอกสาร ภาพถ่าย วิดีโอ และไฟล์อื่นๆ กับสมาชิกในทีม</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/delete.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>AI Feature</strong> การประชุมทางวิดีโอพร้อมคำบรรยายแบบเรียลไทม์ รองรับการแปลมากกว่า 24 ภาษา</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/delete.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>บริการหลังการขาย</strong> การบริการหลังการขายโดยทีมผู้เชี่ยวชาญ</span>
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition">
              เลือกแผน
            </button>
          </div>

          {/* มืออาชีพ */}
          <div className="border rounded-lg p-6 shadow-md bg-white">
            <Image 
              src="https://placehold.co/60x60/10b981/ffffff?text=💼" 
              alt="Briefcase Icon" 
              width={60}
              height={60}
              className="w-16 h-16 mb-4 mx-auto" 
            />
            <h3 className="text-xl font-bold mb-4 text-center">สำหรับมืออาชีพ</h3>
            <p className="text-gray-600 mb-4 text-center">ทีมขนาด 20 คนขึ้นไป</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>ข้อความแชท</strong> บันทึกข้อความทั้งหมดบนคลาวด์ได้นานถึง 10 ปี</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>ไดรฟ์ 1 TB</strong>  สำหรับเก็บข้อมูลองค์กร</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>การประชุมทางวิดีโอ</strong> ความละเอียดสูงและนานถึง 24 ชั่วโมง</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>ฟีเจอร์ขั้นสูง</strong> การจัดการโครงการ การวิเคราะห์ข้อมูล การติดตาม KPI การผสานรวมกับระบบ ERP/CRM และเครื่องมือสำหรับ HR</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>AI Feature</strong> การประชุมทางวิดีโอพร้อมคำบรรยายแบบเรียลไทม์ รองรับการแปลมากกว่า 24 ภาษา</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>บริการหลังการขาย</strong> การบริการหลังการขายโดยทีมผู้เชี่ยวชาญ</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>การปรับแต่งแบรนด์</strong> แอปพลิเคชันที่ปรับแต่งเป็นแอปองค์กรของคุณเองได้</span>
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-green-600 transition">
              เลือกแผน
            </button>
          </div>

          {/* อุตสาหกรรม */}
          <div className="border rounded-lg p-6 shadow-md bg-white">
            <Image 
              src="https://placehold.co/60x60/8b5cf6/ffffff?text=🏢" 
              alt="Building Icon" 
              width={60}
              height={60}
              className="w-16 h-16 mb-4 mx-auto" 
            />
            <h3 className="text-xl font-bold mb-4 text-center">สำหรับองค์กร</h3>
            <p className="text-gray-600 mb-4 text-center">ขนาดทีม 100 คนขึ้นไป</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>การดำเนินงานอิสระ</strong> องค์กรสามารถสร้างแอปเพื่อจัดการวิธีทำงานได้ตามต้องการ</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>การป้องกันการสูญหายของข้อมูล</strong> การควบคุมการเข้าถึงข้อมูลในทุกๆ ลิงค์และการยกระดับกลยุทธ์ความปลอดภัย</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>การจัดเก็บแบบไฮบริดคลาวด์</strong> สามารถใช้งานร่วมกับการจัดเก็บไฟล์ขององค์กรได้</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>AI Feature</strong> สามารถใช้งาน Qwen AI ได้อย่างเต็มประสิทธิภาพ เช่น การวิเคราะห์ข้อมูลเชิงลึก 
                  การสร้างรายงานอัตโนมัติ การให้คำแนะนำเชิงกลยุทธ์ และการผสานรวมกับระบบที่ซับซ้อน</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>บริการหลังการขาย</strong> การบริการหลังการขายโดยทีมผู้เชี่ยวชาญ</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="Check" 
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span><strong>การปรับแต่งแบรนด์</strong> แอปพลิเคชันที่ปรับแต่งเป็นแอปองค์กรของคุณเองได้</span>
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-purple-600 transition">
              เลือกแผน
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};