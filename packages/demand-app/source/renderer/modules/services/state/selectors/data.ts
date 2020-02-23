import { AppState } from '../store';



const getPluriverses = (state: AppState) => state.data.pluriverses;


export default {
    getPluriverses,
};
