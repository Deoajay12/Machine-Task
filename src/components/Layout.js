import Head from 'next/head';
import NavBar from './NavBar';

export default function Layout({ children, title = 'User Dashboard' }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <NavBar />

            <main className="flex-grow py-8">
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    {children}
                </div>
            </main>


        </div>
    );
}
