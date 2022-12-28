import React from "react";
import HeaderComponents from "../components/HeaderComponents";
import FooterComponents from "../components/FooterComponents";

export default function ProjectBySlug({ allPosts }: any) {
	return (
		<div>
			<HeaderComponents />
			{allPosts.map((p: any) => (
				<div key={p.id}>
					<h1 className="text-white">{p.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: p.content }} />
				</div>
			))}
			<FooterComponents />
		</div>
	);
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking'
	}
}

export async function getStaticProps(req: any) {
	const { slug } = req.params;
	let base = process.env?.BASE
	let url = base + "/api/" + slug
	let allPosts = []
	try {
		let requestPosts = await fetch(url)
		allPosts = await requestPosts.json()
	} catch (error) { }
	return {
		props: {
			allPosts
		},
		revalidate: 10
	}
}