// app/articles/page.jsx
const ArticlesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">บทความ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border rounded-lg p-4 shadow-sm">
            <img src={`/images/article${item}.jpg`} alt={`Article ${item}`} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">หัวข้อบทความที่ {item}</h3>
            <p className="text-gray-600 mb-4">รายละเอียดบทความที่ {item}...</p>
            <button className="text-blue-500 hover:underline">อ่านเพิ่มเติม</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;