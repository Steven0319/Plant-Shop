import './Banner.css'
//importo los estilos CSS para el Banner
const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-container">
          <h1 className="hero-text">Plants Shop</h1>
         <p className="hero-p">Welcome to our online plant shop! Discover a wide variety of plants to beautify your home and garden.</p>
        </div>
    </div>
  )
}
//creo el banner principal que se muestra en la pagina de inicio
//uso un div con clase banner que tiene una imagen de fondo
//dentro coloco un h1 como titulo principal del sitio y un p como subtitulo
//este texto esta centrado y estilizado para que se vea sobre la imagen
export default Banner