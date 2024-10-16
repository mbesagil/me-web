export default defineI18nConfig(() => ({
  legacy: false,
  locale: "TR",
  messages: {
    EN: {
      welcome: "Welcome",
      title: "Full Stack Engineer",
      description:
        "Hello!!! I am a Full Stack Engineer and experienced in designing, developing and maintaining user-friendly, responsive web applications. I have a strong knowledge of both frontend and backend technologies and specialize in successfully completing projects on time and within budget. My priorities include effective collaboration across teams with my communication skills, successfully managing projects and being open to continuous learning.",
      languages: {
        title: "Languages",
        EN: "English",
        TR: "Turkish",
      },
      contact: {
        email: "Copy my email address",
        linkedin: "Go to my LinkedIn profile",
        github: "Go to my GitHub profile",
      },
      copied: "Copied to clipboard!",
      techAndTools: "Technologies and Tools",
      workExperience: "Work Experience",
      jobs: {
        Coredinat: {
          title: "Full Stack Developer",
          company: "Coredinat",
          date: "June 2023 - Present",
          description:
            "I took an active role in the No Code and Low Code form and application builder project with Vue.js based micro-front-end architecture. I developed projects such as user modules, data cache management and local storage management. I designed and developed generic code architecture for centralized storage management, theme management and user configurations. I also played an important role in low code cloud work management and tracking projects for business partners, designed Kanban process locations and status control. I have successfully worked to increase interaction with business partners with B2B and B2C integrations. In addition to using current technologies such as Java, Node.js, Express.js, Vue.js, Sequelize, PostgreSQL, vitepress in development processes, I not only developed code in projects, but also took responsibility for project management, team management, application security and documentation processes.",
        },
        Ikon: {
          title: "Full Stack Developer",
          company: "Zenopix/Ikon R&D",
          date: "July 2022 - June 2023",
          description:
            "As a full-stack developer, I took responsibility for both frontend and backend development. In my IoT cloud-based backend development project, I worked to ensure seamless connection of devices and data exchange. I developed real-time admin and user interfaces using Vue.js, Bootstrap and Tailwind CSS, paying attention to factors such as data security, scalability and high availability. For the network interface running on embedded software, I used Vue.js on the front end, Node.js and Express on the back end to provide user login management with Vuex and page routing with Vue-router. In my project developments, I integrated PostgreSql and MongoDB databases using Vue.js, Vuex, Vue-router on the front end, Node.js, Express.js, Socket.io, .Net on the back end.",
        },
      },
      projects: "Projects",
      projectsList: {
        GenericMenuApp: {
          description:
            "The Eat Menu application allows users to create an account and add stores, categories and products, create a QR code for the store they have added, and view products related to the categories in the store by users who do not have an account. Created with Vue.js and Vite.js. The designed user interface was designed with Bootstrap. Vue-router and Pinia were used in the project. Base request structure was established with Axios. In this project, everything was designed dynamically for the user to add. Backend and frontend architectures were established and clean code principle was applied. File management, authentication, generic routing, dynamic rendering structures were provided.",
        },
        ECommerceBackend: {
          description:
            "It is made with NodeJs and Express.js. MongoDB is used as the database and the communication between the server and the database is provided using the local mongodb driver. We used mongoose as the orm. It followed the Model - Controller - Service model to keep the maintenance of the code simple. A custom session-based authentication system was implemented for users to log in and register. The email system is implemented using nodemailer to reset the password of the user's mail account in case the user forgets his password.",
        },
      },
      medium: {
        stories: "Stories",
        publish_date: "Publish Date",
        stories_list: {},
      },
      navbar: {
        home: "Home",
        medium: "Medium",
        live_projects: "Live Projects",
        portfolio: "Portfolio",
      },
    },
    TR: {
      welcome: "Hoş Geldiniz",
      title: "Full Stack Mühendis",
      description:
        "Merhaba!!! Ben bir Full Stack Mühendisiyim ve kullanıcı dostu, duyarlı web uygulamaları tasarlama, geliştirme ve sürdürme konusunda deneyimliyim. Hem ön uç hem de arka uç teknolojileri hakkında güçlü bir bilgiye sahibim ve projeleri zamanında ve bütçe dahilinde başarıyla tamamlama konusunda uzmanım. Önceliklerim arasında iletişim becerilerimle ekipler arasında etkili işbirliği yapmak, projeleri başarıyla yönetmek ve sürekli öğrenmeye açık olmak yer alıyor.",
      languages: {
        title: "Diller",
        EN: "İngilizce",
        TR: "Türkçe",
      },
      contact: {
        email: "E-posta adresimi kopyala",
        linkedin: "LinkedIn profilime git",
        github: "GitHub profilime git",
      },
      copied: "Panoya kopyalandı!",
      techAndTools: "Teknolojiler ve Araçlar",
      workExperience: "İş Deneyimi",
      jobs: {
        Coredinat: {
          title: "Full Stack Geliştirici",
          company: "Coredinat",
          date: "Haziran 2023 - Şu Anda",
          description:
            "Vue.js tabanlı mikro-ön uç mimarisi ile No Code ve Low Code form ve uygulama oluşturucu projesinde aktif bir rol aldım. Kullanıcı modülleri, veri önbellek yönetimi ve yerel depolama yönetimi gibi projeler geliştirdim. Merkezi depo yönetimi, tema yönetimi ve kullanıcı yapılandırmaları için genel kod mimarisi tasarladım ve geliştirdim. Ayrıca, iş ortakları için düşük kodlu bulut iş yönetimi ve takip projelerinde önemli bir rol oynadım, Kanban süreç konumları ve durum kontrolü tasarladım. B2B ve B2C entegrasyonları ile iş ortakları ile etkileşimi artırmak için başarıyla çalıştım. Geliştirme süreçlerinde Java, Node.js, Express.js, Vue.js, Sequelize, PostgreSQL, vitepress gibi mevcut teknolojileri kullanmanın yanı sıra, sadece projelerde kod geliştirmekle kalmayıp aynı zamanda proje yönetimi, ekip yönetimi, uygulama güvenliği ve belgeleme süreçlerinde de sorumluluk aldım.",
        },
        Ikon: {
          title: "Full Stack Geliştirici",
          company: "Zenopix/Ikon R&D",
          date: "Temmuz 2022 - Haziran 2023",
          description:
            "Full-stack geliştirici olarak, hem frontend hem backend geliştirmesinde sorumluluk aldım. IoT tabanlı bulut tabanlı backend geliştirme projesimde, cihazların sorunsuz bağlantısı ve veri alışverişi sağlamak için çalıştım. Vue.js, Bootstrap ve Tailwind CSS kullanarak gerçek zamanlı admin ve kullanıcı arayüzleri geliştirdim, veri güvenliği, ölçeklenebilirlik ve yüksek erişilebilirlik gibi faktörlere dikkat ederek. Gömülü yazılım üzerinde çalışan ağ arayüzü için, kullanıcı girişi yönetimi için Vuex ve sayfa yönlendirmesi için Vue-router kullanarak frontend'de Vue.js, backend'de ise Node.js ve Express'i kullanarak gerçekleştirdim. Projelerimde, Vue.js, Vuex, Vue-router kullanarak frontend'de PostgreSql ve MongoDB veritabanlarını entegre ettim, backend'de ise Node.js, Express.js, Socket.io, .Net kullanarak entegrasyon sağladım.",
        },
      },
      projects: "Projeler",
      projectsList: {
        GenericMenuApp: {
          description:
            "Eat Menu uygulaması, kullanıcıların hesap oluşturmasına ve mağaza, kategori ve ürün eklemelerine, ekledikleri mağaza için bir QR kodu oluşturmalarına ve hesap oluşturmayan kullanıcıların mağazadaki kategorilere ait ürünleri görüntülemelerine olanak tanır. Vue.js ve Vite.js ile oluşturuldu. Tasarlanan kullanıcı arayüzü Bootstrap ile tasarlandı. Projede Vue-router ve Pinia kullanıldı. Kullanıcının dinamik olarak eklemesine olanak tanımak için her şey dinamik olarak tasarlandı. Backend ve frontend mimarileri kuruldu ve temiz kod prensibi uygulandı. Dosya yönetimi, kimlik doğrulama, genel yönlendirme, dinamik render yapıları sağlandı.",
        },
        ECommerceBackend: {
          description:
            "NodeJs ve Express.js ile yapılmıştır. Veritabanı olarak MongoDB kullanılmıştır ve sunucu ile veritabanı arasındaki iletişim, yerel mongodb sürücüsü kullanılarak sağlanmıştır. Bakımı kolay tutmak için Model - Controller - Service modelini takip etti. Kullanıcıların giriş yapmaları ve kayıt olmaları için özel oturum tabanlı bir kimlik doğrulama sistemi uygulandı. Kullanıcının şifresini unutması durumunda nodemailer kullanılarak kullanıcının posta hesabının şifresini sıfırlama sistemi uygulandı.",
        },
      },
      medium: {
        stories: "Hikayeler",
        publish_date: "Yayınlanma Tarihi",
        stories_list: {},
      },

      navbar: {
        home: "Anasayfa",
        medium: "Medium",
        live_projects: "Canlı Projeler",
        portfolio: "Portfolio",
      },
    },
  },
}));
