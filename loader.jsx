import "./styles/loader.css";

function Loader() {
    return (
        <div className="loader">
            <div className="loader-content">
                <h1 className="loader-logo">
                    Ruban <span>Raj</span>
                </h1>

                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>

                <p>Loading Portfolio...</p>
            </div>
        </div>
    );
}

export default Loader;