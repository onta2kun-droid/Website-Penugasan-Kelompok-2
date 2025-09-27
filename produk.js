// ===== Class Produk =====
class Produk {
  constructor(nama, deskripsi, harga, gambar) {
    this.nama = nama;
    this.deskripsi = deskripsi;
    this.harga = harga;
    this.gambar = gambar;
    this.qty = 1; // default jumlah
  }

  tambah() {
    this.qty++;
  }

  kurang() {
    if (this.qty > 1) this.qty--;
  }

  get total() {
    return this.qty * this.harga;
  }

  formatRupiah(angka) {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR"
    });
  }

  render() {
    // Buat card produk
    const card = document.createElement("div");
    card.classList.add("produk-card");

    card.innerHTML = `
      <img src="${this.gambar}" alt="${this.nama}" class="produk-img">
      <h3 class="produk-nama">${this.nama}</h3>
      <p class="produk-desc">${this.deskripsi}</p>
      <p class="harga">Harga: <span class="harga-satuan">${this.formatRupiah(this.harga)}</span></p>

      <div class="quantity-control">
        <button class="btn minus">-</button>
        <input type="text" class="qty" value="${this.qty}" readonly>
        <button class="btn plus">+</button>
      </div>

      <p class="total">Total: <span class="harga-total">${this.formatRupiah(this.total)}</span></p>
    `;

    // Event listener tambah/kurang
    const minusBtn = card.querySelector(".minus");
    const plusBtn = card.querySelector(".plus");
    const qtyInput = card.querySelector(".qty");
    const hargaTotal = card.querySelector(".harga-total");

    const updateUI = () => {
      qtyInput.value = this.qty;
      hargaTotal.textContent = this.formatRupiah(this.total);
    };

    plusBtn.addEventListener("click", () => {
      this.tambah();
      updateUI();
    });

    minusBtn.addEventListener("click", () => {
      this.kurang();
      updateUI();
    });

    return card;
  }
}

// Produk Cik
const produkData = [
  new Produk("Makanan", "whiskas adult wet cat food pouch - 80 gram (14 pack)", 94442, "assets/produk1.jpeg"),
  new Produk("Aksesoris", "cat travel backpack astronot", 98408, "assets/produk2.jpeg"),
  new Produk("Kebutuhan Lain", "12 liter eong sand-pasir kucing gumpal wangi sudah diolah", 19900, "assets/produk3.jpeg")
];

// ===== Render ke Halaman =====
const produkList = document.getElementById("produk-list");
produkData.forEach(produk => {
  produkList.appendChild(produk.render());
});
