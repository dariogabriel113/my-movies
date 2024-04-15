import { Link } from "react-router-dom";

export const MovieItem = ({ id, title }) => {
    return (
        <li>
            <Link to={`movie/${id}`}>{title}</Link>
        </li>
    )
};
