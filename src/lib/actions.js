'use server'
import bcrypt from 'bcryptjs'
import {prisma} from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// REGISTER
export async function register(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario ya está registrado
    const user = await getUserByEmail(email);

    if (user) {
        return { error: 'El email ya está registrado' }
    }

    // Encriptamos password 
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardamos credenciales en base datos
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "Registro correcto" }
}



// LOGIN credentials
export async function login(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario está registrado
    const user = await getUserByEmail(email);

    if (!user) {
        return { error: 'Usuario no registrado.' }
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) {  // && user.emailVerified
        await signIn('credentials',
            {
                email, password,
                redirectTo: globalThis.callbackUrl
                // redirectTo: user.role == 'ADMIN' ? '/admin' : '/dashboard'
            })
        return { success: "Inicio de sesión correcto" }
    } else {
        return { error: 'Credenciales incorrectas.' }
    }

}

// LOGIN google
export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN github
export async function loginGithub() {
    try {
        await signIn('github', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN gitlab
export async function loginGitlab() {
    try {
        await signIn('gitlab', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN spotify
export async function loginSpotify() {
    try {
        await signIn('spotify', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}


// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/' })
    } catch (error) {
        throw error
    }
}

export async function getPatrocinadores() {
    try {
        const patrocinadores = await prisma.patrocinador.findMany()
        return patrocinadores;
    } catch (error) {
      // console.log(error);  
        return null;
    }
}
    
    export async function newPatrocinador(formData) {
    try {
        const marca = formData.get('marca')
        const patrocinador = await prisma.patrocinador.create({
        data: { marca },
        })
        
        console.log(patrocinador);
        revalidatePath('/patrocinadores')
    } catch (error) {
        console.log(error);
    }
    redirect('/patrocinadores');
    }
    
    
    export async function editPatrocinador(formData) {
    const id = Number( formData.get('id') )
    const marca = formData.get('marca')

        
    try {
        const patrocinador = await prisma.patrocinador.update({
            where: { id },
            data: {  marca  },
        })
        console.log(patrocinador);
        revalidatePath('/patrocinadores')
    } catch (error) {
        console.log(error);
    }
    redirect('/patrocinadores');
  }
  
  export async function deletePatrocinador(formData) {
    try {
        const id = Number( formData.get('id') )
    
        const patrocinador = await prisma.patrocinador.delete({
            where: {
            id: id,
            },
        })
        console.log(patrocinador);
        revalidatePath('/patrocinadores')
    } catch (error) {
        console.log(error);
    }

    redirect('/patrocinadores');
    }


  export async function getCoches() {
    try {
      const coches = await prisma.coche.findMany()
      console.log(coches)
      return coches;
    } catch (error) {
      // console.log(error);  
      return null;
    }
  }
  
  export async function newCoche(formData) {
    try {
      const marca = formData.get('marca')
      const modelo = formData.get('modelo')
      const anio = formData.get('anio')
      const precio = formData.get('precio')
      const color = formData.get('color')
  
      const ids = await getPatrocinadoresIds()
      // let nacional = formData.get('nacional')
  
      // nacional = Boolean(nacional)
      // nacional=Boolean(nacional);
      // console.log(nacional);
      const coche = await prisma.coche.create({
        data: { marca, modelo, anio, precio, color },
      })
  
      console.log(coche);
      revalidatePath('/coches')
    } catch (error) {
      console.log(error);
    }
    redirect('/coches');
  }
  
  export async function editCoche(formData) {
    const id = Number( formData.get('id') )
    const marca = formData.get('marca')
    const modelo = formData.get('modelo')
    const anio = formData.get('anio')
    const precio = formData.get('precio')
    const color = formData.get('color')

    const ids = await getPatrocinadoresIds()
    
    // let nacional = formData.get('nacional')
  
    // nacional = nacional == null ? false : true
    try {
      const coche = await prisma.coche.update({
        where: { id },
        data: {  marca, modelo, anio, precio, color },
      })
      console.log(coche);
      revalidatePath('/coches')
    } catch (error) {
      console.log(error);
    }
    redirect('/coches');
  }
  
  export async function deleteCoche(formData) {
    try {
      const id = Number(formData.get('id'))
  
      const coche = await prisma.coche.delete({
        where: {
          id: id,
        },
      })
      console.log(coche);
      revalidatePath('/coches')
    } catch (error) {
      console.log(error);
    }
  
    redirect('/coches');
  }
