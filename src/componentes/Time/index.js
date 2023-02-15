import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const corSecundaria = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) && <section className="time" style={corSecundaria}>
            <h3 style={{ borderColor: props.corPrimaria }} >{props.nome}</h3>
            
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)} 
            </div>
        </section>
    )
}

export default Time