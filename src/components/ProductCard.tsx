import Icon from "@/components/ui/icon";

interface ModuleCardProps {
  id: string;
  name: string;
  description: string;
  status: string;
  image: string;
  category: string;
  rating: number;
  compatibility: string;
}

const ProductCard = ({
  name,
  description,
  status,
  image,
  category,
  rating,
  compatibility,
}: ModuleCardProps) => {
  return (
    <div className="group bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gaming-green">
      {/* Изображение */}
      <div className="relative aspect-square overflow-hidden bg-gray-700">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Статус */}
        <div className="absolute top-3 left-3 bg-gaming-green text-white px-2 py-1 rounded-md text-sm font-bold">
          {status === "active" ? "Активен" : "Неактивен"}
        </div>

        {/* Кнопка избранное */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors">
          <Icon name="Star" size={16} className="text-gaming-green" />
        </button>

        {/* Быстрый просмотр */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full bg-gaming-green text-white py-2 rounded-lg font-medium hover:bg-gaming-green-dark transition-colors">
            Настроить модуль
          </button>
        </div>
      </div>

      {/* Информация */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-sm text-gaming-blue uppercase tracking-wide font-semibold">
            {category}
          </p>
          <h3 className="font-semibold text-white text-lg">{name}</h3>
          <p className="text-sm text-gray-400">{description}</p>
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
                  ? "text-gaming-green fill-current"
                  : "text-gray-600"
              }
            />
          ))}
          <span className="text-sm text-gray-400 ml-1">({rating})</span>
        </div>

        {/* Совместимость */}
        <div className="flex items-center space-x-2">
          <Icon name="Gamepad2" size={16} className="text-gaming-purple" />
          <span className="text-sm text-gray-300">
            Minecraft {compatibility}
          </span>
        </div>

        {/* Кнопка включить/выключить */}
        <button className="w-full bg-gaming-green text-white py-2 rounded-lg font-medium hover:bg-gaming-green-dark transition-colors flex items-center justify-center space-x-2">
          <Icon name="Power" size={16} />
          <span>Включить модуль</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
