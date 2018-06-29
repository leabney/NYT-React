import axios from "axios";


const APIKey = 'b77347c2762e46ca8b2b54cda2fad112';

export default {
    search: function (topic, startYear, endYear) {

        const q = topic.trim();
        const begin_date = startYear.trim() + "0101";
        const end_date = endYear.trim() + "1231";

        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': APIKey,
                'q': q,
                'begin_date': begin_date,
                'end_date': end_date
            }
        })
    }
};
