import { Container, Title, List, Grid } from "@mantine/core";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/layout";
import { getRecipeInfos, RecipeInfo } from "../../lib/recipes";
import styles from './[id].module.css';

interface RouteParam extends ParsedUrlQuery {
    id: string,
}

export const getServerSideProps: GetServerSideProps<{ recipeInfo: RecipeInfo }, RouteParam> = 
    async ({ params }) => {
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
            <Head>
                <title>Recipe App - {recipeInfo.name}</title>
            </Head>
            {recipeInfo.thumbnail_url && (
                <Container className={styles.jumboImg}>
                    <Image
                        src={recipeInfo.thumbnail_url}
                        alt={recipeInfo.thumbnail_alt_text} 
                        fill
                    />
                </Container>
            )}
            <Title order={2} align='center' mt='md'>{recipeInfo.name}</Title>
            <Grid m='sm' gutter='xl' grow>

                {/* Ingredients */}
                {recipeInfo.sections && recipeInfo.sections.length > 1 && (
                    <Grid.Col span={3}>
                        <Title order={2}>Ingredients</Title>
                        {recipeInfo.sections.map((section, key) => (
                            <>
                                <Title key={key} order={3}>For the {section.name}</Title>
                                <List>
                                    {section.components && (
                                        section.components.map((value, key) => (
                                            <List.Item key={key}>
                                                {value.raw_text}
                                            </List.Item>
                                        ))
                                    )}
                                </List>
                            </>
                        ))}
                    </Grid.Col>
                )}

                {/* Instructions */}
                {recipeInfo.instructions && (
                    <Grid.Col span={3}>
                        <Title order={2}>Instructions</Title>
                        <List type='ordered'>
                            {recipeInfo.instructions.map((value, key) => (
                                <List.Item key={key}>{value.display_text}</List.Item>
                            ))}
                        </List>
                    </Grid.Col>
                )}
            </Grid>
        </Layout>
    );
}