import Link from "next/link";

export default async function Home() {
  return (
<main class="max-w-md mx-auto bg-blue-500 p-8 shadow-md rounded-md text-white ">

<h1 class="text-3xl font-bold mb-6">Página principal</h1>

<ul class="space-y-2">
  <li><Link href="/admin" class="text-light-blue-300 hover:underline">Panel de admin</Link></li>
  <li><Link href="/dashboard" class="text-light-blue-200 hover:underline">Dashboard del usuario</Link></li>
  <li><Link href="/about" class="text-light-blue-100 hover:underline">About</Link></li>

  <hr class="my-4 border-t border-gray-300"/>

  <li><Link href="/coches" class="text-light-blue-400 hover:underline">Listado de Coches</Link></li>
  <li><Link href="/coches/new" class="text-light-blue-300 hover:underline">Nuevo Coche</Link></li>

  <hr class="my-4 border-t border-gray-300"/>

  <li><Link href="/patrocinadores" class="text-light-blue-500 hover:underline">Listado de patrocinadores</Link></li>
  <li><Link href="/patrocinadores/new" class="text-light-blue-400 hover:underline">Nuevo patrocinador</Link></li>
</ul>

</main>
  )
}
