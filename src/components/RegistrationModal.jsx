import React from 'react';

const RegistrationModal = ({ closeModal }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        if (!form.checkValidity()) {
            // Jika form tidak valid, jangan submit form
            form.reportValidity();
            return;
        }

        // Jika form valid, submit form dan tutup modal
        console.log('Form submitted:', {
            name: form.elements.name.value,
            price: form.elements.price.value,
            category: form.elements.category.value,
            description: form.elements.description.value,
        });

        closeModal();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none backdrop-filter backdrop-brightness-75 backdrop-blur-md focus:outline-none">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl my-6 mx-auto">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                            Formulir Pendaftaran CPMI / TKI Online
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-gray-800 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={closeModal}
                        >
                            <span className="bg-transparent text-gray-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Type product name"
                                    required
                                />
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="nik/no.ktp">
                                        NIK / No. KTP
                                    </label>
                                    <input
                                        type="number"
                                        id="nik/no.ktp"
                                        name="nik/no.ktp"
                                        className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="NIK / No. KTP"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="namalengkap">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        id="namalengkap"
                                        name="namalengkap"
                                        className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Nama Lengkap (Sesuai KTP / Passport)"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="jeniskelamin">
                                        Jenis Kelamin
                                    </label>
                                    <select
                                        id="jeniskelamin"
                                        name="jeniskelamin"
                                        className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Pilih Jenis Kelamin</option>
                                        <option value="laki-laki">Laki-Laki</option>
                                        <option value="wanita">Wanita</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="agama">
                                        Agama
                                </label>
                                <select
                                    id="agama"
                                    name="agama"
                                    className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Pilih Agama</option>
                                    <option value="islam">Islam</option>
                                    <option value="kristen">Kristen</option>
                                    <option value="katholik">Katholik</option>
                                    <option value="hindu">Hindu</option>
                                    <option value="buddha">Buddha</option>
                                    <option value="khonghucu">Khong Hucu</option>
                                </select>
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="tempatlahir">
                                        Tempat Lahir
                                    </label>
                                    <input
                                        type="text"
                                        id="tempatlahir"
                                        name="tempatlahir"
                                        className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Tempat Lahir (Sesuai KTP / Passport)"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="tanggallahir">
                                        Tanggal Lahir
                                    </label>
                                    <input
                                        type="date"
                                        id="tanggallahir"
                                        name="tanggallahir"
                                        className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="tinggibadan">
                                        Tinggi Badan
                                    </label>
                                    <select
                                        id="tinggibadan"
                                        name="tinggibadan"
                                        className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Tinggi Badan</option>
                                        <option value="146cm">146 cm</option>
                                        <option value="147cm">147 cm</option>
                                        <option value="148cm">148 cm</option>
                                        <option value="149cm">149 cm</option>
                                        <option value="150cm">150 cm</option>
                                        <option value="151cm">151 cm</option>
                                        <option value="152cm">152 cm</option>
                                        <option value="153cm">153 cm</option>
                                        <option value="154cm">154 cm</option>
                                        <option value="155cm">155 cm</option>
                                        <option value="156cm">156 cm</option>
                                        <option value="157cm">157 cm</option>
                                        <option value="158cm">158 cm</option>
                                        <option value="159cm">159 cm</option>
                                        <option value="160cm">160 cm</option>
                                        <option value="161cm">161 cm</option>
                                        <option value="162cm">162 cm</option>
                                        <option value="163cm">163 cm</option>
                                        <option value="164cm">164 cm</option>
                                        <option value="165cm">165 cm</option>
                                        <option value="166cm">166 cm</option>
                                        <option value="167cm">167 cm</option>
                                        <option value="168cm">168 cm</option>
                                        <option value="169cm">169 cm</option>
                                        <option value="170cm">170 cm</option>
                                        <option value="171cm">171 cm</option>
                                        <option value="172cm">172 cm</option>
                                        <option value="173cm">173 cm</option>
                                        <option value="174cm">174 cm</option>
                                        <option value="175cm">175 cm</option>
                                        <option value="176cm">176 cm</option>
                                        <option value="177cm">177 cm</option>
                                        <option value="178cm">178 cm</option>
                                        <option value="179cm">179 cm</option>
                                        <option value="180cm">180 cm</option>
                                        <option value="181cm">181 cm</option>
                                        <option value="182cm">182 cm</option>
                                        <option value="183cm">183 cm</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="beratbadan">
                                        Berat Badan
                                    </label>
                                    <select
                                        id="beratbadan"
                                        name="beratbadan"
                                        className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Berat Badan</option>
                                        <option value="44kg">44 kg</option>
                                        <option value="45kg">45 kg</option>
                                        <option value="46kg">46 kg</option>
                                        <option value="47kg">47 kg</option>
                                        <option value="48kg">48 kg</option>
                                        <option value="49kg">49 kg</option>
                                        <option value="50kg">50 kg</option>
                                        <option value="51kg">51 kg</option>
                                        <option value="52kg">52 kg</option>
                                        <option value="53kg">53 kg</option>
                                        <option value="54kg">54 kg</option>
                                        <option value="55kg">55 kg</option>
                                        <option value="56kg">56 kg</option>
                                        <option value="57kg">57 kg</option>
                                        <option value="58kg">58 kg</option>
                                        <option value="59kg">59 kg</option>
                                        <option value="60kg">60 kg</option>
                                        <option value="61kg">61 kg</option>
                                        <option value="62kg">62 kg</option>
                                        <option value="63kg">63 kg</option>
                                        <option value="64kg">64 kg</option>
                                        <option value="65kg">65 kg</option>
                                        <option value="66kg">66 kg</option>
                                        <option value="67kg">67 kg</option>
                                        <option value="68kg">68 kg</option>
                                        <option value="69kg">69 kg</option>
                                        <option value="70kg">70 kg</option>
                                        <option value="71kg">71 kg</option>
                                        <option value="72kg">72 kg</option>
                                        <option value="73kg">73 kg</option>
                                        <option value="74kg">74 kg</option>
                                        <option value="75kg">75 kg</option>
                                        <option value="76kg">76 kg</option>
                                        <option value="77kg">77 kg</option>
                                        <option value="78kg">78 kg</option>
                                        <option value="79kg">79 kg</option>
                                        <option value="80kg">80 kg</option>
                                        <option value="81kg">81 kg</option>
                                        <option value="82kg">82 kg</option>
                                        <option value="83kg">83 kg</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="price">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        id="price"
                                        name="price"
                                        className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="$2999"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="category">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Select category</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="apparel">Apparel</option>
                                        <option value="home-garden">Home & Garden</option>
                                        <option value="beauty-health">Beauty & Health</option>
                                        <option value="sports">Sports</option>
                                        <option value="automotive">Automotive</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-left text-gray-800 text-sm font-medium mb-2" htmlFor="description">
                                    Product Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="w-full px-3 py-2 text-gray-800 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Write product description here"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                <button
                                    className="text-gray-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none hover:text-gray-600 mr-1 mb-1"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                    onClick={closeModal}
                                >
                                    BATAL
                                </button>
                                <button
                                    className="bg-primary-secondary-800 text-white active:bg-primary-secondary-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-primary-secondary-900 outline-none focus:outline-none mr-1 mb-1"
                                    type="submit"
                                    style={{ transition: "all .15s ease" }}
                                >
                                    DAFTAR
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationModal;
