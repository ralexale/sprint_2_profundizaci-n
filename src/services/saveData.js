export const saveData = (data) => {
    localStorage.setItem('flightFormData', JSON.stringify(data));
};

export const loadData = () => {
    const data = localStorage.getItem('flightFormData');
    return JSON.parse(data);
};
