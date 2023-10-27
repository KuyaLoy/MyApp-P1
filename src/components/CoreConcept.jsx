export default function CoreConcept({ image, alt, title, description }) {
  // const { image, alt, title, description } = props;

  return (
    <li>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
