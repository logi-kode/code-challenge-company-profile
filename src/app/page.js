import HeroBanner from "~/components/Home/Hero/HeroBanner";
import CompanyOverview from "~/components/Home/companyOverview/CompanyOverview";
import ProductPromo from "~/components/Home/productOverview/ProductPromo";
import TestimonyOverview from "~/components/Home/testimony/TestimonyOverview";
import ProductOverview from "~/components/Home/productOverview/ProductOverview";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <CompanyOverview/>
      <ProductOverview/>
      <ProductPromo/>
      <TestimonyOverview/>
    </div>
  );
}
