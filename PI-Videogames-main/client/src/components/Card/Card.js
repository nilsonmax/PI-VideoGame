import { Link } from 'react-router-dom';
// import s from './Cards.module.css'
import s from './GameItem.module.css'

const Card = ({ id, name, image, rating, genres }) => {

    return (
        <div className={s.card}>
            <Link className={s.card_header} to={`/videogames/${id}`}>
                {/* <div className={s.cardHeader}> */}

                <img className={s.thumbnail} src={image} alt="" />
            </Link>
            {/* <div className={s.cardBody}> */}
            <div className={s.card_body}>
                <Link className={s.title} to={`/videogames/${id}`}>
                    {name}
                </Link>
                <p className={`${s.description} text-muted`}>
                    {/* {game.short_description.substr(0, 70)}... */}
                </p>
                <span className={`${s.tag} ${s.tagTeal}`}>Rating: {rating}% </span>
                <div className={s.card_footer}>
                    <div>
                       {/* {genres} <span className={s.badge}>{genres}</span> */}
                       {genres.map(r =><span className={s.badge}>{r}</span>)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card