import { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import UserCard from '@/components/UserCard';
import SearchInput from '@/components/SearchInput';
import ErrorMessage from '@/components/ErrorMessage';

export default function Home({ users, error }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    const lowerTerm = searchTerm.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(lowerTerm) ||
      user.email.toLowerCase().includes(lowerTerm)
    );
  }, [users, searchTerm]);

  if (error) {
    return (
      <Layout tile="Error">
        <ErrorMessage message={error} />
      </Layout>
    );
  }

  return (

    <Layout title="Dashboard | User Directory">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">User Directory</h1>
        <div className="max-w-md">
          <SearchInput onSearch={setSearchTerm} placeholder="Search by name or email" />
        </div>
      </div>

      {filteredUsers.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await res.json();

    return {
      props: {
        users,
      },
      revalidate: 3600,
    };
  } catch (err) {
    return {
      props: {
        users: [],
        error: 'Failed to load users. Please try again later.',
      },
    };
  }
}
