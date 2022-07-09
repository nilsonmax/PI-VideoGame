const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;

const getDataGenre = async (req, res) => {
    try {
        const data = await Genre.findAll();

        if (data.length === 0) {

            const resp = await axios.get(
                `https://api.rawg.io/api/genres?key=${API_KEY}`
            );
            const dataRes = resp.data.results.map(g => ({ id: g.id, name: g.name }));
            await Genre.bulkCreate(dataRes);

            res.send(dataRes);

        } else {
            res.send(data);
        }

    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getDataGenre
}