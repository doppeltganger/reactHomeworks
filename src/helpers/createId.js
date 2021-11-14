import { v4 as id } from 'uuid';
export const createId = () => {
    const ID = id()
        .split('')
        .filter((element) => Number.isInteger(+element))
        .slice(0, 4)
        .join('');
    return ID;
}