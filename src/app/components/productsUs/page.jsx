// server sayt qilib ishlatish bu Cards komponentimning bolasi.
import { BASE_URL, request } from "@/services/api";    
import Image from "next/image";
import Link from "next/link";

const ProductsUs = async () => {
  const res = await request.get(`/improve`);

  return (
    <div className="flex gap-3 gap-y-5 flex-wrap mx-[4.8%]">
      {res.data.map((card) => (
        <div
          key={card.id}
          className="max-w-xs bg-white p-6 rounded-lg shadow-md hover:shadow-[0px_10px_15px_rgba(0,0,0,0.2),0px_5px_10px_rgba(0,0,0,0.1)] hover:-translate-y-2 transform transition duration-300"
        >
          <Link href={`/card/${card.id}`}>
            <Image
              width={338}
              height={120}
              className="w-full rounded-[5%] transform hover:scale-110 transition duration-300"
              src={card.image}
              alt={card.title}
              priority={true}
            />
          </Link>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.title}</div>
          </div>

          <div className="px-6 pt-4 pb-2">
            {card.categories.map((category, i) => (
              <span
                key={i}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{category}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsUs;

