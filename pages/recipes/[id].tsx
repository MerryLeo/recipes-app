import { GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/layout";
import { getRecipeInfos, getRecipes, getRecipeCount, RecipeResult, RecipeSummary, RecipeInfo } from "../../lib/recipes";

interface RouteParam extends ParsedUrlQuery {
    id: string,
}

export const getServerSideProps: GetServerSideProps<{ recipeInfo: RecipeInfo }, RouteParam> = async ({ params }) => {
    try {
        const recipeInfo: RecipeInfo = (await getRecipeInfos(parseInt(params!.id)))!;
        return {
            props: {
                recipeInfo: recipeInfo,
            }
        };
    } catch {
        return {
            notFound: true,
        }
    }
}

export default function RecipePage({ recipeInfo }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    return (
        <Layout>
            <div>{recipeInfo.name}</div>
        </Layout>
    );
}