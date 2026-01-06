import Link from 'next/link';
import Layout from '@/components/Layout';
import ErrorMessage from '@/components/ErrorMessage';
import Loader from '@/components/Loader';
import { useRouter } from 'next/router';

export default function UserDetail({ user, error }) {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <Layout>
                <Loader />
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout title="Error">
                <ErrorMessage message={error} />
                <div className="mt-6">
                    <Link href="/" className="text-white hover:text-blue-800 font-medium">
                        &larr; Back to Dashboard
                    </Link>
                </div>
            </Layout>
        );
    }


    if (!user) return null;

    const title = `${user.name} | User Details`;

    return (
        <Layout title={title}>
            <div className="mb-6">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className='text-white'>Back to Dashboard</span>
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Personal details and contact info.
                    </p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.name}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">{user.email}</a>
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Username
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.username}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Phone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.phone}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Website
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {user.website}
                                </a>
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Company
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <div className="font-medium">{user.company.name}</div>
                                <div className="text-gray-500 italic">"{user.company.catchPhrase}"</div>
                                <div className="text-xs text-gray-400">{user.company.bs}</div>
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.address.street}, {user.address.suite}<br />
                                {user.address.city}, {user.address.zipcode}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();

        const paths = users.map((user) => ({
            params: { id: user.id.toString() },
        }));

        return { paths, fallback: false };
    } catch (error) {
        return { paths: [], fallback: false };
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);

        if (res.status === 404) {
            return { notFound: true };
        }

        if (!res.ok) {
            throw new Error(`Failed to fetch user ${params.id}`);
        }

        const user = await res.json();

        return {
            props: {
                user,
            },
            revalidate: 3600,
        };
    } catch (error) {
        return {
            props: {
                error: 'Failed to load user details.',
            },
        };
    }
}
