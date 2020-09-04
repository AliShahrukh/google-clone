import React from 'react';
import './SearchPage.css';
import Search from './Search';
import { useStateValue } from '../StateProvider';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Search hideButtons />
            </div>
            <div className='searchPage__results'>
                {term}
            </div>
        </div>
    )
}

export default SearchPage
