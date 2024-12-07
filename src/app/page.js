import HeroBanner from "~/components/Home/Hero/HeroBanner";
import CompanyOverview from "~/components/Home/companyOverview/CompanyOverview";
import ProductPromo from "~/components/Home/productOverview/ProductPromo";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <CompanyOverview/>
      <ProductPromo/>
    </div>
  );
}
