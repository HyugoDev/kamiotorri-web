
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuProfile() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }


  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <Image
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              width={80}
              height={80}
              alt="profile"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-naranja-claro py-1 shadow-lg ring-1 ring-black ring-opacity-5 text-center focus:outline-none">
            {/* <Menu.Item>
              {({ active }) => (
                <Link
                  href="/you"
                  className={classNames(active ? 'text-white ' : 'text-primari-colors', 'block px-4 py-2 text-sm')}
                >
                  Your Profile
                </Link>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/you/favoritos"
                  className={classNames(active ? 'text-white' : 'text-primari-colors', 'block px-4 py-2 text-sm')}
                >
                  Tus Favoritos
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/you/setting"
                  className={classNames(active ? 'text-white' : 'text-primari-colors', 'block px-4 py-2 text-sm')}
                >
                  Settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  className={classNames(active ? 'text-white' : '', 'px-4 py-2 text-sm')}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}