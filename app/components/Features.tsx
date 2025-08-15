import Image from 'next/image';

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">ฟีเจอร์เด่นของ DingTalk</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image 
                src="/images/icons/comments.png" 
                alt="Chat" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">แชทข้อความ</h3>
            <p className="text-gray-600">สนุกกับการส่งข้อความแบบไม่จำกัดภายในทีม</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image 
                src="/images/icons/video-camera-alt.png" 
                alt="Meet" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">การประชุมทางวิดีโอ</h3>
            <p className="text-gray-600">รองรับผู้เข้าร่วมสูงสุด 300 คน</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image 
                src="/images/icons/list-check.png" 
                alt="Card" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">ระบบบริหารจัดการงาน</h3>
            <p className="text-gray-600">วางแผนและติดตามโครงการได้อย่างมีประสิทธิภาพ</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image 
                src="/images/icons/artificial-intelligence.png" 
                alt="AI" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Feature</h3>
            <p className="text-gray-600">คำบรรยายแบบเรียลไทม์ รองรับ 24 ภาษา</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;