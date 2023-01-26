import Link from "next/link";

export default function About() {
  return (
  <div className='flex flex-col w-full justify-center items-center'>
    <p>About Page</p>
    <Link href="/">voltar</Link>
  </div>
  )
}