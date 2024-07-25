const destinationCountries = [
    {
        id: 8,
        country: "Hongkong",
        sectors: [
        { 
            id: 9, 
            name: "Informal" 
        }
        ],
        positions: {
            9: [
                { 
                    id: 9, 
                    name: "House Maid",
                    type: "Merawat bayi/anak kecil, merawat lansia/orang sakit & pekerjaan rumah",
                    totalWorker: "100",
                    contractPeriod: "2 Tahun",
                    salary: "HK$ 4.730",
                    dateUpload: "2024/07/09",
                    image: "https://www.shutterstock.com/image-photo/portrait-asian-young-cleaning-service-600nw-2075023054.jpg",
                    task: {
                        1: "Memastikan bahwa standar kebersihan rumah terpenuhi",
                        2: "Membersihkan dan merapikan semua area yang ditugaskan dalam jangka waktu tertentu",
                        3: "Memastikan bahwa rumah selalu dalam keadaan bersih",
                        4: "Menangani keluhan majikan secara profesional",
                        5: "Melaporkan apabila terjadi kerusakan sehari-hari dan melaporkan barang-barang yang hampir habis sehingga dapat dipesan kembali",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "Usia 21-38 Tahun (Khusus ex Taiwan dan Singapura), Usia 21-42 Tahun (Khusus ex Hongkong)",
                        height: "150cm ke atas",
                        weight: "Ideal",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTP",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Bayi/Anak Kecil merawat Lansia/Orang Sakit dan Pekerjaan Rumah",
                    },
                    workingConditions: {
                        jumlahJamKerja: "6 hari/minggu, hari libur tetap bekerja dan akan dihitung gaji dari Majikan",
                        overTime: "Kerja di Hari Libur akan di hitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Hongkong",
                        insurance: "Sesuai peraturan Pemerintahan Hongkong",

                    }
                }
            ]
        }
    },
    {
        id: 1,
        country: "Korea Selatan",
        sectors: [
        { 
            id: 2, 
            name: "Formal" 
        }
        ],
        positions: {
            2: [
                { 
                    id: 1, 
                    name: "Visa E-7",
                    type: "Merawat Lansia/Orang Sakit",
                    totalWorker: "100",
                    contractPeriod: "3 Tahun",
                    salary: "KRW 2.700.000",
                    dateUpload: "2024/07/09",
                    image: "https://slv.co.id/wp-content/uploads/2022/10/Training-Welder-w575.jpg",
                    task: {
                        1: "Memberikan asuhan keperawatan terbaik kepada Pasien",
                        2: "Membantu mengoptimalkan kesehatan Pasien dengan tepat",
                        3: "Memastikan Pasien mengonsumsi makanan yang sehat",
                        4: "Mengontrol jadwal makan dan minum obat Pasien",
                        5: "Membantu menjaga kebersihan Pasien",
                        6: "Memberikan motivasi dan perhatian terhadap Pasien",
                        7: "Menjadi teman yang baik bagi Pasien",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "23 - 35 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                        height: "155cm ke atas",
                        weight: "55kg (minimal)",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTA (Memiliki Sertifikat Keperewatan Lebih Baik)",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Lansia/Orang Sakit",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata - Rata 1-2 Jam/Hari (Sesuai peraturan Nursing Home) Kerja Di Hari Libur akan dihitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                }
            ]
        }
    },
    {
        id: 3,
        country: "Malaysia",
        sectors: [
        { 
            id: 8, 
            name: "Formal" 
        },
        { 
            id: 15, 
            name: "Informal" 
        }
        ],
        positions: {
            15: [
                { 
                    id: 12, 
                    name: "Babysitter",
                    type: "Merawat Lansia/Orang Sakit",
                    totalWorker: "100",
                    contractPeriod: "2 Tahun",
                    salary: "RM 1.500",
                    dateUpload: "2024/07/09",
                    image: "https://www.shutterstock.com/image-photo/educational-pastime-develop-creativity-skill-600nw-1702499890.jpg",
                    task: {
                        1: "Memberikan asuhan keperawatan terbaik kepada Pasien",
                        2: "Membantu mengoptimalkan kesehatan Pasien dengan tepat",
                        3: "Memastikan Pasien mengonsumsi makanan yang sehat",
                        4: "Mengontrol jadwal makan dan minum obat Pasien",
                        5: "Membantu menjaga kebersihan Pasien",
                        6: "Memberikan motivasi dan perhatian terhadap Pasien",
                        7: "Menjadi teman yang baik bagi Pasien",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "23 - 35 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                        height: "155cm ke atas",
                        weight: "55kg (minimal)",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTA (Memiliki Sertifikat Keperewatan Lebih Baik)",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Lansia/Orang Sakit",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata - Rata 1-2 Jam/Hari (Sesuai peraturan Nursing Home) Kerja Di Hari Libur akan dihitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                },
                { 
                    id: 13,
                    name: "Elderly",
                    type: "Merawat Lansia/Orang Sakit",
                    totalWorker: "100",
                    contractPeriod: "2 Tahun",
                    salary: "RM 1.500",
                    dateUpload: "2024/07/09",
                    image: "https://www.griswoldcare.com/wp-content/uploads/2024/04/shutterstock_735361786.jpg",
                    task: {
                        1: "Memberikan asuhan keperawatan terbaik kepada Pasien",
                        2: "Membantu mengoptimalkan kesehatan Pasien dengan tepat",
                        3: "Memastikan Pasien mengonsumsi makanan yang sehat",
                        4: "Mengontrol jadwal makan dan minum obat Pasien",
                        5: "Membantu menjaga kebersihan Pasien",
                        6: "Memberikan motivasi dan perhatian terhadap Pasien",
                        7: "Menjadi teman yang baik bagi Pasien",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "23 - 35 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                        height: "155cm ke atas",
                        weight: "55kg (minimal)",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTA (Memiliki Sertifikat Keperewatan Lebih Baik)",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Lansia/Orang Sakit",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata - Rata 1-2 Jam/Hari (Sesuai peraturan Nursing Home) Kerja Di Hari Libur akan dihitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                },
                { 
                    id: 11, 
                    name: "Housekeeper & Family Cook",
                    type: "Merawat Lansia/Orang Sakit",
                    totalWorker: "100",
                    contractPeriod: "2 Tahun",
                    salary: "RM 1.500",
                    dateUpload: "2024/07/09",
                    image: "https://i.postimg.cc/QM6rtSYh/Desain-tanpa-judul.jpg",
                    task: {
                        1: "Memberikan asuhan keperawatan terbaik kepada Pasien",
                        2: "Membantu mengoptimalkan kesehatan Pasien dengan tepat",
                        3: "Memastikan Pasien mengonsumsi makanan yang sehat",
                        4: "Mengontrol jadwal makan dan minum obat Pasien",
                        5: "Membantu menjaga kebersihan Pasien",
                        6: "Memberikan motivasi dan perhatian terhadap Pasien",
                        7: "Menjadi teman yang baik bagi Pasien",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "23 - 35 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                        height: "155cm ke atas",
                        weight: "55kg (minimal)",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTA (Memiliki Sertifikat Keperewatan Lebih Baik)",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Lansia/Orang Sakit",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata - Rata 1-2 Jam/Hari (Sesuai peraturan Nursing Home) Kerja Di Hari Libur akan dihitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                }
            ]
        }
    },
    {
        id: 9,
        country: "Singapura",
        sectors: [
        { 
            id: 10, 
            name: "Informal" 
        }
        ],
        positions: {
            10: [
                { 
                    id: 10, 
                    name: "Domestic Worker",
                    type: "Merawat Lansia/Orang Sakit",
                    totalWorker: "100",
                    contractPeriod: "4 Tahun",
                    salary: "SG$ 670",
                    dateUpload: "2024/07/09",
                    image: "https://www.shutterstock.com/image-photo/asian-cleaning-service-woman-worker-600nw-2093118301.jpg",
                    task: {
                        1: "Memberikan asuhan keperawatan terbaik kepada Pasien",
                        2: "Membantu mengoptimalkan kesehatan Pasien dengan tepat",
                        3: "Memastikan Pasien mengonsumsi makanan yang sehat",
                        4: "Mengontrol jadwal makan dan minum obat Pasien",
                        5: "Membantu menjaga kebersihan Pasien",
                        6: "Memberikan motivasi dan perhatian terhadap Pasien",
                        7: "Menjadi teman yang baik bagi Pasien",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "23 - 35 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                        height: "155cm ke atas",
                        weight: "55kg (minimal)",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTA (Memiliki Sertifikat Keperewatan Lebih Baik)",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Lansia/Orang Sakit",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata - Rata 1-2 Jam/Hari (Sesuai peraturan Nursing Home) Kerja Di Hari Libur akan dihitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                }
            ]
        }
    },
    {
        id: 2,
        country: "Taiwan",
        sectors: [
        { 
            id: 6, 
            name: "Formal" 
        },
        { 
            id: 14, 
            name: "Informal" 
        }
        ],
        positions: {
            6: [
                { 
                    id: 8, 
                    name: "Farming Worker",
                    type: "Merawat Lansia/Orang Sakit",
                    totalWorker: "100",
                    contractPeriod: "3 Tahun",
                    salary: "NT$ 27.470",
                    dateUpload: "2024/07/09",
                    image: "https://hackerfarm.jp/wp-content/uploads/2019/04/farm1.jpg",
                    task: {
                        1: "Memberikan asuhan keperawatan terbaik kepada Pasien",
                        2: "Membantu mengoptimalkan kesehatan Pasien dengan tepat",
                        3: "Memastikan Pasien mengonsumsi makanan yang sehat",
                        4: "Mengontrol jadwal makan dan minum obat Pasien",
                        5: "Membantu menjaga kebersihan Pasien",
                        6: "Memberikan motivasi dan perhatian terhadap Pasien",
                        7: "Menjadi teman yang baik bagi Pasien",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "23 - 35 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                        height: "155cm ke atas",
                        weight: "55kg (minimal)",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTA (Memiliki Sertifikat Keperewatan Lebih Baik)",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Lansia/Orang Sakit",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata - Rata 1-2 Jam/Hari (Sesuai peraturan Nursing Home) Kerja Di Hari Libur akan dihitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                },
                { 
                    id: 14, 
                    name: "Fisherman",
                    type: "Merawat Lansia/Orang Sakit",
                    totalWorker: "100",
                    contractPeriod: "2 Tahun",
                    salary: "NT$ 27.470",
                    dateUpload: "2024/07/09",
                    image: "https://c1.wallpaperflare.com/preview/693/118/350/the-fishermen-fishing-the-work-the-sea.jpg",
                    task: {
                        1: "Memberikan asuhan keperawatan terbaik kepada Pasien",
                        2: "Membantu mengoptimalkan kesehatan Pasien dengan tepat",
                        3: "Memastikan Pasien mengonsumsi makanan yang sehat",
                        4: "Mengontrol jadwal makan dan minum obat Pasien",
                        5: "Membantu menjaga kebersihan Pasien",
                        6: "Memberikan motivasi dan perhatian terhadap Pasien",
                        7: "Menjadi teman yang baik bagi Pasien",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "23 - 35 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                        height: "155cm ke atas",
                        weight: "55kg (minimal)",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTA (Memiliki Sertifikat Keperewatan Lebih Baik)",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Lansia/Orang Sakit",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata - Rata 1-2 Jam/Hari (Sesuai peraturan Nursing Home) Kerja Di Hari Libur akan dihitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                },
                { 
                    id: 5, 
                    name: "Kontruksi",
                    type: "Pengecoran, Pengecetan, Pemasangan Plafon, Scaffolding, Instalasi Air/Listrik, Beksiting Beton, Mengangkat Beban Berat, Membuat Pondasi Bangunan. Memasang Keramik, Memplester, Mengelas, Mengikat dan Merakit Besi, Menyupir Kendaraan, Memotong Besi",
                    totalWorker: "100",
                    contractPeriod: "3 Tahun",
                    salary: "NT$ 26.400",
                    dateUpload: "2024/07/09",
                    image: "https://img.freepik.com/premium-photo/asian-two-business-man-construction-engineers-supervising-progress-construction-project-construction-site_61243-1493.jpg",
                    task: {
                        1: "Melaksanakan pembangunan dan bekerja sesuai peraturan yang telah ditentukan",
                        2: "Mengoperasikan sikan mesin dan peralatan kerja dengan baik",
                        3: "Mampu bekerja di luar ruangan, tahan panas dan pekerja keras",
                        4: "Mampu bekerja secara terampil, efisein dan memastikan proyek selesai sesuai dengan jadwal yang telah ditetapkan",
                        5: "Menjaga standar kesehatan dan keselamatan kerja",
                        6: "Bertanggungjawab atas pelaksanakan kegiatan pembangunan",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Laki-Laki",
                        age: "21-47 Tahun",
                        height: "160cm ke atas",
                        weight: "55kg",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTP",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Memiliki pengalaman di pekerjaan konstruksi",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata-Rata 1-2 Jam/Hari (Sesuai peraturan Konstruksi) kerja di Hari Libur akan di hitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                },
                { 
                    id: 7, 
                    name: "Nursing Home",
                    type: "Merawat Lansia/Orang Sakit",
                    totalWorker: "100",
                    contractPeriod: "3 Tahun",
                    salary: "NT$ 26.400",
                    dateUpload: "2024/07/09",
                    image: "https://img.freepik.com/free-photo/old-disabled-lady-walking-with-help-crutches-nursing-home-while-nurse-is-takinh-care-her_482257-20641.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712966400&semt=ais",
                    task: {
                        1: "Memberikan asuhan keperawatan terbaik kepada Pasien",
                        2: "Membantu mengoptimalkan kesehatan Pasien dengan tepat",
                        3: "Memastikan Pasien mengonsumsi makanan yang sehat",
                        4: "Mengontrol jadwal makan dan minum obat Pasien",
                        5: "Membantu menjaga kebersihan Pasien",
                        6: "Memberikan motivasi dan perhatian terhadap Pasien",
                        7: "Menjadi teman yang baik bagi Pasien",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "23 - 35 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                        height: "155cm ke atas",
                        weight: "55kg (minimal)",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTA (Memiliki Sertifikat Keperewatan Lebih Baik)",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Lansia/Orang Sakit",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata - Rata 1-2 Jam/Hari (Sesuai peraturan Nursing Home) Kerja Di Hari Libur akan dihitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                },
                { 
                    id: 8, 
                    name: "Operator Worker",
                    type: "Merawat Lansia/Orang Sakit",
                    totalWorker: "100",
                    contractPeriod: "2 Tahun",
                    salary: "NT$ 27.470",
                    dateUpload: "2024/07/09",
                    image: "https://t4.ftcdn.net/jpg/04/32/88/01/360_F_432880193_sA7uAPRPsX6fCDZeCkVG3cIKYbMn1Qrj.jpg",
                    task: {
                        1: "Memberikan asuhan keperawatan terbaik kepada Pasien",
                        2: "Membantu mengoptimalkan kesehatan Pasien dengan tepat",
                        3: "Memastikan Pasien mengonsumsi makanan yang sehat",
                        4: "Mengontrol jadwal makan dan minum obat Pasien",
                        5: "Membantu menjaga kebersihan Pasien",
                        6: "Memberikan motivasi dan perhatian terhadap Pasien",
                        7: "Menjadi teman yang baik bagi Pasien",
                    },
                    documentRequirement: {
                        1: "E-KTP",
                        2: "Kartu Keluarga (Barcode)",
                        3: "Akte Lahir (Barcode)",
                        4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                        5: "Buku Nikah",
                        5: "Pass Foto 4x6 (6 Lembar)",
                        5: "Passport",
                        5: "ID Card Lama / AKBC (Khusus Ex)",
                        5: "SKCK yang Masih Berlaku",
                        7: "BPJS Kesehatan",
                        8: "Memiliki Kompetensi (Sertifikat BNSP)",
                        9: "Hasil / Blanko Medikal",
                    },
                    requirement: {
                        gender: "Wanita",
                        age: "23 - 35 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                        height: "155cm ke atas",
                        weight: "55kg (minimal)",
                        physical: "Sehat Jasmani & Rohani",
                        lastEducation: "Minimal SLTA (Memiliki Sertifikat Keperewatan Lebih Baik)",
                        marriageStatus: "Tidak ditentukan",
                        vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                        workExperience: "Merawat Lansia/Orang Sakit",
                    },
                    workingConditions: {
                        jumlahJamKerja: "8 Jam/Hari",
                        overTime: "Rata - Rata 1-2 Jam/Hari (Sesuai peraturan Nursing Home) Kerja Di Hari Libur akan dihitung gaji",
                        mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                        insurance: "Sesuai peraturan Pemerintahan Taiwan",

                    }
                }
            ],
        14: [
            { 
                id: 4, 
                name: "Caregiver",
                type: "Merawat Lansia/Orang Sakit & Pekerjaan Rumah",
                totalWorker: "180",
                contractPeriod: "3 Tahun",
                salary: "NT$ 20.000",
                dateUpload: "2024/07/09",
                image: "https://i.pinimg.com/736x/19/f2/2e/19f22eb1ad83556af26698826af98778.jpg",
                task: {
                    1: "Merawat Lansia/Orang Sakit dengah Penuh Perhatian",
                    2: "Berkomunikasi dengan Keluarga dan Tenaga Medis Mengenai keadaan orang yang dirawat",
                    3: "Menjadi teman yang baik bagi orang yang dirawat",
                    4: "Pekerjaan rumah sekitar Tempat Tinggal orang yang dirawat",
                },
                documentRequirement: {
                    1: "E-KTP",
                    2: "Kartu Keluarga (Barcode)",
                    3: "Akte Lahir (Barcode)",
                    4: "Surat Izin Keluarga dan diketahui Kepala Desa Setempat",
                    5: "Buku Nikah",
                    5: "Pass Foto 4x6 (6 Lembar)",
                    5: "Passport",
                    5: "ID Card Lama / AKBC (Khusus Ex)",
                    5: "SKCK yang Masih Berlaku",
                    7: "BPJS Kesehatan",
                    8: "Memiliki Kompetensi (Sertifikat BNSP)",
                    9: "Hasil / Blanko Medikal",
                },
                requirement: {
                    gender: "Wanita",
                    age: "23 - 43 Tahun (Khusus ex Taiwan, Usia Maksimal 45 Tahun)",
                    height: "152cm keatas",
                    weight: "52kg (minimal)",
                    physical: "Sehat Jasmani & Rohani",
                    lastEducation: "Minimal SLTP",
                    marriageStatus: "Tidak ditentukan",
                    vaccineCertificate: "Memiliki 2 kali Sertifikasi Vaksin",
                    workExperience: "Merawat Lansia/Orang Sakit & Pekerjaan Rumah",
                },
                workingConditions: {
                    jumlahJamKerja: "6 Hari/Minggu, Hari Libur tetap bekerja dan akan di hitung gaji dari Majikan",
                    overTime: "Kerja di hari libur akan dihitung gaji",
                    mealsAndAccommodation: "Sesuai peraturan Pemerintahaan Taiwan",
                    insurance: "Sesuai peraturan Pemerintahan Taiwan",
        
                }
            }
        ]
        }
    }
    ];

export default destinationCountries;