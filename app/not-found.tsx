export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <dl className="text-center">
        <dt className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          ページが見つかりませんでした
        </dt>
        <dd className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  )
}
