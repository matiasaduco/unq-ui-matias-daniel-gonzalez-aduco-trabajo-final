import { Fragment, useState } from "react";

const Tutorial = () => {
    const [activeTab, setActiveTab] = useState(0)
    const lista = ['tut1', 'tut2', 'tut3', 'tut4']

    function resetTab() {
        setActiveTab(0)
    }

    return(
        <Fragment>
            <button type="button" className="btn btn-dark d-flex" data-bs-toggle="modal" data-bs-target="#tutorial">
                Tutorial
            </button>
            <div className="modal fade" id="tutorial" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cómo jugar:</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {lista.map((imagen, index) => <img key={index} src={imagen} alt={`tutorial ${index}`} className={`${index === activeTab ? 'd-block' : 'd-none'}`}/>)}
                        </div>
                        <nav>
                            <ul className="pagination">
                                <li className={`page-item ${activeTab === 0 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => setActiveTab(activeTab - 1)}>Anterior</button>
                                </li>
                                <li className={`page-item ${activeTab === lista.length - 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => setActiveTab(activeTab + 1)}>Siguiente</button>
                                </li>
                            </ul>
                        </nav>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetTab}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Tutorial
