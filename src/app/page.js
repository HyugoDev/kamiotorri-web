import Image from 'next/image'





export default function Home() {


  return (
    <>
      <div className="w-full h-screen  flex justify-center items-center	">
        <span className="content-center text-7xl">🛠️En Contrución🛠️</span>

        {/* {user ? (
          <div className="flex items-center gap-4">
            Hey, {user.email}!
            <form action="/auth/sign-out" method="post">
              <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                Logout
              </button>
            </form>
          </div>
        ) : (
          <Link
            href="/login"
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Login
          </Link>
        )} */}
      </div>
    </>
  )
}
