import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'dac5634ece394a5799cabec32e3e0a30',
        });
    }
}

export default AppLoader;
