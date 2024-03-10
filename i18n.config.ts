export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: {
        title: "NPCs App welcomes you  👋",
        subtitle: "Where order emails happen automatically!",
        message:
          "Your digital orders get automatic emails, making your life easier. Let's make your customers smile together!",
        options: {
          show: "Show Products",
          add: "Add Product",
        },
      },
      back: "Back to menu",
      alert: {
        success: {
          title: "Successful product linking!",
          message:
            "Your product is now linked. Verify in your product listing.",
          action: "Done",
        },
      },
      pages: {
        products: {
          list: {
            label: "Products",
            action: "Add Product",
            search: {
              label: "Search",
              placeholder: "Search by product name...",
            },
            columns: {
              name: "Name",
              price: "Price",
              status: "Status",
              created_at: "Created At",
              actions: "Actions",
            },
            link_status: {
              stopped: 'Stopped',
              linked: 'Linked'
            },
            link_action: "Link",
          },
          add: {
            label: "Add Product",
            action: "Create",
            fields: {
              name: {
                label: "Name",
                placeholder: "Name ( Ex: blue summer shirt.. )",
                description: "Make it short, descriptive, and exciting",
              },
              slug: {
                label: "Slug",
                placeholder: "Slug...",
                description: "Optimize your web address by personalizing it",
              },
              price: {
                label: "Price",
                placeholder: "0.00",
                description: "Specify the cost of your product",
              },
              file_url: {
                label: "File Url",
                placeholder:
                  "File ( Ex: https://example.com/file-example.pdf )",
                description: "Paste the file URL for easy access",
              },
            },
            link_action: "Link/",
          },
        },
      },
    },
    fr: {
      welcome: {
        title: "Bienvenue sur NPCs App 👋",
        subtitle: "Commandes automatisées par email !",
        message:
          "Vos commandes numériques reçoivent des emails automatiques, simplifiant votre vie. Faisons sourire vos clients ensemble !",
        options: {
          show: "Afficher les produits",
          add: "Ajouter un produit",
        },
      },
      back: "Retour au menu",
      alert: {
        success: {
          title: "Lien de produit réussi !",
          message:
            "Votre produit est désormais lié. Vérifiez dans votre liste de produits.",
          action: "Terminé",
        },
      },
      pages: {
        products: {
          list: {
            label: "Produits",
            action: "Ajouter un produit",
            search: {
              label: "Rechercher",
              placeholder: "Rechercher par nom de produit...",
            },
            columns: {
              name: "Nom",
              price: "Prix",
              status: "Statut",
              created_at: "Créé le",
              actions: "Actions",
            },
            link_status: {
              stopped: 'Arrêté',
              linked: 'Lié'
            },
            link_action: "Lier",
          },
          add: {
            label: "Ajouter un produit",
            action: "Créer",
            fields: {
              name: {
                label: "Nom",
                placeholder: "Nom ( Ex : chemise bleue d'été... )",
                description: "Soyez bref, descriptif et excitant",
              },
              slug: {
                label: "Slug",
                placeholder: "Slug...",
                description: "Optimisez votre adresse web en la personnalisant",
              },
              price: {
                label: "Prix",
                placeholder: "0,00",
                description: "Indiquez le coût de votre produit",
              },
              file_url: {
                label: "URL du fichier",
                placeholder:
                  "Fichier ( Ex : https://exemple.com/exemple-fichier.pdf )",
                description: "Collez l'URL du fichier pour un accès facile",
              },
            },
            link_action: "Lier",
          },
        },
      },
    },

    ar: {
      welcome: {
        title: "تطبيق NPCs يرحب بكم 👋",
        subtitle: "حيث يتم إرسال الطلبات تلقائياً عبر البريد الإلكتروني.",
        message:
          "تتلقى طلباتك الرقمية رسائل البريد الإلكتروني التلقائية، مما يجعل حياتك أسهل. دعونا نجعل عملاءك يبتسمون معًا!",
        options: {
          show: "عرض المنتجات",
          add: "إضافة منتج",
        },
      },
      back: "العودة إلى القائمة",
      alert: {
        success: {
          title: "ربط المنتج بنجاح!",
          message: "الآن تم ربط منتجك. تحقق في قائمة المنتجات الخاصة بك.",
          action: "تم",
        },
      },
      pages: {
        products: {
          list: {
            label: "المنتجات",
            action: "إضافة منتج",
            search: {
              label: "البحث",
              placeholder: "البحث حسب اسم المنتج...",
            },
            columns: {
              name: "الاسم",
              price: "السعر",
              status: "الحالة",
              created_at: "تم الإنشاء في",
              actions: "الإجراءات",
            },
            link_status: {
              stopped: 'غير مرتبط',
              linked: 'متصل'
            },
            link_action: "ربط",
          },
          add: {
            label: "إضافة منتج",
            action: "إنشاء",
            fields: {
              name: {
                label: "الاسم",
                placeholder: "الاسم (مثال: قميص صيفي أزرق...)",
                description: "اجعله قصيرًا ووصفيًا ومثيرًا",
              },
              slug: {
                label: "Slug",
                placeholder: "Slug...",
                description: "قم بتحسين عنوان الويب الخاص بك عن طريق تخصيصه",
              },
              price: {
                label: "السعر",
                placeholder: "0.00",
                description: "حدد تكلفة منتجك",
              },
              file_url: {
                label: "رابط الملف",
                placeholder:
                  "الملف (مثال: https://exemple.com/exemple-file.pdf)",
                description: "الصق رابط الملف لسهولة الوصول",
              },
            },
            link_action: "ربط",
          },
        },
      },
    },
  },
}));
