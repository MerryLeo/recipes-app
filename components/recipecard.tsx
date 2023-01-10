import { Card, Group, Badge, Button, Image, Text } from "@mantine/core";
import { Recipe } from "../lib/recipes";

export default function RecipeCard(props: { recipe: Recipe }): JSX.Element {
    const { recipe } = props;
    return (
        <Card shadow='sm' p='lg' radius='md' withBorder>
            <Card.Section>
                <Image
                    src={recipe?.thumbnail_url}
                    height={250}
                    alt={recipe?.thumbnail_alt_text}
                />
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
            <Button variant='light' color='blue' fullWidth mt='md' radius='md' >
                See more
            </Button>
        </Card>
    );
}