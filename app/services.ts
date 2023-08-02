import axios from 'axios';

export const subscribeNewsLetter = async (email:  string): Promise<void> => {
    return await axios.post('https://w1et7853s6.execute-api.eu-west-1.amazonaws.com/subscribe-newsletter', { email });
}

export const getTotalNumberOfQuizzes = async (): Promise<number> => {
    const {data} = await axios.get('https://w1et7853s6.execute-api.eu-west-1.amazonaws.com/quizzes/total-number');
    return data;
}