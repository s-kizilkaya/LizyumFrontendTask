// SeninİcinData dizisi: Her bir kart için ikon ve başlık bilgilerini içeren veri kümesidir
const SeninIcinData = [
  { id: 1, icon: "fa-hammer", title: "Lorem Ipsum" },
  { id: 2, icon: "fa-cogs", title: "Lorem Ipsum" },
  { id: 3, icon: "fa-broom", title: "Lorem Ipsum" },
  { id: 4, icon: "fa-sun", title: "Lorem Ipsum Dolar" },
  { id: 5, icon: "fa-paint-brush", title: "Lorem Ipsum Dolar" },
  { id: 6, icon: "fa-plug", title: "Lorem" },
  { id: 7, icon: "fa-wrench", title: "Lorem " },
  { id: 8, icon: "fa-laptop", title: "Lorem Ipsum" },
  { id: 9, icon: "fa-shower", title: "Lorem Ipsum Dolar" },
];

// renderSeninIcin fonksiyonu: Kart bileşenlerini oluşturur ve 3 farklı satıra dağıtarak DOM’a ekler
function renderSeninIcin() {
  // 3 farklı satırın DOM referanslarını alır
  const container1 = document.getElementById("senin-icin-container1");
  const container2 = document.getElementById("senin-icin-container2");
  const container3 = document.getElementById("senin-icin-container3");

  // Her bir veri öğesi için bir kart oluşturur
  SeninIcinData.forEach((item, index) => {
    const card = document.createElement("div");
    card.className =
      "flex-shrink-0 border rounded-lg flex items-center p-2 bg-gray-50";

    // Kartın içeriği HTML olarak tanımlanır
    card.innerHTML = `
<div
  style="box-shadow: inset 0px 0px 2.5px 0.25px rgba(0, 0, 0, 0.2)"
  class="bg-blue-100 rounded-lg p-2 flex items-center justify-center"
>
  <i class="fas ${item.icon} text-gray-800"></i>
</div>
<p class="text-xs ml-2 whitespace-nowrap">${item.title}</p>
    `;

    // Kartları sırayla 3 farklı satıra eşit sayıda olacak şekilde dağıtır
    if (index < 3) {
      container1.appendChild(card);
    } else if (index < 6) {
      container2.appendChild(card);
    } else {
      container3.appendChild(card);
    }
  });
}

// OneCikanlarData dizisi: Öne çıkan hizmetlerin başlık, açıklama ve görsel bilgilerini içerir
const OneCikanlarData = [
  {
    id: 1,
    title: "Tamirat Servisi",
    description: "200 TL'den başlayan fiyatlar...",
    image: "assets/card1.jpg",
  },
  {
    id: 2,
    title: "Mutfak Servisi",
    description: "200 TL'den başlayan fiyatlar...",
    image: "assets/card2.jpg",
  },
  {
    id: 3,
    title: "Temizlik Servisi",
    description: "500 TL'den başlayan fiyatlar...",
    image: "assets/card3.jpg",
  },
];

// renderOneCikanlar fonksiyonu: Öne çıkan kartları HTML olarak oluşturur ve sayfaya ekler
function renderOneCikanlar() {
  // Kartların ekleneceği ana container alır
  const container = document.getElementById("one-cikanlar-container");

  // Veriler üzerinde dönülerek her biri için kart HTML’i oluşturur
  OneCikanlarData.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "relative w-50 h-36 sm:w-48 sm:h-44 md:w-56 md:h-48 flex-shrink-0 rounded-xl overflow-hidden";

    card.innerHTML = `
<!-- Kartın arka plan görseli -->
<img
  src="${item.image}"
  alt="${item.title}"
  class="w-full h-full object-cover"
/>

<!-- Kart metin alanı -->
<div
  style="background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(3px)"
  class="card-text absolute rounded-xl bottom-1 left-1 right-1 text-white p-3"
>
  <!-- Sağ üstte bulunan ok butonu -->
  <button
    class="absolute rounded-full bg-white top-1 right-1 w-6 h-6 flex items-center justify-center"
  >
    <i
      style="rotate: -45deg"
      class="fas fa-arrow-right text-blue-500 text-xs"
    ></i>
  </button>

  <!-- Açıklama metni -->
  <p class="text-xs mt-1">${item.description}</p>

  <!-- Başlık metni -->
  <h3 class="text-sm font-semibold">${item.title}</h3>
</div>
    `;

    // Oluşturulan kartlar container’a ekler
    container.appendChild(card);
  });
}

// AramaData dizisi: Arama sonuçlarında gösterilecek örnek hizmet verilerini içerir
const AramaData = [
  {
    id: 1,
    title: "Temizlik",
    image: "assets/card3.jpg",
    price: 500,
  },
  {
    id: 2,
    title: "Elektrik Tesisatı",
    image: "assets/card1.jpg",
    price: 300,
  },
];

// handleSearch fonksiyonu: Arama kutusuna girilen metne göre sonuçları filtreler ve görünümü günceller
function handleSearch(event) {
  // Kullanıcının girdiği arama ifadesi küçük harfe dönüştürür
  const searchValue = event.target.value.toLowerCase();

  // Arama ifadesini içeren veriler filtreler
  const filteredData = [...AramaData].filter((item) =>
    item.title.toLowerCase().includes(searchValue)
  );

  // Arama kutusu boşsa, önceki bölümler görünür, arama sonuçlarını gizler
  if (searchValue.trim() === "") {
    document.getElementById("senin-icin-section").classList.remove("hidden");
    document.getElementById("one-cikanlar-section").classList.remove("hidden");
    document.getElementById("yakindakiler-section").classList.remove("hidden");
    document.getElementById("arama-sonuclari-section").classList.add("hidden");
    document.getElementById("mesajlar-section").classList.add("hidden");

    // Anasayfa butonu aktif olarak vurgular
    highlightButton(anasayfaBtn);
  } else {
    // Arama yapılmışsa, sadece sonuçları gösterir
    document.getElementById("senin-icin-section").classList.add("hidden");
    document.getElementById("one-cikanlar-section").classList.add("hidden");
    document.getElementById("yakindakiler-section").classList.add("hidden");
    document.getElementById("mesajlar-section").classList.add("hidden");
    document
      .getElementById("arama-sonuclari-section")
      .classList.remove("hidden");

    // Anasayfa butonu aktif olarak vurgular
    highlightButton(anasayfaBtn);

    // Filtrelenen veriler sonuç alanına render eder
    renderAramaSonuclari(filteredData);
  }
}

// renderAramaSonuclari fonksiyonu: Arama sonuçlarını "arama-sonuclari-container" ID’li öğeye render eder
function renderAramaSonuclari(data) {
  // Sonuçların ekleneceği container öğesini seçer
  const container = document.getElementById("arama-sonuclari-container");

  // Önceki içerikleri temizler
  container.innerHTML = "";

  // Veri boşsa kullanıcıya sonuç bulunamadığını belirten mesajı gösterir
  if (data.length === 0) {
    container.innerHTML = `<p class="text-sm text-gray-500">Sonuç bulunamadı.</p>`;
    return;
  }

  // Gelen her bir veri için bir kart oluşturur
  data.forEach((item) => {
    // Kart elemanını oluşturur ve gerekli stilleri tanımlar
    const card = document.createElement("div");
    card.className =
      "relative bg-white h-full p-3 rounded-lg shadow flex flex-col gap-2";

    // Kartın HTML içeriğini oluşturur
    card.innerHTML = `
<!-- Üst bölüm: Görsel, başlık ve değerlendirme -->
<div class="flex gap-3">
  <img
    src="${item.image}"
    alt="${item.title}"
    class="w-12 h-12 rounded-full object-cover"
  />
  <div class="flex-1">
    <h3 class="text-lg font-semibold">${item.title}</h3>
    <div class="flex items-center text-sm mt-1">
      <span style="font-size: 12px" class="text-gray-600 text-xs">4.0</span>
      <span class="text-yellow-400 mx-1"> ★★★★☆ </span>
      <span style="font-size: 12px" class="text-blue-500 text-xs"
        >(200 değerlendirme)</span
      >
    </div>
  </div>
  <i class="fas fa-ellipsis-v text-blue-500"></i>
</div>

<!-- Alt bölüm: Mesaj butonu ve fiyat bilgisi -->
<div class="flex justify-between items-center mt-2">
  <button
    class="px-3 py-1 text-xs text-blue-500 font-medium border border-blue-500 bg-blue-50 rounded-lg flex items-center gap-1 h-full"
  >
    <i class="fas fa-comment"></i>
    Mesaj At
  </button>
  <div class="text-right">
    <p class="text-sm font-semibold text-gray-800">₺ ${item.price}'den</p>
    <p class="text-xs text-gray-500">başlayan fiyatlarla</p>
  </div>
</div>
    `;

    // Kart tıklandığında modal'ı gösterir ve içeriğini dinamik olarak oluşturur
    card.addEventListener("click", () => {
      modal.classList.remove("hidden");
      document.getElementById("footer").classList.add("hidden");

      // İlk modal içeriğini günceller
      modalContent.innerHTML = `
<div class="relative bg-blue-50 m-4 mb-0 p-3 rounded-lg shadow flex flex-col">
  <div class="flex gap-3">
    <img
      src="${item.image}"
      alt="${item.title}"
      class="w-12 h-12 rounded-full object-cover"
    />
    <div class="flex-1">
      <h3 class="text-lg font-semibold">${item.title}</h3>
      <div class="flex items-center text-sm mt-1">
        <span style="font-size: 12px" class="text-gray-600 text-xs">4.0</span>
        <span class="text-yellow-400 mx-1"> ★★★★☆ </span>
        <span style="font-size: 12px" class="text-blue-500 text-xs"
          >(200 değerlendirme)</span
        >
      </div>
    </div>
  </div>

  <div class="mt-1 flex items-center">
    <img
      src="assets/award.png"
      alt="Tebrikler İkonu"
      class="h-8 w-8 mr-2 object-contain"
    />
    <p class="text-sm text-gray-800">Mahallenin Muhtarı</p>
  </div>
</div>      
      `;

      // İkinci modal içeriğini günceller
      modalContent2.innerHTML = `
<div class="bg-gray-60 p-4">
  <!-- Üst kısım: 3 Başlık -->
  <div class="flex align-center justify-between mb-4">
    <div class="bg-white border rounded-lg p-1">
      <p class="text-xs text-gray-600">Şirket Bilgileri</p>
    </div>
    <div class="bg-gray-60 border rounded-lg p-1">
      <p class="text-xs text-gray-600">Yorumlar</p>
    </div>
    <div class="bg-gray-60 border rounded-lg p-1">
      <p class="text-xs text-gray-600">Rozet Kataloğu</p>
    </div>
  </div>

  <!-- Alt kısım: 3 bilgi kartı (alt alta) -->
  <div class="flex flex-col gap-4">
    <!-- Kart 1: İletişim ve adres bilgileri -->
    <div class="bg-white rounded-lg shadow p-3">
      <div class="py-1 text-sm text-gray-600 flex items-center gap-1 h-full">
        <i class="fas fa-location-dot"></i>
        123 Main St, Apt 4B Lorem Ipsum
      </div>
      <div class="py-1 text-xs text-blue-500 flex items-center gap-1 h-full">
        <i class="fas fa-circle-question text-gray-600"></i>
        loremipsum@gmail.com
      </div>
      <div class="flex items-center gap-3 pt-3">
        <button
          class="px-3 py-2 text-xs text-blue-500 font-medium border border-blue-500 bg-blue-50 rounded-lg flex items-center gap-1 h-full"
        >
          <i class="fas fa-comment"></i>
          Mesaj At
        </button>
        <button
          class="randevu-btn px-3 py-2 text-xs text-blue-500 font-medium border border-blue-500 bg-blue-50 rounded-lg flex items-center gap-1 h-full"
        >
          <i class="fas fa-plus"></i>
          Randevu al
        </button>
      </div>
    </div>

    <!-- Kart 2: Hizmet listesi -->
    <div class="bg-white rounded-lg shadow p-3">
      <p class="text-sm text-gray-600 font-medium mb-2">Hizmetler</p>
      <p class="text-xs text-gray-600 mb-1">Lorem ipsum dolor</p>
      <p class="text-xs text-gray-600 mb-1">Lorem ipsum dolor</p>
      <p class="text-xs text-gray-600 mb-2">Lorem ipsum dolor</p>
      <p style="font-size: 13px" class="text-blue-500">Tüm hizmetleri gör ></p>
    </div>

    <!-- Kart 3: Hakkında açıklaması -->
    <div class="bg-white rounded-lg shadow p-3">
      <p class="text-sm text-gray-600 font-medium mb-2">Hakkında</p>
      <p class="text-xs text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
</div>

<!-- Randevu modalı -->
<div
  id="randevu"
  class="hidden fixed inset-0 bg-gray-500 bg-opacity-50 flex items-end justify-center z-50 "
>
  <div class="absolute bg-white w-full sm:max-w-sm md:max-w-sm p-2 overflow-auto bg-gray-100">
    <!-- Kapanış Butonu -->
    <button
      id="randevu-close-btn"
      class="absolute top-2 right-2 rounded-full bg-blue-500 w-4 h-4 flex items-center justify-center"
    >
      <i class="fas fa-times text-white text-xs"></i>
    </button>

    <!-- Tebrik mesajı -->
    <div class="flex flex-col items-center justify-center mb-3">
      <div class="text-blue-500 flex items-center justify-center h-20 w-20">
        <img
          src="assets/congrats.png"
          alt="Tebrikler İkonu"
          class="h-full w-full object-contain"
        />
      </div>
      <p class="text-center text-xl font-semibold text-gray-800">Tebrikler!</p>
    </div>

    <div class="relative bg-white rounded-lg shadow flex flex-col">
      <div class="p-2">
        <p class="text-md text-gray-600 font-medium">
          Rezervasyonun Oluşturuldu
        </p>

        <div class="mt-1 flex items-center gap-2">
          <i class="fas fa-clock"></i>
          <p class="text-gray-600 text-sm">15 Mart tarihinde onaylandı</p>
        </div>
      </div>

      <!-- Adım Göstergesi -->
      <div class="flex items-center justify-between my-2 px-8">
        <!-- Onaylandı -->
        <div class="flex flex-col items-center relative flex-1">
          <div
            class="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center z-10"
          >
            <svg
              class="w-3 h-3"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span style="font-size: 13px" class="text-gray-600 mt-1"
            >Onaylandı</span
          >

          <!-- Çizgi -->
          <div
            style="transform: translate(0px, -15px)"
            class="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-300 -z-0 translate-x-1/2 -translate-y-1/2"
          ></div>
        </div>

        <!-- Yolda -->
        <div class="flex flex-col items-center relative flex-1">
          <div
            class="w-5 h-5 border-2 border-gray-300 rounded-full bg-white text-white flex items-center justify-center z-10"
          >
            <div
              class="w-3 h-3 rounded-full bg-gray-300 text-white flex items-center justify-center z-10"
            ></div>
          </div>
          <span style="font-size: 13px" class="text-gray-600 mt-1">Yolda</span>

          <!-- Çizgi -->
          <div
            style="transform: translate(0px, -15px)"
            class="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-300 -z-0 translate-x-1/2 -translate-y-[15px]"
          ></div>
        </div>

        <!-- Başladı -->
        <div class="flex flex-col items-center relative flex-1">
          <div
            class="w-5 h-5 border-2 border-gray-300 rounded-full bg-white text-white flex items-center justify-center z-10"
          >
            <div
              class="w-3 h-3 rounded-full bg-gray-300 text-white flex items-center justify-center z-10"
            ></div>
          </div>
          <span style="font-size: 13px" class="text-gray-600 mt-1"
            >Başladı</span
          >

          <!-- Çizgi -->
          <div
            style="transform: translate(0px, -15px)"
            class="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-300 -z-0 translate-x-1/2 -translate-y-1/2"
          ></div>
        </div>

        <!-- Bitti -->
        <div class="flex flex-col items-center relative flex-1">
          <div
            class="w-5 h-5 border-2 border-gray-300 rounded-full bg-white text-white flex items-center justify-center z-10"
          >
            <div
              class="w-3 h-3 rounded-full bg-gray-300 text-white flex items-center justify-center z-10"
            ></div>
          </div>
          <span style="font-size: 13px" class="text-gray-600 mt-1">Bitti</span>
        </div>
      </div>
    </div>
    <!-- Eylem Butonları -->
    <div class="mt-3 flex flex-wrap">
      <button
        style="border-color: rgb(217, 217, 217, 0.47); border-top-width: 3px"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg w-full text-sm"
      >
        Rezervasyon Detaylarına Git
      </button>
      <button
        id="anasayfayaDon-btn"
        class="bg-gray-100 text-blue-500 px-4 text-xs pt-2 w-full"
      >
        Anasayfaya Dön
      </button>
    </div>
  </div>
</div>      
      `;

      const randevuButton = document.querySelector(".randevu-btn");
      const randevuPopup = document.getElementById("randevu");
      const popupKapatButton = document.getElementById("randevu-close-btn");

      // Randevu butonuna tıklanıldığında popup'ı açar
      if (randevuButton) {
        randevuButton.addEventListener("click", () => {
          randevuPopup.classList.remove("hidden");
        });
      }

      // "Anasayfaya Dön" butonuna tıklanıldığında anasayfaya yönlendirir
      const anasayfayaDonButton = document.querySelector("#anasayfayaDon-btn");

      if (anasayfayaDonButton) {
        anasayfayaDonButton.addEventListener("click", () => {
          document.getElementById("modal").classList.add("hidden");
          document.getElementById("randevu").classList.add("hidden");
          document
            .getElementById("senin-icin-section")
            .classList.remove("hidden");
          document
            .getElementById("one-cikanlar-section")
            .classList.remove("hidden");
          document
            .getElementById("yakindakiler-section")
            .classList.remove("hidden");
          document
            .getElementById("arama-sonuclari-section")
            .classList.add("hidden");
          document.getElementById("mesajlar-section").classList.add("hidden");
          document.getElementById("section").classList.remove("hidden");
          document.getElementById("footer-section").classList.remove("hidden");
          document.getElementById("footer").classList.remove("hidden");
        });

        document.getElementById("search-input").value = "";
      }

      if (popupKapatButton) {
        // Popup'ı kapatır
        popupKapatButton.addEventListener("click", () => {
          randevuPopup.classList.add("hidden");
        });
      }
    });

    // Kartı container’a ekler
    container.appendChild(card);
  });
}

// Modal öğeleri tanımlanır
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalContent2 = document.getElementById("modal-content2");
const modalCloseBtn = document.getElementById("modal-close-btn");

// Modal kapatma butonuna tıklanıldığında modal'ı gizler
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.getElementById("footer").classList.remove("hidden");
});

// MesajlarData dizisi: Her bir mesaj için gerekli verilerin tutulduğu dizi
const MesajlarData = [
  {
    id: 1,
    name: "Lorem Ipsum",
    message: "Lorem Ipsum dolor sit a...",
    count: 0,
    image: "assets/profile2.jpg",
    time: "7:09",
    date: "Bugün",
    status: true,
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    message: "Lorem Ipsum dolor sit a...",
    count: 1,
    image: "assets/profile3.jpg",
    time: "15:35",
    date: "Bugün",
    status: false,
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    message: "Lorem Ipsum dolor sit a...",
    count: 8,
    image: "assets/profile4.jpg",
    time: "15:50",
    date: "Dün",
    status: false,
  },
  {
    id: 4,
    name: "Lorem Ipsum",
    message: "Lorem Ipsum dolor sit a...",
    count: 9,
    image: "assets/profile5.jpg",
    time: "15:35",
    date: "Dün",
    status: false,
  },
  {
    id: 4,
    name: "Lorem Ipsum",
    message: "Lorem Ipsum dolor sit a...",
    count: 9,
    image: "assets/profile5.jpg",
    time: "15:35",
    date: "Dün",
    status: false,
  },
];

// renderMesajlar fonksiyonu: Mesajları ilgili bölüme ekler
function renderMesajlar() {
  const container = document.getElementById("mesajlar-container");
  const container2 = document.getElementById("mesajlar-container2");
  const section = document.getElementById("mesajlar-section");

  // "Bugün" ve "Dün" başlıklarını sadece bir kez ekler
  const titleBugün = document.createElement("div");
  titleBugün.className = "font-semibold text-sm p-1 mb-2";
  titleBugün.innerHTML = "Bugün";

  const titleDün = document.createElement("div");
  titleDün.className = "font-semibold text-sm p-1 my-2";
  titleDün.innerHTML = "Dün";

  // Başlıkları ekler
  section.insertBefore(titleBugün, section.firstChild);
  let thirdChild = section.children[2];
  section.insertBefore(titleDün, thirdChild);

  // "Bugün" tarihli mesajları filtreler ve her birini kart olarak ekler
  MesajlarData.filter((item) => item.date == "Bugün").forEach((item) => {
    const card = createCard(item);
    container.appendChild(card);
  });

  // "Dün" tarihli mesajları filtreler ve her birini kart olarak ekler
  MesajlarData.filter((item) => item.date == "Dün").forEach((item) => {
    const card = createCard(item);
    container2.appendChild(card);
  });
}

// createCard fonksiyonu: Her bir mesajı temsil eden kartı oluşturur
function createCard(item) {
  const card = document.createElement("div");
  card.className = "relative rounded-lg flex-col my-1";

  // Mesaj stilini mesajın durumuna göre belirler
  const messageStyle = item.status
    ? " text-xs text-gray-400 font-semibold"
    : "text-xs text-gray-600 font-semibold";

  //Zaman stilini mesajın durumuna göre belirler
  const timeStyle = item.status
    ? "text-xs font-semibold text-gray-400"
    : " text-xs font-semibold text-gray-500";

  // Ok ikonunun stilini mesajın durumuna göre belirler
  const iconStyle = item.status
    ? "fas fa-arrow-right-from-bracket text-gray-400 text-xs mr-1"
    : "fas fa-arrow-right-to-bracket text-gray-600 text-xs mr-1";

  // Kartın içeriğini oluşturur
  card.innerHTML = `
<div class="flex gap-3 px-1">
  <img
    src="${item.image}"
    alt="${item.name}"
    class="w-12 h-12 rounded-full object-cover"
  />
  <!-- Profil resmi -->
  <div class="flex-1">
    <h3 class="text-sm font-semibold text-gray-800">${item.name}</h3>
    <!-- Gönderen adı -->
    <div class="flex items-center text-sm mt-1">
      <i ${
        !item.status ? `style="rotate:-225deg"` : `style="rotate:-45deg"`
      }  class="${iconStyle}"></i>
      <!-- Ok ikonu -->
      <span class="${messageStyle}">${item.message}</span>
      <!-- Mesaj metni -->
    </div>
  </div>
  <div class="text-right">
    <h3 style="font-size: 12px" class="${timeStyle}">${item.time}</h3>
    <!-- Mesaj zamanı -->
    <div
      style="${!item.status ? `font-size: 10px` : `font-size: 12px`}"
      class="inline-flex items-center justify-center ${
        !item.status ? `bg-blue-500 text-white` : `text-blue-500 bg-gray-50`
      } rounded-full w-3 h-3 mt-1"
    >
      ${item.status ? `<i class="fas fa-check-double"></i>` : `${item.count}`}
      <!-- Duruma göre ok ikonunun yanında gösterilecek bilgi -->
    </div>
  </div>
</div>  
  `;

  return card; // Kartı geri döndürür
}

// İlgili DOM öğelerini seçer
const anasayfaBtn = document.getElementById("anasayfa-btn"); // Anasayfa butonu
const mesajlarBtn = document.getElementById("mesajlar-btn"); // Mesajlar butonu
const footerBtns = document.querySelectorAll("footer button"); // Footer'daki tüm butonlar
const sections = document.querySelectorAll("section"); // Tüm section'lar

// Tüm section'ları gizleyen fonksiyon
function hideAllSections() {
  sections.forEach((section) => {
    section.classList.add("hidden"); // Her bir section'a "hidden" sınıfı ekler
  });
}

// Aktif butonu vurgulayan fonksiyon
function highlightButton(activeBtn) {
  footerBtns.forEach((btn) => {
    btn.classList.remove("text-blue-500", "font-semibold"); // Tüm butonlardan aktif stilleri kaldırır
  });
  activeBtn.classList.add("text-blue-500", "font-semibold"); // Tıklanan butona aktif stiller ekler
}

// "Mesajlar" bölümünü gösteren ve diğerlerini gizleyen fonksiyon
function showMesajlarSection() {
  hideAllSections(); // Öncelikle tüm bölümleri gizler
  document.getElementById("mesajlar-section").classList.remove("hidden"); // "Mesajlar" bölümünü gösterir
  document.getElementById("footer-section").classList.remove("hidden"); // Footer'ı gösterir
  document.getElementById("section").classList.remove("hidden"); // Sayfa Sonu section'ı gösterir
}

// "Anasayfa" bölümünü gösteren ve diğerlerini gizleyen fonksiyon
function showAnasayfaSection() {
  hideAllSections(); // Öncelikle tüm bölümleri gizler
  document.getElementById("senin-icin-section").classList.remove("hidden"); // "Senin İçin" bölümünü gösterir
  document.getElementById("one-cikanlar-section").classList.remove("hidden"); // "Öne Çıkanlar" bölümünü gösterir
  document.getElementById("yakindakiler-section").classList.remove("hidden"); // "Yakın Dakikalar" bölümünü gösterir
  document.getElementById("footer-section").classList.remove("hidden"); // Footer'ı gösterir
  document.getElementById("section").classList.remove("hidden"); // Sayfa Sonu section'ı gösterir
}

// "Mesajlar" butonuna tıklanma olayını ekler
mesajlarBtn.addEventListener("click", () => {
  showMesajlarSection(); // Mesajlar bölümünü gösterir
  highlightButton(mesajlarBtn); // Aktif butonu vurgular
});

// "Anasayfa" butonuna tıklanma olayını ekler
anasayfaBtn.addEventListener("click", () => {
  showAnasayfaSection(); // Anasayfa bölümünü gösterir
  highlightButton(anasayfaBtn); // Aktif butonu vurgular
});

// DOMContentLoaded olayı: Sayfa yüklendiğinde çalışacak fonksiyonları tanımlar
document.addEventListener("DOMContentLoaded", () => {
  // renderSeninIcin fonksiyonunu çağırarak "Senin İçin" bölümünü render eder
  renderSeninIcin();

  // renderOneCikanlar fonksiyonunu çağırarak "Öne Çıkanlar" bölümünü render eder
  renderOneCikanlar();

  // renderMesajlar fonksiyonunu çağırarak "Mesajlar" bölümünü render eder
  renderMesajlar();

  // Arama kutusunu seçer ve input olayını dinler
  const searchInput = document.getElementById("search-input");

  // Arama kutusuna her yazıldığında handleSearch fonksiyonunu çağırır
  searchInput.addEventListener("input", handleSearch);
});
