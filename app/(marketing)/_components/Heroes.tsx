import Image from 'next/image'

const Heroes = () => {
	return (
		<div className='flex flex-col items-center justify-center max-w-5xl'>
			<div className='flex items-center'>
				<div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-w[350px] md:h-[400px] md:w-[400px]'>
					<Image
						src='/documents.png'
						fill
						alt='Documents'
						className='object-contain dark:hidden'
					/>
					<Image
						src='/documents-dark.png'
						fill
						alt='Documents'
						className='object-contain hidden dark:block'
					/>
				</div>
				<div className='relative w-[400px] h-[400px] hidden md:block'>
					<Image
						src='/reading.png'
						fill
						className='object-contain'
						alt='readig dark:hidden'
					/>
					<Image
						src='/reading-dark.png'
						fill
						className='object-contain hidden dark:block'
						alt='readig'
					/>
				</div>
			</div>
		</div>
	)
}

export default Heroes
