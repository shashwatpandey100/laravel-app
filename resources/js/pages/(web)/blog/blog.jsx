import { Head, usePage } from '@inertiajs/react';
import Layout from '../components/layout/layout';

export default function Blog() {
    const { auth } = usePage().props;

    return (
        <>
            <Layout>
                <Head title="Welcome">
                    <link rel="preconnect" href="https://fonts.bunny.net" />
                    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                </Head>
                <div className="min-h-[70vh]"></div>
            </Layout>
        </>
    );
}
