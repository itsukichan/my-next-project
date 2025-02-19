import ContactForm from "@/app/_components/ContactForm";

export default function Page() {
  return (
    <div className="container max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl py-10 px-4 md:py-20 md:px-8 transition-colors duration-200">
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12 leading-relaxed">
          ご質問、ご相談は下記フォームよりお問い合わせください。
          <br />
          内容確認後、担当者より通常3営業日以内にご連絡いたします。
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
