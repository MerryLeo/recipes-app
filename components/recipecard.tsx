import Image from 'next/image';
import { Card, Group, Badge, Button, Text } from "@mantine/core";
import Link from "next/link";
import { RecipeSummary } from "../lib/recipes";
import styles from './recipecard.module.css';

export default function RecipeCard(props: { recipe: RecipeSummary }): JSX.Element {
    const { recipe } = props;
    return (
        <Card shadow='sm' p='lg' radius='md' withBorder>
            <Card.Section>
                <div className={styles.cardImg}>
                    <Image
                        src={recipe?.thumbnail_url}
                        alt={recipe?.thumbnail_alt_text}
                        fill
                    />
                </div>
            </Card.Section>
            <Text weight={500} mt='md'>{recipe.name}</Text>
            <Group position='left' mt='xs' mb='xs'>
                {/* Cook Time */}
                {recipe.cook_time_minutes && (
                    <Badge color='red' variant='light'>
                        cook {recipe.cook_time_minutes} min
                    </Badge>
                )}

                {/* Preparation Time */}
                {recipe.prep_time_minutes && (
                    <Badge color='blue' variant='light'>
                        prep {recipe.prep_time_minutes} min
                    </Badge>
                )}
            </Group>
            <Text size='sm' color='dimmed' align='justify'>
                <div dangerouslySetInnerHTML={{ __html: recipe.description}} />
            </Text>
            <Link href={'recipes/' + recipe.id} className={styles.noLink}>
                <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
                    See more
                </Button>
            </Link>
        </Card>
    );
}