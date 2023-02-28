import Navigation from './Navigation'

type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}
