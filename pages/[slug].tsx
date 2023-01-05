import React from "react";
import HeaderComponents from "../components/HeaderComponents";
import FooterComponents from "../components/FooterComponents";
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectBySlug({ allPosts, allPostCat, allCat, slug }: any) {

	let dictionary: any = {
		'branding' : 'branding',
		'digital-and-internet' : 'digital',
		'work':'home',
		'graphical-arquitecture':'graphic-architecture',

	}

	function getName(id: any): string {
		return allCat.find( (c:any) => c.id == id ).slug
	}
	allPostCat = allPostCat.map( (post:any) => {
		post.categorySlugs = post?.category?.map( (catId:number) => getName(catId) ) || []
		return post
	})
	allPostCat = allPostCat.filter( (f:any) => f.categorySlugs.includes(dictionary?.[slug] || slug || '') )
	return (
		<div>
			<HeaderComponents />
			<div>
				<h1 className="text-white">{allPosts[0].title}</h1>
				<div dangerouslySetInnerHTML={{ __html: allPosts[0].content }} />
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

					{allPostCat && allPostCat.map((p:any)=> <div key={p.id}>
						<Link href={'project/' + p.slug} >
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
								<div dangerouslySetInnerHTML={{ __html: p.more }} />
								{p.category && p.category.map( (id:number) => <span key={id}>#{getName(id)}</span> )}
							</div>
						</Link>
					</div>)}
				</div>
			</div>
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
	let allCat = []
	let allPostCat = []
	try {
		let requestPosts = await fetch(url)
		allPosts = await requestPosts.json()

		let requestCat = await fetch(base + "/api/project/all-category")
		allCat = await requestCat.json()

		let requestPostsCat = await fetch(base + "/api/project-category/" + slug)
		allPostCat = await requestPostsCat.json()

	} catch (error) { }
	return {
		props: {
			allPosts,
			allCat,
			allPostCat,
			slug
		},
		revalidate: 10
	}
}




