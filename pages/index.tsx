import Layout from '../components/layout';
import { Grid, Stack } from '@mantine/core';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getRecipes, RecipeResult } from '../lib/recipes';
import RecipeCard from '../components/recipecard';

const pageSize: number = 10;

export const getStaticProps: GetStaticProps<{ recipes: RecipeResult }> = async () => ({
    props: {
      recipes: await getRecipes(0, pageSize) ?? { count: 0, results: []},
    },
  });

export default function Home({ recipes }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const { results } = recipes;
  return (
    <Layout>
      <Stack>
        <Grid columns={3} m='sm' gutter='xl'>
            {results.map((value, key) => (
              <Grid.Col span={1} key={key}>
                <RecipeCard recipe={value} />
              </Grid.Col>
            ))}
        </Grid>
      </Stack>
    </Layout>
  );
}
