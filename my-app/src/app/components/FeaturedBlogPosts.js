// import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function FeaturedBlogPosts() {
  return (
    <section className="w-full flex flex-col md:flex-row lg:flex-col xl:flex-row justify-evenly items-center md:items-stretch lg:items-center xl:items-stretch mt-20">
      <Card
        isFooterBlurred
        className="w-2/3 md:w-1/3 lg:w-2/3 xl:w-5/12 2xl:w-1/3 h-[300px] col-span-12 sm:col-span-7 mb-16 md:mt-0"
      >
        <CardHeader className="absolute z-10 flex-col items-start bg-gray-700/10 backdrop-blur-sm">
          <p className="w-full text-small text-white text-center uppercase font-bold">
            Mastering Developer Relations
          </p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/assets/blogpost-devrel.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10">
          <section className="w-8/12 flex flex-grow gap-2 items-center">
            <section className="flex flex-col">
              <p className="text-tiny text-white/90">
                Metrics, KPIs, and Collaboration
                <br />
                with Product Teams
              </p>
            </section>
          </section>
          <a
            href="https://medium.com/@jossif.elefteriadis/mastering-developer-relations-metrics-kpis-and-collaboration-with-product-teams-52973aae8dac"
            target="_blank"
          >
            <Button radius="full" size="sm">
              Read the article
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-2/3 md:w-1/3 lg:w-2/3 xl:w-5/12 2xl:w-1/3 h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 flex-col items-start bg-gray-700/80">
          <p className="w-full text-small text-white text-center uppercase font-bold">
            Exploring Ethereum Layer 2 Solutions
          </p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/assets/blogpost-l2s.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10">
          <section className="w-8/12 flex flex-grow gap-2 items-center">
            <section className="flex flex-col">
              <p className="text-tiny text-white/90">
                A Comparative Analysis of zkSync and Scroll
              </p>
            </section>
          </section>
          <a
            href="https://medium.com/@jossif.elefteriadis/exploring-ethereum-layer-2-solutions-a-comparative-analysis-of-zksync-and-scroll-6cb220c8890e"
            target="_blank"
          >
            <Button radius="full" size="sm" className="">
              Read the article
            </Button>
          </a>
        </CardFooter>
      </Card>
    </section>
  );
}
