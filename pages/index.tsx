import Layout from '../components/layout';
import { Grid, Title } from '@mantine/core';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getRecipes, RecipeResult, RecipeSummary } from '../lib/recipes';
import RecipeCard from '../components/recipecard';
import Head from 'next/head';

const pageSize: number = 35;

// Removes Recipe Compilations
function removeCompilations(recipes: RecipeSummary[]): RecipeSummary[] {
  return recipes.flatMap(recipe => (recipe.recipes) ? recipe.recipes : recipe);
}

export const getStaticProps: GetStaticProps<{ recipes: RecipeResult }> = async () => {
  const recipes: RecipeResult = (await getRecipes(0, pageSize))!

  return {
    props: {
      recipes: {
        count: recipes.count,
        results: removeCompilations(recipes.results)
      },
    },

    // Regenerate the page every hour
    revalidate: 3600
  }
}

export default function Home({ recipes }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const { results } = recipes;
  console.log(results);
  return (
    <Layout>
      <Head>
        <title>Recipe App - Home</title>
      </Head>
      <Title order={2}>
        Featured Recipes
      </Title>
      <Grid m='sm' gutter='xl' grow>
        {results.slice(0, pageSize).map((recipe, key) => (
          <Grid.Col span={3} key={key}>
            <RecipeCard recipe={recipe} />
          </Grid.Col>
        ))}
      </Grid>
    </Layout>
  );
}
