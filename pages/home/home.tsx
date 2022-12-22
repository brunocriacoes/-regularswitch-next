import HeaderComponents from "../components/HeaderComponents";
import FooterComponents from "../components/FooterComponents";
import Image from 'next/image'
import FontMagic from "./FontMagic";
import Link from 'next/link'

export default function Home({ posts = [] }: any) {
	return (
		<div>
			<HeaderComponents />
			<FontMagic />

			<section className="text-white container mx-auto text-[50px] font-hk leading-[48px] font-extrabold py-[150px]">
				<h2 className="block mb-[40px]">Branding / Digital / Arquitetura Gráfica</h2>
				<p>
					Regularswitch é uma agência de design multi-cultural
					com escritório no Brasil e na França. Trabalhando na
					fronteira entre analógico e digital para oferecer experiências
					visuais que importam.
				</p>
			</section>

			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{posts.map((p: any) => (
						<Link href={'project/' + p.slug} key={p.id}>
							<div >
								<div className="block relative w-full h-[500px]">
									<Image
										alt={p.title}
										src={
											p.image_full
										}
										layout='fill'
    									objectFit='cover'
										
									/>
								</div>
								<h1 className="text-white">{p.title}</h1>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className="h-96"></div>
			<FooterComponents />
		</div>
	);
}
