// src/data/projects.js
export const projectsData = {
  "AI Projects": [
    {
      id: "ai-01",
      title: {
        tr: "nAI - Yapay Zeka Modelleri Platformu",
        en: "nAI - AI Models Platform"
      },
      summary: {
        tr: "Gemini, GPT ve açık kaynak AI modellerinin entegrasyonu için geliştirilmiş deneysel platform.",
        en: "Experimental platform developed for integration of Gemini, GPT and open-source AI models."
      },
      image: "https://i.imgur.com/hZ8E8Oz.png",
      link: "https://github.com/mehmetabak/nAI",
      description: {
        tr: "## AI Modelleri Test Platformu\n\nFarklı AI modellerini tek platformda test etmek için geliştirilmiş proje. Kapalı kaynak ve açık kaynak modeller arasında köprü görevi görür.\n\n### Platform Özellikleri\n- Gemini, GPT ve açık kaynak model entegrasyonu\n- JSON konfigürasyonu ile yeni model ekleme\n- Eğitimsel amaçlı kullanım\n- Topluluk katkılarına açık yapı\n- Kolay yerel kurulum\n\n### Teknik Özellikler\n- Vite ile geliştirilmiş modern UI\n- API entegrasyonları\n- Modüler model yönetimi\n- Topluluk katkı sistemi\n\n### Teknolojiler\n- JavaScript, Vite\n- Multiple AI API integrations\n- JSON configuration\n- Git branching strategy\n\nAI geliştiricileri ve araştırmacıları için işbirliği ve deneyim platformu.",
        en: "## AI Models Testing Platform\n\nProject developed to test different AI models on a single platform. Acts as a bridge between closed-source and open-source models.\n\n### Platform Features\n- Gemini, GPT and open-source model integration\n- Adding new models with JSON configuration\n- Educational use\n- Open to community contributions\n- Easy local installation\n\n### Technical Features\n- Modern UI developed with Vite\n- API integrations\n- Modular model management\n- Community contribution system\n\n### Technologies\n- JavaScript, Vite\n- Multiple AI API integrations\n- JSON configuration\n- Git branching strategy\n\nCollaboration and experimentation platform for AI developers and researchers."
      },
      tags: ["javascript", "ai", "api-integration", "vite", "gemini", "gpt"],
      year: 2024
    }
  ],
  "Browser Extensions": [
    {
      id: "extension-01",
      title: {
        tr: "TabNote - Sekme Bazlı Not Eklentisi",
        en: "TabNote - Tab-Based Note Extension"
      },
      summary: {
        tr: "Her sekme için özel yapışkan notlar sunan yüksek performanslı Chrome eklentisi.",
        en: "High-performance Chrome extension offering custom sticky notes for each tab."
      },
      image: "https://i.imgur.com/7ekZ74N.png",
      link: "https://github.com/mehmetabak/tab-note",
      description: {
        tr: "## Sekme Bazlı Not Yönetimi\n\nHer web sitesi sekmesi için ayrı not tutmanızı sağlayan Chrome eklentisi. Modern tasarım ve yüksek performans odaklı geliştirilmiştir.\n\n### Temel Özellikler\n- Sekme bazında kalıcı notlar\n- Tam Markdown desteği\n- İnteraktif checkbox'lar\n- GPU hızlandırmalı sürükleme\n- Lazy loading ile performans optimizasyonu\n\n### Gelişmiş Özellikler\n- Ayarlar paneli (font boyutu, şeffaflık)\n- Köşeye sabitleme özelliği\n- İçerik kopyalama butonu\n- Modern karanlık tema\n- Sürükleyerek taşıma\n\n### Teknolojiler\n- JavaScript (ES6+)\n- Chrome Extension API (Manifest V3)\n- HTML5 & CSS3\n- Marked.js (Markdown parser)\n\nÜretkenliğinizi artırmak için tasarlanmış minimalist not alma çözümü.",
        en: "## Tab-Based Note Management\n\nChrome extension that allows you to keep separate notes for each website tab. Developed with focus on modern design and high performance.\n\n### Basic Features\n- Persistent notes per tab\n- Full Markdown support\n- Interactive checkboxes\n- GPU-accelerated dragging\n- Performance optimization with lazy loading\n\n### Advanced Features\n- Settings panel (font size, transparency)\n- Corner pinning feature\n- Content copy button\n- Modern dark theme\n- Drag to move\n\n### Technologies\n- JavaScript (ES6+)\n- Chrome Extension API (Manifest V3)\n- HTML5 & CSS3\n- Marked.js (Markdown parser)\n\nMinimalist note-taking solution designed to increase your productivity."
      },
      tags: ["javascript", "chrome-extension", "markdown", "productivity", "browser"],
      year: 2024
    },
    {
      id: "extension-02",
      title: {
        tr: "arasTiR/Translate",
        en: "arasTiR/Translate"
      },
      summary: {
        tr: "Dil çevirisi için web sitesi ve tarayıcı uzantısı.",
        en: "Language translator website and browser extension."
      },
      image: "https://i.imgur.com/pXU4g7Y.png",
      link: "https://github.com/mehmetabak/Translate",
      description: {
        tr: "## arasTiR/Translate\n\nDil çevirisi için geliştirilmiş web sitesi ve tarayıcı uzantısı. Kullanıcıların hızlı ve kolay çeviri yapabilmesi için tasarlanmıştır.\n\n### Özellikler\n- Web tabanlı çeviri arayüzü\n- Tarayıcı uzantısı desteği\n- Kullanıcı dostu arayüz\n- Hızlı çeviri işlemleri\n\n### Teknolojiler\n- JavaScript\n- HTML\n- CSS\n- Tarayıcı uzantısı API'leri\n\nMicrosoft Edge mağazasında yayınlanmış ve aktif olarak kullanılmaktadır.",
        en: "## arasTiR/Translate\n\nLanguage translator website and browser extension developed for translation services. Designed for users to perform quick and easy translations.\n\n### Features\n- Web-based translation interface\n- Browser extension support\n- User-friendly interface\n- Fast translation operations\n\n### Technologies\n- JavaScript\n- HTML\n- CSS\n- Browser extension APIs\n\nPublished on Microsoft Edge store and actively being used."
      },
      tags: ["javascript", "html", "css", "chrome-extension", "translation"],
      year: 2024
    }
  ],
  "Automation Tools": [
    {
      id: "automation-01",
      title: {
        tr: "YKS Sonuç Takip Botu",
        en: "YKS Result Tracking Bot"
      },
      summary: {
        tr: "ÖSYM sınav sonuçlarını otomatik kontrol eden ve Telegram bildirimi gönderen serverless bot.",
        en: "Serverless bot that automatically checks ÖSYM exam results and sends Telegram notifications."
      },
      image: "https://i.imgur.com/YFJN1gk.png",
      link: "https://github.com/mehmetabak/YKS-Bot",
      description: {
        tr: "## Sınav Sonucu Takip Sistemi\n\nÖSYM'nin Aday İşlemleri Sistemi üzerinden YKS ve MSÜ sonuçlarını periyodik olarak kontrol eden serverless bot. Yeni sonuç yayınlandığında anında Telegram bildirimi gönderir.\n\n### Ana Özellikler\n- Otomatik sonuç kontrolü\n- Anında Telegram bildirimleri\n- Ekran görüntüsü ile sonuç paylaşımı\n- Proaktif oturum yönetimi\n- Uzaktan bot kontrolü (/basla, /araver)\n\n### Teknik Mimarı\n- Netlify Functions üzerinde serverless çalışma\n- JSONBin.io ile güvenli veri depolama\n- Puppeteer ile web otomasyonu\n- Cookie tabanlı oturum yönetimi\n- Zamanlanmış fonksiyon tetikleme\n\n### Teknolojiler\n- Node.js\n- Netlify Functions\n- Puppeteer (@sparticuz/chromium)\n- Telegram Bot API\n- JSONBin.io\n\nSınav sonuçlarını bekleyen öğrenciler için pratik bildirim sistemi.",
        en: "## Exam Result Tracking System\n\nServerless bot that periodically checks YKS and MSÜ results from ÖSYM's Candidate Operations System. Sends instant Telegram notification when new results are published.\n\n### Main Features\n- Automatic result checking\n- Instant Telegram notifications\n- Result sharing with screenshots\n- Proactive session management\n- Remote bot control (/basla, /araver)\n\n### Technical Architecture\n- Serverless operation on Netlify Functions\n- Secure data storage with JSONBin.io\n- Web automation with Puppeteer\n- Cookie-based session management\n- Scheduled function triggering\n\n### Technologies\n- Node.js\n- Netlify Functions\n- Puppeteer (@sparticuz/chromium)\n- Telegram Bot API\n- JSONBin.io\n\nPractical notification system for students waiting for exam results."
      },
      tags: ["nodejs", "netlify", "puppeteer", "telegram-bot", "automation", "serverless"],
      year: 2024
    }
  ],
  "Web Apps / Tools": [
      {
      id: "meta-01",
      title: {
        tr: "Projects Page - Proje Portföy Sitesi",
        en: "Projects Page - Project Portfolio Website"
      },
      summary: {
        tr: "Tüm projelerimi sergilediğim modern ve responsive portföy web sitesi.",
        en: "Modern and responsive portfolio website showcasing all my projects."
      },
      image: "https://i.imgur.com/lGA2GIs.png",
      link: "https://github.com/mehmetabak/projects-page",
      description: {
        tr: "## Proje Portföy Platformu\n\nTüm projelerimi kategorize ederek sergileyen modern web sitesi. Bu proje aynı zamanda kendini de göstererek meta bir yaklaşım sergiliyor.\n\n### Ana Özellikler\n- Kategori bazlı proje organizasyonu\n- Detaylı proje açıklamaları\n- Responsive tasarım\n- Arama ve filtreleme\n- Çoklu dil desteği (TR/EN)\n- Dark/Light tema seçenekleri\n\n### Teknik Özellikler\n- Modern JavaScript framework'ü\n- Component tabanlı mimari\n- SEO optimize edilmiş yapı\n- Fast loading ve performans odaklı\n- Progressive Web App desteği\n\n### Teknolojiler\n- React/Vite\n- Tailwind CSS\n- JavaScript/TypeScript\n- Responsive design\n- Git versioning\n\nGeliştiriciler ve işverenler için kapsamlı bir proje vitrini.",
        en: "## Project Portfolio Platform\n\nModern website that showcases all my projects in categorized format. This project also displays itself, creating a meta approach.\n\n### Main Features\n- Category-based project organization\n- Detailed project descriptions\n- Responsive design\n- Search and filtering\n- Multi-language support (TR/EN)\n- Dark/Light theme options\n\n### Technical Features\n- Modern JavaScript framework\n- Component-based architecture\n- SEO optimized structure\n- Fast loading and performance focused\n- Progressive Web App support\n\n### Technologies\n- React/Vite\n- Tailwind CSS\n- JavaScript/TypeScript\n- Responsive design\n- Git versioning\n\nComprehensive project showcase for developers and employers."
      },
      tags: ["react", "vite", "tailwind", "portfolio", "responsive", "javascript"],
      year: 2025
    },
    {
      id: "web-01",
      title: {
        tr: "EXIF Fotoğraf Blog Platformu",
        en: "EXIF Photo Blog Platform"
      },
      summary: {
        tr: "TypeScript ile geliştirilmiş, fotoğrafların teknik detaylarını gösteren blog platformu.",
        en: "A blog platform developed with TypeScript that displays technical details of photographs."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/exif-photo-blog",
      description: {
        tr: "## Fotoğraf Blog Platformu\n\nFotoğrafçılar için tasarlanmış bu platform, her fotoğrafın EXIF verilerini otomatik olarak okur ve görüntüler. TypeScript ve modern web teknolojileri kullanılarak geliştirilmiştir.\n\n### Özellikler\n- Otomatik EXIF veri okuma (diyafram, deklanşör hızı, ISO)\n- Responsive tasarım\n- Modern ve minimalist arayüz\n- Fotoğraf galerisi yönetimi\n- SEO optimize edilmiş yapı\n\n### Teknolojiler\n- TypeScript, React, Next.js\n- Sharp.js ile görsel işleme\n- Tailwind CSS\n- Vercel deployment\n\nFotoğraflarınızın teknik detaylarını paylaşmak isteyen fotoğrafçılar ve kamera meraklıları için ideal bir platform.",
        en: "## Photography Blog Platform\n\nDesigned for photographers, this platform automatically reads and displays EXIF data for each photo. Developed using TypeScript and modern web technologies.\n\n### Features\n- Automatic EXIF data reading (aperture, shutter speed, ISO)\n- Responsive design\n- Modern and minimalist interface\n- Photo gallery management\n- SEO optimized structure\n\n### Technologies\n- TypeScript, React, Next.js\n- Image processing with Sharp.js\n- Tailwind CSS\n- Vercel deployment\n\nIdeal platform for photographers and camera enthusiasts who want to share technical details of their photos."
      },
      tags: ["typescript", "react", "nextjs", "photography", "exif"],
      year: 2025
    },
    {
      id: "web-02",
      title: {
        tr: "GitHub İlişki Analiz Aracı",
        en: "GitHub Relationship Analyzer"
      },
      summary: {
        tr: "Python tabanlı GitHub sosyal bağlantı analiz aracı.",
        en: "Python-based GitHub social connection analysis tool."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/GitHub-Relationship-Analyzer",
      description: {
        tr: "## GitHub Sosyal Ağ Analizi\n\nGitHub hesabınızdaki sosyal bağlantıları analiz eden Python tabanlı araç. Jupyter Notebook ortamında çalışır ve detaylı görselleştirmeler sunar.\n\n### Ana Özellikler\n- Takip eden/takip edilen ilişki analizi\n- Ortak repository çalışmaları\n- Sosyal ağ görselleştirme\n- CSV formatında veri export\n- İstatistiksel analiz raporları\n\n### Teknolojiler\n- Python, Pandas, NumPy\n- GitHub API entegrasyonu\n- NetworkX ile görselleştirme\n- Jupyter Notebook\n- Matplotlib, Seaborn\n\nGitHub topluluğundaki konumunuzu ve işbirliği fırsatlarını keşfetmek için kullanışlı bir araç.",
        en: "## GitHub Social Network Analysis\n\nPython-based tool that analyzes social connections in your GitHub account. Works in Jupyter Notebook environment and provides detailed visualizations.\n\n### Main Features\n- Follower/following relationship analysis\n- Collaborative repository work\n- Social network visualization\n- CSV format data export\n- Statistical analysis reports\n\n### Technologies\n- Python, Pandas, NumPy\n- GitHub API integration\n- Visualization with NetworkX\n- Jupyter Notebook\n- Matplotlib, Seaborn\n\nUseful tool for discovering your position in the GitHub community and collaboration opportunities."
      },
      tags: ["python", "jupyter", "github-api", "data-analysis", "visualization"],
      year: 2025
    },
    {
      id: "web-03",
      title: {
        tr: "Türkçe Wordle Oyunu",
        en: "Turkish Wordle Game"
      },
      summary: {
        tr: "Günlük sınır olmadan oynayabileceğiniz Türkçe kelime tahmin oyunu.",
        en: "Turkish word guessing game that you can play without daily limits."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/Wordle-TR",
      description: {
        tr: "## Türkçe Wordle Oyunu\n\nPopüler Wordle oyununun Türkçe versiyonu. Günlük sınır olmaksızın istediğiniz kadar oynayabilirsiniz.\n\n### Oyun Özellikleri\n- Sınırsız oyun imkanı\n- Türkçe kelime veritabanı\n- İstatistik takibi\n- Dark/Light tema seçenekleri\n- Sonuç paylaşım özelliği\n\n### Teknik Özellikler\n- Vanilla JavaScript\n- Local Storage ile veri saklama\n- CSS3 animasyonlar\n- Responsive tasarım\n- PWA desteği\n\nTürkçe kelime dağarcığınızı geliştirmek ve eğlenmek için ideal bir oyun.",
        en: "## Turkish Wordle Game\n\nTurkish version of the popular Wordle game. You can play as much as you want without daily limits.\n\n### Game Features\n- Unlimited gameplay\n- Turkish word database\n- Statistics tracking\n- Dark/Light theme options\n- Result sharing feature\n\n### Technical Features\n- Vanilla JavaScript\n- Data storage with Local Storage\n- CSS3 animations\n- Responsive design\n- PWA support\n\nIdeal game for improving your Turkish vocabulary and having fun."
      },
      tags: ["javascript", "css3", "html5", "game", "turkish"],
      year: 2025
    },
    {
      id: "web-04",
      title: {
        tr: "FlipHTML5 PDF İndirici",
        en: "FlipHTML5 PDF Downloader"
      },
      summary: {
        tr: "FlipHTML5 kitaplarını PDF formatında indiren Python aracı.",
        en: "Python tool that downloads FlipHTML5 books in PDF format."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/FlipHTML5-Downloader",
      description: {
        tr: "## FlipHTML5 İndirme Aracı\n\nFlipHTML5 platformundaki herkese açık kitapları indirerek tek PDF dosyasında birleştiren Python aracı.\n\n### Özellikler\n- Otomatik sayfa tespit ve indirme\n- Yüksek kaliteli PDF oluşturma\n- İndirme ilerlemesi takibi\n- Hata yönetimi ve yeniden deneme\n- Toplu kitap işleme\n\n### Teknolojiler\n- Python\n- BeautifulSoup4 ile web scraping\n- PyPDF2 ile PDF işleme\n- Requests kütüphanesi\n\nEğitim materyallerini ve araştırma kaynaklarını arşivlemek için kullanışlı bir araç.",
        en: "## FlipHTML5 Download Tool\n\nPython tool that downloads public books from FlipHTML5 platform and merges them into a single PDF file.\n\n### Features\n- Automatic page detection and download\n- High quality PDF creation\n- Download progress tracking\n- Error handling and retry mechanism\n- Batch book processing\n\n### Technologies\n- Python\n- Web scraping with BeautifulSoup4\n- PDF processing with PyPDF2\n- Requests library\n\nUseful tool for archiving educational materials and research resources."
      },
      tags: ["python", "web-scraping", "pdf", "automation"],
      year: 2025
    },
    {
      id: "web-05",
      title: {
        tr: "Video Animasyon Editörü",
        en: "Video Animation Editor"
      },
      summary: {
        tr: "Web tabanlı video editörlük ve animasyon aracı.",
        en: "Web-based video editing and animation tool."
      },
      image: "https://i.imgur.com/mYDzETN.png",
      link: "https://github.com/mehmetabak/text-match-cut-video",
      description: {
        tr: "## Video Animasyon Aracı\n\nKarmaşık video efektleri ve animasyonları otomatikleştiren web tabanlı editör. Profesyonel videolar oluşturmayı kolaylaştırır.\n\n### Özellikler\n- Text-based video kesme\n- Hazır animasyon şablonları\n- Otomatik ses senkronizasyonu\n- Filter ve efekt koleksiyonu\n- Gerçek zamanlı önizleme\n\n### Teknolojiler\n- JavaScript\n- WebGL ile GPU hızlandırma\n- Canvas API\n- Web Workers\n- FFmpeg.js\n\nContent creatorlar ve video editörlüğüne yeni başlayanlar için ideal bir araç.",
        en: "## Video Animation Tool\n\nWeb-based editor that automates complex video effects and animations. Makes creating professional videos easier.\n\n### Features\n- Text-based video cutting\n- Ready-made animation templates\n- Automatic audio synchronization\n- Filter and effect collection\n- Real-time preview\n\n### Technologies\n- JavaScript\n- GPU acceleration with WebGL\n- Canvas API\n- Web Workers\n- FFmpeg.js\n\nIdeal tool for content creators and video editing beginners."
      },
      tags: ["javascript", "webgl", "canvas", "video-editing", "animation"],
      year: 2025
    },
    {
      id: "web-06",
      title: {
        tr: "Notionic Blog Sitesi",
        en: "Notionic Blog Website"
      },
      summary: {
        tr: "Notion entegrasyonlu blog platformu.",
        en: "Blog platform with Notion integration."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/notionic",
      description: {
        tr: "## Notion Blog Platformu\n\nNotion'daki içeriklerinizi otomatik olarak blog sitesine dönüştüren platform. İçerik yönetimini Notion'da yapın, web sitenizde otomatik yayınlayın.\n\n### Özellikler\n- Notion API entegrasyonu\n- Otomatik içerik senkronizasyonu\n- SEO optimizasyonu\n- Responsive tasarım\n- Yorum sistemi\n\n### Teknolojiler\n- JavaScript, React, Next.js\n- Notion API\n- Tailwind CSS\n- Vercel deployment\n\nNotion kullanıcıları ve blog yazarları için pratik bir çözüm.",
        en: "## Notion Blog Platform\n\nPlatform that automatically converts your Notion content into a blog site. Manage content in Notion, publish automatically on your website.\n\n### Features\n- Notion API integration\n- Automatic content synchronization\n- SEO optimization\n- Responsive design\n- Comment system\n\n### Technologies\n- JavaScript, React, Next.js\n- Notion API\n- Tailwind CSS\n- Vercel deployment\n\nPractical solution for Notion users and blog writers."
      },
      tags: ["javascript", "react", "nextjs", "notion-api", "blog"],
      year: 2025
    },
    {
      id: "web-07",
      title: {
        tr: "VS Code Temalı Portfolio",
        en: "VS Code Themed Portfolio"
      },
      summary: {
        tr: "Visual Studio Code arayüzü görünümünde portfolio websitesi.",
        en: "Portfolio website with Visual Studio Code interface appearance."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/Dev",
      description: {
        tr: "## VS Code Portfolio\n\nVisual Studio Code arayüzünü taklit eden interaktif portfolio websitesi. Next.js ile geliştirilmiş ve Vercel'de deploy edilmiştir.\n\n### Özellikler\n- VS Code benzeri arayüz\n- Dosya gezgini simülasyonu\n- Çoklu sekme sistemi\n- Terminal entegrasyonu\n- Tema değiştirme seçenekleri\n\n### Teknolojiler\n- Next.js, React\n- CSS Modules\n- Framer Motion animasyonlar\n- Vercel deployment\n\nGeliştiriciler için yaratıcı ve özgün bir portfolio çözümü.",
        en: "## VS Code Portfolio\n\nInteractive portfolio website that mimics Visual Studio Code interface. Developed with Next.js and deployed on Vercel.\n\n### Features\n- VS Code-like interface\n- File explorer simulation\n- Multi-tab system\n- Terminal integration\n- Theme switching options\n\n### Technologies\n- Next.js, React\n- CSS Modules\n- Framer Motion animations\n- Vercel deployment\n\nCreative and unique portfolio solution for developers."
      },
      tags: ["javascript", "nextjs", "react", "portfolio", "css-modules"],
      year: 2024
    },
    {
      id: "web-08",
      title: {
        tr: "GameBoy Emülatörü",
        en: "GameBoy Emulator"
      },
      summary: {
        tr: "Tarayıcıda çalışan JavaScript GameBoy emülatörü.",
        en: "JavaScript GameBoy emulator running in browser."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/emu",
      description: {
        tr: "## GameBoy Emülatörü\n\nNintendo GameBoy'u web tarayıcısında çalıştıran JavaScript emülatörü. Klasik oyunları modern platformda oynama imkanı sağlar.\n\n### Özellikler\n- Tam CPU emülasyonu\n- Grafik ve ses sistemi\n- ROM dosyası desteği\n- Kayıt durumu sistemi\n- Dokunmatik kontroller\n\n### Teknolojiler\n- Vanilla JavaScript\n- Canvas API\n- Web Audio API\n- Local Storage\n\nRetro oyun meraklıları için nostaljik bir deneyim sunar.",
        en: "## GameBoy Emulator\n\nJavaScript emulator that runs Nintendo GameBoy in web browser. Provides the opportunity to play classic games on modern platform.\n\n### Features\n- Full CPU emulation\n- Graphics and sound system\n- ROM file support\n- Save state system\n- Touch controls\n\n### Technologies\n- Vanilla JavaScript\n- Canvas API\n- Web Audio API\n- Local Storage\n\nOffers a nostalgic experience for retro gaming enthusiasts."
      },
      tags: ["javascript", "emulator", "gameboy", "canvas", "retro-gaming"],
      year: 2024
    },
    {
      id: "web-09",
      title: {
        tr: "Temel Metin Şifreleme Aracı",
        en: "Basic Text Encryption Tool"
      },
      summary: {
        tr: "Basit metin şifreleme ve çözme aracı.",
        en: "Simple text encryption and decryption tool."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/Basic-Encryptor",
      description: {
        tr: "## Metin Şifreleme Aracı\n\nTemel şifreleme algoritmalarını öğrenmek için geliştirilmiş eğitici araç. Çeşitli şifreleme yöntemlerini test edebilirsiniz.\n\n### Şifreleme Türleri\n- Caesar Cipher\n- Base64 kodlama\n- ROT13 algoritması\n- Ters metin şifreleme\n- Binary dönüşüm\n\n### Özellikler\n- Gerçek zamanlı şifreleme\n- Temiz ve basit arayüz\n- Kopyala-yapıştır desteği\n- Responsive tasarım\n\nKriptografi temellerini öğrenmek isteyenler için ideal bir başlangıç aracı.",
        en: "## Text Encryption Tool\n\nEducational tool developed to learn basic encryption algorithms. You can test various encryption methods.\n\n### Encryption Types\n- Caesar Cipher\n- Base64 encoding\n- ROT13 algorithm\n- Reverse text encryption\n- Binary conversion\n\n### Features\n- Real-time encryption\n- Clean and simple interface\n- Copy-paste support\n- Responsive design\n\nIdeal starter tool for those who want to learn cryptography basics."
      },
      tags: ["javascript", "css3", "encryption", "education"],
      year: 2023
    }
  ],
  "Java Projects": [
    {
      id: "java-01",
      title: {
        tr: "Telegram Bot - arasTiR",
        en: "Telegram Bot - arasTiR"
      },
      summary: {
        tr: "Eğitim kurumları için Telegram tabanlı yönetim sistemi.",
        en: "Telegram-based management system for educational institutions."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/Java-Telegram_arasTiR_Old_Bot",
      description: {
        tr: "## Eğitim Yönetim Botu\n\nTelegram üzerinde çalışan arasTiR eğitim yönetim sisteminin Java implementasyonu. Okul yöneticileri, öğrenciler ve veliler için kapsamlı dijital asistan.\n\n### Ana Modüller\n- Öğrenci bilgi yönetimi\n- Not girişi ve takibi\n- Devamsızlık kontrolü\n- Ödev yönetimi\n- Veli bilgilendirme sistemi\n\n### Teknolojiler\n- Java, Spring Boot\n- Telegram Bot API\n- MySQL veritabanı\n- JPA/Hibernate\n- JWT Authentication\n\nEğitim kurumlarının dijital dönüşümü için pratik bir çözüm.",
        en: "## Education Management Bot\n\nJava implementation of arasTiR education management system running on Telegram. Comprehensive digital assistant for school administrators, students and parents.\n\n### Main Modules\n- Student information management\n- Grade entry and tracking\n- Attendance control\n- Assignment management\n- Parent information system\n\n### Technologies\n- Java, Spring Boot\n- Telegram Bot API\n- MySQL database\n- JPA/Hibernate\n- JWT Authentication\n\nPractical solution for digital transformation of educational institutions."
      },
      tags: ["java", "spring-boot", "telegram-bot", "mysql", "education"],
      year: 2024
    },
    {
      id: "java-02",
      title: {
        tr: "TinyDB Android TR",
        en: "TinyDB Android TR"
      },
      summary: {
        tr: "Android SharedPreferences'ın geliştirilmiş Türkçe versiyonu.",
        en: "Enhanced Turkish version of Android SharedPreferences."
      },
      image: "https://i.imgur.com/w5Wi98G.png",
      link: "https://github.com/mehmetabak/TinyDB--Android-Shared-Preferences-Turbo-TR",
      description: {
        tr: "## Android Veri Saklama Kütüphanesi\n\nTinyDB kütüphanesinin geliştirilmiş ve Türkçeleştirilmiş versiyonu. Android geliştiricileri için basit veri saklama çözümü.\n\n### Desteklenen Veri Türleri\n- Temel veri türleri (int, String, boolean)\n- Koleksiyonlar (ArrayList, HashMap)\n- Özel nesneler\n- Binary veriler\n\n### Özellikler\n- Kolay kullanım\n- Türkçe dokümantasyon\n- Performans optimizasyonları\n- Hata yönetimi\n- Veri şifreleme desteği\n\n### Teknolojiler\n- Java\n- Android SDK\n- SharedPreferences API\n\nAndroid geliştirmeye yeni başlayanlar için ideal bir kütüphane.",
        en: "## Android Data Storage Library\n\nEnhanced and Turkishized version of TinyDB library. Simple data storage solution for Android developers.\n\n### Supported Data Types\n- Basic data types (int, String, boolean)\n- Collections (ArrayList, HashMap)\n- Custom objects\n- Binary data\n\n### Features\n- Easy to use\n- Turkish documentation\n- Performance optimizations\n- Error handling\n- Data encryption support\n\n### Technologies\n- Java\n- Android SDK\n- SharedPreferences API\n\nIdeal library for Android development beginners."
      },
      tags: ["java", "android", "library", "sharedpreferences"],
      year: 2024
    }
  ],
  "Python Tools": [
    {
      id: "python-01",
      title: {
        tr: "arasTiR Eğitim Projeleri",
        en: "arasTiR Educational Projects"
      },
      summary: {
        tr: "Yerel okullar için geliştirilmiş eğitim yönetim uygulamaları koleksiyonu.",
        en: "Collection of educational management applications developed for local schools."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/arasTiR-Projects",
      description: {
        tr: "## Eğitim Yönetim Sistemleri\n\nYerel eğitim kurumları için geliştirilmiş arasTiR uygulamalarının kapsamlı koleksiyonu. Her modül gerçek okul ihtiyaçlarına yönelik çözümler sunuyor.\n\n### Sistem Modülleri\n- Öğrenci bilgi sistemi\n- Not yönetimi\n- Devamsızlık takibi\n- Kütüphane otomasyonu\n- Ücret takip sistemi\n- Otomatik rapor oluşturucu\n\n### Teknik Özellikler\n- Çoklu okul desteği\n- Türkçe arayüz\n- Offline çalışma\n- Excel/PDF export\n- Mobil uyumlu tasarım\n\n### Teknolojiler\n- Python, Django\n- PostgreSQL\n- HTML5, CSS3, JavaScript\n- RESTful API\n\n15+ yerel okula hizmet veren, binlerce öğrenci kaydını yöneten kapsamlı eğitim platformu.",
        en: "## Educational Management Systems\n\nComprehensive collection of arasTiR applications developed for local educational institutions. Each module offers solutions for real school needs.\n\n### System Modules\n- Student information system\n- Grade management\n- Attendance tracking\n- Library automation\n- Fee tracking system\n- Automatic report generator\n\n### Technical Features\n- Multi-school support\n- Turkish interface\n- Offline functionality\n- Excel/PDF export\n- Mobile responsive design\n\n### Technologies\n- Python, Django\n- PostgreSQL\n- HTML5, CSS3, JavaScript\n- RESTful API\n\nComprehensive education platform serving 15+ local schools, managing thousands of student records."
      },
      tags: ["python", "django", "postgresql", "education", "web-app"],
      year: 2024
    }
  ],
  "Mobile Apps": [
    {
      id: "mobile-01",
      title: {
        tr: "Kişisel Telegram Bilgi Botu",
        en: "Personal Telegram Info Bot"
      },
      summary: {
        tr: "Kişisel bilgiler ve projeler hakkında soru yanıtlayan Telegram botu.",
        en: "Telegram bot that answers questions about personal information and projects."
      },
      image: "https://i.imgur.com/Hl46nTs.png",
      link: "https://github.com/mehmetabak/Telegram-JS-Bot",
      description: {
        tr: "## Kişisel Asistan Bot\n\nJavaScript ile geliştirilmiş akıllı Telegram botu. Kullanıcılar hakkınızda veya projeleriniz hakkında soru sorabilir ve bot otomatik yanıtlar verir.\n\n### Bot Özellikleri\n- CV bilgileri paylaşımı\n- Proje detayları\n- İletişim bilgileri\n- Yetenek ve deneyim bilgileri\n- Sık sorulan sorular\n\n### Teknik Özellikler\n- 24/7 çalışma\n- Netlify Functions\n- JSON tabanlı bilgi depolama\n- Çoklu dil desteği\n- Kullanım istatistikleri\n\n### Teknolojiler\n- JavaScript, Node.js\n- Telegram Bot API\n- Netlify deployment\n- Serverless functions\n\nİş görüşmeleri ve network genişletme için kullanışlı bir araç.",
        en: "## Personal Assistant Bot\n\nSmart Telegram bot developed with JavaScript. Users can ask questions about you or your projects and the bot provides automatic answers.\n\n### Bot Features\n- CV information sharing\n- Project details\n- Contact information\n- Skills and experience information\n- Frequently asked questions\n\n### Technical Features\n- 24/7 operation\n- Netlify Functions\n- JSON-based information storage\n- Multi-language support\n- Usage statistics\n\n### Technologies\n- JavaScript, Node.js\n- Telegram Bot API\n- Netlify deployment\n- Serverless functions\n\nUseful tool for job interviews and network expansion."
      },
      tags: ["javascript", "telegram-bot", "netlify", "serverless"],
      year: 2024
    }
  ]
};
