// app/news/page.jsx
const NewsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ข่าวสาร</h1>
      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border-b pb-6">
            <h3 className="text-xl font-bold mb-2">ข่าวสารที่ {item}</h3>
            <p className="text-gray-600 mb-4">รายละเอียดข่าวสารที่ {item}...</p>
            <button className="text-blue-500 hover:underline">อ่านเพิ่มเติม</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;