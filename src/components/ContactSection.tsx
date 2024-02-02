import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import Link from 'next/link'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Say Hi
              </Button>
            </div>
            <div className="mt-10 border-t border-white/40 pt-10">
              <div className=" grid grid-cols-2 gap-8">
                <span>
                  <h2 className="font-display text-base font-semibold text-white">
                    Discord
                  </h2>
                  <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                    {[['Direct Message', '833853967346696193']].map(
                      ([label, username]) => (
                        <div key={username}>
                          <dt className="font-semibold text-neutral-50">
                            {label}
                          </dt>
                          <dd>
                            <Link
                              href={`https://discordapp.com/users/${username}`}
                              className="text-neutral-400 hover:text-neutral-50"
                            >
                              @disruptiv3xyz
                            </Link>
                          </dd>
                        </div>
                      ),
                    )}
                  </dl>
                </span>
                <span>
                  <h2 className="font-display text-base font-semibold text-white">
                    Telegram
                  </h2>
                  <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                    {[['Direct Message', 'disruptiv3']].map(
                      ([label, username]) => (
                        <div key={username}>
                          <dt className="font-semibold text-neutral-50">
                            {label}
                          </dt>
                          <dd>
                            <Link
                              href={`https://t.me/${username}`}
                              className="text-neutral-400 hover:text-neutral-50"
                            >
                              @{username}
                            </Link>
                          </dd>
                        </div>
                      ),
                    )}
                  </dl>
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
