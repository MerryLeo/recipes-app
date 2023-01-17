import { Container, Title } from "@mantine/core";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/layout";
import { getRecipeInfos, RecipeInfo } from "../../lib/recipes";

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
            <Title order={2} align='center'>{recipeInfo.name}</Title>
            {recipeInfo.thumbnail_url && (
                <Container size='md'>
                    <Image 
                        src={recipeInfo.thumbnail_url}
                        fill={true}
                        alt={recipeInfo.thumbnail_alt_text} 
                    />
                </Container>
            )}
        </Layout>
    );
}