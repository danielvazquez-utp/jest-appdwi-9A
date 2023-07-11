import PropTypes from 'prop-types';

const HeaderApp = ({ titulo, subtitulo, contenido }) => {
  return (
    <>
        <h1>{ titulo }</h1>
        <h3>{ subtitulo }</h3>
        <p>
        { contenido }
        </p>
    </>
  )
}

export default HeaderApp;

HeaderApp.propTypes = {
    titulo : PropTypes.string.isRequired,
    subtitulo : PropTypes.string,
    contenido : PropTypes.string.isRequired,
}

HeaderApp.defaultProps = {
    titulo : "Aquí va el título",
    subtitulo : "Aquí el subtítulo",
    contenido : "Aqui va el contenido",
}