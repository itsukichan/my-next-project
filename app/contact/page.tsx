import ContactForm from "@/app/_components/ContactForm";

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <p className="text-gray-700 dark:text-gray-300 text-center mb-12 leading-relaxed">
        ご質問、ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認後、担当者より通常3営業日以内にご連絡いたします。
      </p>
      <ContactForm />
    </div>
  );
}
