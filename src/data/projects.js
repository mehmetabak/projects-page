// src/data/projects.js
export const projectsData = {
  "Web Apps / Tools": [
    {
      id: "web-01",
      title: {
        tr: "Gelişmiş Veri Görselleştirme Aracı",
        en: "Advanced Data Visualization Tool"
      },
      summary: {
        tr: "D3.js ve React kullanılarak geliştirilmiş, gerçek zamanlı veri akışlarını analiz eden ve kullanıcı dostu grafiklere dönüştüren bir araç.",
        en: "A tool developed using D3.js and React that analyzes real-time data streams and converts them into user-friendly charts."
      },
      image: "/images/project1.png",
      link: "https://github.com/kullaniciadi/proje-repo",
      description: {
        tr: "## Proje Özeti\n\nBu araç, D3.js ve React kullanılarak geliştirilmiştir. **Gerçek zamanlı** veri akışlarını analiz eder ve kullanıcı dostu grafiklere dönüştürür.\n\n- **Teknolojiler:** React, D3.js, Node.js\n- **Özellikler:** Sürükle-bırak arayüz, farklı grafik türleri.",
        en: "## Project Summary\n\nThis tool was developed using D3.js and React. It analyzes **real-time** data streams and turns them into user-friendly graphics.\n\n- **Technologies:** React, D3.js, Node.js\n- **Features:** Drag-and-drop interface, various chart types."
      },
      tags: ["javascript", "react", "d3", "data-visualization", "web"],
      year: 2024
    },
  ],
  "Python Tools": [
    {
      id: "py-01",
      title: {
        tr: "Otomatik Raporlama Scripti",
        en: "Automated Reporting Script"
      },
      summary: {
        tr: "Pandas ve Matplotlib kullanarak, haftalık satış verilerinden otomatik olarak PDF raporları oluşturan bir Python script'i.",
        en: "A Python script that automatically generates PDF reports from weekly sales data using Pandas and Matplotlib."
      },
      image: "/images/project2.png",
      link: "https://github.com/kullaniciadi/proje-repo",
      description: {
        tr: "## Amaç\n\nPandas ve Matplotlib kullanarak, haftalık satış verilerinden otomatik olarak PDF raporları oluşturan bir Python script'i.",
        en: "## Purpose\n\nA Python script using Pandas and Matplotlib to automatically generate PDF reports from weekly sales data."
      },
      tags: ["python", "pandas", "automation", "data-analysis"],
      year: 2023
    },
  ],
  "Java Projects": [],
  "Mobile Apps": []
};