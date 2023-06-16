import { connect } from "react-redux"

const Suplentes = ({ suplentes, quitarJugador }) => (
  <section>
    <h2>Suplentes</h2>
    <div className="cancha">
      {
        suplentes.map(jugador => (
          <article className="suplente" key={jugador.id}>
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
  suplentes: state.suplentes
})

const dispatchStateToProps = dispatch => ({
  quitarJugador(jugador){
    dispatch({
      type: "QUITAR_JUGADOR",
      jugador
    })
  }
})

export default connect(mapStateToProps, dispatchStateToProps)(Suplentes)