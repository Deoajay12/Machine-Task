import Link from 'next/link';

export default function UserCard({ user }) {
    return (
        <Link href={`/users/${user.id}`} className="block h-full">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200 h-full border border-gray-100 cursor-pointer">
                <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold uppercase">
                            {user.name.charAt(0)}
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-medium text-gray-900 truncate">
                                {user.name}
                            </h3>
                            <p className="text-xs text-gray-500 truncate">
                                @{user.username}
                            </p>
                        </div>
                    </div>

                    <div className="text-sm text-gray-500 space-y-2">
                        <div className="flex items-center">
                            <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="truncate">{user.email}</span>
                        </div>

                        <div className="flex items-center">
                            <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="truncate">{user.company.name}</span>
                        </div>

                        <div className="flex items-center">
                            <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="truncate">{user.address.city}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
