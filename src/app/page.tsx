import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoMultichainLight from '@/images/clients/multichain/logo-light.svg'
import logoCubeCommonsDaoLight from '@/images/clients/cube-commons/logo-light.svg'
import logoBigLight from '@/images/clients/big/logo-light.svg'
import logoBigDark from '@/images/clients/big/logo-dark.svg'
import logoGamestopLight from '@/images/clients/gamestop/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Blockchain Intelligence Group', logoBigLight],
  ['GameStop NFT', logoGamestopLight],
  ['CubeCommons DAO', logoCubeCommonsDaoLight],
  ['MultiDAO', logoMultichainLight],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-base font-semibold tracking-wider text-white sm:text-left">
            Our consultants have experience working in great teams across Web3
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li className="self-center" key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing Web3 for a better tomorrow"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>We believe in the power of decentralization to change our world.</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <span>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </span>
                </h3>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Providing tailored strategies and technical solutions for your next
          big move in the digital revolution.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Strategy and advisory">
              We offer comprehensive Strategy and Advisory services, including
              Web3 integration for traditional businesses, crafting sustainable
              tokenomics aligned with your project objectives, and innovating
              business models tailored for the decentralized economy.
            </ListItem>
            <ListItem title="Technical development">
              Our Technical Development services span from building
              decentralized applications on multiple blockchains and crafting
              smart contracts for tasks like token creation and DeFi, to
              seamlessly integrating blockchain technology with your existing
              systems and customizing blockchain protocols to meet your specific
              needs.
            </ListItem>
            <ListItem title="Education and training">
              Our Training and Education services offer custom-tailored programs
              to get your team proficient in specific Web3 technologies, along
              with comprehensive Web3 onboarding to guide your company smoothly
              into the decentralized world.
            </ListItem>
            <ListItem title="Infrastructure and operations">
              Our Infrastructure and Operations services provide end-to-end
              solutions, from setting up and managing blockchain nodes and
              guiding clients through blockchain staking options, to
              implementing and advising on decentralized storage solutions like
              IPFS and Filecoin.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Delivering excellence in Web3 consultancy, we cover everything from business development to technical infrastructure. We are committed to ensuring our clients are at the forefront of the digital revolution.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Web3 Excellence: Unleashing Potential, Creating Value.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Delivering excellence in Web3 consultancy, we cover everything from
            business development to technical infrastructure. We&apos;re
            committed to ensuring our clients are at the forefront of the
            digital revolution.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Blockchain Intelligence Group', logo: logoBigDark }}
      >
        Taylor served as a Technical Writer at Blockchain Intelligence Group,
        demonstrating a deep grasp of Web3 and crypto ecosystems. His work in
        developing extensive course materials, ranging from Ethereum to DeFi and
        Web3 exploits, was invaluable. With his ability to simplify complex
        concepts into digestible content, he made a significant contribution to
        our team and educational products.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
