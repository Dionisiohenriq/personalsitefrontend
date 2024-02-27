import React, {useState, useEffect } from  'react';
import axios from 'axios';

function ExampleComponent( ) {
    const[data, setData] = useState(null);

    useEffect(() => {
        async function fetchData(){

            try {
                const response = await axios.get('http://127.0.0.1:8000/api/data');
                setData(response.data);
            }catch (error){
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Dados do backend:</h2>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ): (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default ExampleComponent;