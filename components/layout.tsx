import Head from "next/head";
import { AppShell, Footer, Header, Text, MantineProvider, Title, Navbar } from '@mantine/core';
import { PropsWithChildren } from "react";
import Link from "next/link";

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
                        <Header height={{ base: 'auto', md: 90 }} p='md'>
                            <Link href='/' className='noTextDecoration'>
                                <Title order={1}>{appTitle}</Title>
                            </Link>
                        </Header>
                    }
                    footer={
                        <Footer height={{ base: 60, md: 60 }} p='md'>
                            <Text>{copyright}</Text>
                        </Footer>
                    }
                >
                    {children}
                </AppShell>
            </MantineProvider>
        </>
    );
}