import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isOnSale?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  isOnSale = false,
}: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Изображение */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Скидка */}
        {isOnSale && originalPrice && (
          <div className="absolute top-3 left-3 bg-sale text-white px-2 py-1 rounded-md text-sm font-bold">
            -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </div>
        )}

        {/* Кнопка избранное */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <Icon name="Heart" size={16} className="text-gray-600" />
        </button>

        {/* Быстрый просмотр */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium">
            Быстрый просмотр
          </button>
        </div>
      </div>

      {/* Информация */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {category}
          </p>
          <h3 className="font-semibold text-gray-900 line-clamp-2">{name}</h3>
        </div>

        {/* Рейтинг */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={
                i < Math.floor(rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({rating})</span>
        </div>

        {/* Цена */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">
            {price.toLocaleString("ru-RU")} ₽
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice.toLocaleString("ru-RU")} ₽
            </span>
          )}
        </div>

        {/* Кнопка добавить в корзину */}
        <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
          <Icon name="ShoppingCart" size={16} />
          <span>В корзину</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
