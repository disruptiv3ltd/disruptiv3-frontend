import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactForm } from '@/components/ContactForm'
import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

export function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 grid grid-cols-2 gap-8 pt-16">
        <span>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Email us
          </h2>
          <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
            {[['Information', 'info@disruptiv3.xyz']].map(([label, email]) => (
              <div key={email}>
                <dt className="font-semibold text-neutral-950">{label}</dt>
                <dd>
                  <Link
                    href={`mailto:${email}`}
                    className="text-neutral-600 hover:text-neutral-950"
                  >
                    {email}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </span>
        <span>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Telegram
          </h2>
          <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
            {[['Direct Message', 'disruptiv3']].map(([label, username]) => (
              <div key={username}>
                <dt className="font-semibold text-neutral-950">{label}</dt>
                <dd>
                  <Link
                    href={`https://t.me/${username}`}
                    className="text-neutral-600 hover:text-neutral-950"
                  >
                    @{username}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </span>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
