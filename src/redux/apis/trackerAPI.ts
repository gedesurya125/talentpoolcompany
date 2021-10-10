import {api} from './setupAPI';

export const getAllTracker = () => api.get('/tracker');
