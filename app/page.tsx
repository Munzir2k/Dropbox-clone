import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
	return (
		<main className=''>
			<div className='flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800'>
				<div className='flex p-10 flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5'>
					<h1 className='text-5xl font-bold'>
						Welcome to Dropbox. <br />
						<br />
						Storing everything for your or your business needs. All in one place
					</h1>
					<p className='pb-20'>
						Enhance your personal storage with Dropbox, offering a simple and
						efficient way to upload, organize, and access files from anywhere.
						Securely store important documents and media, and experience the
						convenience of easy file management and sharing in one solution.
					</p>
					<Link
						className='flex bg-blue-500 cursor-pointer w-fit p-5'
						href='/dashboard'
					>
						Try for free
						<ArrowRight className='ml-10' />
					</Link>
				</div>
				<div className='bg-[#1E1919] dark:bg-slate-800 h-full p-10'>
					<video
						autoPlay
						loop
						muted
						className='rounded-lg'
						src='https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4'
						typeof='video/mp4'
					>
						Your browser does not work
					</video>
				</div>
			</div>

			<p className='text-center font-bold text-xl pt-5'>Disclaimer</p>
			<p className='text-center font-light p-2'>
				This application is made for information and educational purposes only.
				We do not own or affiliate with Dropbox or/and any of its subsidiaries
				in any form. Copyright Disclaimer under section 107 of the Copyright Act
				1976, allowance is made for &quot;fair use&quot; of this tutorial for
				educational purposes.
			</p>
		</main>
	);
}
