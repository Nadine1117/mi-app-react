import imagenBanner from "../assets/apiario.jpeg";

function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${imagenBanner}) ` }}
    >
      <div className="overlay">
        <h2>Apiario El Valle</h2>

        <p>Producción natural de miel artesanal con pasión y dedicación.</p>

        <button>Conocer más</button>
      </div>
    </section>
  );
}

export default Banner;
