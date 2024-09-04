export default function Card({ data }) {

  if (!data || data.length === 0) {
    return <p>No news available</p>;
  }

  const readMore = function (url) {
    window.open(url);
  };

  return (
    <div className="cardContainer">
      {data.map((curr, i) => {
        
        if (!curr.urlToImage) {
          return null;
        }

        return (
          <div key={i} className="card">
            <img src={curr.urlToImage} alt={curr.title} />
            <div className="content">
              <a className="title" onClick={() => readMore(curr.url)}>
                {curr.title}
              </a>
              <p>{curr.description}</p>
              <button onClick={() => readMore(curr.url)}>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
