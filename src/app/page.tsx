import Link from "next/link"
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>HELLO, My name is Atsu</h1>
      <Link href="project1">project1</Link>
      <Link href="project2">project2</Link>
    </main>
  )
}
