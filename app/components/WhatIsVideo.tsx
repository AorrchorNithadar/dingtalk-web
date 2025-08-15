export default function WhatIsVideo() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* หัวข้อ */}
        <h2 className="text-xl text-gray-500 font-bold mb-4">WHAT IS DINGTALK?</h2>
        <h1 className="text-3xl font-bold mb-12">แอปพลิเคชันสื่อสารที่กำลังได้รับความนิยมในองค์กรและกลุ่มทำงานทั่วโลก</h1>

        {/* วิดีโอ */}
        <div className="relative max-w-4xl mx-auto aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MO4UleBme9g"
            title="DingTalk Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}