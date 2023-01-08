import { Footer } from '@mantine/core';

export const Copyright: string = 'Copyright Léo Taillon 2023';

export default function PageFooter(): JSX.Element {
    return <Footer height={{ base: 60, md: 60 }} p='md'>{Copyright}</Footer>;
}