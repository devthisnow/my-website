export default async function Page({ params }) {
  const title = (await params).title
  return (
    <main className="min-h-[100dvh]">
      <section className="flex flex-col sm:flex-row justify-center min-h-[550px] w-full pt-[103px]
        pl-[0px]
        sm:pl-[50px]
        lg:pl-[80px]
        bg-myblack text-mywhite overflow-hidden">
        <div>Project: {title}</div>
      </section>
    </main>
  )
}