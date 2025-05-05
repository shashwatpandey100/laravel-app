import { usePage } from '@inertiajs/react';
import Footer from './footer';
import Header from './header';

export default function ({ children, breadcrumbs, ...props }) {
    const { auth, url, allHostels, facilities, agency } = usePage().props;

    return (
        <section className="w-screen">
            <Header auth={auth} url={url} allHostels={allHostels} facilities={facilities} agency={agency} />
            {children}
            <Footer agency={agency} />
        </section>
    );
}
