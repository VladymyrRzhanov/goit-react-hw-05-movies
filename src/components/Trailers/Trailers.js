import s from "./Trailes.module.css";

const Trailers = ({trailers}) => {
    return (
        <ul className={s.list}>
            {trailers.map(({ key }) =>
                <li className={s.item}
                    key={key}>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </li>
            )}
        </ul>
    );
};

export default Trailers;