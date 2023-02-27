import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({nome, corPrimaria, corSecundaria, colaboradores, aoDeletar}) => {

    return (
        (colaboradores.length > 0) && <section className="time" style={{ backgroundColor: corSecundaria}}>
            <h3 style={{ borderColor: corPrimaria }} >{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( (colaborador, indice) => {
                    return <Colaborador 
                        key={indice} 
                        colaborador={colaborador}
                        corDeFundo={corPrimaria}
                        aoDeletar={aoDeletar}
                    />
                })} 
            </div>
        </section>
    )
}

export default Time