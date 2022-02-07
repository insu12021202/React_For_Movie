function DetailForMovie({ title, img, rating, description, genres }) {
  return (
    <div>
      <h1>{title}</h1>
      <img alt={title} src={img} />
      <h2>Rating : {rating}/10</h2>
      <h3>{description}</h3>
      <ul>
        <h4>Genres</h4>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetailForMovie;
