import React from 'react';
import {userData} from '../scripts/userData';
import CardInput from './UI/input/CardInput';
import CardSelect from './UI/select/CardSelect';
import CardButton from './UI/button/CardButton';
import '../styles/_App.scss';

const Header = ({filter, setFilter, setUserList}) => {
    const resetFilters = () => {
        setFilter({name: '', age: ''});
        setUserList(userData);
    };

    return (
        <div className="app__header">
            <div className="app__container">
                <h2 className="header__title">Second homework</h2>

                <div className="header__filter-block">
                    <div className="filter-block__component">
                        <CardInput
                            onChange={event => setFilter({...filter, name: event.target.value})}
                            value={filter.name}
                            type="search"
                            placeholder="Search by name"
                        />
                    </div>

                    <div className="filter-block__component"> 
                        <CardSelect
                        onChange={value => setFilter({...filter, age: value})}
                        value={filter.age}
                        defaultValue="Sort by age"
                        options={['Descending', 'Ascending']}
                        />
                    </div> 
                
                    <CardButton onClick={resetFilters}>Reset</CardButton>
                </div>
            </div>
        </div>
    );
};

export default Header