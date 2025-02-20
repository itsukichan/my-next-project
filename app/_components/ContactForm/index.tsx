'use client';

import { useActionState } from 'react';
import Stack from '../Stack';
import Button from '../Button';

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
      <div className="bg-muted dark:bg-muted-dark rounded-lg p-8 sm:p-10 text-center">
        <p className="text-lg">
          お問い合わせいただき、ありがとうございます。
          <br />
          お返事まで今しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <form className="w-full max-w-2xl mx-auto" action={formAction}>
      <Stack gap="md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="text-sm font-medium mb-2 block" htmlFor="lastname">姓</label>
            <input
              className="w-full px-4 py-2 rounded-lg
                       border border-default dark:border-default-dark
                       bg-white dark:bg-gray-800
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="lastname"
              name="lastname"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block" htmlFor="firstname">名</label>
            <input
              className="w-full px-4 py-2 rounded-lg
                       border border-default dark:border-default-dark
                       bg-white dark:bg-gray-800
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="firstname"
              name="firstname"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block" htmlFor="company">会社名</label>
            <input
              className="w-full px-4 py-2 rounded-lg
                       border border-default dark:border-default-dark
                       bg-white dark:bg-gray-800
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="company"
              name="company"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block" htmlFor="email">メールアドレス</label>
            <input
              className="w-full px-4 py-2 rounded-lg
                       border border-default dark:border-default-dark
                       bg-white dark:bg-gray-800
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-3 rounded-lg
                       border border-default dark:border-default-dark
                       bg-white dark:bg-gray-800 min-h-[150px]
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            name="message"
            required
          />
        </div>

        <div className="text-center">
          {state?.status === 'error' && (
            <p className="text-red-500 text-sm mb-3">{state.message}</p>
          )}
          <Button variant="primary" size="lg">
            送信する
          </Button>
        </div>
      </Stack>
    </form>
  );
}
