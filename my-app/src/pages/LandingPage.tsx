import '@lottiefiles/lottie-player';
const LandingPage = () => {
	return (
		<div className='h-screen flex items-center'>
			<div className='w-1/2 px-10'>
				<h1>
					<b className='text-[#32a871] text-7xl'>Note </b>
					<b className='text-[#3273a8] text-7xl'>News</b>
				</h1>
				<p className='text-lg text-3xl pb-2'>
					Brings you the latest news from the world. Don't wait, register Now!
				</p>
				<div className='space-x-8'>
					<button className='bg-[#32a871] px-10 py-3'>LOG IN</button>
					<button className='bg-[#3273a8] px-10 py-3'>REGISTER</button>
				</div>
			</div>

			<div className='w-1/2'>
				<lottie-player
					src='https://assets7.lottiefiles.com/packages/lf20_q7ia4fyk.json'
					mode='bounce'
					background='#FFFFFF'
					speed='1'
					style='width: 300px; height: 300px;'
					loop
					controls
					autoplay
				></lottie-player>
			</div>
		</div>
	);
};
export { LandingPage };
