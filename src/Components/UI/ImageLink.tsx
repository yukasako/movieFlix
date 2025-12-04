import { NavLink } from 'react-router-dom';

type ImageLinkProps = {
  imageSrc: string;
  altText: string;
  href: string;
};

const ImageLink = ({ imageSrc, altText, href }: ImageLinkProps) => {
  return (
    <NavLink to={href}>
      <img src={`https://image.tmdb.org/t/p/w500${imageSrc}`} alt={altText} />
    </NavLink>
  );
};
export default ImageLink;
