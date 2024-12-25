import portfolioPages from "@/app/portfolio_pages";
import Image from "next/image";

export default async function Page({ params }) {
  const title = (await params).title

  return (
    <main className="z-0 w-auto min-w-[210px] overflow-x-clip ">
      <section className="flex flex-col sm:flex-row justify-center min-h-[550px] w-full
        pl-[0px]
        sm:pl-[50px]
        lg:pl-[80px]
        bg-myblack text-mywhite "
      >
        <div className="static sm:sticky top-0 self-start w-full flex flex-col sm:w-1/2 justify-center sm:min-h-[min(100dvh,970px)] pl-[30px] sm:pl-0">
          <div className="h-auto w-full ">
            <h2 className="text-[44px] lg:text-[107px] lg:max-w-[calc(50dvw-80px)] break-words font-semibold mb-[30px] lg:mb-[50px] pt-[50px] sm:p-0 sm:pr-[30px] leading-none uppercase ">
              {portfolioPages[title].title}
            </h2>
            <p className="text-[22px] lg:text-[28px] w-[80dvw] sm:w-[40dvw] pb-[50px] sm:p-0 leading-tight tracking-normal ">
              {portfolioPages[title].info}
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 grow min-h-[516px] md:min-w-[374px] sm:h-auto">
          <Image
            className="hidden sm:block object-cover w-full h-full"
            src={portfolioPages[title].desktop}
            alt={`${title} portfolio project snapshot`}
            quality={95}
            placeholder="blur"
            // style={{ objectFit: "cover" }}
            // height={"100%"}
            priority
          />
          <Image
            className="block sm:hidden object-cover w-full h-full"
            src={portfolioPages[title].mobile}
            alt={`${title} portfolio project snapshot`}
            quality={95}
            placeholder="blur"
            // style={{ objectFit: "cover" }}
            // height={"100%"}
            priority
          />
        </div>
      </section>
    </main>
  )
}