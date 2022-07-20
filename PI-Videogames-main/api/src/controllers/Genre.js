const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;

const getDataApiGenre = async () =>{
    try {
        const data = await Genre.findAll();

        if (data.length === 0) {

            const resp = await axios.get(
                `https://api.rawg.io/api/genres?key=${API_KEY}`
            );
            const dataRes = resp.data.results.map(g => ({ id: g.id, name: g.name }));
            await Genre.bulkCreate(dataRes);

            return dataRes;

        } else {
            return data;
        }

    } catch (error) {
        console.log(error);
    }
}

const getDataGenre = async (req, res) => {
    try {
        await getDataApiGenre()
        const d = await Genre.findAll()
        res.send(d)
        // const data = await Genre.findAll();

        // if (data.length === 0) {

        //     const resp = await axios.get(
        //         `https://api.rawg.io/api/genres?key=${API_KEY}`
        //     );
        //     const dataRes = resp.data.results.map(g => ({ id: g.id, name: g.name }));
        //     await Genre.bulkCreate(dataRes);

        //     res.send(dataRes);

        // } else {
        //     res.send(data);
        // }

    } catch (error) {
        res.status(404).send({ msg: "error" })
    }
}

module.exports = {
    getDataApiGenre,
    getDataGenre
}