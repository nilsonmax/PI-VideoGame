const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { Op } = require("sequelize");
const { getDataGenre } = require('./Genre');


const { API_KEY } = process.env;

let numData = 30; // let numPage = 1;

const getDataApi = async (page = 1, dataRes = []) => {

    let resp = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
    );

    dataRes = [...dataRes, ...resp.data.results.map((r) => { // const dataRes = data1.data.results.map((r) => {
        return {
            id: r.id,
            name: r.name,
            released: r.released,
            rating: r.rating,
            platform: r.parent_platforms.map(p => {
                return p.platform.name;
            }),
            genres: r.genres.map(g => {
                return {
                    id: g.id,
                    name: g.name
                }
            })
        }
    }
    )];

    if (dataRes.length >= numData) {    // if (page >= numage) {

        const data = dataRes.slice(0, numData).map(item => item);
        return data;  // return dataRes;
    }

    page++;
    return getDataApi(page, dataRes);
}

const getId = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {

            if (id.includes('-')) {
                const dataResDb = await Videogame.findByPk(id, {
                    // attributes: ['name', 'image', 'description', 'released', 'rating', 'platform'],
                    include: {
                        model: Genre,
                        attributes: ['name'],
                        through: {
                            attributes: []
                        }
                    }
                })

                res.status(200).send(dataResDb)

            } else {

                const resp = await axios.get(
                    `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
                );

                let { name, background_image, genres, description_raw, released, rating, platforms } = resp.data

                genres = genres.map(item => ({ 'name': item.name }));

                platforms = platforms.map(item => item.platform.name);

                const dataResApi = {
                    id,
                    name,
                    image: background_image,
                    genres,
                    description: description_raw,
                    released,
                    rating,
                    platforms
                }

                dataResApi ? res.status(200).send(dataResApi)
                    : res.send({ msg: "error does not exist" })
            }

        } else {
            res.send({ msg: "Should enter a valid ID" })
        }

    } catch (error) {
        res.send(error)
    }

}

const dataResDB = async (name) => {
    let dataResDb = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    return dataResDb;
}

const dataResAPI = async (name) => {

    const resp = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    );

    const dataResApi = await resp.data.results.map((r) => {
        return {
            id: r.id,
            name: r.name,
            image: r.background_image,
            released: r.released,
            rating: r.rating,
            platform: r.parent_platforms.map(p => {
                return p.platform.name;
            }),
            genres: r.genres.map(g => {
                return {
                    id: g.id,
                    name: g.name
                }
            })
        }
    });

    return dataResApi;
}

const searchAll = async () => {
    /*****  Search ALL DB *****/
    const db = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    /*****  Search ALL API *****/
    const api = await getDataApi();
 
    const all = [...api, ...db]
    return all;
}

const getAll = async (req, res) => {
    try {
        const { name } = req.query;

        /*****  Search NAME DB *****/
        if (name) {
            const dataResDb = await dataResDB(name);

            if (!dataResDb) {
                res.send(dataResDb)

            } else {

                /*****  Search NAME API *****/
                const dataResApi = await dataResAPI(name);
                dataResApi ? res.send(dataResApi)
                    : res.send({ msg: "error does not exist" })
            }

        } else {

            /*****  Search ALL *****/
            const all = await searchAll();
            res.send(all)
        }

    } catch (error) {
        res.send(error)
    }
}

const postCreate = async (req, res) => {
    try {
        const { name, image, genres, description, released, rating, platforms } = req.body;

        const newData = await Videogame.create({
            name,
            image,
            genres,
            description,
            released,
            rating,
            platforms
        })

        await getDataGenre();
        const getGenre = await Genre.findAll({
            where: { name: genres }
        })
        await newData.addGenre(getGenre)

        return res.status(200).send({ msg: "successfully created" })

    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getAll,
    getId,
    postCreate
}

// {
//     "name": "GRAND.",
//     "image": "https://media.rawg.io/media/screenshots/3a2/3a2011f1ff3c3d578ba0f5b2eb3e0d82.jpg",
//     "released": "2020-04-14",
//     "rating": 10,
//     "description": "description del juego",
//      "platforms": [
//             "PC",
//             "Android",
//             "Apple Macintosh",
//             "Linux"
//         ],
//      "genres": [
//             {
//                 "id": 3,
//                 "name": "Adventure"
//             }
//         ]
// }