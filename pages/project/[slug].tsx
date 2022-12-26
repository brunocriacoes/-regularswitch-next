import React from "react";
import HeaderComponents from "../components/HeaderComponents";
import FooterComponents from "../components/FooterComponents";
import Image from 'next/image'
import Link from 'next/link'


export default function Index({ allPosts }: any) {
	return (
		<div>
			<HeaderComponents />
			{allPosts.map((p: any) => (
				<div key={p.id}>
					<div className="relative w-full h-[100vh]">
						<Image
							alt={p.title}
							src={p.image_full}
							layout="fill"
							objectFit="contain"
						/>
					</div>

					<h1 className="text-white">{p.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: p.content }} />
				</div>
			))}
			<FooterComponents />
		</div>
	);
}

type paths = {
	slug?: string
}

export async function getStaticPaths() {
	let products: paths[];
	products = []
	const paths = products.map(category => {
		return { params: { slug: category.slug } }
	})
	return {
		paths,
		// fallback: 'blocking'
		fallback: false
	}
}

export async function getStaticProps(req: any) {
	const { slug } = req.params;
	let base = process.env?.BASE || 'http://localhost:3000'
	let url = base + "/api/project/" + slug
	let requestPosts = await fetch(url)
	let allPosts = await requestPosts.json();
	return {
		props: {
			allPosts
		},
		revalidate: 10
	}
}