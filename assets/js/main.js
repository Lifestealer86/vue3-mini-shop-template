import {createApp, reactive, ref} from './vue.esm-browser.js';

createApp({
    setup() {
        const product = ref({
            name: "Куртка The North Face Nuptse",
            description: "Легендарный пуховик 1796 года",
        })
        return {
            product
        }
    }
}).mount('#app')