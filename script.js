
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>License & Copyright Protection Tool</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="header-content">
                <h1>🔐 License & Copyright Protection Tool</h1>
                <p>Generator lisensi internasional dengan perlindungan DMCA</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Navigation Tabs -->
            <div class="tabs">
                <button class="tab-btn active" data-tab="generator">Generator Lisensi</button>
                <button class="tab-btn" data-tab="dmca">DMCA Protection</button>
                <button class="tab-btn" data-tab="certificate">Sertifikat Copyright</button>
                <button class="tab-btn" data-tab="docs">Dokumentasi</button>
            </div>

            <!-- TAB 1: License Generator -->
            <section id="generator" class="tab-content active">
                <div class="form-section">
                    <h2>Generator Lisensi Internasional</h2>
                    
                    <div class="form-group">
                        <label for="projectName">Nama Project/Website:</label>
                        <input type="text" id="projectName" placeholder="Masukkan nama project Anda">
                    </div>

                    <div class="form-group">
                        <label for="ownerName">Nama Pemilik Copyright:</label>
                        <input type="text" id="ownerName" placeholder="Nama Anda atau organisasi">
                    </div>

                    <div class="form-group">
                        <label for="licenseType">Pilih Jenis Lisensi:</label>
                        <select id="licenseType">
                            <option value="">-- Pilih Lisensi --</option>
                            <optgroup label="Lisensi Permisif">
                                <option value="MIT">MIT License</option>
                                <option value="Apache-2.0">Apache License 2.0</option>
                                <option value="BSD-2-Clause">BSD 2-Clause License</option>
                                <option value="BSD-3-Clause">BSD 3-Clause License</option>
                                <option value="ISC">ISC License</option>
                                <option value="0BSD">BSD Zero-Clause</option>
                            </optgroup>
                            <optgroup label="Lisensi Copyleft">
                                <option value="GPL-2.0">GNU GPL v2.0</option>
                                <option value="GPL-3.0">GNU GPL v3.0</option>
                                <option value="LGPL-2.1">GNU LGPL v2.1</option>
                                <option value="LGPL-3.0">GNU LGPL v3.0</option>
                                <option value="AGPL-3.0">GNU AGPL v3.0</option>
                            </optgroup>
                            <optgroup label="Lisensi Creative Commons">
                                <option value="CC0-1.0">CC0 1.0 Universal (Public Domain)</option>
                                <option value="CC-BY-4.0">CC Attribution 4.0</option>
                                <option value="CC-BY-SA-4.0">CC Attribution-ShareAlike 4.0</option>
                            </optgroup>
                            <optgroup label="Lisensi Lainnya">
                                <option value="MPL-2.0">Mozilla Public License 2.0</option>
                                <option value="EPL-2.0">Eclipse Public License 2.0</option>
                                <option value="EUPL-1.1">European Union Public License 1.1</option>
                                <option value="OSL-3.0">Open Software License 3.0</option>
                                <option value="Unlicense">Unlicense</option>
                                <option value="WTFPL">WTFPL License</option>
                                <option value="Zlib">Zlib License</option>
                                <option value="PostgreSQL">PostgreSQL License</option>
                                <option value="OFL-1.1">SIL Open Font License 1.1</option>
                                <option value="NCSA">NCSA License</option>
                            </optgroup>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="year">Tahun Copyright:</label>
                        <input type="number" id="year" placeholder="2026">
                    </div>

                    <div class="form-group">
                        <label for="projectUrl">URL Project/Website:</label>
                        <input type="url" id="projectUrl" placeholder="https://example.com">
                    </div>

                    <div class="form-group">
                        <label for="description">Deskripsi Project:</label>
                        <textarea id="description" placeholder="Jelaskan tentang project Anda..."></textarea>
                    </div>

                    <button class="btn btn-primary" onclick="generateLicense()">🔨 Generate Lisensi</button>
                </div>

                <!-- Preview Result -->
                <div class="result-section" id="resultSection" style="display:none;">
                    <h3>📄 Hasil Generate Lisensi</h3>
                    <div class="license-preview" id="licensePreview"></div>
                    <button class="btn btn-secondary" onclick="downloadLicense()">⬇️ Download License File</button>
                    <button class="btn btn-secondary" onclick="copyToClipboard()">📋 Copy to Clipboard</button>
                </div>
            </section>

            <!-- TAB 2: DMCA Protection -->
            <section id="dmca" class="tab-content">
                <div class="dmca-section">
                    <h2>🛡️ DMCA Protection Badge</h2>
                    <p>Lindungi konten Anda dengan DMCA badge resmi. Badge ini akan ditampilkan di website Anda untuk menunjukkan perlindungan hak cipta.</p>
                    
                    <div class="form-group">
                        <label for="dmcaEmail">Email untuk Registrasi DMCA:</label>
                        <input type="email" id="dmcaEmail" placeholder="email@example.com">
                    </div>

                    <div class="form-group">
                        <label for="websiteUrl">URL Website yang Dilindungi:</label>
                        <input type="url" id="websiteUrl" placeholder="https://example.com">
                    </div>

                    <button class="btn btn-primary" onclick="generateDMCACode()">Generate DMCA Code</button>

                    <div class="dmca-result" id="dmcaResult" style="display:none;">
                        <h3>📌 DMCA Badge Code</h3>
                        <p>Salin code di bawah dan paste ke website Anda (di footer atau halaman penting):</p>
                        <textarea id="dmcaCode" readonly></textarea>
                        <button class="btn btn-secondary" onclick="copyDMCACode()">📋 Copy DMCA Code</button>
                        
                        <h3>Preview Badge:</h3>
                        <div class="dmca-badge-preview" id="dmcaBadgePreview"></div>
                    </div>

                    <div class="info-box">
                        <h4>ℹ️ Informasi DMCA</h4>
                        <ul>
                            <li>DMCA (Digital Millennium Copyright Act) melindungi konten digital Anda</li>
                            <li>Badge menunjukkan status perlindungan kepada pengunjung</li>
                            <li>Daftar di <a href="https://www.dmca.com" target="_blank">DMCA.com</a> untuk perlindungan penuh</li>
                            <li>Lapor pelanggaran copyright ke DMCA untuk takedown otomatis</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- TAB 3: Copyright Certificate -->
            <section id="certificate" class="tab-content">
                <div class="certificate-section">
                    <h2>📜 Sertifikat Copyright Digital</h2>
                    
                    <div class="form-group">
                        <label for="certProjectName">Nama Project:</label>
                        <input type="text" id="certProjectName" placeholder="Nama project Anda">
                    </div>

                    <div class="form-group">
                        <label for="certOwner">Pemilik Copyright:</label>
                        <input type="text" id="certOwner" placeholder="Nama Anda">
                    </div>

                    <div class="form-group">
                        <label for="certType">Tipe Karya:</label>
                        <select id="certType">
                            <option value="">-- Pilih Tipe --</option>
                            <option value="software">Perangkat Lunak</option>
                            <option value="website">Website</option>
                            <option value="content">Konten Digital</option>
                            <option value="creative">Karya Kreatif</option>
                            <option value="other">Lainnya</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="certDate">Tanggal Publikasi:</label>
                        <input type="date" id="certDate">
                    </div>

                    <button class="btn btn-primary" onclick="generateCertificate()">Generate Sertifikat</button>

                    <div class="cert-result" id="certResult" style="display:none;">
                        <div class="certificate-preview" id="certificatePreview"></div>
                        <button class="btn btn-secondary" onclick="downloadCertificate()">⬇️ Download Sertifikat (PNG)</button>
                    </div>
                </div>
            </section>

            <!-- TAB 4: Documentation -->
            <section id="docs" class="tab-content">
                <div class="docs-section">
                    <h2>📚 Dokumentasi & Panduan</h2>
                    
                    <div class="doc-card">
                        <h3>Jenis-Jenis Lisensi</h3>
                        <table class="license-table">
                            <thead>
                                <tr>
                                    <th>Kategori</th>
                                    <th>Lisensi</th>
                                    <th>Keterangan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="6"><strong>Permisif</strong></td>
                                    <td>MIT</td>
                                    <td>Paling fleksibel, bisa digunakan komersial</td>
                                </tr>
                                <tr>
                                    <td>Apache 2.0</td>
                                    <td>Seperti MIT tapi dengan explicit patent grant</td>
                                </tr>
                                <tr>
                                    <td>BSD</td>
                                    <td>Varian dari lisensi permisif</td>
                                </tr>
                                <tr>
                                    <td>ISC</td>
                                    <td>Sangat sederhana dan permisif</td>
                                </tr>
                                <tr>
                                    <td>CC0</td>
                                    <td>Melepaskan ke public domain</td>
                                </tr>
                                <tr>
                                    <td>Unlicense</td>
                                    <td>Tidak ada lisensi, public domain</td>
                                </tr>
                                <tr>
                                    <td rowspan="5"><strong>Copyleft</strong></td>
                                    <td>GPL 2.0/3.0</td>
                                    <td>Wajib share source code jika dimodifikasi</td>
                                </tr>
                                <tr>
                                    <td>LGPL</td>
                                    <td>Lebih fleksibel dari GPL</td>
                                </tr>
                                <tr>
                                    <td>AGPL</td>
                                    <td>GPL tapi mencakup layanan network</td>
                                </tr>
                                <tr>
                                    <td>MPL 2.0</td>
                                    <td>Copyleft file-by-file</td>
                                </tr>
                                <tr>
                                    <td>EPL 2.0</td>
                                    <td>Lisensi untuk project Eclipse</td>
                                </tr>
                                <tr>
                                    <td rowspan="3"><strong>Creative Commons</strong></td>
                                    <td>CC-BY</td>
                                    <td>Pakai tapi harus attribusi</td>
                                </tr>
                                <tr>
                                    <td>CC-BY-SA</td>
                                    <td>Harus attribusi dan share alike</td>
                                </tr>
                                <tr>
                                    <td>CC0</td>
                                    <td>Dedikasi ke public domain</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-card">
                        <h3>Cara Menggunakan Tool Ini</h3>
                        <ol>
                            <li><strong>Tab Generator Lisensi:</strong> Pilih lisensi yang sesuai dengan kebutuhan project Anda</li>
                            <li><strong>Tab DMCA Protection:</strong> Daftarkan website Anda untuk perlindungan DMCA</li>
                            <li><strong>Tab Sertifikat:</strong> Generate sertifikat copyright digital</li>
                            <li><strong>Download:</strong> Simpan semua file dan badge untuk digunakan di project Anda</li>
                        </ol>
                    </div>

                    <div class="doc-card">
                        <h3>Perlindungan Internasional</h3>
                        <p>Tool ini mendukung perlindungan copyright secara internasional melalui:</p>
                        <ul>
                            <li>✅ Lisensi yang diakui oleh <a href="https://opensource.org/" target="_blank">Open Source Initiative</a></li>
                            <li>✅ Lisensi Creative Commons yang berlaku global</li>
                            <li>✅ DMCA Protection untuk konten digital</li>
                            <li>✅ Sertifikat digital yang dapat diverifikasi</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <p>&copy; 2026 License & Copyright Protection Tool | <a href="#dmca">Report DMCA</a></p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>
