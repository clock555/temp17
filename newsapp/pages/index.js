import Card from '../components/Card';

export default function Home() {
  const cards = [
    { title: "The Road Ahead", content: "The road ahead might be paved, it might not be.", category: "Photography" },
    { title: "From Top Down", content: "Once a year, go someplace you’ve never been before.", category: "Adventure" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero flex items-center justify-center">
        <div className="text-center hero-text">
          <h1 className="text-5xl font-bold mb-4">Card News</h1>
          <p className="mb-4">최신 뉴스와 이야기를 카드 형식으로 만나보세요.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">최신 카드 보기</button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-center space-x-4 py-4 bg-white">
        {["Nature", "Photography", "Relaxation", "Vacation", "Travel", "Adventure"].map((category) => (
          <a key={category} href="#" className="text-gray-700 hover:text-gray-900">{category}</a>
        ))}
      </div>

      {/* Featured Posts */}
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
