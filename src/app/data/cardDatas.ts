import { ExperienceCards, ProjectCard } from "../cards.model";

const cardsTR: ProjectCard[] = [
  {
    "title": "Hyundai Work Tracer",
    "description": "Hyundai Elevator (İzmir) için çalışanların giriş-çıkış ve konum bilgilerinin takip edilebildiği bir işçi takip uygulaması geliştirdim. Kişisel verilerin korunmasına önem verilerek yalnızca yetkililerin denetimini kolaylaştırmak amacıyla tasarlanan uygulamanın ön yüzü Angular, arka yüzü NestJS ile geliştirilmiş olup, veritabanı olarak MongoDB kullanılmıştır.",
    "extras": ["Angular", "NestJS", "MongoDB", "UI/UX", "Responsive Design"],
    "id": "project10",
    "continueUrl": "",
    "order": "0"
  },
  {
    "title": "Beltur",
    "description": "İstanbul Büyükşehir Belediyesi'ne bağlı Beltur işletmeleri için vapur seyahatleri rezervasyonu, menü görüntüleme, Masterpass ile online ödeme ve duyuru yönetimi gibi özellikleri içeren kapsamlı bir mobil uygulamanın geliştirilmesinde görev aldım. Şirkete bağlı olarak uygulamanın sorumluluğunu üstlendim. Uygulamanın ön yüzü Ionic kullanılarak geliştirildi.",
    "extras": ["Ionic", "Angular", "UI/UX", "Responsive Design", "Mobile"],
    "id": "project0",
    "continueUrl": "https://play.google.com/store/apps/details?id=app.orwi.beltur&hl=tr",
    "order": "1"
  },
  {
    "title": "Bigchefs",
    "description": "Türkiye'nin önde gelen restoran zincirlerinden BigChefs için geliştirilen mobil uygulamanın yazım sürecinde proje sorumluluğu üstlendim. Menü görüntüleme, geri bildirim, kampanyalardan yararlanma ve sipariş oluşturma gibi özellikler sunan uygulamanın ön yüzü Ionic framework ile geliştirildi.",
    "extras": ["Ionic", "Angular", "UI/UX", "Responsive Design", "Mobile"],
    "id": "project11",
    "continueUrl": "https://play.google.com/store/apps/details?id=bigchefs.app&hl=tr",
    "order": "2"
  },
  {
    "title": "Laika",
    "description": "Laika adlı kafe için etkinliklerin yönetilebildiği, biletleme, menü görüntüleme ve rezervasyon işlemlerinin yapılabildiği bir web uygulaması geliştirdim. Ön yüz React, arka yüz NestJS ile geliştirildi; veritabanı olarak MongoDB kullanıldı.",
    "extras": ["React", "NestJS", "MongoDB", "UI/UX", "Responsive Design"],
    "id": "project12",
    "continueUrl": "https://ergulferik.github.io/Laika-Web/",
    "order": "3"
  },
  {
    "title": "Angulogic - Sidebar",
    "description": "@angulogic/ng-sidebar, Angular uygulamaları için geliştirilen, dinamik, etkileşimli ve yüksek düzeyde özelleştirilebilir bir kenar çubuğu bileşenidir. Kullanıcı deneyimini geliştirmek amacıyla iç içe geçmiş menüler, arama fonksiyonelliği, favori yönetimi, tema değiştirme, duyarlı (responsive) görüntüleme modları ve yeniden boyutlandırılabilir / otomatik konumlandırılabilir yapı gibi gelişmiş özellikler sunmaktadır.",
    "extras": ["Angular", "Npm", "UI/UX", "Responsive Design", "CSS"],
    "id": "project7",
    "continueUrl": "https://github.com/skarahan35/angulogic",
    "order": "4"
  },
  {
    "title": "Wave",
    "description": "Bu proje, web sayfası üzerindeki fare hareketlerini ve tıklamalarını gerçek zamanlı olarak takip eden bir sistem sunmaktadır. Backend için NestJS, frontend için Angular kullanılarak geliştirilmiş olan sistem, WebSocket protokolü aracılığıyla veri aktarımı yaparak kullanıcı arayüzünün anlık güncellenmesini sağlamaktadır.",
    "extras": ["Angular", "NestJS", "WebSocket", "Real-time Tracking"],
    "id": "project8",
    "continueUrl": "https://github.com/ergulferik/wave",
    "order": "5"
  },
  {
    "title": "Spy",
    "description": "\"Casus Kim?\" sosyal etkileşim ve stratejik düşünmeyi birleştiren, arkadaş grupları için tasarlanmış bir mobil kelime oyunudur. Oyunculara belirli kelimeler atanır ve içlerinden biri rastgele olarak casus seçilir. Casusun kim olduğunu bulmak için oyuncular birbirleriyle iletişim kurarak stratejik tahminlerde bulunur.",
    "extras": ["Angular", "Ionic", "Web", "Mobile", "State Management"],
    "continueUrl":"https://ergulferik.github.io/spy/",
    "id": "project9",
    "order": "6"
  },
  {
    "title": "DarkChicken",
    "description": "Angular ile geliştiriciler için web uygulamalarında kullanılmak üzere kapsamlı ve kullanımı kolay bir UI ve Datatable elementleri sağlayan bir npm paketi oluşturdum. Bu paket, geliştiricilerin projelerinde hızlı ve tutarlı bir şekilde kullanıcı arayüzü oluşturmalarına olanak tanır. Paket içerisinde, çeşitli UI bileşenleri, formlar, butonlar, modallar ve tablolara ek olarak, veri yönetimini kolaylaştıran dinamik datatable bileşenleri yer almaktadır. Geliştiricilerin paketi kolayca entegre edebilmesi ve kullanabilmesi için kapsamlı bir web dökümanı da hazırladım. Bu döküman, adım adım kurulum talimatları, örnek kodlar ve kullanıcının ihtiyaç duyabileceği tüm bilgileri içermektedir. Ayrıca, paket sürekli olarak güncellenmekte ve yeni özellikler eklenmektedir.",
    "extras": ["Angular", "Npm", "UI kit", "Datatable", "JavaScript", "HTML", "CSS"],
    "id": "project1",
    "continueUrl": "https://github.com/skarahan35/darkchicken",
    "order": "7"
  },
  {
    "title": "DC Toast",
    "description": "Angular frameworkü ile geliştiriciler için web uygulamalarında kullanılmak üzere oluşturduğum bu npm paketi, kullanıcı bildirimleri ve geri bildirim mesajları için özelleştirilebilir toast bileşenleri sağlar. Paketin içerisinde, farklı durumlar için önceden tanımlanmış toast stilleri (başarı, hata, bilgi, uyarı) bulunmakta ve kullanıcıların bu toast bileşenlerini ihtiyaçlarına göre özelleştirebilmesi mümkündür. Geliştiricilerin bu paketi projelerine entegre edebilmesi ve kullanabilmesi için detaylı bir web dökümanı hazırladım. Bu döküman, adım adım kurulum ve kullanım talimatları, örnek uygulamalar ve sık karşılaşılan sorunlar için çözümler içermektedir. Paket, kullanıcı deneyimini iyileştirmek ve uygulamaların daha profesyonel görünmesini sağlamak amacıyla sürekli olarak güncellenmekte ve geliştirilmekte.",
    "extras": ["Angular", "Npm", "JavaScript", "HTML", "CSS"],
    "id": "project2",
    "continueUrl": "https://www.npmjs.com/package/dc-toast-ng",
    "order": "8"
  },
  {
    "title": "AllScan",
    "description": "Web Bağlantısı Güvenliği Testi projesi, kullanıcıların gezindikleri web sayfaları üzerinde bulunan bağlantıların güvenlik durumunu tarayıp kullanıcıya raporlayan bir Google Chrome eklentisidir. Bu projede, frontend kısmı için JavaScript, HTML ve CSS teknolojilerini kullanarak kullanıcı dostu bir arayüz tasarladım. Backend kısmında ise Python, FastAPI ve BeautifulSoup teknolojilerini kullanarak güvenlik tarama ve raporlama fonksiyonlarını geliştirdim. Eklenti, ziyaret edilen web sayfasındaki tüm bağlantıları tarar, bağlantıların güvenlik durumunu analiz eder ve sonuçları kullanıcıya görsel olarak sunar. Geliştirilen proje, kullanıcıların internet güvenliğini artırmak amacıyla tasarlanmış olup, phishing ve zararlı içerik barındıran bağlantılardan korunmalarını sağlar. Projenin geliştirilmesi sürecinde detaylı bir kullanım ve tasarım dökümanı hazırladım. Bu döküman, eklentinin kurulumu, kullanımı ve teknik detayları hakkında kapsamlı bilgiler içermektedir. Ayrıca, eklentinin daha etkili çalışabilmesi için çeşitli test senaryoları ve kullanıcı geri bildirimlerine göre güncellemeler yapılmıştır.",
    "extras": ["JavaScript", "HTML", "CSS", "Python", "FastAPI", "BeautifulSoup"],
    "id": "project3",
    "continueUrl": "https://github.com/ergulferik/All-Scan",
    "order": "9"
  },
  {
    "title": "Kütüphane Yönetim Uygulaması",
    "description": "Kütüphane Yönetim Uygulaması, bir kütüphane içerisindeki kitapların kullanıcı yetkisine göre listelenmesini, alınmasını, iade edilmesini ve silinmesini sağlayan kapsamlı bir yönetim sistemidir. Proje, frontend tarafında Angular, HTML, CSS, JavaScript ve NGX teknolojileri kullanılarak geliştirildi. Bu bileşenler, kullanıcı dostu ve dinamik bir arayüz oluşturmak için kullanıldı. Backend tarafında ise C#, ABP Framework ve MSSQL teknolojileri kullanılarak sağlam ve güvenilir bir veri yönetim sistemi oluşturuldu. Uygulama, kullanıcıların kitapları kolayca yönetebilmelerini sağlamak amacıyla tasarlandı ve farklı kullanıcı yetkilerine göre özelleştirilebilir özellikler sunar. Geliştirme sürecinde, uygulamanın nasıl kullanılacağı ve çeşitli fonksiyonlarının nasıl çalıştığını detaylı bir şekilde açıklayan akademik dökümanlar hazırladım. Bu dökümanlar, kullanıcıların uygulamayı en verimli şekilde kullanabilmelerini sağlamak için örnekler ve kullanım senaryoları içermektedir.",
    "extras": ["Angular", "HTML", "CSS", "JavaScript", "NGX", "C#", "ABP Framework"],
    "id": "project4",
    "continueUrl": "https://github.com/ergulferik/Virtual-Shelf-Browser",
    "order": "10"
  },
  {
    "title": "Apartman Yönetim Uygulaması",
    "description": "Apartman Yönetim Uygulaması, bir apartman içerisindeki ailelerin iletişim ve yönetimini sağlayan kapsamlı bir çözümdür. Bu proje, Computer Network Programming esaslarına dayanarak geliştirilmiş olup, C#, .NET Core, WebSocket ve TCP/IP teknolojileri kullanılarak oluşturulmuştur. Uygulama, apartman sakinlerinin birbirleriyle iletişim kurmalarını, yönetim ile ilgili bilgileri paylaşmalarını ve çeşitli apartman hizmetlerini yönetmelerini sağlar. Proje, kullanıcı dostu bir arayüz ve güvenilir bir altyapı sunarak apartman yönetimini kolaylaştırır. Geliştirme sürecinde, uygulamanın nasıl kullanılacağına dair detaylı bir kullanım ve tasarım dökümanı hazırladım. Bu döküman, uygulamanın kurulumu, kullanımı ve çeşitli fonksiyonlarının nasıl çalıştığını ayrıntılı bir şekilde açıklamaktadır.",
    "extras": ["C#", ".NET Core", "WebSocket", "TCP/IP", "MVC"],
    "id": "project5",
    "continueUrl": "https://github.com/ergulferik/Apartment-Management-System",
    "order": "11"
  },
  {
    "title": "Web Sayfası Tercüme Uygulaması",
    "description": "Web Sayfası Tercüme Uygulaması, bir web sitesi içerisindeki tüm sayfalardaki metinleri seçili dile göre tercüme eden ve tercüme edilmiş sayfaları yeni bir domain üzerinde yayınlayan bir uygulamadır. Bu proje, kullanıcıların web sitelerini farklı dillerde erişilebilir kılmalarını sağlamak amacıyla geliştirilmiştir. Uygulama, orijinal web sayfasındaki metinleri analiz eder, belirlenen dile çevirir ve çeviriyi yeni bir domain üzerinde yayınlar. Geliştirme sürecinde, uygulamanın kurulumu, kullanımı ve teknik detayları hakkında kapsamlı bir kullanım ve tasarım dökümanı hazırladım. Bu döküman, uygulamanın nasıl çalıştığını, hangi teknolojilerin kullanıldığını ve kullanıcıların karşılaşabileceği olası sorunların çözümlerini içermektedir.",
    "extras": ["Python", "Selenium", "BeautifulSoup", "Pandas", "Örümcek Mimarisi"],
    "id": "project6",
    "continueUrl": "https://github.com/ergulferik/Website-Translator",
    "order": "12"
  }
]

const cardsEN = [
  {
    "title": "Hyundai Work Tracer",
    "description": "I developed a worker tracking application for Hyundai Elevator (İzmir) that allows monitoring of employees' check-in/check-out times and location information. Designed with a strong emphasis on personal data protection, the application facilitates supervision exclusively for authorized personnel. The frontend was developed using Angular, the backend with NestJS, and MongoDB was used as the database.",
    "extras": ["Angular", "NestJS", "MongoDB", "UI/UX", "Responsive Design"],
    "id": "project10",
    "continueUrl": "",
    "order": "0"
  },
  {
    "title": "Beltur",
    "description": "I contributed to the development of a comprehensive mobile application for Beltur, a subsidiary of Istanbul Metropolitan Municipality, which included features such as ferry trip reservations, menu viewing, online payments via Masterpass, and announcement management. I assumed responsibility for the application on behalf of the company. The frontend of the application was developed using Ionic.",
    "extras": ["Ionic", "Angular", "UI/UX", "Responsive Design", "Mobile"],
    "id": "project0",
    "continueUrl": "https://play.google.com/store/apps/details?id=app.orwi.beltur&hl=tr",
    "order": "1"
  },
  {
    "title": "Bigchefs",
    "description": "I took on project responsibility during the development of a mobile application for BigChefs, one of Turkey's leading restaurant chains. The application, offering features such as menu browsing, feedback submission, campaign participation, and order creation, was developed using the Ionic framework for the frontend.",
    "extras": ["Ionic", "Angular", "UI/UX", "Responsive Design", "Mobile"],
    "id": "project11",
    "continueUrl": "https://play.google.com/store/apps/details?id=bigchefs.app&hl=tr",
    "order": "2"
  },
  {
    "title": "Laika",
    "description": "I developed a web application for Laika café that enables event management, ticketing, menu viewing, and reservations. The frontend was developed using React, the backend with NestJS, and MongoDB was used as the database.",
    "extras": ["React", "NestJS", "MongoDB", "UI/UX", "Responsive Design"],
    "id": "project12",
    "continueUrl": "https://ergulferik.github.io/Laika-Web/",
    "order": "3"
  },
  {
    "title": "Angulogic - Sidebar",
    "description": "@angulogic/ng-sidebar is a dynamic, interactive, and highly customizable sidebar component developed for Angular applications. It enhances user experience by offering advanced features such as nested menus, search functionality, favorite management, theme switching, responsive display modes, and resizable/auto-positioning structures.",
    "extras": ["Angular", "Npm", "UI/UX", "Responsive Design", "CSS"],
    "id": "project7",
    "continueUrl": "https://github.com/skarahan35/angulogic",
    "order": "4"
  },
  {
    "title": "Wave",
    "description": "This project provides a system that tracks mouse movements and clicks on a web page in real-time. The system is developed using Angular for the frontend and NestJS for the backend, utilizing the WebSocket protocol for data transmission to ensure instant UI updates.",
    "extras": ["Angular", "NestJS", "WebSocket", "Real-time Tracking"],
    "id": "project8",
    "continueUrl": "https://github.com/ergulferik/wave",
    "order": "5"
  },
  {
    "title": "Spy",
    "description": "\"Who's the Spy?\" is a mobile word game designed for friend groups, combining social interaction and strategic thinking. Each player is assigned a specific word, with one random player selected as the spy. Players must communicate and use strategic guessing to identify the spy.",
    "extras": ["Angular", "Ionic", "Web", "Mobile", "State Management"],
    "continueUrl":"https://ergulferik.github.io/spy/",
    "id": "project9",
    "order": "6"
  },
  {
    "title": "DarkChicken",
    "description": "I created a comprehensive and easy-to-use npm package that provides UI and Datatable elements for developers to use in their web applications with Angular. This package allows developers to build user interfaces quickly and consistently in their projects. The package includes various UI components, forms, buttons, modals, and tables, as well as dynamic datatable components to facilitate data management. I also prepared extensive web documentation to help developers easily integrate and use the package. This documentation includes step-by-step installation instructions, example codes, and all the information a user might need. Additionally, the package is constantly updated and new features are added.",
    "extras": ["Angular", "Npm", "UI kit", "Datatable", "JavaScript", "HTML", "CSS"],
    "id": "project1",
    "continueUrl": "https://github.com/skarahan35/darkchicken",
    "order": "7"
  },
  {
    "title": "DC Toast",
    "description": "This npm package, created with the Angular framework, provides customizable toast components for user notifications and feedback messages in web applications. The package includes predefined toast styles for different situations (success, error, info, warning) and allows users to customize these toast components according to their needs. I prepared detailed web documentation for developers to easily integrate and use this package in their projects. This documentation includes step-by-step installation and usage instructions, example applications, and solutions for common issues. The package is constantly updated and developed to improve user experience and make applications look more professional.",
    "extras": ["Angular", "Npm", "JavaScript", "HTML", "CSS"],
    "id": "project2",
    "continueUrl": "https://www.npmjs.com/package/dc-toast-ng",
    "order": "8"
  },
  {
    "title": "AllScan",
    "description": "The AllScan project is a Google Chrome extension that scans the security status of links on web pages visited by users and reports it to them. In this project, I designed a user-friendly interface using JavaScript, HTML, and CSS for the frontend part. For the backend, I developed security scanning and reporting functions using Python, FastAPI, and BeautifulSoup. The extension scans all links on the visited web page, analyzes their security status, and visually presents the results to the user. This project is designed to enhance users' internet security, helping them avoid phishing and harmful content. During the development process, I prepared detailed usage and design documentation. This documentation includes comprehensive information about the installation, usage, and technical details of the extension. Additionally, various test scenarios and updates based on user feedback were implemented to ensure the extension's effective operation.",
    "extras": ["JavaScript", "HTML", "CSS", "Python", "FastAPI", "BeautifulSoup"],
    "id": "project3",
    "continueUrl": "https://github.com/ergulferik/All-Scan",
    "order": "9"
  },
  {
    "title": "Virtual Shelf Browser",
    "description": "The Virtual Shelf Browser is a comprehensive management system that allows the listing, borrowing, returning, and deletion of books in a library based on user permissions. The project was developed using Angular, HTML, CSS, JavaScript, and NGX technologies for the frontend to create a user-friendly and dynamic interface. For the backend, C#, ABP Framework, and MSSQL technologies were used to create a robust and reliable data management system. The application is designed to allow users to easily manage books and offers customizable features based on different user permissions. During the development process, I prepared academic documents detailing how to use the application and its various functions. These documents include examples and usage scenarios to help users utilize the application most effectively.",
    "extras": ["Angular", "HTML", "CSS", "JavaScript", "NGX", "C#", "ABP Framework", "MSSQL"],
    "id": "project4",
    "continueUrl": "https://github.com/ergulferik/Virtual-Shelf-Browser",
    "order": "10"
  },
  {
    "title": "Apartment Management Application",
    "description": "The Apartment Management Application is a comprehensive solution for managing communication and administration within an apartment building. This project is based on Computer Network Programming principles and was developed using C#, .NET Core, WebSocket, and TCP/IP technologies. The application allows apartment residents to communicate with each other, share management-related information, and manage various apartment services. The project offers a user-friendly interface and a reliable infrastructure to facilitate apartment management. During the development process, I prepared detailed usage and design documentation explaining how to use the application and its various functions.",
    "extras": ["C#", ".NET Core", "WebSocket", "TCP/IP", "MVC"],
    "id": "project5",
    "continueUrl": "https://github.com/ergulferik/Apartment-Management-System",
    "order": "11"
  },
  {
    "title": "Website Translation Application",
    "description": "The Website Translation Application translates all the texts on a website into a selected language and publishes the translated pages on a new domain. This project was developed to make websites accessible in different languages for users. The application analyzes the texts on the original website, translates them into the specified language, and publishes the translation on a new domain. During the development process, I prepared detailed usage and design documentation that explains how the application works, the technologies used, and solutions for potential issues users might encounter.",
    "extras": ["Python", "Selenium", "BeautifulSoup", "Pandas", "Spider Architecture"],
    "id": "project6",
    "continueUrl": "https://github.com/ergulferik/Website-Translator",
    "order": "12"
  }
];


const experienceDataTR: ExperienceCards[] = [
  {
    "title": "Önyüz Geliştirici",
    "description": "Kerzz POS'ta Angular ve Ionic kullanarak web ve mobil uygulamalar geliştirdim. NgRx ile durum yönetimi sağladım, RxJS kullanarak reaktif programlama uyguladım ve WebSocket ile gerçek zamanlı veri akışı gerçekleştirdim. REST API’ler ile backend entegrasyonu yaptım ve önbellekleme yöntemleriyle performansı optimize ettim. DevExtreme ve AG Grid kullanarak veri tabloları, grafikler ve interaktif bileşenler geliştirdim. Duyarlı tasarım prensiplerine uygun olarak farklı ekran boyutlarına uyum sağlayan kullanıcı arayüzleri oluşturdum",
    "extras": ["Angular", "React", "React Native", "Ionic", "NgRx", "RxJS", "REST API", "WebSocket", "DevExtreme", "AG Grid"],
    "id": "experience0",
    "continueUrl": "https://www.kerzzpos.com/",
    "order": "0",
    "startTime": "10.2024",
    "endTime": "09.2025",
    "position": "Önyüz Geliştirici"
  },
  {
    "title": "Yazılım Geliştirici",
    "description": "2Ag Yazılım Hizmetleri'nde gönüllü staj sonrasında AR-GE departmanında Yazılım Uzmanı olarak çalışmaya başladım. Çalışma sürecim boyunca HTML, CSS, JavaScript, Angular, Devextreme, RxJs, NGX, C#, ABP Framework, Docker, RabbitMQ ve RedisInsight gibi teknolojilerle çalıştım. Frontend tarafında geliştirilen projeye özel UI/UX elementlerinin oluşturulması, responsive sayfa tasarımı, dinamik component oluşturulması, npm kütüphanelerinin oluşturulması, veritabanı (data-grid) tasarımı, RestAPI kullanımı, Docker kullanımı ve Linux kullanımında görev aldım. Backend tarafında ise geliştirilen projeye özel veritabanı oluşturulması, veritabanı ilişkileri, mimari tasarım standartları, mikroservis mimarisi ve RestAPI entegrasyonu görevlerinde yer aldım. Ayrıca, yeni teknolojilerin ve mimari modellerin araştırılması, mimari modellerin geliştirilmesi ve değiştirilmesinde de aktif rol aldım.",
    "extras": ["HTML", "CSS", "JavaScript", "Angular", "Devextreme", "RxJs", "NGX", "C#", "ABP Framework"],
    "id": "experience1",
    "continueUrl": "https://www.2ag.com.tr",
    "order": "1",
    "startTime": "02.2024",
    "endTime": "10.2024",
    "position": "Yazılım Geliştirici"
  },
  {
    "title": "Yazılım Geliştirici Stajyeri",
    "description": "2Ag Yazılım Hizmetleri'nde yaptığım gönüllü staj süresince HTML, CSS, JavaScript, Angular, Devextreme, RxJs, NGX, C#, ABP Framework, Docker, RabbitMQ ve RedisInsight gibi teknolojilerle çalıştım. Staj sırasında frontend tarafında projeye özel UI/UX elementlerinin oluşturulması, responsive sayfa tasarımı, dinamik component oluşturulması, npm kütüphanelerinin oluşturulması, veritabanı (data-grid) tasarımı, RestAPI kullanımı, Docker kullanımı ve Linux kullanımında görev aldım. Backend tarafında ise veritabanı oluşturulması, veritabanı ilişkileri, mimari tasarım standartları, mikroservis mimarisi ve RestAPI entegrasyonu görevlerinde yer aldım. Yeni teknolojilerin ve mimari modellerin araştırılması, mimari modellerin geliştirilmesi ve değiştirilmesi süreçlerinde de aktif olarak bulundum.",
    "extras": ["HTML", "CSS", "JavaScript", "Angular", "Devextreme", "RxJs", "NGX", "C#", "ABP Framework"],
    "id": "experience2",
    "continueUrl": "https://www.2ag.com.tr",
    "order": "2",
    "startTime": "08.2023",
    "endTime": "01.2024",
    "position": "Yazılım Geliştirici Stajyeri"
  },
  {
    "title": "Yazılım Geliştirici Stajyeri",
    "description": "İthinka Yazılım Danışmanlık Hizmetleri'nde yaz dönemi stajım sırasında web mimarileri hakkında araştırma konularında görev aldım. Web üzerinde kullanılan teknolojiler ve bu teknolojileri kullanarak oluşturulabilecek mimarilerin araştırılması ve yazılım geliştirici ekibi ile birlikte bu araştırılan mimarilerin uygulanmasında çalıştım. Staj boyunca ekip çalışması, problem çözme ve yeni teknolojilere adaptasyon konularında deneyim kazandım.",
    "extras": ["HTML", "CSS", "JavaScript", "Angular", "Web Mimarileri"],
    "id": "experience3",
    "continueUrl": "https://ithinka.com/",
    "order": "3",
    "startTime": "07.2023",
    "endTime": "09.2023",
    "position": "Yazılım Geliştirici Stajyeri"
  }
]

const experienceDataEN = [
  {
    "title": "Frontend Developer",
    "description": "I developed web and mobile applications using Angular and Ionic at Kerzz POS. I implemented state management with NgRx, applied reactive programming with RxJS, and enabled real-time data streaming using WebSocket. I integrated with the backend through REST APIs and optimized performance with caching methods. I developed data tables, charts, and interactive components using DevExtreme and AG Grid. I created user interfaces that adapt to different screen sizes following responsive design principles.",
    "extras": ["Angular", "React", "React Native", "Ionic", "NgRx", "RxJS", "REST API", "WebSocket", "DevExtreme", "AG Grid"],
    "id": "experience0",
    "continueUrl": "https://www.kerzzpos.com/",
    "order": "0",
    "startTime": "10.2024",
    "endTime": "09.2025",
    "position": "Frontend Developer"
  },
  {
    "title": "Software Developer",
    "description": "After my voluntary internship at 2Ag Yazılım Hizmetleri, I started working as a Software Specialist in the R&D department. During my tenure, I worked with technologies such as HTML, CSS, JavaScript, Angular, Devextreme, RxJs, NGX, C#, ABP Framework, Docker, RabbitMQ, and RedisInsight. On the frontend, I was responsible for creating UI/UX elements specific to the project, designing responsive pages, creating dynamic components, developing npm libraries, designing data-grids, using RestAPI, Docker, and Linux. On the backend, I worked on creating project-specific databases, database relationships, architectural design standards, microservice architecture, and RestAPI integration. Additionally, I actively participated in researching new technologies and architectural models, developing, and modifying them.",
    "extras": ["HTML", "CSS", "JavaScript", "Angular", "Devextreme", "RxJs", "NGX", "C#", "ABP Framework", "Docker", "RabbitMQ", "RedisInsight"],
    "id": "experience1",
    "continueUrl": "https://www.2ag.com.tr",
    "order": "1",
    "startTime": "02.2024",
    "endTime": "10.2024",
    "position": "Software Developer"
  },
  {
    "title": "Software Developer Intern",
    "description": "During my voluntary internship at 2Ag Yazılım Hizmetleri, I worked with technologies such as HTML, CSS, JavaScript, Angular, Devextreme, RxJs, NGX, C#, ABP Framework, Docker, RabbitMQ, and RedisInsight. I was involved in creating project-specific UI/UX elements on the frontend, designing responsive pages, creating dynamic components, developing npm libraries, designing data-grids, using RestAPI, Docker, and Linux. On the backend, I worked on creating databases, database relationships, architectural design standards, microservice architecture, and RestAPI integration. Additionally, I actively participated in researching new technologies and architectural models, developing, and modifying them.",
    "extras": ["HTML", "CSS", "JavaScript", "Angular", "Devextreme", "RxJs", "NGX", "C#", "ABP Framework", "Docker", "RabbitMQ", "RedisInsight"],
    "id": "experience2",
    "continueUrl": "https://www.2ag.com.tr",
    "order": "2",
    "startTime": "08.2023",
    "endTime": "01.2024",
    "position": "Software Developer Intern"
  },
  {
    "title": "Software Developer Intern",
    "description": "During my summer internship at İthinka Yazılım Danışmanlık Hizmetleri, I worked on researching web architectures. I was responsible for researching the technologies used on the web and the architectures that could be created using these technologies, and applying these researched architectures with the software development team. Throughout the internship, I gained experience in teamwork, problem-solving, and adapting to new technologies.",
    "extras": ["HTML", "CSS", "JavaScript", "Angular", "Web Architectures"],
    "id": "experience3",
    "continueUrl": "https://ithinka.com/",
    "order": "3",
    "startTime": "07.2023",
    "endTime": "09.2023",
    "position": "Software Developer Intern"
  }
];


const aboutMeTR = "Merhaba, ben <strong>Ergül Ferik</strong>. 2024 yılında <strong>Manisa Celal Bayar Üniversitesi Bilgisayar Mühendisliği (İngilizce)</strong> bölümünden 3.16 ortalama ile mezun oldum. Eğitim sürecimde çeşitli yazılım stajları ve iş deneyimleri edindim.<br><br> Yaz dönemi stajımı <strong>İthinka Yazılım Danışmanlık Hizmetleri</strong>'nde gerçekleştirerek web mimarileri üzerine çalıştım. Daha sonra, <strong>2Ag Yazılım Hizmetleri</strong>'nde gönüllü stajyer olarak AR-GE departmanında görev aldım ve burada Yazılım Uzmanı olarak çalışmaya devam ettim. Ardından, <strong>Kerzz POS</strong>'da Önyüz Geliştirici olarak çalışmaya başladım. Bu süreçte, yeni teknolojilerin araştırılması, yazılım mimarilerinin geliştirilmesi ve uygulanması konularında geniş çaplı deneyimler kazandım.<br><br> <strong>Angular, TypeScript, HTML, CSS, JavaScript, NPM, NgRx, RxJs</strong> gibi birçok teknoloji ile çalışarak <strong>frontend ve backend</strong> geliştirme alanlarında uzmanlaştım. Ayrıca, <strong>npm paketleri oluşturarak</strong> açık kaynak projelere katkıda bulundum ve yazılım mimarileri üzerine araştırmalar gerçekleştirdim. Takım çalışmasına yatkın, problem çözme becerileri gelişmiş ve sürekli öğrenmeye açık bir yazılım geliştiriciyim."

const aboutMeEN = "Hello, I'm <strong>Ergül Ferik</strong>. I graduated from the <strong>Computer Engineering (English) department at Manisa Celal Bayar University</strong> in 2024 with a GPA of 3.16. During my studies, I gained valuable internship and work experiences in software development.<br><br> I completed a summer internship at <strong>İthinka Yazılım Danışmanlık Hizmetleri</strong>, where I worked on web architectures. Then, I joined <strong>2Ag Yazılım Hizmetleri</strong> as a volunteer intern in the R&D department and later continued as a Software Specialist. Subsequently, I started working as a Frontend Developer at <strong>Kerzz POS</strong>. Throughout this journey, I gained extensive experience in researching new technologies, developing, and implementing software architectures.<br><br> I have expertise in <strong>Angular, TypeScript, HTML, CSS, JavaScript, NPM, NgRx, RxJs</strong> and have improved myself in both <strong>frontend and backend</strong> development. Additionally, I contributed to open-source projects by creating <strong>npm packages</strong> and conducting research on software architectures. I am a software developer with strong teamwork skills, problem-solving abilities, and a continuous learning mindset."

const aboutMeShortTR = "Gelişime açık ve her zaman öğrenmeye istekli biriyim. Öğrendiklerimi paylaşmak için kurduğum web sitesindesiniz."

const aboutMeShortEN = "I am a person who is open to development and always willing to learn. You're on the website I've set up to try and post what I've learned."

export const aboutMeShort = {
  TR: aboutMeShortTR,
  EN: aboutMeShortEN
}

export const cards = {
  TR: cardsTR,
  EN: cardsEN
}

export const experienceData = {
  TR: experienceDataTR,
  EN: experienceDataEN
}

export const aboutMe = {
  TR: aboutMeTR,
  EN: aboutMeEN
}

