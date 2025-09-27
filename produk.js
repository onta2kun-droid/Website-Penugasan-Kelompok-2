// produk nya cikkk
const produkData = [
  {
    nama: "Makanan",
    deskripsi: "whiskas adult wet cat food pouch - 80 gram (14 pack)",
    harga: 94442,
    gambar: "assets/produk1.jpeg"
  },
  {
    nama: "Aksesoris",
    deskripsi: "cat travel backpack astronot",
    harga: 98408,
    gambar: "assets/produk2.jpeg"
  },
  {
    nama: "Kebutuhan Lain",
    deskripsi: "12 liter eong sand-pasir kucing gumpal wangi sudah diolah",
    harga: 19900,
    gambar: "assets/produk3.jpeg"
  }
];

//angka dll
function formatRupiah(angka) {
  return angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

//ambil container produk
const produkList = document.getElementById("produk-list");

//box produk
produkData.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("produk-card");
  card.setAttribute("data-harga", item.harga);

  card.innerHTML = `
    <img src="${item.gambar}" alt="${item.nama}" class="produk-img">
    <h3 class="produk-nama">${item.nama}</h3>
    <p class="produk-desc">${item.deskripsi}</p>
    <p class="harga">Harga: <span class="harga-satuan">${formatRupiah(item.harga)}</span></p>

    <div class="quantity-control">
      <button class="btn minus">-</button>
      <input type="text" class="qty" value="1" readonly>
      <button class="btn plus">+</button>
    </div>

    <p class="total">Total: <span class="harga-total">${formatRupiah(item.harga)}</span></p>
  `;

  produkList.appendChild(card);
});

//fitur tambah/kurang jumlah
const produkCards = document.querySelectorAll(".produk-card");

produkCards.forEach(card => {
  const minusBtn = card.querySelector(".minus");
  const plusBtn = card.querySelector(".plus");
  const qtyInput = card.querySelector(".qty");
  const hargaSatuan = parseInt(card.dataset.harga);
  const hargaTotal = card.querySelector(".harga-total");

  let qty = 1;

  function updateTotal() {
    hargaTotal.textContent = formatRupiah(qty * hargaSatuan);
    qtyInput.value = qty;
  }

  plusBtn.addEventListener("click", () => {
    qty++;
    updateTotal();
  });

  minusBtn.addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      updateTotal();
    }
  });

  updateTotal();
});
