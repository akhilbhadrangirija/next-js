export async function getServerSideProps(context) {
  await console.log(context.query)
  return {
    props: {}
  }
}

function Hello() {
  return (
    <div className="flex justify-center w-screen h-screen items-center text-3xl font-bold">
      Hello
    </div>
  )
}

export default Hello
