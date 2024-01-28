/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { IoLogoGoogle } from 'react-icons/io'
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5'
import { CiLogout } from 'react-icons/ci'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type NavLinkProps = {
  href: string
  children: ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Link
      href={href}
      className="flex items-center text-black hover:text-gray-700 px-3 px-2 rounted-md text-sm font-medium group"
    >{children}
    </Link>
)

const Header = async () => {
  // TODO: 後に実装
  // const session = await getServerSession()
  // const user = session?.user
  const user = true
  return (
    <header className='bg-gray-100 shadow-lg'>
      <nav className='flex items-center justify-center text-black'>
        <Link href='https://www.google.co.jp/'
          className='text-xl font-bold flex items-center text-black'>
          <IoLogoGoogle />
          <span className='ml-2 font-serif'>Google Sample</span>
        </Link>

        <div className='flex-grow mx-3 max-w-md'>
          <input type='text'
          className='w-full px-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200' />
        </div>

        <div className='flex items-center gap-1'>
          <NavLink href='/'>
            <IoHomeOutline className='transition-transform duration-300 group-hover:-translate-x-0.5' />
            <span className='ml-0.5 transition-transform duration-300 group-hover:scale-105'>
              ホーム
            </span>
          </NavLink>
          <NavLink href={user ? '/profile' : '/api/auth/signin'}>
            <IoPersonOutline className='transition-transform duration-300 group-hover:-translate-x-0.5' />
            <span className='ml-0.5 transition-transform duration-300 group-hover:scale-105'>
              {user ? 'プロフィール' : 'ログイン'}
            </span>
          </NavLink>
          { user && (
            <NavLink href={'/api/auth/signout?callbaclUrl=/'}>
              <CiLogout className='transition-transform duration-300 group-hover:-translate-x-0.5' />
                <span className='ml-0.5 transition-transform duration-300 group-hover:scale-105'>
                  ログアウト
                </span>
              </NavLink>
          )}
          {/* {user ? (
            <Link
              href={'/profile'}
              className='rounded-full overflow-hidden border border-gray-300'
            >
              <Image
                width={40}
                height={40}
                alt="profile_icon"
                src={"/default_icon.png"}
                className='rounted-full'
              />
            </Link>
          ) : (
            <Image
              width={40}
              height={40}
              alt="profile_icon"
              src={"/default_icon.png"}
              className='rounted-full'
            />
          )} */}
        </div>
      </nav>
    </header>
  )
}

export default Header
