import Head from "next/head";
import { AppShell, MantineProvider } from '@mantine/core';
import { PropsWithChildren } from "react";
import PageHeader from './header';
import PageFooter from "./footer";

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
                    header={<PageHeader></PageHeader>}
                    footer={<PageFooter></PageFooter>}
                >
                    {children}
                </AppShell>
            </MantineProvider>
        </>
    );
}