import { Fragment } from "react";

const Tutorial = () => {
    return(
        <Fragment>
            <button type="button" className="btn btn-dark d-flex" data-bs-toggle="modal" data-bs-target="#tutorial">
                Tutorial
            </button>
            <div className="modal fade" id="tutorial" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cómo jugar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Tutorial
