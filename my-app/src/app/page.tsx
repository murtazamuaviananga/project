import Image from 'next/image'
import mantech from "../../public/sajid.jpg"
import sajid from "../../public/m sajid.jpg"
export default function Home() {
  return (
  
    <main className="flex text-center p-5 bg-red-600">
      <div>
        <header className=' flex py-2 px-2 bg-blue-800'>
          <Image className=' w-20 h-20 max-w-xs' src="/logo.jpg" alt='' width="80" height="120"/>
        </header>
      </div>
    <div className='text-6xl text-green-500 text-center'> MUHAMMAD SAJID ROJHAN RAJAN PUR</div>
    <div className=' text-5xl text-opacity-100 text-green-300'>ROJHAN RAJAN PUR</div>
    <Image className=' flex rounded-full p-10'
    src={sajid}
     width={300}
    height={150}
    alt=''
  
    ></Image>
    </main>
  )
}
