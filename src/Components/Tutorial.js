import { Fragment, useState } from "react";
import tutorialImg1 from '../Images/Tutorial/tutorial 1.png'
import tutorialImg2 from '../Images/Tutorial/tutorial 2.png'
import tutorialImg3 from '../Images/Tutorial/tutorial 3.png'
import tutorialImg4 from '../Images/Tutorial/tutorial 4.png'
import tutorialImg5 from '../Images/Tutorial/tutorial 5.png'

const Tutorial = () => {
    const [activeTab, setActiveTab] = useState(0)
    const listOfTutorial = [tutorialImg1, tutorialImg2, tutorialImg3, tutorialImg4, tutorialImg5]

    const resetTab = () => {
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
                            {listOfTutorial.map((image, index) => <img key={index} src={`${image}`} alt={`tutorial ${index}`} className={`w-100 ${index === activeTab ? 'd-block' : 'd-none'}`}/>)}
                        </div>
                        <nav>
                            <ul className="pagination">
                                <li className={`page-item ${activeTab === 0 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => setActiveTab(activeTab - 1)}>Anterior</button>
                                </li>
                                <li className={`page-item ${activeTab === listOfTutorial.length - 1 ? 'disabled' : ''}`}>
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
