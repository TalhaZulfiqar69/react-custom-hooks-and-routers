export const increment = () => {
    return { type: 'INCREMENT' }
}

export const decrement = () => {
    return { type: 'DECREMENT' }
}

export const insertData = (data: any) => {
    return {
        type: 'INSRER_DATA',
        data,
    };
};
