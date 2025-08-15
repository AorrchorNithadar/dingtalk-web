import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#f5f7fb] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Column: Content */}
        <div className="flex-1 space-y-8 md:mr-8">
          <h1 className="text-4xl font-bold text-gray-800">
            ทำงานง่ายขึ้นด้วย All in One AI <br />
            ที่เข้าใจธุรกิจคุณ
          </h1>
          <p className="text-lg text-gray-600">
            ยกระดับประสิทธิภาพการทำงานด้วยฟีเจอร์ AI จาก DingTalk
            และแชทบอทอัจฉริยะที่ช่วยให้งานดำเนินไปโดยอัตโนมัติ
          </p>
          <div className="flex space-x-4">
            <Link href="https://page.dingtalk.com/wow/dingtalk/default/dingtalk/Re6l0fKOLPVKpZVELsQ32" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
                เริ่มใช้งานได้ฟรี
              </button>
            </Link>
            <Link href="https://alidocs.dingtalk.com/i/p/dBgX4oYWY1aaEz8e" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                คู่มือการใช้งาน
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 mt-6 md:mt-0">
          <Image
            src="/images/Meet.png"
            alt="DingTalk app preview"
            width={800}
            height={200}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <Image
            src="/images/cdv.png"
            alt="DingTalk app preview"
            width={800}
            height={200}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <Image
            src="/images/chat.png"
            alt="DingTalk app preview"
            width={800}
            height={200}
            className="w-full h-auto"
          />
          <div className="flex-1 mt-6 md:mt-0">
          <Image
            src="/images/card1.png"
            alt="DingTalk app preview"
            width={800}
            height={200}
            className="w-full h-auto"
          />
        </div>
        </div>
      </div>
    </section>
  );
}