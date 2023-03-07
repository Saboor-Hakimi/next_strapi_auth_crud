export default function Home() {
  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Password Reset
        </h5>
      </a>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        If there was an account associated with this email, we sent you an email
        with a link to reset your password.
      </p>
    </div>
  );
}
