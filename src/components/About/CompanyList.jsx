const offices = [
    {
        name: "Bekasi (Pusat)",
        address: "Jl. Balai Desa No.2A, RT.001/RW.004, Jatirasa, Kec. Jatiasih, Kota Bks, Jawa Barat 17424",
    },
    {
        name: "Cilacap (Cabang)",
        address: "Jl. Cimanuk No.31, RT.006/RW.003, Jati, Karangmangu, Kec. Kroya, Kabupaten Cilacap, Jawa Tengah 53282",
    },
    {
        name: "Subang (Cabang)",
        address: "Dusun Krajan II No.RT.10/03, Sukareja, Kec. Sukasari, Kabupaten Subang, Jawa Barat 42154",
    },
    {
        name: "Cirebon (Cabang)",
        address: "DUSUN 03, RT.02/RW.05, Babakan Gebang, Kec. Babakan, Kabupaten Cirebon, Jawa Barat 45191",
    },
];

const CompanyList = () => {
    return(
        <div className="max-w-7xl mx-auto py-20 px-5 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary-400 mb-6 uppercase">Kantor Kami</h2>
            <p className="text-lg text-gray-500 mb-12">
                Kami memiliki beberapa Kantor yang dapat kamu kunjungi
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
                <div id={index} className="bg-primary-secondary-900 py-4 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
                    <h3 className="text-lg font-bold text-white mb-2 uppercase">{office.name}</h3>
                    <p className="text-gray-400">{office.address}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default CompanyList;