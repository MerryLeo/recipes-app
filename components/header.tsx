import { Header, Text } from '@mantine/core';

export const AppTitle: string = 'Recipe Application';

export default function PageHeader(): JSX.Element {
    return (
        <Header height={{ base: 50, md: 70 }} p='md'>
            <Text>{AppTitle}</Text>
        </Header>
    );
}