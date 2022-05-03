import { Link } from 'react-router-dom';

import './styles.css';

function BannerImage({ id, img, description, name }) {
  return (
    <Link to={`/produto/${id}`}>
      <img src={img} alt={description} loading="lazy" />
      <div>
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default BannerImage;
