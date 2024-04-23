import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          Home: "Home",
          About: "About",
          Individuals: "Individuals",
          Couples: "Couples",
          Relationships: "Relationships",
          Booking: "Booking",
          Access: "Access",
          Sitemap: "Sitemap",
          "Appointments and Inquiries": "Appointments and Inquiries",
          "Contact me": "Contact me",
          Weekday: "Weekday",
          Saturday: "Saturday",
          "Book a session with me": "Book a session with me",
        },
        bookingForm: {
          Name: "Name",
          "E-mail": "E-mail",
          Phone: "Phone",
          "Please specify service type": "Please specify service type",
          Initial: "Initial",
          Individual: "Individual",
          Couple: "Couple",
          Family: "Family",
          "Please provide 3 desired appointment dates":
            "Please provide 3 desired appointment dates",
          "First choice": "First choice",
          "Second choice": "Second choice",
          "Third choice": "Third choice",
          appointment_choice_hint: "E.g: YYYY/MM/DD 11:30 AM",
          Message: "Message",
          "Submit booking": "Submit booking",
        },
        contactForm: {
          Name: "Name",
          "E-mail": "E-mail",
          Message: "Message",
          "Send message": "Send message",
        },
      },
      ja: {
        translation: {
          Home: "ホーム",
          About: "臨床心理士",
          Individuals: "個人",
          Couples: "夫婦・カップル",
          Relationships: "対人関係",
          Booking: "予約＆料金",
          Access: "アクセス",
          Sitemap: "サイトマップ",
          "Appointments and Inquiries": "ご予約・問い合わせ",
          "Contact me": "お問い合わせ",
          Weekday: "平日",
          Saturday: "土曜日",
          "Book a session with me": "予約へ進む",
        },
        bookingForm: {
          Name: "お名前",
          "E-mail": "Eメール",
          Phone: "お電話番号",
          "Please specify service type": "ご希望のサービス",
          Initial: "初回",
          Individual: "個人",
          Couple: "カップル",
          Family: "家族",
          "Please provide 3 desired appointment dates":
            "ご希望の日時を3候補、ご指定ください。",
          "First choice": "第一希望",
          "Second choice": "第二希望",
          "Third choice": "第三希望",
          appointment_choice_hint: "E.g: YYYY/MM/DD 11:30 AM",
          Message: "コメント",
          "Submit booking": "送信",
        },
        contactForm: {
          Name: "お名前",
          "E-mail": "Eメール",
          Message: "コメント",
          "Send message": "送信",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
