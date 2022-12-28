import Language, { tipoLinguagens } from "./Language"

export type data = {
    translate?: tipoLinguagens
    _links?: string
    _embed?: string
    slug?: string
    per_page?: number
}

export type responseWpMedia = {
    media_details: {
        sizes: {
            medium: {
                source_url: string
            }
            full: {
                source_url: string
            }
        }
    }
}

export type responseWp = {
    id: number
    slug: string
    link: string
    title: {
        rendered: string
    }
    content: {
        rendered: string
    }
    _embedded: {
        'wp:featuredmedia': responseWpMedia[]
    }
}

export type listResponseWp = Array<responseWp>

export type singlePost = {
    id: number
    title: string
    slug: string
    image_full?: string
    image_medium?: string
    content: string
    link: string
}

export type ListPost = Array<singlePost>

export function porter(payloadWp: listResponseWp): ListPost {
    return payloadWp.map(p => ({
        id: p.id,
        title: p.title.rendered,
        slug: p.slug,
        link: p.link,
        image_medium: p._embedded["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium?.source_url,
        image_full: p._embedded["wp:featuredmedia"]?.[0]?.media_details?.sizes.full?.source_url,
        content: p.content.rendered,
    }))
}

export async function GetApi(path: string, data: any , lang: tipoLinguagens) {
    const BASE = 'https://regularswitch.com/wp-json/wp/v2'
    if (lang == 'EN') {
        data.translate = 'EN'
    }
    let full_path = new URL(`${BASE}${path}`)
    full_path.search = new URLSearchParams(data).toString();
    console.log(full_path)
    return porter(await (await fetch(full_path)).json())
}
