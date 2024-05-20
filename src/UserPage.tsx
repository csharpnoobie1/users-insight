import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';
import { User } from './types';

const UserPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('apibackendv3.azurewebsites.net:8000/api/users/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Eerst de response als tekst ophalen
            })
            .then(data => {
                try {
                    // Probeer de tekst te parsen als JSON
                    const parsedData = JSON.parse(data);
                    console.log("Parsed data:", parsedData);
                    if (!Array.isArray(parsedData)) {
                        throw new Error("Parsed data is not an array");
                    }
                    const usersFormatted = parsedData.map(user => ({
                        id: user.pk,
                        name: `${user.fields.first_name} ${user.fields.last_name}`,
                        email: user.fields.email
                    }));
                    setUsers(usersFormatted);
                    setLoading(false);
                } catch (error) {
                    console.error("Error parsing data:", error);
                    throw new Error("Error parsing JSON from response");
                }
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mt-5 bg-light p-5">
            <UserTable users={users} />
        </div>
    );
}

export default UserPage;

