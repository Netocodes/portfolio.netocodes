import { Suspense } from "react"
import HomeContent from "./home/homeContent"
import Loading from "./loading"

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HomeContent />
    </Suspense>
  )
}

export default Home
