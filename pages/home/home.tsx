import HeaderComponents from "../components/HeaderComponents";
import FooterComponents from "../components/FooterComponents";
import Image from 'next/image'

export default function Home({ posts }: any) {
  return (
    <div>
      <HeaderComponents />
      <div className="text-[200px] text-white text-center uppercase">
        <span className="block">regular</span>
        <span className="block">switch</span>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((p: any) => <div key={p.id}>
            <div className="block relative w-full h-full">
              <Image
                alt={p.title.rendered}
                src={p._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}

                width={500}
                height={500}

              />
            </div>
            <h1 className="text-white">{p.title.rendered}</h1>
          </div>)}
        </div>
      </div>
      <div className="h-96"></div>
      <FooterComponents />
    </div>
  );
}