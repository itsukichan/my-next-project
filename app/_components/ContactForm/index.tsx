'use client';

import { createContactData } from '@/app/_actions/contact';
import { useFormState } from 'react-dom';
// import { sendGAEvent } from '@next/third-parties/google';

const initialState = {
  status: '',
  message: '',
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);
  // const handleSubmit = () => {
  //   sendGAEvent({ event: 'contact', value: 'submit' });
  // };
  if (state.status === 'success') {
    return (
      <p className="bg-gray-100 dark:bg-gray-800 text-center p-10 rounded-lg">
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    // <form className={styles.form} action={formAction} onSubmit={handleSubmit}>
    <form className="max-w-2xl mx-auto" action={formAction}>
      <div className="flex gap-6 mb-4">
        <div className="flex-1">
          <label className="text-sm mb-1 block" htmlFor="lastname">姓</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="lastname"
            name="lastname"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm mb-1 block" htmlFor="firstname">名</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="firstname"
            name="firstname"
          />
        </div>
      </div>
      <div className="flex gap-6 mb-4">
        <div className="flex-1">
          <label className="text-sm mb-1 block" htmlFor="company">会社名</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="company"
            name="company"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm mb-1 block" htmlFor="email">メールアドレス</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="email"
            name="email"
          />
        </div>
      </div>
      <div className="item">
        <label className="text-sm mb-1 block" htmlFor="message">メッセージ</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700
                     rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="message"
          name="message"
        />
      </div>
      <div className="text-center mt-10">
        {state.status === 'error' && (
          <p className="text-red-500 text-sm mb-2">{state.message}</p>
        )}
        <input
          type="submit"
          value="送信する"
          className="px-10 py-4 bg-blue-600 text-white rounded-md
                     hover:bg-blue-700 cursor-pointer transition-colors duration-200"
        />
      </div>
    </form>
  );
}
