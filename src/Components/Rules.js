import { Fragment } from "react";
import rules from '../Images/reglas.png'

const Rules = () => {
    return(
        <Fragment>
            <button className='col my-auto btn btn-secondary' data-bs-toggle='modal' data-bs-target='#tutorial'>Reglas</button>
            <div className="modal fade" id="tutorial" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Quién gana a quién?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={rules} alt='Reglas del juego' className="w-100"></img>
                            <hr/>
                            <ul className='text-start'>
                                <li>Tijera corta a Papel</li>
                                <li>Papel tapa a Piedra</li>
                                <li>Piedra aplasta a Lagarto</li>
                                <li>Lagarto envenena a Spock</li>
                                <li>Spock rompe a Tijera</li>
                                <li>Tijera decapita a Lagarto</li>
                                <li>Lagarto devora a Papel</li>
                                <li>Papel desautoriza a Spock</li>
                                <li>Spock vaporiza a Piedra</li>
                                <li>Piedra aplasta a Tijera</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Rules
