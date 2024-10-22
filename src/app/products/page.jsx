// server sayt qilib ishlatish,RenderFData komponentimning otasi.
import { BASE_URL, request } from "@/services/api";
import ProductsUs from "../components/productsUs/page";

const Cards = async () => {
  const res = await request.get(`/improve`);

  return (
    <div className="flex gap-3 gap-y-5 flex-wrap">
      <ProductsUs/>
    </div>
  );
};

export default Cards;



