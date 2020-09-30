export interface IProdeskelOption {
    label: string,
    value: string
}

/*
 *   PRODEKSKEL POTENSI
 */


// SDA
export const SdaLokasiTanahKasDesaOptions: IProdeskelOption[] = [{ label: 'Di dalam desa', value: '2' }, { label: 'Di luar desa', value: '0' }, { label: 'Sebagian di luar desa', value: '1' }];
export const SdaWarnaTanahOptions: IProdeskelOption[] = [{ label: 'Kuning', value: '1' }, { label: 'Hitam', value: '2' }, { label: 'Abu-Abu', value: '3' }, { label: 'Merah', value: '4' }];
export const SdaTeksturTanahOptions: IProdeskelOption[] = [{ label: 'Pasiran', value: '1' }, { label: 'Debuan', value: '2' }, { label: 'Lempungan', value: '3' }];
export const SdaPanganKomoditasOptions: IProdeskelOption[] = [{ "label": "Bawang Merah", "value": "12" }, { "label": "Bawang putih", "value": "13" }, { "label": "Bayam", "value": "22" }, { "label": "Brocoli", "value": "20" }, { "label": "Buncis", "value": "19" }, { "label": "Cabe", "value": "11" }, { "label": "Jagung", "value": "1" }, { "label": "Jamur", "value": "78" }, { "label": "Jeruk nipis", "value": "48" }, { "label": "Kacang Hijau", "value": "253" }, { "label": "Kacang kedelai", "value": "2" }, { "label": "Kacang merah", "value": "6" }, { "label": "Kacang panjang", "value": "4" }, { "label": "Kacang tanah", "value": "3" }, { "label": "Kacang turis", "value": "24" }, { "label": "Kangkung", "value": "23" }, { "label": "Kemiri", "value": "96" }, { "label": "Kentang", "value": "16" }, { "label": "Kubis", "value": "17" }, { "label": "Mentimun", "value": "18" }, { "label": "Padi ladang", "value": "8" }, { "label": "Padi sawah", "value": "7" }, { "label": "Sawi", "value": "15" }, { "label": "Selada", "value": "26" }, { "label": "Terong", "value": "21" }, { "label": "Tomat", "value": "14" }, { "label": "Tumpang Sari", "value": "29" }, { "label": "Ubi jalar", "value": "10" }, { "label": "Ubi kayu", "value": "9" }, { "label": "Umbi-umbian lain", "value": "25" }, { "label": "Wortel", "value": "28" }];
export const SdaBuahKomoditasOptions: IProdeskelOption[] = [{ "label": "Alpokat", "value": "31" }, { "label": "Anggur", "value": "54" }, { "label": "Apel", "value": "36" }, { "label": "Belimbing", "value": "38" }, { "label": "Duku", "value": "41" }, { "label": "Durian", "value": "39" }, { "label": "Gandaria", "value": "258" }, { "label": "Jambu air", "value": "50" }, { "label": "Jambu klutuk", "value": "57" }, { "label": "Jambu Mete", "value": "88" }, { "label": "Jeruk", "value": "30" }, { "label": "Kedondong", "value": "53" }, { "label": "Kesemek", "value": "257" }, { "label": "Kokosan", "value": "42" }, { "label": "Lengkeng", "value": "45" }, { "label": "Limau", "value": "47" }, { "label": "Mangga", "value": "32" }, { "label": "Manggis", "value": "34" }, { "label": "Markisa", "value": "44" }, { "label": "Matoa", "value": "249" }, { "label": "Melinjo", "value": "55" }, { "label": "Melon", "value": "49" }, { "label": "Murbei", "value": "58" }, { "label": "Nangka", "value": "51" }, { "label": "Nenas", "value": "56" }, { "label": "Pepaya", "value": "37" }, { "label": "Pisang", "value": "43" }, { "label": "Rambutan", "value": "33" }, { "label": "Salak", "value": "35" }, { "label": "Sawo", "value": "40" }, { "label": "Semangka", "value": "46" }, { "label": "Sirsak", "value": "52" }, { "label": "Stroberi", "value": "255" }, { "label": "Talas", "value": "27" }];
export const SdaBuahYaTidakOptions: IProdeskelOption[] = [{ "label": "Ya", value: "1" }, { "label": "Tidak", value: "0" }];
export const SdaKebunKomoditasOptions: IProdeskelOption[] = [{ "label": "Cengkeh", "value": "83" }, { "label": "Coklat", "value": "84" }, { "label": "Jarak kepyar", "value": "93" }, { "label": "Jarak pagar", "value": "92" }, { "label": "Kacang mede", "value": "5" }, { "label": "Kapuk", "value": "95" }, { "label": "Karet", "value": "87" }, { "label": "Kelapa", "value": "80" }, { "label": "Kelapa sawit", "value": "81" }, { "label": "Kemiri", "value": "256" }, { "label": "Kopi", "value": "82" }, { "label": "Lada", "value": "86" }, { "label": "Pala", "value": "90" }, { "label": "Pinang", "value": "85" }, { "label": "Tebu", "value": "94" }, { "label": "Teh", "value": "97" }, { "label": "Tembakau", "value": "89" }, { "label": "Vanili", "value": "91" }];
export const SdaKebunYaTidakOptions: IProdeskelOption[] = [{ "label": "Ya", value: "1" }, { "label": "Tidak", value: "0" }];

// SDM
export const SdmTingkatPendidikanOptions: IProdeskelOption[] = [{ 'label': 'Usia 3 - 6 tahun yang belum masuk TK ', 'value': '159' }, { 'label': 'Usia 3 - 6 tahun yang sedang TK/play group ', 'value': '160' }, { 'label': 'Usia 7 - 18 tahun yang tidak pernah sekolah ', 'value': '161' }, { 'label': 'Usia 7 - 18 tahun yang sedang sekolah ', 'value': '162' }, { 'label': 'Usia 18 - 56 tahun tidak pernah sekolah ', 'value': '163' }, { 'label': 'Usia 18 - 56 tahun pernah SD tetapi tidak tamat ', 'value': '164' }, { 'label': 'Usia 12 - 56 tahun tidak tamat SLTP ', 'value': '166' }, { 'label': 'Usia 18 - 56 tahun tidak tamat SLTA ', 'value': '167' }, { 'label': 'Tamat SD/sederajat ', 'value': '165' }, { 'label': 'Tamat SMP/sederajat ', 'value': '168' }, { 'label': 'Tamat SMA/sederajat ', 'value': '169' }, { 'label': 'Tamat D-1/sederajat ', 'value': '170' }, { 'label': 'Tamat D-2/sederajat ', 'value': '171' }, { 'label': 'Tamat D-3/sederajat ', 'value': '172' }, { 'label': 'Tamat S-1/sederajat ', 'value': '173' }, { 'label': 'Tamat S-2/sederajat ', 'value': '174' }, { 'label': 'Tamat S-3/sederajat ', 'value': '175' }, { 'label': 'Tamat SLB A ', 'value': '176' }, { 'label': 'Tamat SLB B ', 'value': '177' }, { 'label': 'Tamat SLB C ', 'value': '178' }];
export const SdmJenisPekerjaanOptions: IProdeskelOption[] = [{ "label": "Ahli Pengobatan Alternatif", "value": "15" }, { "label": "Akuntan", "value": "112" }, { "label": "Anggota kabinet kementrian", "value": "100" }, { "label": "Anggota Legislatif", "value": "93" }, { "label": "Anggota mahkamah konstitusi", "value": "99" }, { "label": "Apoteker", "value": "96" }, { "label": "Arsitektur/Desainer", "value": "31" }, { "label": "Belum Bekerja", "value": "37" }, { "label": "Biarawati", "value": "113" }, { "label": "Bidan swasta", "value": "14" }, { "label": "Bupati/walikota", "value": "110" }, { "label": "Buruh Harian Lepas", "value": "42" }, { "label": "Buruh jasa perdagangan hasil bumi", "value": "57" }, { "label": "Buruh Migran", "value": "3" }, { "label": "Buruh Tani", "value": "2" }, { "label": "Buruh usaha hotel dan penginapan lainnya", "value": "66" }, { "label": "Buruh usaha jasa hiburan dan pariwisata", "value": "64" }, { "label": "Buruh usaha jasa informasi dan komunikasi", "value": "61" }, { "label": "Buruh usaha jasa transportasi dan perhubungan", "value": "59" }, { "label": "Dokter swasta", "value": "12" }, { "label": "Dosen swasta", "value": "20" }, { "label": "Dukun Tradisional", "value": "30" }, { "label": "Dukun/paranormal/supranatural", "value": "68" }, { "label": "Duta besar", "value": "101" }, { "label": "Gubernur", "value": "102" }, { "label": "Guru swasta", "value": "19" }, { "label": "Ibu Rumah Tangga", "value": "39" }, { "label": "Jasa Konsultansi Manajemen dan Teknis", "value": "82" }, { "label": "Jasa pengobatan alternatif", "value": "69" }, { "label": "Jasa penyewaan peralatan pesta", "value": "74" }, { "label": "Juru Masak", "value": "83" }, { "label": "Karyawan Honorer", "value": "84" }, { "label": "Karyawan Perusahaan Pemerintah", "value": "33" }, { "label": "Karyawan Perusahaan Swasta", "value": "32" }, { "label": "Kepala Daerah", "value": "94" }, { "label": "Konsultan Manajemen dan Teknis", "value": "35" }, { "label": "Kontraktor", "value": "62" }, { "label": "Montir", "value": "11" }, { "label": "Nelayan", "value": "10" }, { "label": "Notaris", "value": "29" }, { "label": "Pedagang barang kelontong", "value": "8" }, { "label": "Pedagang Keliling", "value": "22" }, { "label": "Pegawai Negeri Sipil", "value": "5" }, { "label": "Pelajar", "value": "38" }, { "label": "Pelaut", "value": "106" }, { "label": "Pembantu rumah tangga", "value": "27" }, { "label": "Pemilik perusahaan", "value": "55" }, { "label": "Pemilik usaha hotel dan penginapan lainnya", "value": "65" }, { "label": "Pemilik usaha informasi dan komunikasi", "value": "60" }, { "label": "Pemilik usaha jasa hiburan dan pariwisata", "value": "63" }, { "label": "Pemilik usaha jasa transportasi dan perhubungan", "value": "58" }, { "label": "Pemilik usaha warung, rumah makan dan restoran", "value": "67" }, { "label": "Pemuka Agama", "value": "92" }, { "label": "Pemulung", "value": "75" }, { "label": "Penambang", "value": "23" }, { "label": "Peneliti", "value": "107" }, { "label": "Pengacara", "value": "28" }, { "label": "Pengrajin", "value": "7" }, { "label": "Pengrajin industri rumah tangga lainnya", "value": "76" }, { "label": "Pengusaha kecil, menengah dan besar", "value": "18" }, { "label": "Pengusaha perdagangan hasil bumi", "value": "56" }, { "label": "Penyiar radio", "value": "105" }, { "label": "Perangkat Desa", "value": "41" }, { "label": "Perawat swasta", "value": "13" }, { "label": "Petani", "value": "1" }, { "label": "Peternak", "value": "9" }, { "label": "Pialang", "value": "85" }, { "label": "Pilot", "value": "104" }, { "label": "POLRI", "value": "17" }, { "label": "Presiden", "value": "97" }, { "label": "Pskiater/Psikolog", "value": "86" }, { "label": "Purnawirawan/Pensiunan", "value": "40" }, { "label": "Satpam/Security", "value": "108" }, { "label": "Seniman/artis", "value": "21" }, { "label": "Sopir", "value": "70" }, { "label": "Tidak Mempunyai Pekerjaan Tetap", "value": "36" }, { "label": "TNI", "value": "16" }, { "label": "Tukang Anyaman", "value": "77" }, { "label": "Tukang Batu", "value": "25" }, { "label": "Tukang Cuci", "value": "26" }, { "label": "Tukang Cukur", "value": "88" }, { "label": "Tukang Gigi", "value": "90" }, { "label": "Tukang Jahit", "value": "78" }, { "label": "Tukang Kayu", "value": "24" }, { "label": "Tukang Kue", "value": "79" }, { "label": "Tukang Las", "value": "89" }, { "label": "Tukang Listrik", "value": "91" }, { "label": "Tukang Rias", "value": "80" }, { "label": "Tukang Sumur", "value": "81" }, { "label": "Usaha jasa pengerah tenaga kerja", "value": "71" }, { "label": "Wakil bupati", "value": "103" }, { "label": "Wakil Gubernur", "value": "109" }, { "label": "Wakil presiden", "value": "98" }, { "label": "Wartawan", "value": "87" }, { "label": "Wiraswasta", "value": "34" }];
export const SdmAgamaOptions: IProdeskelOption[] = [{ "label": "Budha  ", "value": "5" }, { "label": "Hindu  ", "value": "4" }, { "label": "Islam  ", "value": "1" }, { "label": "Katholik  ", "value": "3" }, { "label": "Kepercayaan Kepada Tuhan YME  ", "value": "7" }, { "label": "Konghucu  ", "value": "6" }, { "label": "Kristen  ", "value": "2" }];

// PEMERINTAHAN
export const AktifPasifOptions: IProdeskelOption[] = [{ label: 'Aktif', value: '1' }, { label: 'Pasif', value: '0' }];
export const AdaTidakAdaOptions: IProdeskelOption[] = [{ label: 'Ada', value: '1' }, { label: 'Tidak Ada', value: '0' }];
export const AdaTidakAdaAktifOptions: IProdeskelOption[] = [{ label: 'Ada dan Aktif', value: '2' }, { label: 'Ada dan Tidak Aktif', value: '1' }, { label: 'Tidak Ada', value: '0' }];
export const JenisKelaminOptions: IProdeskelOption[] = [{ label: 'Laki-laki', value: '0' }, { label: 'Perempuan', value: '1' }];
export const PendidikanOptions: IProdeskelOption[] = [{ label: 'SD', value: '0' }, { label: 'SLTP', value: '1' }, { label: 'SLTA', value: '2' }, { label: 'DIPL', value: '3' }, { label: 'S-1', value: '4' }, { label: 'S-2', value: '5' }, { label: 'S-3', value: '6' }];
export const StatusKepegawaianOptions: IProdeskelOption[] = [{ label: 'PNS', value: '1' }, { label: 'Non PNS', value: '0' }];
export const DasarHukumPembentukanPemerintahanOptions: IProdeskelOption[] = [{ label: 'Perda', value: '647' }, { label: 'Keputusan Bupati', value: '648' }, { label: 'Camat', value: '649' }, { label: 'Belum Ada Dasar Hukum', value: '650' }];
export const DasarHukumPembentukanBpdOptions: IProdeskelOption[] = [{ label: 'Perda', value: '651' }, { label: 'Keputusan Bupati', value: '652' }, { label: 'Camat', value: '653' }, { label: 'Belum Ada Dasar Hukum', value: '654' }];

// KEMASYARAKATAN
export const JenisLembagaKemasyarakatanOptions: IProdeskelOption[] = [{ 'label': 'BADAN USAHA MILIK DESA', 'value': '2187' }, { 'label': 'IDI', 'value': '2195' }, { 'label': 'KARANG TARUNA', 'value': '2184' }, { 'label': 'KELOMPOK GOTONG ROYONG', 'value': '2193' }, { 'label': 'KELOMPOK PEMIRSA', 'value': '2199' }, { 'label': 'KELOMPOK TANI/NELAYAN', 'value': '2185' }, { 'label': 'LEMBAGA', 'value': '2201' }, { 'label': 'LEMBAGA ADAT', 'value': '2186' }, { 'label': 'LKD/LKK', 'value': '2178' }, { 'label': 'LKMD/LKMK', 'value': '2179' }, { 'label': 'LPMD/LPMK ATAU SEBUTAN LAIN', 'value': '2180' }, { 'label': 'ORGANISASI BAPAK', 'value': '2192' }, { 'label': 'ORGANISASI KEAGAMAAN', 'value': '2188' }, { 'label': 'ORGANISASI PEMUDA LAINNYA', 'value': '2190' }, { 'label': 'ORGANISASI PEREMPUAN LAIN', 'value': '2189' }, { 'label': 'ORGANISASI PROFESI LAINNYA', 'value': '2191' }, { 'label': 'PANTI', 'value': '2200' }, { 'label': 'PARFI', 'value': '2196' }, { 'label': 'PECINTA ALAM', 'value': '2197' }, { 'label': 'PKK', 'value': '2181' }, { 'label': 'PWI', 'value': '2194' }, { 'label': 'RUKUN TETANGGA', 'value': '2183' }, { 'label': 'RUKUN WARGA', 'value': '2182' }, { 'label': 'WREDATAMA', 'value': '2198' }, { 'label': 'YAYASAN', 'value': '2202' }];
export const DasarHukumPembentukanKemasyarakatanOptions: IProdeskelOption[] = [{ 'label': 'Belum ada LKD/LKK atau Belum ada dasar hukum', 'value': '2177' }, { 'label': 'Berdasarkan Keputusan Bupati/Walikota', 'value': '2175' }, { 'label': 'Berdasarkan Keputusan Camat', 'value': '2176' }, { 'label': 'Berdasarkan Keputusan Lurah/Kepala Desa', 'value': '2208' }, { 'label': 'Berdasarkan Perdes dan Perda Kab/Kota', 'value': '2207' }];

// PARTISIPASI POLITIK
export const JenisPemilihanOptions: IProdeskelOption[] = [{ 'label': 'Pemilu Kepala Desa/Kelurahan', 'value': '639' }, { 'label': 'Pemilu Kepala Kabupaten/Kota', 'value': '640' }, { 'label': 'Pemilu Kepala Gubernur', 'value': '641' }, { 'label': 'Pemilu Legislatif (DPD/DPR/DPRD)', 'value': '642' }, { 'label': 'Pemilu Presiden', 'value': '643' }];

// TRANSPORTASI DARAT
export const KategoriPrasaranaTransportasiDaratOptions: IProdeskelOption[] = [{ 'label': 'Jalan Desa/Kelurahan', 'value': '1' }, { 'label': 'Jalan Antar Desa/Kecamatan', 'value': '2' }, { 'label': 'Jalan Kabupaten/Kota', 'value': '3' }, { 'label': 'Jalan Provinsi', 'value': '4' }, { 'label': 'Jalan Negara', 'value': '5' }, { 'label': 'Jembatan', 'value': '6' }, { 'label': 'Prasarana Angkutan Darat', 'value': '7' }];
export const JenisPrasaranaTransportasiDaratOptions: IProdeskelOption[][] = [
    [{ 'label': '1.1 Panjang jalan aspal', 'value': '473' }, { 'label': '1.2 Panjang jalan makadam', 'value': '474' }, { 'label': '1.3 Panjang jalan tanah', 'value': '475' }, { 'label': '1.4 Panjang jalan sirtu', 'value': '476' }, { 'label': '1.5 Panjang jalan konblok/semen/beton', 'value': '477' }],
    [{ 'label': '2.1 Panjang jalan aspal', 'value': '479' }, { 'label': '2.2 Panjang jalan makadam', 'value': '480' }, { 'label': '2.3 Panjang jalan tanah', 'value': '481' }, { 'label': '2.4 Panjang jalan sirtu', 'value': '482' }, { 'label': '2.5 Panjang jalan konblok/semen/beton', 'value': '483' }],
    [{ 'label': '3.1 Panjang jalan aspal', 'value': '485' }, { 'label': '3.2 Panjang jalan makadam', 'value': '486' }, { 'label': '3.3 Panjang jalan tanah', 'value': '487' }, { 'label': '3.4 Panjang jalan sirtu', 'value': '488' }, { 'label': '3.5 Panjang jalan konblok/semen/beton', 'value': '489' }],
    [{ 'label': '4.1 Panjang jalan aspal', 'value': '491' }, { 'label': '4.2 Panjang jalan makadam', 'value': '492' }, { 'label': '4.3 Panjang jalan tanah', 'value': '493' }, { 'label': '4.4 Panjang jalan sirtu', 'value': '494' }, { 'label': '4.5 Panjang jalan konblok/semen/beton', 'value': '495' }],
    [{ 'label': '5.1 Panjang jalan aspal', 'value': '497' }, { 'label': '5.2 Panjang jalan makadam', 'value': '498' }, { 'label': '5.3 Panjang jalan tanah', 'value': '499' }, { 'label': '5.4 Panjang jalan sirtu', 'value': '500' }, { 'label': '5.5 Panjang jalan konblok/semen/beton', 'value': '501' }],
    [{ 'label': '6.1 Jumlah jembatan beton', 'value': '503' }, { 'label': '6.2 Jumlah jembatan besi', 'value': '504' }, { 'label': '6.3 Jumlah jembatan kayu', 'value': '505' }],
    [{ 'label': '7.1 Jumlah pangkalan ojek', 'value': '507' }, { 'label': '7.2 Jumlah stasiun KA', 'value': '508' }, { 'label': '7.3 Terminal bis/angkutan pedesaan/perkotaan', 'value': '509' }]
];

// ANGKUTAN LAINNYA
export const KategoriPrasaranaAngkutanLainnyaOptions: IProdeskelOption[] = [{ "label": "Sarana Transportasi Darat", "value": "8" }, { "label": "Prasarana Transportasi Laut/Sungai", "value": "9" }, { "label": "Sarana Transportasi Sungai/Laut", "value": "10" }, { "label": "Prasarana Transportasi Udara", "value": "11" }];
export const JenisPrasaranaAngkutanLainnyaOptions: IProdeskelOption[][] = [
    [{ "label": "Bus umum", "value": "510" }, { "label": "Truck umum", "value": "511" }, { "label": "Angkutan Per-Desa/Kelurahanan", "value": "512" }, { "label": "Ojek", "value": "513" }, { "label": "Delman/bendi/cidomo", "value": "514" }, { "label": "Becak", "value": "515" }, { "label": "Kereta api", "value": "516" }],
    [{ "label": "Jumlah tambatan perahu", "value": "517" }, { "label": "Jumlah pelabuhan kapal penumpang", "value": "518" }, { "label": "Jumlah pelabuhan kapal barang", "value": "519" }],
    [{ "label": "Perahu motor", "value": "520" }, { "label": "Kapal antar pulau", "value": "521" }, { "label": "Perahu tanpa motor", "value": "522" }, { "label": "Jet Boat", "value": "523" }, { "label": "Kapal Pesiar", "value": "524" }],
    [{ "label": "Lapangan terbang nasional/internasional", "value": "525" }, { "label": "Lapangan terbang perintis", "value": "526" }, { "label": "Lapangan terbang domestik", "value": "527" }, { "label": "Helipad", "value": "528" }, { "label": "Lapangan terbang komersial", "value": "529" }]
];

// KOMUNIKASI DAN INFORMASI
export const KategoriPrasaranaKomunikasiDanInformasiOptions: IProdeskelOption[] = [{ "label": "Telepon", "value": "1" }, { "label": "Kantor Pos", "value": "2" }, { "label": "Radio / TV", "value": "3" }, { "label": "Koran/Majalah/Bulletin", "value": "4" }];
export const JenisPrasaranaKomunikasiDanInformasiOptions: IProdeskelOption[][] = [
    [{ "label": "Jumlah Pelanggan CDMA", "value": "539" }, { "label": "Jumlah Pelanggan GSM", "value": "538" }, { "label": "Jumlah Pelanggan Telkom", "value": "537" }, { "label": "Sinyal Telepon Seluler/Handphone", "value": "540" }, { "label": "Telepon umum", "value": "534" }, { "label": "Warnet", "value": "536" }, { "label": "Wartel", "value": "535" }],
    [{ "label": "Kantor pos", "value": "541" }, { "label": "Kantor pos pembantu", "value": "542" }, { "label": "Tukang pos", "value": "543" }],
    [{ "label": "Jumlah parabola", "value": "547" }, { "label": "Jumlah radio", "value": "545" }, { "label": "Jumlah TV", "value": "546" }, { "label": "TV umum", "value": "544" }],
    [{ "label": "Koran/surat kabar", "value": "548" }, { "label": "Majalah", "value": "549" }, { "label": "Papan iklan/reklame", "value": "550" }, { "label": "Papan pengumuman", "value": "551" }]
];
export const SatuanPrasaranaKomunikasiDanInformasiOptions: IProdeskelOption[] = [{ "label": "Unit", "value": "1" }, { "label": "KK", "value": "2" }, { "label": "Orang", "value": "3" }, { "label": "Sinyal", "value": "4" }];


/*
 *   PRODEKSKEL PERKEMBANGAN
 */

// PENDAPATAN PER KAPITA SEKTOR USAHA
export const PendapatanPerKapitaSektorUsahaJenisSektorOptions: IProdeskelOption[] = [{"label":"","value":"6"},{"label":"Industri kecil, menengah dan besar","value":"14"},{"label":"Jasa dan perdagangan","value":"15"},{"label":"Kehutanan","value":"13"},{"label":"Kerajinan","value":"11"},{"label":"Perikanan","value":"10"},{"label":"Perkebunan","value":"8"},{"label":"Pertambangan","value":"12"},{"label":"Pertanian","value":"7"},{"label":"Peternakan","value":"9"}];

// PDDK BRUTO SEKTOR INDUSTRI PENGOLAHAN
export const PddkBrutoSektorIndustriPengolahanOptions: IProdeskelOption[] = [{"label":"Industri Pengolahan Migas","value":"4"},{"label":"Industri Pengolahan Non Migas","value":"5"},{"label":"Subsektor Industri Pakaian","value":"2"},{"label":"Subsektor Industri Pangan","value":"3"}];

// PERAN SERTA MASYARAKAT DALAM PEMBANGUNAN
export const MusrembangDesaYaTidakOptions: IProdeskelOption[] = [{"label":"Ya","value":"1"},{"label":"Tidak","value":"0"}];
export const MusrembangDesaAdaTidakAdaOptions: IProdeskelOption[] = [{"label":"Ada","value":"1"},{"label":"Tidak Ada","value":"0"}];
