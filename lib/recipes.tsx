export interface RecipeList {
    count: number,
    results: object[]
}

const options: RequestInit = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY!,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST!,
        'from': '0',
        'size': '5',
    }
};

export function getRecipes(): Promise<RecipeList | null> {
    return fetch('https://tasty.p.rapidapi.com/recipes/list', options)
        .then(res => res.json())
        .then(res => {
            return res as RecipeList;
        })
        .catch(() => null);
}