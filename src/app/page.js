import HeroBanner from "~/components/Home/Hero/HeroBanner";
import CompanyOverview from "~/components/Home/companyOverview/CompanyOverview";
import ProductPromo from "~/components/Home/productOverview/ProductPromo";
import TestimonyOverview from "~/components/Home/testimony/TestimonyOverview";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <CompanyOverview/>
      <ProductPromo/>
      <TestimonyOverview/>
    </div>
  );
}
