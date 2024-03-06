import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'

async function Header() {
    const session = await auth();
    // console.log(session);

    return (
<header className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-4">
    <div className="flex items-center space-x-4 text-white">
        <Link href="/" className="hover:underline">Inicio</Link>
        {session?.user?.role === 'ADMIN' && (
            <Link href="/admin" className="hover:underline">Admin panel</Link>
        )}
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
    </div>
    <nav className="flex items-center space-x-4">
        {session 
        ? <form><button formAction={logout}>SignOut</button></form> 
        : 
        (
            <>
                <Link href="/auth/register" className="text-white hover:underline">SignUp</Link>
                <Link href="/auth/login" className="text-white hover:underline">SignIn</Link>
            </>)
        }
    </nav>
</header>
    )
}

export default Header