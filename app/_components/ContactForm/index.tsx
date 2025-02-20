'use client';

import { useActionState } from 'react';

type StateType = {
  message: string;
  error: boolean;
  status: 'success' | 'error' | '';
};

const initialState: StateType = {
  message: '',
  error: false,
  status: ''
};

async function createContactData(prevState: StateType, formData: FormData): Promise<StateType> {
  try {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    return {
      message: '送信が完了しました',
      error: false,
      status: 'success'
    };
  } catch (error) {
    return {
      message: 'エラーが発生しました',
      error: true,
      status: 'error'
    };
  }
}

export default function ContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);

  if (state?.status === 'success') {
    return (
      <p className="bg-gray-100 dark:bg-gray-800 text-center p-8 sm:p-10 rounded-lg">
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }

  return (
    <form className="w-full max-w-2xl mx-auto" action={formAction}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block" htmlFor="lastname">姓</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-800"
            type="text"
            id="lastname"
            name="lastname"
            required
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block" htmlFor="firstname">名</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-800"
            type="text"
            id="firstname"
            name="firstname"
            required
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block" htmlFor="company">会社名</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-800"
            type="text"
            id="company"
            name="company"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium mb-2 block" htmlFor="email">メールアドレス</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white dark:bg-gray-800"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="text-sm font-medium mb-2 block" htmlFor="message">メッセージ</label>
        <textarea
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700
                     rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                     bg-white dark:bg-gray-800 min-h-[150px]"
          id="message"
          name="message"
          required
        />
      </div>

      <div className="text-center mt-8 sm:mt-10">
        {state?.status === 'error' && (
          <p className="text-red-500 text-sm mb-3">{state.message}</p>
        )}
        <button
          type="submit"
          className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-blue-600 text-white font-medium
                     rounded-lg hover:bg-blue-700 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          送信する
        </button>
      </div>
    </form>
  );
}
