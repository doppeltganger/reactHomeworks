import { useState, useEffect } from 'react';

export const useStorage = (inputValue, key) => {
    const getValue = () => {
        const storage = localStorage.getItem(key);
        if (storage) {
            return JSON.parse(storage);
        }
        return inputValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};