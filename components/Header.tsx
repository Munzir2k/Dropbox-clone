import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ThemeToggler } from './ThemeToggler';

function Header() {
	return (
		<header className='flex items-center justify-between'>
			<Link
				href='/'
				className='flex items-center space-x-2'
			>
				<div className='bg-[#0160FE] w-fit'>
					<Image
						src='https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png'
						alt='logo'
						className='invert'
						height={50}
						width={50}
					/>
				</div>
				<h1 className='font-bold text-xl'>Dropbox</h1>
			</Link>

			<div className='flex px-5 space-x-2 items-center'>
				{/* Theme toggler */}
				<ThemeToggler />

				<UserButton afterSignOutUrl='/' />
				<div>
					<SignedOut>
						<SignInButton afterSignInUrl='/dashboard' />
					</SignedOut>
				</div>
			</div>
		</header>
	);
}

export default Header;
