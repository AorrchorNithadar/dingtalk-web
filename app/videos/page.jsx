// app/videos/page.jsx
const VideosPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">วิดีโอ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border rounded-lg p-4">
            <div className="aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-500">วิดีโอที่ {item}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">หัวข้อวิดีโอที่ {item}</h3>
            <p className="text-gray-600">รายละเอียดวิดีโอที่ {item}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;