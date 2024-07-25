import kemankerLogo from "../../assets/logo-kemanker.png";
import bp2miLogo from "../../assets/BP2MI_logo.png";

const SupervisedBy = () => {
    return (
        <div className="bg-white py-3">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-base leading-7 text-primary-secondary-800 font-bold">DIAWASI OLEH</h2>
                <div className="mx-auto mt-5 flex justify-center items-center gap-8 sm:gap-16 lg:gap-32">
                    <div className="bg-white p-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-110">
                        <img
                            className="max-h-12 w-auto object-contain"
                            src={kemankerLogo}
                            alt="Logo Kemanker"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-110">
                        <img
                            className="max-h-12 w-auto object-contain"
                            src={bp2miLogo}
                            alt="Logo BP2MI"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupervisedBy;
