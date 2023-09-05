
import Image from "next/image"

export default function Footer() {
  return (
    <footer className=" rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              src='/Logo-KamioTorri.png'
              alt='Logo-KamioTorri'
              width={100}
              height={100}
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </a>
          {/* <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" class="mr-4 hover:underline md:mr-6 ">Acerca de</a>
            </li>
            <li>
              <a href="/privacy-policy" class="mr-4 hover:underline md:mr-6">Política de Privacidad</a>
            </li>
            <li>
              <a href="/terms-and-conditions" class="mr-4 hover:underline md:mr-6">Términos y Condiciones</a>
            </li>
          </ul> */}
        </div>
        <hr className="my-6 border-orange-600 sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center ">© 2023 <a href="/" className="hover:underline">KAMIOTORII™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}