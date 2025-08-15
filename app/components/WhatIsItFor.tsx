import Image from 'next/image';

export default function WhatIsItFor() {
  return (
    <section className="bg-[#f5f7fb] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xl text-gray-500 font-bold mb-4 text-center">
          DINGTALK มีอะไรให้คุณ ?
        </h2>
        <h1 className="text-3xl font-bold mb-12 text-center">
          ทุกฟีเจอร์ที่เรานำเสนอ
          ถูกออกแบบมาเพื่อให้ตรงกับความต้องการของคุณโดยเฉพาะ
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Image
              src="/images/WhatIsItFor.png"
              alt="DingTalk Meeting Interface"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6">การสื่อสารภายในองค์กร</h3>
            <p className="text-gray-600 mb-6">
              การแลกเปลี่ยนข้อมูล ข่าวสาร หรือความคิดเห็นระหว่างบุคลากรในองค์กร
              เช่น พนักงาน ผู้จัดการ ทีมงาน แผนกต่าง ๆ
              เพื่อให้การทำงานเป็นไปอย่างราบรื่น มีประสิทธิภาพ
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
            <Image 
                  src="/images/icons/check.png" 
                  alt="" 
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span>แชทส่วนตัวและกลุ่ม</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="" 
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span>การโทรออกได้ไม่จำกัด (ผ่านแอป)</span>
              </li>
              <li className="flex items-start">
                <Image 
                  src="/images/icons/check.png" 
                  alt="" 
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span>
                  การประชุมออนไลน์ (Video Conference)
                  รองรับผู้เข้าร่วมได้หลายสิบคน และมีระบบแปลภาษาแบบเรียลไทม์
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}