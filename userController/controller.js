
const axios = require('axios');
const configuration = require('../config/configMain');

// return false;
const advancedsearch = async (req, res) => {
    const options = {
        method: configuration.HTTP_GET_METHOD,
        url: configuration.ADVANCED_SEARCH_URL,
        params: {
            start_year: configuration.START_YEAR,
            end_year: configuration.END_YEAR,
            min_imdb: configuration.MIN_IMDB,
            max_imdb: configuration.MAX_IMDB,
            genre: configuration.GENRE,
            language: configuration.LANGUAGE,
            type: configuration.TYPE,
            sort: configuration.SORT,
            page: configuration.PAGE,
        },
        headers: {
            'X-RapidAPI-Key': configuration.X_RAPIDAPI_Key,
            'X-RapidAPI-Host': configuration.X_RAPIDAPI_Host,
        },
    };

    try {
        const response = await axios.request(options);
        res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        //   console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getPlatforms = async (req, res) => {
    // return false;

    const options = {
        method: configuration.HTTP_GET_METHOD,
        url: configuration.GET_PLATFORMS_URL,
        params: { region: configuration.LIST_OF_REGION },
        headers: {
            'X-RapidAPI-Key': configuration.X_RAPIDAPI_Key,
            'X-RapidAPI-Host': configuration.X_RAPIDAPI_Host
        }
    };

    try {
        const response = await axios.request(options);
        res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        //   console.log(response.data);
        res.json(response.data);
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function specificImdbid(req, res) {
    const { gotIMDBID } = req.body;
    console.log('req---', gotIMDBID);

    const options = {
        method: configuration.HTTP_GET_METHOD,
        url: configuration.ADVANCED_SEARCH_URL,
        params: {
            imdb: gotIMDBID, // Use the provided IMDb ID
            start_year: configuration.START_YEAR,
            end_year: configuration.END_YEAR,
            min_imdb: configuration.MIN_IMDB,
            max_imdb: configuration.MAX_IMDB,
            genre: configuration.GENRE,
            language: configuration.LANGUAGE,
            type: configuration.TYPE,
            sort: configuration.SORT,
            page: configuration.PAGE,
        },
        headers: {
            'X-RapidAPI-Key': configuration.X_RAPIDAPI_Key,
            'X-RapidAPI-Host': configuration.X_RAPIDAPI_Host,
        },
    };

    try {
        const response = await axios.request(options);
        res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

        const results = response.data.results;

        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            
            if (result.imdbid === gotIMDBID) {
            console.log('Result:', result.imdbid);

                res.json(result); // Match found, respond with the specific result
                return; // Terminate the function to avoid further processing
            }
        }

        // If the loop completes without finding a match, respond with a message
        res.status(404).json({ message: 'No matching result found' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { advancedsearch, getPlatforms, specificImdbid };
