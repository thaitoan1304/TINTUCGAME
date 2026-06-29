const games = [
  {
    slug: "valorant",
    title: "Valorant",
    tag: "FPS / Esports",
    desc: "Một tựa game bắn súng chiến thuật với lối chơi nhanh, đầy kịch tính và cộng đồng esports cực lớn.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    views: "2.4M người xem",
    trend: "Tăng trưởng 18%",
    summary:
      "Valorant là một trò chơi bắn súng chiến thuật 5vs5 do Riot Games phát triển, nổi bật nhờ lối chơi nhanh, kỹ năng cao và hệ thống nhân vật có cá tính.",
    highlights: [
      "Cộng đồng esports cực lớn",
      "Được yêu thích ở nhiều khu vực",
      "Cập nhật nội dung thường xuyên",
    ],
    community: [
      "Cộng đồng người chơi đông đảo trên Twitch, YouTube và Discord.",
      "Các giải đấu lớn như VCT thu hút hàng triệu người theo dõi.",
      "Nhiều đội tuyển và streamer chuyên nghiệp hoạt động liên tục.",
    ],
    history: [
      "Ra mắt vào năm 2020 và nhanh chóng trở thành một trong những game FPS phổ biến nhất.",
      "Riot Games đã đầu tư mạnh vào esports và phát triển hệ thống giải đấu chuyên nghiệp.",
      "Từ đầu, game tập trung vào sự kết hợp giữa kỹ năng bắn súng và chiến thuật đội hình.",
    ],
  },
  {
    slug: "genshin-impact",
    title: "Genshin Impact",
    tag: "Open World",
    desc: "Thế giới mở đẹp mắt, câu chuyện phong phú và các sự kiện mới luôn khiến người chơi hào hứng trở lại.",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80",
    views: "1.8M người xem",
    trend: "Hot trong tuần",
    summary:
      "Genshin Impact là tựa game nhập vai thế giới mở với đồ họa đẹp, hệ thống nhân vật đa dạng và câu chuyện phong phú.",
    highlights: [
      "Thế giới mở rộng lớn",
      "Cộng đồng fan hâm mộ rất lớn",
      "Nội dung cập nhật liên tục",
    ],
    community: [
      "Cộng đồng fan rất tích cực trên Reddit, Discord và mạng xã hội.",
      "Nhiều người chơi tham gia các sự kiện và cộng tác tạo nội dung.",
      "Game luôn nhận được phản ứng tích cực từ người hâm mộ toàn cầu.",
    ],
    history: [
      "Phát hành năm 2020 bởi miHoYo và lập tức tạo ra cơn sốt lớn.",
      "Game được chú ý vì phong cách hình ảnh đẹp mắt và hệ thống nhân vật đa dạng.",
      "Sau nhiều bản cập nhật, Genshin Impact vẫn duy trì sức hút mạnh mẽ.",
    ],
  },
  {
    slug: "fortnite",
    title: "Fortnite",
    tag: "Battle Royale",
    desc: "Sự kiện thời trang, các mùa mới và gameplay sáng tạo giúp Fortnite luôn giữ vị trí hàng đầu.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    views: "3.1M người xem",
    trend: "Xu hướng mới",
    summary:
      "Fortnite là một trò chơi battle royale mang phong cách sáng tạo, sự kiện thường xuyên và cộng đồng người chơi cực kỳ lớn.",
    highlights: [
      "Sự kiện đổi mới liên tục",
      "Đa dạng chế độ chơi",
      "Cộng đồng toàn cầu",
    ],
    community: [
      "Fortnite có một trong những cộng đồng game lớn nhất thế giới.",
      "Nhiều streamer và YouTuber thường xuyên phát sóng và tạo nội dung.",
      "Người chơi thường xuyên tham gia sự kiện mùa và thử thách mới.",
    ],
    history: [
      "Ra mắt từ năm 2017 và nhanh chóng trở thành một hiện tượng game.",
      "Epic Games đã liên tục cập nhật chế độ, bản đồ và sự kiện mới.",
      "Fortnite vẫn giữ vị trí nổi bật nhờ lối chơi linh hoạt và đổi mới.",
    ],
  },
  {
    slug: "ea-sports-fc-25",
    title: "EA Sports FC 25",
    tag: "Sports",
    desc: "Bóng đá điện tử với đồ họa đẹp, gameplay mượt và sự kiện bóng đá hấp dẫn mỗi mùa.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
    views: "1.2M người xem",
    trend: "Đang lên",
    summary:
      "EA Sports FC 25 là dòng game bóng đá điện tử nổi bật với đồ họa cải tiến và các chế độ chơi đa dạng.",
    highlights: [
      "Bóng đá điện tử hiện đại",
      "Được yêu thích bởi fan bóng đá",
      "Cộng đồng thi đấu sôi động",
    ],
    community: [
      "Cộng đồng người hâm mộ rất lớn ở nhiều quốc gia.",
      "Nhiều người chơi tham gia các chế độ online và giải đấu cộng đồng.",
      "Game có nhiều sự kiện và cập nhật theo mùa bóng.",
    ],
    history: [
      "Tiếp nối dòng game FIFA với tên mới từ EA Sports.",
      "Được phát triển với mục tiêu cải thiện trải nghiệm bóng đá điện tử.",
      "Game liên tục cập nhật đội hình, mùa giải và tính năng mới.",
    ],
  },
  {
    slug: "minecraft",
    title: "Minecraft",
    tag: "Sandbox",
    desc: "Game sáng tạo không bao giờ hết hot, đặc biệt với cộng đồng xây dựng và mod cực kỳ phong phú.",
    image: "https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?auto=format&fit=crop&w=900&q=80",
    views: "4.0M người xem",
    trend: "Vĩnh cửu",
    summary:
      "Minecraft là tựa game sáng tạo nổi tiếng với hệ sinh thái mod phong phú và cộng đồng xây dựng cực kỳ lớn.",
    highlights: [
      "Sáng tạo không giới hạn",
      "Cộng đồng modding mạnh",
      "Tồn tại lâu dài và vẫn hot",
    ],
    community: [
      "Một trong những cộng đồng game lớn và bền vững nhất.",
      "Nhiều người chơi xây dựng thế giới, server và mod riêng.",
      "Game tiếp tục nhận nội dung mới từ cộng đồng và cập nhật chính thức.",
    ],
    history: [
      "Ra mắt năm 2011 và trở thành hiện tượng toàn cầu.",
      "Game đã phát triển với bản cập nhật mới và nội dung sáng tạo liên tục.",
      "Minecraft giữ được sức hút nhờ trải nghiệm mở và tự do khám phá.",
    ],
  },
  {
    slug: "honkai-star-rail",
    title: "Honkai: Star Rail",
    tag: "RPG / Story",
    desc: "Câu chuyện lôi cuốn, nhân vật ấn tượng và hệ thống chiến đấu đa dạng khiến game luôn được chú ý.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    views: "1.6M người xem",
    trend: "Phổ biến",
    summary:
      "Honkai: Star Rail là một RPG khoa học viễn tưởng với cốt truyện sâu sắc và trải nghiệm chiến đấu hấp dẫn.",
    highlights: [
      "Cốt truyện hấp dẫn",
      "Nhân vật đa dạng",
      "Cập nhật season mới liên tục",
    ],
    community: [
      "Cộng đồng RPG trên Discord và mạng xã hội rất sôi nổi.",
      "Người chơi thảo luận chiến thuật và cách xây dựng đội hình.",
      "Game nhận được nhiều phản hồi tích cực từ fan anime và RPG.",
    ],
    history: [
      "Được phát hành với đồ họa hiện đại và lối chơi turn-based.",
      "Bản cập nhật mới thường xuyên mang tới nhân vật và nội dung mới.",
      "Game giữ được vị trí ưa thích nhờ lối chơi cân bằng và thiết kế nhân vật đẹp.",
    ],
  },
];

const viewLabelOptions = [
  "1.1M người xem",
  "1.4M người xem",
  "1.8M người xem",
  "2.4M người xem",
  "2.9M người xem",
  "3.3M người xem",
  "4.0M người xem",
];

const trendLabelOptions = [
  "Tăng trưởng 18%",
  "Hot trong tuần",
  "Xu hướng mới",
  "Đang lên",
  "Vĩnh cửu",
  "Phổ biến",
  "Cập nhật liên tục",
];

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function renderGameCards() {
  const grid = document.getElementById("gamesGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = games
    .map(
      (game) => `
        <article class="card">
          <a class="card-link" href="game-detail.html?game=${game.slug}">
            <img src="${game.image}" alt="${game.title}" loading="lazy" />
            <div class="card-body">
              <span class="tag">${game.tag}</span>
              <h3>${game.title}</h3>
              <p>${game.desc}</p>
              <div class="meta">
                <span>${game.views}</span>
                <span>${game.trend}</span>
              </div>
              <div class="stats">
                <span>🎯 Trending</span>
                <span>🕹️ Update mới</span>
              </div>
            </div>
          </a>
        </article>
      `,
    )
    .join("");
}

function renderDetailPage() {
  const detailHero = document.getElementById("detailHero");
  const communityPanel = document.getElementById("communityPanel");
  const historyPanel = document.getElementById("historyPanel");

  if (!detailHero || !communityPanel || !historyPanel) {
    return;
  }

  const gameSlug = getQueryParam("game");
  const game = games.find((item) => item.slug === gameSlug);

  if (!game) {
    detailHero.innerHTML = `
      <div class="hero-content">
        <h1>Không tìm thấy game</h1>
        <p>Vui lòng quay lại trang chủ và chọn game khác để xem chi tiết.</p>
      </div>
    `;
    communityPanel.innerHTML = "";
    historyPanel.innerHTML = "";
    return;
  }

  detailHero.innerHTML = `
    <img src="${game.image}" alt="${game.title}" loading="lazy" />
    <div class="hero-content">
      <span class="pill">${game.tag}</span>
      <h1>${game.title}</h1>
      <p>${game.summary}</p>
      <div class="stats">
        <span>🎮 ${game.views}</span>
        <span>🔥 ${game.trend}</span>
        <span>⏱️ Cập nhật ${new Date().toLocaleTimeString('vi-VN')}</span>
      </div>
    </div>
  `;

  communityPanel.innerHTML = `
    <h2>Cộng đồng</h2>
    <ul>
      ${game.community.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  historyPanel.innerHTML = `
    <h2>Lịch sử & Xu hướng</h2>
    <ul>
      ${game.history.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function updateDynamicStats() {
  games.forEach((game) => {
    game.views = getRandomItem(viewLabelOptions);
    game.trend = getRandomItem(trendLabelOptions);
  });

  const timestamp = new Date().toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const statusLabel = document.querySelector(".section-title span");
  if (statusLabel) {
    statusLabel.textContent = `Dữ liệu cập nhật tự động lúc ${timestamp}`;
  }

  renderGameCards();
  renderDetailPage();
}

document.addEventListener("DOMContentLoaded", () => {
  renderGameCards();
  renderDetailPage();
  setInterval(updateDynamicStats, 15000);
});
