import Layout from '../components/layout';
import { Grid, Stack } from '@mantine/core';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getRecipes, RecipeResult } from '../lib/recipes';
import RecipeCard from '../components/recipecard';

export const getStaticProps: GetStaticProps<{ recipes: RecipeResult }> = async () => ({
    props: {
      recipes: await getRecipes(100, 30) ?? { count: 0, results: []},
    },
  });

export default function Home({ recipes }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const { results } = recipes;
  return (
    <Layout>
      <Stack>
        <Grid m='sm' gutter='xl'>
            {results.map((value, key) => (
              <Grid.Col span={3} key={key}>
                <RecipeCard recipe={value} />
              </Grid.Col>
            ))}
        </Grid>
      </Stack>
    </Layout>
  );
}
