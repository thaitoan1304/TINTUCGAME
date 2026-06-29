const games = [
  {
    slug: "valorant",
    title: "Valorant",
    tag: "FPS / Esports",
    desc: "Một tựa game bắn súng chiến thuật 5vs5 với hệ thống nhân vật, kỹ năng và cộng đồng esport toàn cầu.",
    image:
      "https://images.unsplash.com/photo-1659559240678-4db8c3db9d34?auto=format&fit=crop&w=900&q=80",
    views: "2.4M người xem",
    trend: "Tăng trưởng 18%",
    developer: "Riot Games",
    release: "2020",
    platforms: "PC",
    official: "https://playvalorant.com/",
    summary:
      "Valorant là một trò chơi bắn súng chiến thuật 5vs5 do Riot Games phát triển, nổi bật nhờ lối chơi nhanh, kỹ năng cao và hệ thống nhân vật có cá tính.",
    highlights: [
      "Cộng đồng esports cực lớn",
      "Lối chơi kết hợp bắn súng và kỹ năng",
      "Hệ thống xếp hạng và sự kiện thường xuyên",
    ],
    community: [
      "Cộng đồng người chơi đông đảo trên Twitch, YouTube và Discord.",
      "Các giải đấu lớn như VCT và Masters thu hút hàng triệu người xem.",
      "Nhiều đội tuyển và streamer chuyên nghiệp hoạt động liên tục.",
    ],
    history: [
      "Ra mắt năm 2020 và nhanh chóng trở thành một trong những game FPS số một.",
      "Riot Games đã tạo hệ sinh thái giải đấu chuyên nghiệp với VCT và Masters.",
      "Valorant tiếp tục nhận bản cập nhật nhân vật và điều chỉnh meta đều đặn.",
    ],
    esports: {
      teams: ["Sentinels", "Fnatic", "DRX"],
      tournaments: ["Valorant Champions Tour (VCT)", "Masters", "Champions"],
    },
  },
  {
    slug: "genshin-impact",
    title: "Genshin Impact",
    tag: "Open World",
    desc: "Thế giới mở đẹp mắt với câu chuyện đa chiều và các sự kiện mới liên tục.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    views: "1.8M người xem",
    trend: "Hot trong tuần",
    developer: "HoYoverse",
    release: "2020",
    platforms: "PC, PS4, PS5, Android, iOS",
    official: "https://genshin.hoyoverse.com/",
    summary:
      "Genshin Impact là tựa game nhập vai thế giới mở với đồ họa đẹp, hệ thống nhân vật đa dạng và cốt truyện phong phú.",
    highlights: [
      "Thế giới mở rộng lớn",
      "Sự kiện mùa cao và cập nhật nhân vật thường xuyên",
      "Âm nhạc và đồ họa nghệ thuật tuyệt đẹp",
    ],
    community: [
      "Cộng đồng fan rất tích cực trên Reddit, Discord và mạng xã hội.",
      "Nhiều người chơi tham gia các sự kiện và tạo nội dung fan art.",
      "Game nhận nhiều review và hướng dẫn từ các kênh YouTube game lớn.",
    ],
    history: [
      "Phát hành toàn cầu vào tháng 9/2020.",
      "HoYoverse liên tục mở rộng bản đồ, nhân vật và chế độ chơi.",
      "Genshin Impact duy trì lượng người chơi ổn định nhờ nội dung mới và sự kiện định kỳ.",
    ],
  },
  {
    slug: "fortnite",
    title: "Fortnite",
    tag: "Battle Royale",
    desc: "Sự kiện thời trang, các mùa mới và gameplay sáng tạo giúp Fortnite luôn giữ vị trí độc đáo.",
    image:
      "https://images.unsplash.com/photo-1528775753294-cc1698a6cc12?auto=format&fit=crop&w=900&q=80",
    views: "3.1M người xem",
    trend: "Xu hướng mới",
    developer: "Epic Games",
    release: "2017",
    platforms: "PC, PS4, PS5, Xbox, Switch, Mobile",
    official: "https://www.epicgames.com/fortnite/",
    summary:
      "Fortnite là một trò chơi battle royale mang phong cách sáng tạo, sự kiện thường xuyên và cộng đồng người chơi cực kỳ lớn.",
    highlights: [
      "Thế giới luôn thay đổi qua mỗi mùa",
      "Sự kiện hợp tác với thương hiệu toàn cầu",
      "Chế độ sáng tạo và giải đấu chuyên nghiệp",
    ],
    community: [
      "Fortnite có một trong những cộng đồng game lớn nhất thế giới.",
      "Nhiều streamer và YouTuber thường xuyên phát sóng và tạo nội dung.",
      "Người chơi tham gia sự kiện mùa và thử thách đặc biệt.",
    ],
    history: [
      "Ra mắt năm 2017 và nhanh chóng trở thành hiện tượng toàn cầu.",
      "Epic Games liên tục cập nhật bản đồ, trang phục và sự kiện lớn.",
      "Fortnite giữ được sức hút nhờ sự đổi mới và cộng đồng sáng tạo.",
    ],
    esports: {
      teams: ["Team Liquid", "FaZe Clan", "Ghost Gaming"],
      tournaments: [
        "Fortnite Champion Series (FNCS)",
        "Fortnite World Cup",
        "Fall Skirmish",
      ],
    },
  },
  {
    slug: "lien-quan",
    title: "Liên Quân Mobile",
    tag: "MOBA / Esports",
    desc: "Liên Quân Mobile là tựa MOBA di động hàng đầu tại Việt Nam với hệ sinh thái esports mạnh mẽ.",
    image:
      "https://images.unsplash.com/photo-1510626176961-4b507f4c48a4?auto=format&fit=crop&w=900&q=80",
    views: "2.7M người xem",
    trend: "Esports đỉnh cao",
    developer: "Garena",
    release: "2016",
    platforms: "Android, iOS",
    official: "https://lienquan.garena.vn/",
    summary:
      "Liên Quân Mobile là game MOBA di động từ Garena, nổi bật với giải đấu AIC và AWC và cộng đồng esports sôi động.",
    highlights: [
      "Giải đấu khu vực hàng đầu Đông Nam Á",
      "Đội tuyển Việt Nam liên tục vươn ra quốc tế",
      "Cộng đồng người chơi và streamer đông đảo",
    ],
    community: [
      "Cộng đồng Liên Quân tại Việt Nam vô cùng lớn và nhiệt huyết.",
      "Các đội tuyển như Team Flash, Saigon Phantom và BOX Gaming là biểu tượng esports.",
      "Người chơi theo dõi giải AIC, AWC và Vòng Chung Kết toàn quốc.",
    ],
    history: [
      "Ra mắt tại Việt Nam năm 2016 và nhanh chóng trở thành hiện tượng di động.",
      "Garena tổ chức thường xuyên các giải AWC, AIC và giải quốc nội lớn.",
      "Liên Quân phát triển hệ thống tướng mới, trang phục và sự kiện hàng tuần.",
    ],
    esports: {
      teams: ["Team Flash", "Saigon Phantom", "BOX Gaming"],
      tournaments: ["AIC", "AWC", "Vòng Chung Kết Quốc Gia"],
    },
  },
  {
    slug: "lien-minh-huyen-thoai",
    title: "Liên Minh Huyền Thoại",
    tag: "MOBA / Esports",
    desc: "Liên Minh Huyền Thoại là biểu tượng của thể thao điện tử với giải đấu danh giá trên toàn cầu.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    views: "5.2M người xem",
    trend: "Đỉnh cao esports",
    developer: "Riot Games",
    release: "2009",
    platforms: "PC",
    official: "https://lolesports.com/",
    summary:
      "Liên Minh Huyền Thoại là tựa MOBA phổ biến nhất thế giới, có cộng đồng esports rộng lớn và giải đấu chuyên nghiệp hàng đầu.",
    highlights: [
      "Worlds là giải đấu lớn nhất",
      "Cộng đồng esports toàn cầu",
      "Luôn có meta mới và cập nhật cân bằng",
    ],
    community: [
      "Riot Games phát triển mạnh mảng esports với LCS, LEC, LCK và LPL.",
      "Người hâm mộ theo dõi các trận đấu chuyên nghiệp mỗi tuần.",
      "Nhiều streamer và đội tuyển đào tạo game thủ chuyên nghiệp.",
    ],
    history: [
      "Ra mắt năm 2009 và tạo tiền đề cho cả ngành esports hiện đại.",
      "World Championship thu hút hàng chục triệu người xem toàn cầu.",
      "Riot liên tục cập nhật tướng, hệ thống trang bị và chế độ chơi.",
    ],
    esports: {
      teams: ["T1", "G2 Esports", "Fnatic"],
      tournaments: [
        "World Championship (Worlds)",
        "Mid-Season Invitational (MSI)",
        "LPL / LCK / LEC / LCS",
      ],
    },
  },
  {
    slug: "ea-sports-fc-25",
    title: "EA Sports FC 25",
    tag: "Sports",
    desc: "Bóng đá điện tử với đồ họa đẹp, gameplay mượt và các giải đấu cộng đồng sôi nổi.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    views: "1.2M người xem",
    trend: "Đang lên",
    developer: "EA Sports",
    release: "2024",
    platforms: "PC, PS5, Xbox Series X/S, PS4, Xbox One",
    official: "https://www.ea.com/games/ea-sports-fc/fc-25",
    summary:
      "EA Sports FC 25 là dòng game bóng đá điện tử nổi bật với đồ họa cải tiến, chế độ chơi sâu và hoạt động esports ngày càng mạnh.",
    highlights: [
      "Đồ họa cầu thủ thực tế và chuyển động mượt mà",
      "Chế độ Ultimate Team, Career và Pro Clubs sống động",
      "Hệ thống đấu giải online và esports đang phát triển",
    ],
    community: [
      "Cộng đồng người hâm mộ lớn ở nhiều quốc gia.",
      "Nhiều người chơi tham gia các giải đấu FIFA eWorld Cup và FC Pro.",
      "Game có nhiều cập nhật đội hình, sự kiện và thách thức hàng tuần.",
    ],
    history: [
      "Tiếp nối dòng FIFA với tên mới EA Sports FC.",
      "EA đầu tư vào đồ họa cầu thủ và chế độ thi đấu chuyên nghiệp.",
      "Game liên tục cập nhật mùa giải, đội hình và tính năng cộng đồng.",
    ],
  },
  {
    slug: "minecraft",
    title: "Minecraft",
    tag: "Sandbox",
    desc: "Game sáng tạo không giới hạn với cộng đồng xây dựng, modding và server đông đảo.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    views: "4.0M người xem",
    trend: "Vĩnh cửu",
    developer: "Mojang Studios",
    release: "2011",
    platforms: "PC, Console, Mobile",
    official: "https://www.minecraft.net/",
    summary:
      "Minecraft là tựa game sandbox huyền thoại, cho phép xây dựng, khám phá và chế tạo thế giới 3D theo ý muốn.",
    highlights: [
      "Sáng tạo thế giới vô hạn",
      "Hệ thống mod và server đa dạng",
      "Có thể chơi cả solo và multiplayer",
    ],
    community: [
      "Một trong những cộng đồng game lớn và bền vững nhất.",
      "Nhiều người chơi xây dựng thế giới, server và mod riêng.",
      "Game tiếp tục nhận nội dung mới từ cộng đồng và cập nhật chính thức.",
    ],
    history: [
      "Ra mắt năm 2011 và trở thành hiện tượng toàn cầu.",
      "Microsoft mua lại Mojang và mở rộng phiên bản console và mobile.",
      "Minecraft giữ được sức hút nhờ sáng tạo, modding và nhiều phiên bản game.",
    ],
  },
  {
    slug: "honkai-star-rail",
    title: "Honkai: Star Rail",
    tag: "RPG / Story",
    desc: "Câu chuyện hành trình không gian, nhân vật đa dạng và chiến đấu turn-based hấp dẫn.",
    image:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80",
    views: "1.6M người xem",
    trend: "Phổ biến",
    developer: "HoYoverse",
    release: "2023",
    platforms: "PC, Android, iOS",
    official: "https://honkai-star-rail.hoyoverse.com/",
    summary:
      "Honkai: Star Rail là một RPG khoa học viễn tưởng với cốt truyện sâu sắc và trải nghiệm chiến đấu hấp dẫn.",
    highlights: [
      "Cốt truyện đậm chất khoa học viễn tưởng",
      "Hệ thống nhân vật sâu sắc và chiến đấu chiến lược",
      "Cập nhật season và nhân vật liên tục",
    ],
    community: [
      "Cộng đồng RPG trên Discord và mạng xã hội rất sôi nổi.",
      "Người chơi thảo luận chiến thuật và cách xây dựng đội hình.",
      "Game nhận được nhiều phản hồi tích cực từ fan anime và RPG.",
    ],
    history: [
      "Phát hành chính thức vào năm 2023.",
      "HoYoverse mở rộng vũ trụ Honkai với cốt truyện và nhân vật mới.",
      "Game duy trì sức hút nhờ cập nhật nội dung và sự kiện định kỳ.",
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

function getGameImage(game) {
  return window.gameImages?.[game.slug] || game.image;
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
            <img src="${getGameImage(game)}" alt="${game.title}" loading="lazy" onerror="this.onerror=null;this.src='${game.image}';" />
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
    <img src="${getGameImage(game)}" alt="${game.title}" loading="lazy" onerror="this.onerror=null;this.src='${game.image}';" />
    <div class="hero-content">
      <span class="pill">${game.tag}</span>
      <h1>${game.title}</h1>
      <p>${game.summary}</p>
      <div class="stats">
        <span>🎮 ${game.views}</span>
        <span>🔥 ${game.trend}</span>
        <span>⏱️ Cập nhật ${new Date().toLocaleTimeString("vi-VN")}</span>
      </div>
      <div class="detail-meta">
        <span>🛠️ Nhà phát triển: ${game.developer || "Đang cập nhật"}</span>
        <span>📅 Phát hành: ${game.release || "Đang cập nhật"}</span>
        <span>📱 Nền tảng: ${game.platforms || "Đa nền tảng"}</span>
      </div>
      ${game.official ? `<div class="detail-meta official-row"><a class="official-link" href="${game.official}" target="_blank" rel="noreferrer">Trang chính thức</a></div>` : ""}
      ${game.highlights ? `<div class="detail-list"><h3>Điểm nổi bật</h3><ul>${game.highlights.map((item) => `<li>${item}</li>`).join("")}</ul></div>` : ""}
      ${game.esports ? `<div class="detail-list"><h3>Giải đấu Esports</h3><ul>${game.esports.tournaments.map((item) => `<li>${item}</li>`).join("")}</ul></div>` : ""}
    </div>
  `;

  communityPanel.innerHTML = `
    <h2>Cộng đồng</h2>
    <ul>
      ${game.community.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    ${game.esports ? `<div class="panel-extra"><h3>Đội tuyển Esports nổi bật</h3><ul>${game.esports.teams.map((team) => `<li>${team}</li>`).join("")}</ul></div>` : ""}
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
