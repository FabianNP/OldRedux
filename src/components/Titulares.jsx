import { connect } from "react-redux"

const Titulares = ({ titulares, quitarJugador }) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha">
      {
        titulares.map(jugador => (
          <article className="titular" key={jugador.id}>
            <div>
              {/* <img src={jugador.foto} alt={jugador.nombre} /> */}
              <button onClick={() => quitarJugador(jugador)}>X</button>
            </div>
            <p>{jugador.nombre}</p>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateToProps= state => ({
  titulares: state.titulares
})

const dispatchStateToProps = dispatch => ({
  quitarJugador(jugador) {
    dispatch({
      type: "QUITAR_JUGADOR",
      jugador
    })
  }
})

export default connect(mapStateToProps, dispatchStateToProps)(Titulares)