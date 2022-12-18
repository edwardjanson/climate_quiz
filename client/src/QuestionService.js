const baseURL = 'http://localhost:9000/api/questions/'

export const getQuestions = () => {
    return fetch(baseURL)
        .then(res => res.json())
};