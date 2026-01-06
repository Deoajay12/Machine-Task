import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-white border-b border-gray-200">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-gray-900">User Dashboard</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
