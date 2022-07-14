import { Link } from 'react-router-dom';
import s from './Cards.module.css'

const Card = ({ id, name, image, rating, genres }) => {

    return (
        <div className={s.card}>
            <Link to={`/videogames/${id}`}>
                <div className={s.cardHeader}>
                    <img src={image} alt="" />
                </div>
                <div className={s.cardBody}>
                    <span className={`${s.tag} ${s.tagTeal}`}>Rating: {rating}% </span>
                    <h4 className={s.name}>{name}</h4>
                    <p>{genres}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card