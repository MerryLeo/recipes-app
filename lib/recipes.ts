export interface RecipeResult {
    count: number,
    results: RecipeSummary[]
};

export interface RecipeSummary {
    is_one_top: boolean
    cook_time_minutes: number | null
    promotion: string
    keywords: string
    show: {
        name?: string
        id?: number
        [k: string]: unknown
    }
    recipes: RecipeSummary[]
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

export interface RecipeInfo {
    brand: any
    renditions: Array<{
        url: string
        name: string
        width: number
        duration: number
        minimum_bit_rate?: number
        content_type: string
        aspect: string
        poster_url: string
        height: number
        file_size?: number
        bit_rate?: number
        maximum_bit_rate?: number
        container: string
    }>
    country: string
    inspired_by_url: string
    seo_title: any
    video_url: string
    compilations: Array<{
        approved_at: number
        beauty_url: any
        buzz_id: any
        id: number
        language: string
        slug: string
        thumbnail_alt_text: string
        thumbnail_url: string
        show: Array<{
        id: number
        name: string
        }>
        aspect_ratio: string
        draft_status: string
        is_shoppable: boolean
        video_id: number
        video_url: string
        facebook_posts: Array<any>
        keywords: any
        country: string
        created_at: number
        description?: string
        name: string
        promotion: string
        canonical_id: string
    }>
    nutrition: {
        sugar: number
        fiber: number
        updated_at: string
        calories: number
        carbohydrates: number
        fat: number
        protein: number
    }
    created_at: number
    prep_time_minutes: any
    updated_at: number
    credits: Array<{
        name: string
        type: string
    }>
    original_video_url: string
    sections: Array<{
        components: Array<{
        id: number
        raw_text: string
        extra_comment: string
        position: number
        measurements: Array<{
            id: number
            quantity: string
            unit: {
            display_singular: string
            display_plural: string
            system: string
            name: string
            abbreviation: string
            }
        }>
        ingredient: {
            id: number
            name: string
            display_singular: string
            display_plural: string
            created_at: number
            updated_at: number
        }
        }>
        name: any
        position: number
    }>
    user_ratings: {
        count_positive: number
        count_negative: number
        score: number
    }
    price: {
        total: number
        updated_at: string
        portion: number
        consumption_total: number
        consumption_portion: number
    }
    approved_at: number
    aspect_ratio: string
    is_one_top: boolean
    servings_noun_plural: string
    tips_and_ratings_enabled: boolean
    show: {
        id: number
        name: string
    }
    beauty_url: any
    is_shoppable: boolean
    keywords: string
    num_servings: number
    nutrition_visibility: string
    promotion: string
    show_id: number
    total_time_tier: any
    canonical_id: string
    description: any
    id: number
    tags: Array<{
        id: number
        name: string
        display_name: string
        type: string
    }>
    facebook_posts: Array<any>
    thumbnail_alt_text: string
    thumbnail_url: string
    yields: string
    brand_id: any
    buzz_id: number
    draft_status: string
    language: string
    servings_noun_singular: string
    instructions: Array<{
        start_time: number
        end_time: number
        temperature?: number
        appliance?: string
        id: number
        display_text: string
        position: number
    }>
    video_ad_content: string
    topics: Array<{
        slug: string
        name: string
    }>
    cook_time_minutes: any
    name: string
    slug: string
    total_time_minutes: any
    video_id: number
}

const option: RequestInit = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY!,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST!,
    },
};

export async function getRecipes(from: number, size: number): Promise<RecipeResult | null> {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_RECIPE_SUMMARY_URL + '?' +
            new URLSearchParams({ 'from': from.toString(), 'size': size.toString() }),
            option)
        const res_1 = await res.json()
        return res_1 as RecipeResult
    } catch (ex: any) {
        console.log(`Failed to fetch recipes from api: ${ex}`);
        return null
    }
}

export async function getRecipeCount(): Promise<number | null> {
    const recipe = await getRecipes(0, 0)
    return recipe?.count ?? null
}

export async function getRecipeInfos(id: number): Promise<RecipeInfo | null> {
    try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_RECIPE_INFO_URL + '?' +
            new URLSearchParams({ 'id': id.toString() }),
            option)
        const res_1 = await res.json()
        return res_1 as RecipeInfo
    } catch {
        return null
    }
}