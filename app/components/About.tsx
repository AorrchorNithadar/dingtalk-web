import Image from 'next/image'

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">WHAT IS DINGTALK?</h2>
        <p className="text-lg mb-6 text-center">
          แอปพลิเคชันสื่อสารที่กำลังได้รับความนิยมในองค์กรและกลุ่มทำงานทั่วโลก
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-xl font-bold mb-4">DingTalk มีเอาไว้ทำอะไร ?</h3>
            <p className="mb-4">ทุกฟีเจอร์ที่เรานำเสนอ ถูกออกแบบมาเพื่อให้ตรงกับความต้องการของคุณโดยเฉพาะ</p>
            
            <h4 className="font-bold mb-2">การสื่อสารภายในองค์กร</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>การแลกเปลี่ยนข้อมูล ข่าวสาร หรือความคิดเห็นระหว่างบุคลากรภายในองค์กร</li>
              <li>ให้การทำงานเป็นไปอย่างราบรื่น มีประสิทธิภาพ</li>
            </ul>
            
            <h4 className="font-bold mb-2">ระบบบริหารจัดการงาน</h4>
            <ul className="list-disc pl-5">
              <li>เครื่องมือหรือแพลตฟอร์มที่ช่วยให้ผู้ใช้งานสามารถวางแผน มอบหมายงาน ติดตามความคืบหน้า</li>
              <li>จัดการโครงการหรือภารกิจของทีมหรือองค์กรได้อย่างเป็นระบบ</li>
            </ul>
          </div>
          
          <div>
            <Image 
              src="https://placehold.co/500x300/3b82f6/ffffff?text=Meeting+Image" 
              alt="Meeting" 
              width={500} 
              height={300} 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;