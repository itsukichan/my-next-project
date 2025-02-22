import ContactForm from "@/app/_components/ContactForm";
import Sheet from "@/app/_components/Sheet";

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl px-0 sm:px-6">
      <Sheet>
        <div className="p-6 sm:py-12 sm:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 text-center mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg">
              ご質問、ご相談は下記フォームよりお問い合わせください。
              <br className="hidden sm:block" />
              内容確認後、担当者より通常3営業日以内にご連絡いたします。
            </p>
            <ContactForm />
          </div>
        </div>
      </Sheet>
    </div>
  );
}
