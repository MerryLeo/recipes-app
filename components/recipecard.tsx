import Image from 'next/image';
import { Card, Group, Badge, Button, Text, Avatar } from "@mantine/core";
import Link from "next/link";
import { RecipeSummary } from "../lib/recipes";
import cardStyles from './recipecard.module.css';
import { IconCooker, IconSlice } from '@tabler/icons';

export default function RecipeCard(props: { recipe: RecipeSummary }): JSX.Element {
    const { recipe } = props;
    const cookingAvatar: JSX.Element = (
        <Avatar 
            size={20} 
            alt='Cooking time'
            mr={0}>
            <IconCooker />
        </Avatar>);

    const preparingAvatar: JSX.Element = (
        <Avatar 
            size={20} 
            alt='Cooking time'
            mr={0}>
            <IconSlice />
        </Avatar>
    );

    return (
        <Card shadow='sm' p='lg' radius='md' withBorder>
            <Card.Section>
                <div className={cardStyles.cardImg}>
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
                    <Badge size='md' color='red' variant='light' leftSection={cookingAvatar}>
                        {recipe.cook_time_minutes} min
                    </Badge>
                )}

                {/* Preparation Time */}
                {recipe.prep_time_minutes && (
                    <Badge size='md' color='blue' variant='light' leftSection={preparingAvatar}>
                        {recipe.prep_time_minutes} min
                    </Badge>
                )}

                {/* Servings */}
                {recipe.num_servings && (
                    <Badge size='md' color='violet' variant='light'>
                        {recipe.num_servings} {(recipe.num_servings > 1) ? recipe.servings_noun_plural : recipe.servings_noun_singular}
                    </Badge>
                )}
            </Group>
            <Text size='sm' color='dimmed' align='justify'>
                <div dangerouslySetInnerHTML={{ __html: recipe.description}} />
            </Text>
            <Link href={'recipes/' + recipe.id} prefetch={false} className='noTextDecoration'>
                <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
                    See more
                </Button>
            </Link>
        </Card>
    );
}