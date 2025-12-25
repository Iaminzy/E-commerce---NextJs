import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_CATEGORIES_QUERY } from "@/sanity/queries/categories";
import Image from "next/image";

export default async function Home() {
  //fetch  categories for filter sidebr
  const { data: categories } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY,
  });
  console.log(categories);
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Feautered product */}
      {/* page banner */}
      {/* categorey Title */}
      {/* Product Section */}

      <Button>Clike me</Button>
    </div>
  );
}
