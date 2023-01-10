export interface RecipeResult {
    count: number,
    results: Recipe[]
};

export interface Recipe {
    is_one_top: boolean
    cook_time_minutes: number | null
    promotion: string
    keywords: string
    show: {
        name?: string
        id?: number
        [k: string]: unknown
    }
    servings_noun_plural: string
    canonical_id: string
    show_id: number
    draft_status: string
    sections: {
        position: number
        components: {
        raw_text: string
        extra_comment: string
        ingredient: {
            display_plural?: string
            id?: number
            display_singular?: string
            updated_at?: number
            name?: string
            created_at?: number
            [k: string]: unknown
        }
        id: number
        position: number
        measurements: {
            unit: {
            name?: string
            display_plural?: string
            display_singular?: string
            abbreviation?: string
            system?: string
            [k: string]: unknown
            }
            quantity: string
            id: number
            [k: string]: unknown
        }[]
        [k: string]: unknown
        }[]
        name: string | null
        [k: string]: unknown
    }[]
    tags: {
        name: string
        id: number
        display_name: string
        type: string
        [k: string]: unknown
    }[]
    thumbnail_alt_text: string
    credits: {
        name: string | null
        type: string
        slug: string
        image_url: string
        id: number
        [k: string]: unknown
    }[]
    topics: {
        name: string
        slug: string
        [k: string]: unknown
    }[]
    slug: string
    servings_noun_singular: string
    video_url: string | null
    prep_time_minutes: number | null
    name: string
    buzz_id: null
    thumbnail_url: string
    is_shoppable: boolean
    video_id: number | null
    compilations: {
        facebook_posts?: unknown[]
        canonical_id?: string
        id?: number
        aspect_ratio?: string
        keywords?: null
        created_at?: number
        language?: string
        video_url?: string
        buzz_id?: null
        video_id?: number
        show?: {
        name?: string
        id?: number
        [k: string]: unknown
        }[]
        name?: string
        beauty_url?: null
        slug?: string
        promotion?: string
        country?: string
        is_shoppable?: boolean
        description?: null
        draft_status?: string
        thumbnail_url?: string
        thumbnail_alt_text?: string
        approved_at?: number
        [k: string]: unknown
    }[]
    num_servings: number
    brand: {
        image_url?: string
        name?: string
        id?: number
        slug?: string
        [k: string]: unknown
    } | null
    nutrition: {
        carbohydrates?: number
        fiber?: number
        updated_at?: string
        protein?: number
        fat?: number
        calories?: number
        sugar?: number
        [k: string]: unknown
    }
    tips_and_ratings_enabled: boolean
    video_ad_content: string | null
    seo_title: string
    country: string
    instructions: {
        start_time: number
        appliance: string | null
        end_time: number
        temperature: number | null
        id: number
        position: number
        display_text: string
        [k: string]: unknown
    }[]
    language: string
    brand_id: null | number
    aspect_ratio: string
    description: string
    inspired_by_url: null
    total_time_minutes: number | null
    nutrition_visibility: string
    facebook_posts: unknown[]
    beauty_url: null | string
    total_time_tier: {
        tier?: string
        display_tier?: string
        [k: string]: unknown
    }
    yields: string
    original_video_url: string | null
    updated_at: number
    renditions: {
        container: string
        url: string
        duration: number
        bit_rate: number | null
        width: number
        height: number
        poster_url: string
        file_size: number | null
        content_type: string
        aspect: string
        minimum_bit_rate: null | number
        name: string
        maximum_bit_rate: null | number
        [k: string]: unknown
    }[]
    created_at: number
    approved_at: number
    user_ratings: {
        count_negative?: number
        count_positive?: number
        score?: number | null
        [k: string]: unknown
    }
    id: number
    [k: string]: unknown
}


const options: RequestInit = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY!,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST!,
    },
};

export function getRecipes(from: number, size: number): Promise<RecipeResult | null> {
    return fetch(
        'https://tasty.p.rapidapi.com/recipes/list?' + 
        new URLSearchParams({ 'from': from.toString(), 'size': size.toString()}), 
        options)
        .then(res => res.json())
        .then(res => {
            return res as RecipeResult;
        })
        .catch(() => null);
}