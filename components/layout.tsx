import Head from "next/head";
import { AppShell, Footer, Header, Text, MantineProvider } from '@mantine/core';
import { PropsWithChildren } from "react";

const appTitle: string = 'Recipe Application';
const copyright: string = 'Copyright Léo Taillon 2023';

export default function Layout({ children }: PropsWithChildren): JSX.Element {
    return (
        <>
            <Head>
                <title>Recipe App</title>
                <meta name="author" content="Léo Taillon" />
                <meta name="description" content="Recipe Sampling Application" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'dark',
                }}
            >
                <AppShell
                    header={
                        <Header height={{ base: 50, md: 70 }} p='md'>
                            <Text>{appTitle}</Text>
                        </Header>}
                    footer={<Footer height={{ base: 60, md: 60 }} p='md'>{copyright}</Footer>}
                >
                    {children}
                </AppShell>
            </MantineProvider>
        </>
    );
}