import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="w-full min-h-[600px] flex flex-col items-center justify-center bg-[#eaf2fa] pt-[80px] pb-[120px] px-0">
      {/* Main Title */}
      <h2 className="w-full text-center font-bold text-[#232b38] text-[2.8rem] md:text-[3.2rem] leading-[1.08] mb-12" style={{fontFamily: 'Inter, Arial, sans-serif'}}>How Our Loyalty System<br className="hidden md:block"/> Works</h2>
      <div className="w-full flex flex-col md:flex-row items-start justify-center bg-white rounded-[24px] border border-[#e5e7eb] shadow-lg overflow-hidden max-w-none" style={{minHeight: 420, margin: '0 auto', width: 'auto', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.07)'}}>
        {/* Left: Image with floating stat cards */}

          <div className="relative w-[370px] h-[420px] flex items-center justify-center">
            {/* Main phone image */}
            <Image
              src="/images/unsplash_TOaE3Td9F8M.png"
              alt="Loyalty Card Mobile"
              width={370}
              height={420}
              className="rounded-[16px] object-cover w-[370px] h-[420px] shadow-xl border border-[#e5e7eb]"
              priority
            />
            {/* Top floating stat card */}
            <div className="absolute left-3 top-3 md:left-5 md:top-6 bg-white rounded-[12px] shadow-lg border border-[#e5e7eb] px-4 py-3 flex flex-col items-center w-[120px] z-10">
              <span className="text-xs text-[#7b8fa6] font-medium mb-1">Customer Retention Value</span>
              <svg width="80" height="36" viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="20" width="10" height="16" rx="2" fill="#3B6FD7"/>
                <rect x="15" y="10" width="10" height="26" rx="2" fill="#7B8FA6"/>
                <rect x="30" y="5" width="10" height="31" rx="2" fill="#3B6FD7"/>
                <rect x="45" y="12" width="10" height="24" rx="2" fill="#7B8FA6"/>
                <rect x="60" y="2" width="10" height="34" rx="2" fill="#3B6FD7"/>
              </svg>
              <div className="flex w-full justify-between mt-1 text-[10px] text-[#7b8fa6]">
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
              </div>
            </div>
            {/* Bottom floating stat card */}
            <div className="absolute left-3 bottom-3 md:left-5 md:bottom-6 bg-white rounded-[12px] shadow-lg border border-[#e5e7eb] px-3 py-2 flex items-center w-[92px] z-10">
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M2 18C6 10 12 2 30 10" stroke="#3B6FD7" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#3B6FD7] leading-tight">10K views</span>
                <span className="text-[10px] text-[#7b8fa6]">+32.5%</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Text content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-16 min-w-[420px]" style={{alignItems: 'flex-start'}}>
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-[#3B6FD7] rounded-full mr-2"></div>
            <span className="text-base font-medium text-[#7b8fa6] tracking-wide">Make Your Card</span>
          </div>
          <h3 className="text-[2.4rem] leading-[1.1] font-bold text-[#232b38] mb-4" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Create Your Loyalty Card Today and Start Earning Rewards Instantly</h3>
          <div className="text-lg font-semibold text-[#232b38] mb-2">Create and Customize Your Loyalty Card</div>
          <p className="text-base text-[#4b5563] mb-7 max-w-[420px]">Sign up for Loyally, pick the perfect card for your store, and design it easily with our fun templates.</p>
          <button className="mt-2 px-7 py-3 bg-white border border-[#3B6FD7] text-[#3B6FD7] font-semibold rounded-md shadow-sm hover:bg-[#f6fafd] transition text-base w-fit">Learn More</button>
  
      </div>
    </section>
  );
}
