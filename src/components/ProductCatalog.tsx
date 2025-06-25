import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  const products = [
    {
      id: "1",
      name: "Nike Air Max 270",
      price: 8990,
      originalPrice: 17980,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Кроссовки",
      rating: 4.8,
      isOnSale: true,
    },
    {
      id: "2",
      name: "Adidas Ultraboost 22",
      price: 7490,
      originalPrice: 14980,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Кроссовки",
      rating: 4.7,
      isOnSale: true,
    },
    {
      id: "3",
      name: "Converse Chuck Taylor",
      price: 4490,
      originalPrice: 8980,
      image:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Кеды",
      rating: 4.5,
      isOnSale: true,
    },
    {
      id: "4",
      name: "Vans Old Skool",
      price: 3990,
      originalPrice: 7980,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Кеды",
      rating: 4.6,
      isOnSale: true,
    },
    {
      id: "5",
      name: "Puma RS-X",
      price: 6490,
      originalPrice: 12980,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Кроссовки",
      rating: 4.4,
      isOnSale: true,
    },
    {
      id: "6",
      name: "New Balance 574",
      price: 5990,
      originalPrice: 11980,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Кроссовки",
      rating: 4.3,
      isOnSale: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-sale-bg text-sale px-4 py-2 rounded-full">
            <span className="font-semibold">🔥 Горячие скидки до 50%</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Популярные модели
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Не упустите шанс купить любимую обувь по выгодным ценам
          </p>
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Кнопка показать больше */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Показать больше товаров
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
