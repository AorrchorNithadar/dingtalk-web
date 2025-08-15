import Image from 'next/image';

export default function JoinCommunity() {
  return (
    <section className="bg-[#edf2fc] py-16 text-center">
      <div className="container mx-auto px-4">
        {/* หัวข้อ */}
        <h1 className="text-3xl font-bold mb-8">เข้าร่วมชุมชนตอนนี้เลย!</h1>

        {/* เนื้อหารอง */}
        <p className="text-lg text-gray-600 mb-12">
          ดาวน์โหลดแอป DingTalk แล้วสแกน QR Code 
          เพื่อเข้าร่วมกลุ่มพูดคุยและแลกเปลี่ยนความรู้เกี่ยวกับการใช้งาน DingTalk ได้เลย
        </p>

        {/* QR Code */}
        <div className="flex justify-center">
          <Image 
            src="/images/JoinCommunity-logo.png" 
            alt="QR Code for joining the group" 
            width={250} 
            height={250} 
            className="w-full h-auto max-w-[180px]"
          />
        </div>
      </div>
    </section>
  );
}