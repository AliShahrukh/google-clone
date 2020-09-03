import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "65681599ab08dfb95";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {

    }, [term])
};

export default useGoogleSearch;